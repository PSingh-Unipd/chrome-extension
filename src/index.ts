import { LoginFormComponent } from './components/login-form';
import { LoggedInComponent } from './components/logged-in';

// Defiing components
customElements.define('login-form-component', LoginFormComponent);
customElements.define('logged-in-component', LoggedInComponent);

let appTag = document.getElementById('app') as HTMLInputElement;

chrome.storage.local.get(["logged-user"], function (data) {
    console.log('PRINt', data);
    if (data && data['logged-user']) {
        appTag.innerHTML = `<logged-in-component></logged-in-component>`;
    } else {
        appTag.innerHTML = `<login-form-component></login-form-component>`;
    }
});


