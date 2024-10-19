class FooterBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="footer-bar">
          <p>&copy; 2024 My Notes App</p>
        </div>
      `;
  }
}

customElements.define('footer-bar', FooterBar);
