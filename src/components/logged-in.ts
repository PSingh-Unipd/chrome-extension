import { take } from 'rxjs';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LocalStorage } from '../utils/local-storage';
import { AppState } from '../state/app-state';

@customElement('logged-in')
export class LoggedInComponent extends LitElement {
	static styles = css`
    h2 {
      overflow-wrap: break-word;
      max-width: 250px;
    }
    .logout-button {
      text-transform: uppercase;
      background: #873e23;
      width: 100%;
      border: 0;1
      padding: 15px;
      color: #FFFFFF;
      padding: 15px;
      font-size: 14px;
      cursor: pointer;
    }
  `;

	@property() username = '';

	render(): TemplateResult {
		return html`
      <div>
        <h2>Hi, ${this.username}</h2>
        <button class="logout-button" @click=${this.logout} class="submit-button">Logout</button>
      </div>  
    `;
	}

	logout(): void {
		LocalStorage.remove(['user']).pipe(
			take(1)
		).subscribe(() => AppState.loggedUser.next(null));
	}
}
