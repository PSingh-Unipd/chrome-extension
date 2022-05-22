import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('socials-links')
export class SocialsLinksComponent extends LitElement {

  static styles = css`
    :host {
     display: flex
    }
    .icon {
      width: 50px
    }`;

  render(): TemplateResult {
    return html`
      <a href="https://www.facebook.com/" target="_blank"><img src="assets/face.png" alt="facebook" class="icon">
      <a href="https://www.instagram.com" target="_blank"><img src="assets/insta.png" alt="instagram" class="icon"></a>
      <a href="https://www.twitter.com/" target="_blank"><img src="assets/twitter.png" alt="twitter" class="icon"></a>
      <a href="https://www.youtube.com/" target="_blank"><img src="assets/youtube.png" alt="youtube" class="icon"></a>
    `;
  }
}


