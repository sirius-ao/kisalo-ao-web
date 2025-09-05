import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AsideMenu } from "../shared/component/aside-menu/aside-menu";
import { Header } from "../shared/component/header/header";
import { Footer } from "../shared/component/footer/footer";

@Component({
  selector: 'app-module',
  imports: [RouterOutlet, AsideMenu, Header, Footer],
  template: `
    <header>
      <app-header />
    </header>
    <main>
      <router-outlet />
    </main>
    <app-footer />
    <app-aside-menu />
  `,
  styleUrls: ['./module.scss']
})

export class AppModule {

}