(()=>{"use strict";class e extends HTMLElement{connectedCallback(){this.innerHTML="<h1>Login Form Component</h1>"}}class n extends HTMLElement{connectedCallback(){this.innerHTML="<h1>User logged-IN</h1>"}}customElements.define("login-form-component",e),customElements.define("logged-in-component",n);let o=document.getElementById("app");chrome.storage.local.get(["logged-user"],(function(e){console.log("PRINt",e),e&&e["logged-user"]?o.innerHTML="<logged-in-component></logged-in-component>":o.innerHTML="<login-form-component></login-form-component>"})),chrome.storage.local.set({"logged-user":{username:"Parwinder"}},(function(){console.log("HELLO??")}))})();