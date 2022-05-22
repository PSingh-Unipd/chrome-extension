import { catchError, from, Observable, of } from 'rxjs';

export interface ILocalStorageData {
	[key: string]: any
}

export class LocalStorage {

	static get(keys: string[]): Observable<ILocalStorageData> {
		return from(
			chrome && chrome.storage ? chrome.storage.local.get(keys) : Promise.reject()
		).pipe(
			catchError(err => {
				console.log('chrome local storage not available!');
				return of({}) as Observable<ILocalStorageData>;
			})
		);
	}

	static set<T>(key: string, value: T): Observable<void> {
		return from(
			chrome && chrome.storage ? chrome.storage.local.set({ [key]: value }) : Promise.reject()
		).pipe(
			catchError(err => {
				console.log('chrome local storage not available!');
				return of() as Observable<void>;
			})
		);
	}

	static remove(keys: string[]): Observable<void> {
		return from(
			chrome && chrome.storage ? chrome.storage.local.remove(keys) : Promise.reject()
		).pipe(
			catchError(err => {
				console.log('chrome local storage not available!');
				return of() as Observable<void>;
			})
		);
	}
}