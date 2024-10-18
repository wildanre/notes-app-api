class AppBar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header class="app-bar">
          <h1>Notes App</h1>
          <button id="dark-mode-toggle">Light/dark</button>
        </header>
      `;
    }
  }
  
  customElements.define('app-bar', AppBar);
  