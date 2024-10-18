class NotesSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h2>All Notes</h2>
            <div id="notes-grid" class="notes-grid"></div>
        `;
    }
}

customElements.define('notes-section', NotesSection);
