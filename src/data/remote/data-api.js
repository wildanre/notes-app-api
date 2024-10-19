const BASE_URL = 'https://notes-api.dicoding.dev/v2';

class NotesApi {
  static async getNotes() {
    const response = await fetch(`${BASE_URL}/notes`);
    if (!response.ok) {
      throw new Error('Failed to fetch notes');
    }
    return response.json();
  }

  static async addNote(note) {
    const response = await fetch(`${BASE_URL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    });

    if (!response.ok) {
      throw new Error('Failed to add note');
    }
    return response.json();
  }

  static async deleteNote(id) {
    const response = await fetch(`${BASE_URL}/notes/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Failed to delete note');
    }
    return response.json();
  }
  static async getArchivedNotes() {
    const response = await fetch(`${BASE_URL}/notes/archived`);
    if (!response.ok) {
      throw new Error('Failed to fetch archived notes');
    }
    return response.json();
  }

  static async toggleArchive(id, isArchived) {
    const method = isArchived ? 'POST' : 'DELETE'; // Gunakan POST untuk archive dan DELETE untuk unarchive
    const response = await fetch(`${BASE_URL}/notes/${id}/${isArchived ? 'archive' : 'unarchive'}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to toggle archive');
    }
    return response.json();
  }

}

export default NotesApi;
