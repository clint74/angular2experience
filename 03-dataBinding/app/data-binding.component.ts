import { Component } from '@angular/core';

@Component({
  moduleId:module.id
  ,selector: 'exemplo-data-binding'
  // template: `
  // <section class="tt">
  //     <article>
  //         <h3>Ex de Interpolacao</h3>
  //         <p>String renderizada com interpolation {{ url }}</p>
  //         <p>Resultado de 1+1 {{ getValor() }}</p>
  //     </article>
  // </section>
  // `
  ,templateUrl:'data-binding.component.html'
  // styles: [
  //     `
  //      .highlight{
  //          background-color:yellow;
  //          font-weight:bold;
  //      }
  //     `
  // ]
  , styleUrls: ['data-binding.component.css']
})

export class DataBindingComponent {
  constructor() {  }
  url = 'www.teste.com';
  urlImg = "http://lorempixel.com/400/200";

  getValor(){
      return 2;
  }

  onClick(){
      console.log('botão clicado');
  }
  conteudoAtual : string='';
  conteudoSalvo : string='';
  onKeyUp(event:KeyboardEvent){
      console.log(event);
      this.conteudoAtual = event.target.value;

  }
  onSave(valor:string){
      this.conteudoSalvo = valor;
  }
  isMouseOver=false; //will toggle value on mouse over
  onMouseSpan(){
      this.isMouseOver=!this.isMouseOver;
  }

}
