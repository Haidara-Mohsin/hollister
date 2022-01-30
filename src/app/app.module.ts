import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SecondNavBarComponent } from 'src/navigation/secondnavbar.component';
import { TopNavBarComponent } from 'src/navigation/topnavbar.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
