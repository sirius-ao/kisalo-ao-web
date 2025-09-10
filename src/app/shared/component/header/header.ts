import { Component } from '@angular/core';
import { AsideMenuService } from '../../service/aside-menu.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(protected _menuService:AsideMenuService){}

  changeMenuState(){
    this._menuService.changeState();
  }
}
