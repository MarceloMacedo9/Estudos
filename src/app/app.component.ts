import { Component } from '@angular/core';
import { cl_operacao } from './operacao.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  operacao: any;

  CriarOperacao(){
    let operacao = new cl_operacao();
  }
}
