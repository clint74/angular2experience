import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'exemplo-data-binding',
  // template: `
  // <section class="tt">
  //     <article>
  //         <h3>Ex de Interpolacao</h3>
  //         <p>String renderizada com interpolation {{ url }}</p>
  //         <p>Resultado de 1+1 {{ getValor() }}</p>
  //     </article>
  // </section>
  // `
  templateUrl:'data-binding.component.html'
})

export class DataBindingComponent {
  constructor() {  }
  url = 'www.teste.com';

  getValor(){
      return 2;
  }

}
