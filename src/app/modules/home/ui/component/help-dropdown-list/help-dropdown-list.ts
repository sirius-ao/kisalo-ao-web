import { Component, Input } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-help-dropdown-list',
  imports: [FormsModule],
  templateUrl: './help-dropdown-list.html',
  styleUrl: './help-dropdown-list.scss'
})
export class HelpDropdownList {
  @Input() title: string = ''
  @Input() subtitle:string = ''
  protected state: boolean = false;

  changeState() {
    this.state = !this.state;
  }

}
