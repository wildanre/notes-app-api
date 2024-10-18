const BASE_URL = 'https://notes-api.dicoding.dev/v2';

class NotesApi {
  static async getAllNotes() {
    const response = await fetch(`${BASE_URL}/notes`);
    if (response.ok) {
      const data = await response.json();
      return data.data;
    } else {
      throw new Error('Failed to fetch notes');
    }
  }

  static async addNote({ title, body }) {
    const response = await fetch(`${BASE_URL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body }),
    });
    if (response.ok) {
      const data = await response.json();
      return data.message;
    } else {
      throw new Error('Failed to add note');
    }
  }

  static async deleteNote(id) {
    const response = await fetch(`${BASE_URL}/notes/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      const data = await response.json();
      return data.message;
    } else {
      throw new Error('Failed to delete note');
    }
  }
}

export default NotesApi;
