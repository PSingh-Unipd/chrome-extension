try {
  /**
   * idle interval min time is 15s
   * https://developer.chrome.com/docs/extensions/reference/idle/
   */
  chrome.idle.setDetectionInterval(15);
  chrome.idle.onStateChanged.addListener((idleStatus: string): void => {

    // If user is inactive for 15s (minimum allowed value)
    if (idleStatus === 'idle') {

      chrome.storage.local.get(['user'], (result): void => {

        // User is logged-in
        if (result['user']) {

          // Quearying current active tab
          chrome.tabs.query({ active: true }, (tabs: chrome.tabs.Tab[]): void => {

            const activeTab: chrome.tabs.Tab = tabs[0];

            // It is not possible to add content to any chrome:// page.
            if (activeTab && !activeTab.url?.includes('chrome://')) {

              chrome.scripting.executeScript({
                func: injectIdleComponent,
                target: { tabId: activeTab.id as number },
                args: [result['user']]
              });
            }
          })
        }
      });
    }
  });
} catch (error) {
  console.log(error);
}

function injectIdleComponent(username: string): void {

  // If it's not there create host div
  if (document.querySelector('.chrome-extension-alert-demo-parwinder') === null) {

    const hostElment: HTMLDivElement = document.createElement('div');
    hostElment.className = 'chrome-extension-alert-demo-parwinder';
    document.body.appendChild(hostElment);
  }
  
  const hostElment: HTMLElement = document.querySelector('.chrome-extension-alert-demo-parwinder')!;
  const rootEl: ShadowRoot = hostElment.shadowRoot ? hostElment.shadowRoot : hostElment?.attachShadow({ mode: 'open' });
  const divEl: HTMLDivElement = document.createElement('div');
  divEl.className = 'div root-class';
  
  divEl.innerHTML = `
    <style>
      .container {
        position: fixed;
        bottom: 100px;
        right: 40px;
        min-width: 220px;
        background: orange;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 80px;
        padding: 20px;
        background-image: linear-gradient(to right, #141e30, #243b55);
        border-radius: 5px;
        transition: all 5s ease-in-out;
        border: 1px solid steelblue;
        z-index: 10;
      }
      h3 {
        color: white;
      }
      .button {
        background: #4CAF50;
        width: 65px;
        padding: 8px;
        color: #FFFFFF;
        font-size: 12px;
        cursor: pointer;
    }
    </style>
    <div class="container">
      <h3>Are you lost ${username}?</h3>
      <div>
        <button class="button" id="button-yes">Yes</button>
        <button class="button" id="button-no">No</button>
      </div>
    </div>
  `;
  rootEl?.appendChild(divEl);

  rootEl.getElementById('button-yes')?.addEventListener('click', () => {
    rootEl.removeChild(rootEl.querySelector('div')!);
    window.open('https://help.nickelled.com/', '_blank');
  });

  rootEl.getElementById('button-no')?.addEventListener('click', () => {
    rootEl.removeChild(rootEl.querySelector('div')!);
  });
}