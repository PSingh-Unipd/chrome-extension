import { BehaviorSubject } from "rxjs";

export interface IAppState {
	username: string
}

/**
 * Simple user state
 */
export class AppState {
	static loggedUser: BehaviorSubject<IAppState | null> = new BehaviorSubject<IAppState | null>(null);
}