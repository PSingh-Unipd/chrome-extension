import { take } from 'rxjs';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { LocalStorage } from '../utils/local-storage';
import { AppState } from '../state/app-state';

@customElement('user-login')
export class LoggedInComponent extends LitElement {
  static styles = css`
    .login {
        padding: 20px 25px;
        background: white;
        margin: 0px;
    }
    .title {
        text-align: center;
        margin: 10px 0px;
    }
    .form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .form-input {
        font-family: "Roboto", sans-serif;
        outline: 0;
        background: #f2f2f2;
        width: 100%;
        border: 0;
        padding: 15px;
        box-sizing: border-box;
        font-size: 14px;
    }
    .submit-button {
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        outline: 0;
        background: #4CAF50;
        width: 100%;
        border: 0;
        padding: 15px;
        color: #FFFFFF;
        font-size: 14px;
        -webkit-transition: all 0.3 ease;
        transition: all 0.3 ease;
        cursor: pointer;
    }
  `;

  formValues: { username: string, password: string } = { username: '', password: '' };
  @state() invalidPassword = '';

  render(): TemplateResult {
    return html`
      <div class="login">
        <h2 class="title">Login</h2>
        <form class="form" @submit=${this.login}>
          <input type="text" id="username" title="username" placeholder="username" class="form-input" @change=${this.handlePasswordUsernameValueChange} required />
          <input type="password" id="password" title="password" placeholder="password" class="form-input" @change=${this.handlePasswordValueChange} required />
          <span class="password-invalid">${this.invalidPassword}</span>
          <button type="submit" class="submit-button" @disabled=${true}>Login</button>
        </form>
    </div>
    `;
  }

  handlePasswordUsernameValueChange(event: any): void {
    this.formValues.username = event.srcElement.value as string;
    event.preventDefault();
  }

  handlePasswordValueChange(event: any): void {
    this.formValues.password = event.srcElement.value as string;
    event.preventDefault();
  }

  login(event: any): void {
    if (this.formValues.password !== 'password') {
      this.invalidPassword = 'Invalid password!';
      event.preventDefault();
      return;
    }
    LocalStorage.set('user', this.formValues.username).pipe(
      take(1)
    ).subscribe(() => {
      AppState.loggedUser.next({ username: this.formValues.username });
    });
  }
}