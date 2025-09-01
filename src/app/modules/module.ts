import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AsideMenu } from "../shared/component/aside-menu/aside-menu";
import { Header } from "../shared/component/header/header";

@Component({
  selector: 'app-module',
  imports: [RouterOutlet, AsideMenu, Header],
  template: `
    <header>
      <app-header />
    </header>
    <main>
      <router-outlet />
    </main>

    <app-aside-menu />
  `,
  styleUrls: ['./module.scss']
})

export class AppModule {

}