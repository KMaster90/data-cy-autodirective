import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataCyDirective } from './data-cy.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DataCyDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
