import './src/script/components/index.js';
import NotesApi from './src/data/remote/data-api.js';

async function renderNotes() {
    try {
        const notesData = await NotesApi.getAllNotes();
        const notesGrid = document.getElementById('notes-grid');
        const archiveGrid = document.getElementById('archive-grid');

        notesGrid.innerHTML = '';
        archiveGrid.innerHTML = '';

        notesData.forEach(note => {
            const noteItem = document.createElement('div');
            noteItem.classList.add('note-item');
            noteItem.innerHTML = `
          <div class="note-header">
            <h3>${note.title}</h3>
            <button class="delete-btn" data-id="${note.id}">Delete</button>
          </div>
          <p class="note-body">${note.body}</p>
          <button class="archive-btn" data-id="${note.id}">
            ${note.archived ? 'Unarchive' : 'Archive'}
          </button>
        `;

            if (!note.archived) {
                notesGrid.appendChild(noteItem);
            } else {
                archiveGrid.appendChild(noteItem);
            }

            // Delete Note
            noteItem.querySelector('.delete-btn').addEventListener('click', async () => {
                await NotesApi.deleteNote(note.id);
                renderNotes();
            });

            // Toggle Archive
            noteItem.querySelector('.archive-btn').addEventListener('click', async () => {
                // Implement toggle archive functionality based on your API response
            });
        });
    } catch (error) {
        console.error(error.message);
    }
}

async function addNote() {
    const title = document.getElementById('note-title').value;
    const body = document.getElementById('note-body').value;

    try {
        await NotesApi.addNote({ title, body });
        renderNotes();
    } catch (error) {
        console.error(error.message);
    }
}

document.getElementById('note-form').addEventListener('submit', (e) => {
    e.preventDefault();
    addNote();
});

document.addEventListener('DOMContentLoaded', renderNotes);