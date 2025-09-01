import { Component, computed } from "@angular/core";
import { AsideMenuService } from "../../service/aside-menu.service";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-aside-menu",
    imports: [CommonModule],
    templateUrl: './aside-menu.html',
    styleUrls: [ './aside-menu.scss'],
})

export class AsideMenu {
    constructor(private _menuService:AsideMenuService){}

    protected menuState = computed((()=> this._menuService.menuState())); 
    
    changeMenuState(): void{this._menuService.changeState()}
}