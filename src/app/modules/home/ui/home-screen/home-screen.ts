import { Component } from '@angular/core';
import { CardService } from "../../../../shared/component/card-service/card-service";
import { HelpDropdownList } from "../component/help-dropdown-list/help-dropdown-list";

@Component({
  selector: 'app-home-screen',
  imports: [CardService, HelpDropdownList],
  templateUrl: './home-screen.html',
  styleUrl: './home-screen.scss'
})
export class HomeScreen {

}
