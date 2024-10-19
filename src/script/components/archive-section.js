class ArchiveSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <h2>Catatan Diarsipkan</h2>
            <div id="archive-grid" class="notes-grid"></div>
        `;
  }

  set notes(notes) {
    const archiveGrid = this.querySelector('#archive-grid');
    archiveGrid.innerHTML = ''; // Kosongkan grid sebelum merender catatan baru

    notes.forEach((note) => {
      const noteItem = document.createElement('note-item');
      noteItem.setAttribute('note-data', JSON.stringify(note));
      archiveGrid.appendChild(noteItem);
    });
  }
}

customElements.define('archive-section', ArchiveSection);
