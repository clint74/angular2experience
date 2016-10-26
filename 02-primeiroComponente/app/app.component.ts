import { Component } from '@angular/core';

import { MeuPrimeiroComponente } from './meu-primeiro-componente';
import { DataBindingComponent } from './data-binding.component';
@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Olá mundo!</p>
        
        <exemplo-data-binding></exemplo-data-binding>
    `,
    directives : [DataBindingComponent]
})
export class AppComponent { }
