class FooterBar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer class="footer-bar">
          <p>&copy; 2024 My Notes App</p>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-bar', FooterBar);
  