(()=>{var n={106:(n,e,t)=>{"use strict";t.d(e,{A:()=>d});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\nbody {\n  font-family: 'Open Sans', sans-serif;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  background-color: #fff9e6;\n  color: #2c2c2c;\n  transition:\n    background-color 0.3s ease,\n    color 0.3s ease;\n}\n\n.app-bar {\n  background-color: #ffd52e;\n  color: white;\n  padding: 1rem;\n  text-align: center;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  justify-items: start;\n  gap: 1rem;\n}\n/* Styling for loading indicator */\n.hidden {\n  display: none;\n}\n\n.loading {\n  text-align: center;\n  margin: 20px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\nbody.dark-mode {\n  background-color: #333;\n  color: #fff;\n}\n\n.dark-mode .loading {\n  color: #fff;\n}\n\n#dark-mode-toggle {\n  background-color: #ffffff;\n  border: 1px solid #2c2c2c;\n  font-weight: 600;\n  color: #000000;\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  border-radius: 16px;\n}\n\nmain {\n  flex: 1;\n  margin: 2rem;\n}\n\n.form-section {\n  max-width: 600px;\n  margin: auto;\n}\n\nform {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1.5rem;\n  width: 100%;\n}\n\ninput,\ntextarea {\n  padding: 0.75rem;\n  font-size: 1rem;\n  border: 1px solid #2c2c2c;\n  border-radius: 12px;\n  background-color: #fff;\n  color: #1a1a1a;\n  transition:\n    border-color 0.3s ease,\n    box-shadow 0.3s ease;\n}\n\ninput:focus,\ntextarea:focus {\n  border-color: #ffd52e;\n  box-shadow: 0 0 5px rgba(255, 213, 46, 0.5);\n  outline: none;\n}\n\ntextarea {\n  min-height: 100px;\n}\n\nbutton.add-note-btn {\n  background-color: #ffd52e;\n  border: none;\n  padding: 0.75rem;\n  font-size: 1rem;\n  margin-bottom: 1rem;\n  color: white;\n  cursor: pointer;\n  border-radius: 12px;\n  transition: background-color 0.3s ease;\n}\n\nbutton.add-note-btn:hover {\n  background-color: #ffaa00;\n}\n\n.notes-section,\n.archive-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n.notes-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 2rem;\n  justify-items: stretch;\n  align-items: stretch;\n}\n\n.note-item {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  height: 250px;\n  width: 100%;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  background-color: #fff;\n  border: 1px solid #2c2c2c;\n  border-radius: 16px;\n  box-shadow: 0 2px 5px #0000001a;\n  gap: 1rem;\n}\n\n.note-header {\n  grid-row: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nbutton.delete-btn {\n  background-color: #ff4d4d;\n  color: white;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\nbutton.delete-btn:hover {\n  background-color: #e64545;\n}\n\nbutton.archive-btn {\n  background-color: #ffd52e;\n  color: white;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\nbutton.archive-btn:hover {\n  background-color: #ffaa00;\n}\n\n.footer-bar {\n  background-color: #ffd52e;\n  color: white;\n  font-weight: 600;\n  text-align: center;\n  padding: 2rem;\n  width: 100%;\n}\n\n.error-message {\n  color: red;\n  font-size: 0.9rem;\n  margin-top: -1rem;\n  margin-bottom: 1rem;\n}\n\nbody.dark-mode {\n  background-color: #000000;\n  color: #f4f4f4;\n}\n\nheader.dark-mode {\n  background-color: #e5e5e5;\n  color: white;\n}\n\nbutton#dark-mode-toggle.dark-mode {\n  background-color: #0a0a0a;\n  color: #bfbfbf;\n}\n\nform.dark-mode input,\nform.dark-mode textarea {\n  background-color: #e5e5e5;\n  color: #1d1d1d;\n  border: 1px solid #888;\n}\n\n.notes-grid.dark-mode .note-item {\n  background-color: #e5e5e56b;\n  border: 1px solid #888;\n}\n\nbutton.add-note-btn.dark-mode {\n  background-color: #666;\n  color: white;\n}\n\n@media (max-width: 768px) {\n  .form-section {\n    width: 90%;\n  }\n\n  .notes-grid {\n    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));\n  }\n\n  .note-item {\n    height: auto;\n  }\n\n  button.add-note-btn {\n    width: 100%;\n  }\n}\n\n@media (max-width: 480px) {\n  header {\n    grid-template-columns: 1fr;\n  }\n\n  input,\n  textarea {\n    font-size: 0.9rem;\n  }\n\n  button.add-note-btn {\n    font-size: 0.9rem;\n  }\n}\n",""]);const d=i},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},601:n=>{"use strict";n.exports=function(n){return n[1]}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],d=0;d<n.length;d++){var c=n[d],s=o.base?c[0]+o.base:c[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var m=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(f);else{var p=r(f,o);o.byIndex=d,e.splice(d,0,{identifier:u,updater:p,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var d=t(a[i]);e[d].references--}for(var c=o(n,r),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},800:()=>{class n extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML='\n        <header class="app-bar">\n          <h1>Notes App</h1>\n          <button id="dark-mode-toggle">Light/dark</button>\n        </header>\n      '}}customElements.define("app-bar",n)},599:()=>{class n extends HTMLElement{connectedCallback(){this.innerHTML='\n            <h2>Catatan Diarsipkan</h2>\n            <div id="archive-grid" class="notes-grid"></div>\n        '}set notes(n){const e=this.querySelector("#archive-grid");e.innerHTML="",n.forEach((n=>{const t=document.createElement("note-item");t.setAttribute("note-data",JSON.stringify(n)),e.appendChild(t)}))}}customElements.define("archive-section",n)},248:()=>{class n extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML='\n        <div class="footer-bar">\n          <p>&copy; 2024 My Notes App</p>\n        </div>\n      '}}customElements.define("footer-bar",n)},847:()=>{class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML='\n      <style>\n        .loading {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          height: 100vh;\n        }\n\n        .spinner {\n          width: 40px;\n          height: 40px;\n          border: 4px solid #f3f3f3;\n          border-top: 4px solid #3498db;\n          border-radius: 50%;\n          animation: spin 1s linear infinite;\n        }\n\n        @keyframes spin {\n          0% { transform: rotate(0deg); }\n          100% { transform: rotate(360deg); }\n        }\n      </style>\n      <div class="loading">\n        <div class="spinner"></div>\n      </div>\n    '}}customElements.define("loading-indicator",n)},644:()=>{class n extends HTMLElement{connectedCallback(){this.innerHTML='\n            <h2>Semua Catatan</h2>\n            <div id="notes-grid" class="notes-grid"></div>\n        '}}customElements.define("notes-section",n)}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{"use strict";t(800),t(644),t(599),t(847),t(248);var n=t(72),e=t.n(n),o=t(825),r=t.n(o),a=t(659),i=t.n(a),d=t(56),c=t.n(d),s=t(540),l=t.n(s),u=t(113),m=t.n(u),f=t(106),p={};p.styleTagTransform=m(),p.setAttributes=c(),p.insert=i().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=l(),e()(f.A,p),f.A&&f.A.locals&&f.A.locals;const g="https://notes-api.dicoding.dev/v2",h=class{static async getNotes(){const n=await fetch(`${g}/notes`);if(!n.ok)throw new Error("Failed to fetch notes");return n.json()}static async addNote(n){const e=await fetch(`${g}/notes`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!e.ok)throw new Error("Failed to add note");return e.json()}static async deleteNote(n){const e=await fetch(`${g}/notes/${n}`,{method:"DELETE"});if(!e.ok)throw new Error("Failed to delete note");return e.json()}static async getArchivedNotes(){const n=await fetch(`${g}/notes/archived`);if(!n.ok)throw new Error("Failed to fetch archived notes");return n.json()}static async toggleArchive(n,e){const t=e?"POST":"DELETE",o=await fetch(`${g}/notes/${n}/${e?"archive":"unarchive"}`,{method:t,headers:{"Content-Type":"application/json"}});if(!o.ok)throw new Error("Failed to toggle archive");return o.json()}};class b extends HTMLElement{constructor(){super(),this.note=null}connectedCallback(){this.note=JSON.parse(this.getAttribute("note-data")),this.render()}render(){this.innerHTML=`\n        <div class="note-item">\n            <div class="note-header">\n                <h3>${this.note.title}</h3>\n                <button class="delete-btn" data-id="${this.note.id}">Hapus</button>\n            </div>\n            <p class="note-body">${this.note.body}</p>\n            ${this.note.archived?"":`<button class="archive-btn" data-id="${this.note.id}">Arsipkan</button>`}\n        </div>\n    `,this.querySelector(".delete-btn").addEventListener("click",(()=>{!async function(n){if((await Swal.fire({title:"Anda yakin?",text:"Catatan ini akan dihapus!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Hapus",cancelButtonText:"Batal"})).isConfirmed)try{const e=document.querySelector(`note-item[data-id="${n}"]`);gsap.to(e,{opacity:0,y:-20,duration:.5,onComplete:async()=>{v(),await h.deleteNote(n),y(),Swal.fire("Terhapus!","Catatan telah dihapus.","success"),x()}})}catch(n){console.error(n),Swal.fire({icon:"error",title:"Oops...",text:"Gagal menghapus catatan. Silakan coba lagi nanti."})}}(this.note.id)}));const n=this.querySelector(".archive-btn");n&&n.addEventListener("click",(()=>{!async function(n){try{v(),await h.toggleArchive(n,!0);const e=document.querySelector(`note-item[data-id="${n}"]`);e&&gsap.to(e,{opacity:0,y:-20,duration:.5,onComplete:async()=>{document.getElementById("archive-grid").appendChild(e),e.querySelector(".archive-btn").remove(),await y(),await w(),gsap.from(e,{opacity:0,y:20,duration:.5})}})}catch(n){console.error(n),Swal.fire({icon:"error",title:"Oops...",text:"Gagal mengarsipkan catatan. Silakan coba lagi nanti."})}finally{x()}}(this.note.id)}))}}async function y(){v();try{!function(n){const e=document.getElementById("notes-grid"),t=document.getElementById("archive-grid");e.innerHTML="",t.innerHTML="",n.forEach((n=>{const o=document.createElement("note-item");o.setAttribute("note-data",JSON.stringify(n)),o.setAttribute("data-id",n.id),n.archived?t.appendChild(o):e.appendChild(o),gsap.from(o,{opacity:0,y:-20,duration:.5})}))}((await h.getNotes()).data)}catch(n){console.error(n),Swal.fire({icon:"error",title:"Oops...",text:"Gagal memuat catatan. Silakan coba lagi nanti."})}finally{x()}}function v(){document.getElementById("loading-indicator").classList.remove("hidden")}function x(){document.getElementById("loading-indicator").classList.add("hidden")}function k(n){const e=n.value.trim(),t=n.nextElementSibling;return""===e?(t.textContent="Field ini tidak boleh kosong!",n.classList.add("invalid"),!1):(t.textContent="",n.classList.remove("invalid"),!0)}async function w(){v();try{!function(n){const e=document.getElementById("archive-grid");n.forEach((n=>{const t=document.createElement("note-item");t.setAttribute("note-data",JSON.stringify(n)),e.appendChild(t)}))}((await h.getArchivedNotes()).data)}catch(n){console.error(n),Swal.fire({icon:"error",title:"Oops...",text:"Gagal memuat catatan diarsipkan. Silakan coba lagi nanti."})}finally{x()}}customElements.define("note-item",b),document.addEventListener("DOMContentLoaded",(async()=>{await async function(){await Promise.all([y(),w()])}()})),document.addEventListener("DOMContentLoaded",(()=>{y(),w()})),document.getElementById("note-form").addEventListener("submit",(n=>{n.preventDefault(),async function(){const n=document.getElementById("note-title"),e=document.getElementById("note-body");if(k(n)&&k(e)){const t={title:n.value,body:e.value};try{v(),await h.addNote(t),y()}catch(n){console.error(n),Swal.fire({icon:"error",title:"Oops...",text:"Gagal menambah catatan. Silakan coba lagi nanti."})}finally{x()}n.value="",e.value=""}}()}));const E=document.getElementById("dark-mode-toggle");E.addEventListener("click",(()=>{document.body.classList.toggle("dark-mode"),document.querySelector("form").classList.toggle("dark-mode"),document.querySelectorAll(".notes-grid").forEach((n=>n.classList.toggle("dark-mode"))),E.classList.toggle("dark-mode")}))})()})();