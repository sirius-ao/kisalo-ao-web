import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: "app-success-dialog",
    imports: [CommonModule],
    templateUrl: 'success-dialog.html',
    styleUrl: 'success-dialog.scss'
})

export class SuccessDialog {
    state: boolean = true;

    changeAlert() {
        this.state = !this.state;
    }
}