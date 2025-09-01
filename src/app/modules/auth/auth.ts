import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-auth',
  imports: [RouterOutlet],
  template: `
      <router-outlet />
  `,
  styleUrls: ['./auth.scss']
})

export class AppAuth {

}