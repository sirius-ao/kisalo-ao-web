import { Component } from '@angular/core';
import { CardService } from "../../../../shared/component/card-service/card-service";

@Component({
  selector: 'app-home-screen',
  imports: [CardService],
  templateUrl: './home-screen.html',
  styleUrl: './home-screen.scss'
})
export class HomeScreen {

}
