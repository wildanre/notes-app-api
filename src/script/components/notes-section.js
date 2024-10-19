class NotesSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <h2>Semua Catatan</h2>
            <div id="notes-grid" class="notes-grid"></div>
        `;
  }
}

customElements.define('notes-section', NotesSection);
