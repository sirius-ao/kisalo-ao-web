import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Header } from "../shared/component/header/header";

@Component({
  selector: 'app-module',
  imports: [RouterOutlet, Header],
  template: `
    <head>
      <app-header />
    </head>
    <main>
      <router-outlet />
    </main>
  `,
  styleUrls: ['./module.scss']
})

export class AppModule {

}