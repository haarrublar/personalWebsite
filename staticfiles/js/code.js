
// Define the class
class Code extends HTMLElement {
   connectedCallback() {
      this.textContent = this.childNodes[0].nodeValue;
      this.innerHTML = `
         <style>
            .btncore{
               height: 25px;
               width: 10px;
               margin: 5px;
               border-radius: 50%;
               cursor: pointer;
            }
            .btn1{
               background: #fac536;
               position: relative;
               overflow: hidden;
            }
            .btn2{
               background: #39ea49;
               position: relative;
               overflow: hidden;
            }
            .btn3{
               background: #f25056;
               position: relative;
               overflow: hidden;
            }
            .code-text {
               font-family: 'Source Code Pro', monospace;  
            }
         </style>
         <div style="margin-top: 3rem;"></div>
         <div class="container border rounded-3 shadow p-3 mb-5 bg-body">
            <div class="row" style="padding-bottom:20px;padding-left:10px">
               <div class="btncore btn1"></div>
               <div class="btncore btn2"></div>
               <div class="btncore btn3"></div>
            </div>
            <div class="row code-text" style="margin-left:10px;margin-right:10px;font-size:18px;">
               {% pygmentify %}
               <pre class="python">
                  ${this.textContent}
               </pre>
               {% endpygmentify %}
            </div>
         </div>
         <div style="margin-top: 3rem;"></div>
      `;
   }
}

// Register the custom element
customElements.define('code-element', Code);