import { take } from 'rxjs';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { LocalStorage, ILocalStorageData } from './utils/local-storage';
import { AppState, IAppState } from './state/app-state';
import './components/logged-in';
import './components/login-form';
import './components/socials-links';

@customElement('app-component')
export class AppComponent extends LitElement {
  static styles = css`
    :host {
      min-width: 320px;
      min-height: 360px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0px;
      //background: #76b852;
      flex-direction: column;
      gap: 10px;
    }
  `;

  @state() loggedUser: IAppState | null = null;

  constructor() {
    super();

    AppState.loggedUser.asObservable().subscribe(value => this.loggedUser = value);

    LocalStorage.get(['user']).pipe(
      take(1)
    ).subscribe((data: ILocalStorageData) =>{
      AppState.loggedUser.next(data['user'] ? { username: data['user'] }: null);
    });
  }

  render(): TemplateResult {
    return html`${(this.loggedUser === null
      ? html`<login-form></login-form><socials-links></socials-links>`
      : html`<logged-in .username=${this.loggedUser.username}>logout</logged-in>`
    )}`;
  }
}

// Injecting root component(app-component) inside div tag with 'app' id
const appTag = document.getElementById('app') as HTMLInputElement;
appTag.innerHTML = `<app-component></app-component>`;