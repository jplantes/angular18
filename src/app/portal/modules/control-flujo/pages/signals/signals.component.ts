import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  templateUrl: './signals.component.html',
})
export default class SignalsComponent {


  // public nombre = 'Juan Pablo';
  public nombre = signal('Juan Pablo');


  public changeName() {
    // this.nombre = 'Matilda';
    // this.nombre.set('Maitena');

    this.nombre.update( value => {
      if(value === 'Juan Pablo'){
        return value = 'perro'
      }

      return value
    })

  }
}
