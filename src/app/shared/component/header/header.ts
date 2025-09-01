import { Component } from '@angular/core';
import { AsideMenuService } from '../../service/aside-menu.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(protected _menuService:AsideMenuService){}

  changeMenuState(){
    this._menuService.changeState();
  }
}
