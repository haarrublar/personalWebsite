/**
Custom HTML style element 'two-column-layout' for creating a two-column layout with adjustable widths.
The element allows users to define the content for the left and right columns using the 'slot' attribute.
It uses Flexbox for responsive layout with columns side-by-side on larger screens and stacked on smaller screens.
The left column is aligned to the right and has bold font-weight for a distinct appearance.
The '.custom-btn' class is provided for styling buttons with a fixed border, background color, and hover effect.
The media query '@media (max-width: 760px)' ensures that both columns occupy the full width on smaller screens.
*/

class TwoColumnLayout extends HTMLElement {
   constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const leftContent = this.querySelector('[slot="left"]').innerHTML;
      const rightContent = this.querySelector('[slot="right"]').innerHTML;

      const template = `
         <style>
            .container {
               margin-top: .2rem;
            }
            .row {
               display: flex;
               flex-wrap: wrap;
            }
            .col-md-6 {
               flex-basis: 15%;
               max-width: 15%;
               box-sizing: border-box;
               padding-left: 1rem;
            }
            .col-md-6:last-child {
               flex-basis: 85%;
               max-width: 85%;
            }
            .col-md-6.left-column {
               text-align: right; /* Align the text in the left column to the right */
               font-weight: bold; /* Make text in left column bold */
               margin-bottom: 1px; /* Reduce the vertical space between columns */
            }

            ul.no-bullets {
               list-style-type: none;
               margin-left: 0rem;
               padding: 0;
            }

            .custom-btn {
               /* Add styles to fix the hover and text decoration issues */
               text-decoration: none;
               color: #fff;
               background-color: #212529;
               padding: 0.375rem 0.75rem;
               border-radius: 0.25rem;
               border: 3px solid #212529; /* Add initial border */
               display: inline-block; /* Ensure the button takes only the necessary width */
            }

            .custom-btn:hover {
               background-color: #fff;
               color: #212529;
            }

            .custom-btn:focus {
               box-shadow: none;
            }

            .float-end {
               float: right;
            }

            @media (max-width: 760px) {
               .container {
                  align-items: flex-start;
                  max-width: 100%;
               }
               .col-md-6 {
                  flex-basis: 100%;
                  max-width: 100%;
                  padding-left: 0px;
               }
               .col-md-6.left-column {
                  text-align: left;
               }
               .col-md-6:last-child {
                  flex-basis: 100%;
                  max-width: 100%;
                  padding-left: .5rem;
               }
            }

         </style>
         <div class="container">
            <div class="row">
               <div class="col-md-6 left-column">
                  ${leftContent}
               </div>
               <div class="col-md-6">
                  ${rightContent}
               </div>
            </div>
         </div>
      `;
      shadowRoot.innerHTML = template;
   }
}

customElements.define('two-column-layout', TwoColumnLayout);