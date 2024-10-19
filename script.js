import './src/script/components/index.js';
import NotesApi from './src/data/remote/data-api.js';

class NoteItem extends HTMLElement {
    constructor() {
        super();
        this.note = null;
    }

    connectedCallback() {
        this.note = JSON.parse(this.getAttribute('note-data'));
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="note-item">
            <div class="note-header">
                <h3>${this.note.title}</h3>
                <button class="delete-btn" data-id="${this.note.id}">Hapus</button>
            </div>
            <p class="note-body">${this.note.body}</p>
            ${this.note.archived ? '' : `<button class="archive-btn" data-id="${this.note.id}">Arsipkan</button>`}
        </div>
        `;

        this.querySelector('.delete-btn').addEventListener('click', () => {
            deleteNoteAPI(this.note.id);
        });

        this.querySelector('.archive-btn').addEventListener('click', () => {
            archiveNoteAPI(this.note.id);
        });
    }

}
customElements.define('note-item', NoteItem);

document.addEventListener('DOMContentLoaded', async () => {
    await fetchData(); // Ambil data catatan
});
async function fetchNotes() {
    showLoading();
    try {
        const response = await NotesApi.getNotes();
        renderNotes(response.data);
    } catch (error) {
        console.error(error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Gagal memuat catatan. Silakan coba lagi nanti.'
        });
    } finally {
        hideLoading();
    }
}


// Render catatan
function renderNotes(notesData) {
    const notesGrid = document.getElementById('notes-grid');
    const archiveGrid = document.getElementById('archive-grid');

    notesGrid.innerHTML = '';
    archiveGrid.innerHTML = '';

    notesData.forEach(note => {
        const noteItem = document.createElement('note-item');
        noteItem.setAttribute('note-data', JSON.stringify(note));
        noteItem.setAttribute('data-id', note.id);
        if (!note.archived) {
            notesGrid.appendChild(noteItem);
        } else {
            archiveGrid.appendChild(noteItem);
        }
        gsap.from(noteItem, { opacity: 0, y: -20, duration: 0.5 });
    });
}

function showLoading() {
    document.getElementById('loading-indicator').classList.remove('hidden');
}

function hideLoading() {
    document.getElementById('loading-indicator').classList.add('hidden');
}

// Fungsi untuk menambah catatan baru
async function addNote() {
    const title = document.getElementById('note-title');
    const body = document.getElementById('note-body');

    if (validateInput(title) && validateInput(body)) {
        const newNote = {
            title: title.value,
            body: body.value
        };

        try {
            showLoading();
            await NotesApi.addNote(newNote);
            fetchNotes();
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Gagal menambah catatan. Silakan coba lagi nanti.'
            });
        } finally {
            hideLoading();
        }

        title.value = '';
        body.value = '';
    }
}

// Validasi input
function validateInput(input) {
    const value = input.value.trim();
    const errorElement = input.nextElementSibling;  // Ambil elemen error di bawah input

    if (value === "") {
        errorElement.textContent = "Field ini tidak boleh kosong!";
        input.classList.add("invalid");
        return false;
    } else {
        errorElement.textContent = "";
        input.classList.remove("invalid");
        return true;
    }
}

// Menghapus catatan
async function deleteNoteAPI(id) {
    const result = await Swal.fire({
        title: 'Anda yakin?',
        text: 'Catatan ini akan dihapus!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Hapus',
        cancelButtonText: 'Batal'
    });

    if (result.isConfirmed) {
        try {
            const noteItem = document.querySelector(`note-item[data-id="${id}"]`);
            // Animasi saat catatan dihapus
            gsap.to(noteItem, {
                opacity: 0,
                y: -20,
                duration: 0.5,
                onComplete: async () => {
                    showLoading();
                    await NotesApi.deleteNote(id);
                    fetchNotes();
                    Swal.fire(
                        'Terhapus!',
                        'Catatan telah dihapus.',
                        'success'
                    );
                    hideLoading();
                }
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Gagal menghapus catatan. Silakan coba lagi nanti.'
            });
        }
    }
}


// Mengarsipkan catatan
async function archiveNoteAPI(id) {
    try {
        showLoading();
        await NotesApi.toggleArchive(id, true);

        // Memindahkan catatan dari notesGrid ke archiveGrid
        const noteItem = document.querySelector(`note-item[data-id="${id}"]`);
        if (noteItem) {
            // Animasi memudarkan catatan
            gsap.to(noteItem, {
                opacity: 0,
                y: -20,
                duration: 0.5,
                onComplete: async () => {
                    const archiveGrid = document.getElementById('archive-grid');
                    archiveGrid.appendChild(noteItem); // Pindahkan catatan ke archiveGrid
                    noteItem.querySelector('.archive-btn').remove(); // Hapus tombol arsip setelah dipindahkan

                    // Ambil data terbaru setelah mengarsipkan
                    await fetchNotes(); // Memperbarui catatan aktif
                    await fetchArchivedNotes(); // Memperbarui catatan diarsipkan

                    // Animasi muncul saat catatan berada di archiveGrid
                    gsap.from(noteItem, { opacity: 0, y: 20, duration: 0.5 });
                }
            });
        }
    } catch (error) {
        console.error(error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Gagal mengarsipkan catatan. Silakan coba lagi nanti.'
        });
    } finally {
        hideLoading();
    }
}


// Mengambil catatan aktif dan diarsipkan
async function fetchData() {
    await Promise.all([fetchNotes(), fetchArchivedNotes()]); // Ambil kedua data secara bersamaan
}



// Load notes on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchNotes(); // Catatan aktif
    fetchArchivedNotes(); // Catatan diarsipkan
});

async function fetchArchivedNotes() {
    showLoading();
    try {
        const response = await NotesApi.getArchivedNotes();
        renderArchivedNotes(response.data);
    } catch (error) {
        console.error(error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Gagal memuat catatan diarsipkan. Silakan coba lagi nanti.'
        });
    } finally {
        hideLoading();
    }
}


function renderArchivedNotes(notesData) {
    const archiveGrid = document.getElementById('archive-grid');

    notesData.forEach(note => {
        const noteItem = document.createElement('note-item');
        noteItem.setAttribute('note-data', JSON.stringify(note));
        archiveGrid.appendChild(noteItem);
    });
}


// Event listener untuk form
document.getElementById('note-form').addEventListener('submit', (e) => {
    e.preventDefault();
    addNote();
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('form').classList.toggle('dark-mode');
    document.querySelectorAll('.notes-grid').forEach(grid => grid.classList.toggle('dark-mode'));
    darkModeToggle.classList.toggle('dark-mode');
});
