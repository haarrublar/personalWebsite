// Define the class
class Code extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
      <style>
         .btncore {
            height: 25px;
            width: 10px;
            margin: 5px;
            border-radius: 50%;
            cursor: pointer;
         }
         .btn1 {
            background: #fac536;
            position: relative;
            overflow: hidden;
         }
         .btn2 {
            background: #39ea49;
            position: relative;
            overflow: hidden;
         }
         .btn3 {
            background: #f25056;
            position: relative;
            overflow: hidden;
         }
         .code-text pre {
            padding: 0;
            font-family: 'Ubuntu Mono', monospace;
            filter: brightness(130%);
         }
         .color-code {
            background-color: #22272e;
         }
      </style>
      <div style="margin-top: 3rem;"></div>
      <div class="container color-code border rounded-3 shadow p-3 mb-5">
         <div class="row" style="padding-left: 10px;padding-bottom:10px">
            <div class="btncore btn1"></div>
            <div class="btncore btn2"></div>
            <div class="btncore btn3"></div>
         </div>
         <div class="row code-text" style="margin-left: 10px; margin-right: 10px; font-size: 22px;padding: 0;">
            <pre><code class="language-python" style="padding: 0;">
            ${this.textContent}
            </code></pre>
         </div>
      </div>
      <div style="margin-top: 3rem;"></div>
      `;
   }
}

// Register the custom element
customElements.define('code-element', Code);