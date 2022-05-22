import { take } from 'rxjs';
import { ILocalStorageData, LocalStorage } from './utils/local-storage';
/**
 * API: https://developer.chrome.com/docs/extensions/reference/idle/
 * Min interval is 15s
 */
chrome.idle.setDetectionInterval(15);
chrome.idle.onStateChanged.addListener(
  (value: string) => {
    if (value === 'idle') {
      LocalStorage.get(['user']).pipe(
        take(1)
      ).subscribe((data: ILocalStorageData) => {
        if (data['user']) {
          alert();
        }
      });
    }
  }
);