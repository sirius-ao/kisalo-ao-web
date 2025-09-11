import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SuccessDialog } from "../../component/success-dialog/success-dialog";

@Component({
  selector: 'app-detalhes-solicitacao',
  imports: [RouterLink, SuccessDialog],
  templateUrl: './detalhes-solicitacao.html',
  styleUrl: './detalhes-solicitacao.scss'
})
export class DetalhesSolicitacao {

}
