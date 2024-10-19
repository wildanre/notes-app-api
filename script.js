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
                    <button class="delete-btn" data-id="${this.note.id}">Delete</button>
                </div>
                <p class="note-body">${this.note.body}</p>
                <button class="archive-btn" data-id="${this.note.id}">
                    ${this.note.archived ? 'Unarchive' : 'Archive'}
                </button>
            </div>
        `;

        this.querySelector('.delete-btn').addEventListener('click', () => {
            deleteNoteAPI(this.note.id);
        });

        this.querySelector('.archive-btn').addEventListener('click', () => {
            toggleArchiveAPI(this.note.id, this.note.archived);
        });
    }
}
customElements.define('note-item', NoteItem);

async function fetchNotes() {
    showLoading();  // Tampilkan loading indicator
    try {
        const response = await NotesApi.getNotes();
        renderNotes(response.data);
    } catch (error) {
        console.error(error);
    } finally {
        hideLoading();  // Sembunyikan loading indicator
    }
}

function renderNotes(notesData) {
    const notesGrid = document.getElementById('notes-grid');
    const archiveGrid = document.getElementById('archive-grid');

    notesGrid.innerHTML = '';  // Clear active notes grid
    archiveGrid.innerHTML = ''; // Clear archive notes grid

    notesData.forEach(note => {
        const noteItem = document.createElement('note-item');
        noteItem.setAttribute('note-data', JSON.stringify(note));

        if (!note.archived) {
            notesGrid.appendChild(noteItem);  // Add to active notes grid
        } else {
            archiveGrid.appendChild(noteItem);  // Add to archive grid
        }
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
            await NotesApi.addNote(newNote);  // Tambah catatan via API
            fetchNotes();  // Refresh catatan setelah berhasil ditambah
        } catch (error) {
            console.error(error);
        } finally {
            hideLoading();
        }

        // Reset form fields tanpa memengaruhi tombol
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
    try {
        showLoading();
        await NotesApi.deleteNote(id);
        fetchNotes();
    } catch (error) {
        console.error(error);
    } finally {
        hideLoading();
    }
}

// Toggle archive
async function toggleArchiveAPI(id, isArchived) {
    try {
        showLoading();
        if (isArchived) {
            await NotesApi.toggleArchive(id, false); // Menggunakan false untuk unarchive
        } else {
            await NotesApi.toggleArchive(id, true); // Menggunakan true untuk archive
        }
        fetchNotes();
    } catch (error) {
        console.error(error);
    } finally {
        hideLoading();
    }
}

async function fetchArchivedNotes() {
    showLoading();
    try {
        const response = await NotesApi.getArchivedNotes();
        renderArchivedNotes(response.data);
    } catch (error) {
        console.error(error);
    } finally {
        hideLoading();
    }
}

function renderArchivedNotes(notesData) {
    const archiveSection = document.querySelector('archive-section');
    if (archiveSection) {
        archiveSection.notes = notesData;  // Menggunakan properti setter dari custom element ArchiveSection
    }
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

// Load notes on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchNotes();
    fetchArchivedNotes(); // Memuat catatan diarsipkan
});
