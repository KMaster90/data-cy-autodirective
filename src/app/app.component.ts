import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <label>Credit Card Number
        <input 
          name="credit-card" 
          type="text"
          placeholder="Enter your 16-digit card number"
          >
      </label>
      <label>
          Enter your security code
          <span>
          (?)
          </span>
          <input type="text">
      </label>
    </div>

    <div>
      <ul>
        @for(item of items;track $index){
          <li [id]="$index">
            {{ $index }} Member: {{ item.name | json }}
          </li>
        }
        @for(item of items;track $index){
          <li class="mario">
            {{ $index }} Member: {{ item.name | json }}
          </li>
        }
      </ul>
    </div>
  `,
})
export class AppComponent {
  items = [
    {
      name: 'Mark Hoppus',
      age: 44,
      location: 'California',
    },
    {
      name: 'Tom Delonge',
      age: 41,
      location: 'California',
    },
    {
      name: 'Travis Barker',
      age: 41,
      location: 'California',
    },
  ];
  constructor() {
    setTimeout(() => {
      this.items = [
        ...this.items,
        { name: 'Matt Skiba', age: 40, location: 'California' },
      ];
    }, 2000);
  }
}
