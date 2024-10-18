class ArchiveSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h2>Archived Notes</h2>
            <div id="archive-grid" class="notes-grid"></div>
        `;
    }
}

customElements.define('archive-section', ArchiveSection);
