import { computed, Injectable, signal, WritableSignal } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class AsideMenuService {
    private _state = signal(false);

    get menuState(): WritableSignal<boolean> {
        return this._state;
    }

    changeState(){
        this._state.set( !this._state());
    }
}