import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Hola Counter</h1>
  <h3>Counter: {{counter}}</h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="decreaseBy(1)">-1</button>
  `
})

export class CounterComponent {
  public title:string = 'Mi app de Angular';

  public initialValue: number = 10
  public counter:number = this.initialValue;

  public increaseBy( value: number ):void {
    this.counter+=value;
  }

  public decreaseBy( value: number ):void {
    this.counter-=value;
  }

  resetCounter(): void {
    this.counter = this.initialValue;
  }


}
