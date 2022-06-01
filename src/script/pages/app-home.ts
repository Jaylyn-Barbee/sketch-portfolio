import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  static get styles() {
    return css`
      #container {
        position: relative;

        width: 1000px;
        height: 1000px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #bg {
        height: 800px;
        width: auto;
      }

      .pins {
        position: absolute;
        height: 14px;
        box-shadow: 0px 0px 14px 3px #c0ae0f;
      }

      #pin_durham {
        top: 24.7%;
        right: 55.4%;
      }

      #pin_seattle {
        top: 23.7%;
        right: 58.2%;
      }

      #pin_sydney {
        top: 29.5%;
        right: 64.2%;
      }

      #pns {
        height: 45px;
        top: 50%;
        right: 48%;
      }

      .btn {
        position: absolute;
        transition: all .25s linear;
        transition-timing-function: linear;
      }

      .btn:hover {
        transform: translateY(-5px);
        cursor: pointer;

      }

      #reviews {
        height: 45px;
        top: 51%;
        right: 59.7%;
      }

      #specs {
        height: 36px;
        top: 70%;
        right: 41.5%;
      }

      #music {
        height: 34px;
        top: 38.5%;
        right: 38%;
      }

      #academics {
        height: 38px;
        top: 30.5%;
        right: 29.9%;
      }

      #apa {
        height: 27px;
        top: 37.8%;
        right: 30.6%;
      }

      #about {
        height: 27px;
        top: 44.9%;
        right: 30.6%;
      }

      #hobbies {
        height: 250px;
        top: 53.6%;
        right: 24.6%;
      }

      #contact {
        height: 24px;
        top: 58.7%;
        right: 59.6%;
      }

    `;
  }

  constructor() {
    super();
  }

  async firstUpdated() {

  }

  render() {
    return html`
      <div id="container">
        <img id="bg" src="/assets/images/background.png" alt="background of desk with computer" />
        <img id="pin_durham" class="pins btn" src="/assets/images/pin.png" alt="pin over durham, nc" />
        <img id="pin_seattle" class="pins btn"  src="/assets/images/pin.png" alt="pin over durham, nc" />
        <img id="pin_sydney" class="pins btn"  src="/assets/images/pin.png" alt="pin over durham, nc" />
        <img id="pns" class="btn" src="/assets/images/pns.png" alt="projects and skills button" />
        <img id="reviews" class="btn" src="/assets/images/reviews.png" alt="reviews button" />
        <img id="specs" class="btn" src="/assets/images/spec.png" alt="computer specs button" />
        <img id="music" class="btn" src="/assets/images/music.png" alt="music button" />
        <img id="academics" class="btn" src="/assets/images/academics.png" alt="academics button" />
        <img id="apa" class="btn" src="/assets/images/apa.png" alt="apa button" />
        <img id="about" class="btn" src="/assets/images/about.png" alt="about button" />
        <img id="contact" class="btn" src="/assets/images/contact.png" alt="contact button" />
        <img id="hobbies" class="btn" src="/assets/images/hobbies.png" alt="hobbies button" />

      </div>
    `;
  }
}
