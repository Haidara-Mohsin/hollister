import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SecondNavBarComponent } from 'src/app/navigation/secondnavbar.component';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';

import { AppComponent } from './app.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SecondFooterComponent } from './navigation/footer/second.footer.component';
import { CardComponent } from './Store/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondNavBarComponent,
    FooterComponent,
    SecondFooterComponent,
    CardComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
