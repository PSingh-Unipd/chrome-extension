
export class LoggedInComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<h1>User logged-IN</h1>`;
    }
}
