import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SecondNavBarComponent } from 'src/app/navigation/secondnavbar.component';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';

import { AppComponent } from './app.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SecondFooterComponent } from './navigation/footer/second.footer.component';
import { CardComponent } from './Store/cards.component';
import { AppRoutingModule } from './app-routing.module';
import { GuysTopsLayout } from './Store/guys-tops-layout';
import { HomeLayoutComponent } from './Store/home-layout.component';
import { GirlsTopsLayout } from './Store/girls-tops-layout.component';
import { GuysBottomsLayout } from './Store/guys-bottoms-layout.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondNavBarComponent,
    FooterComponent,
    SecondFooterComponent,
    CardComponent,
    GuysTopsLayout,
    HomeLayoutComponent,
    GirlsTopsLayout,
    GuysBottomsLayout,
    UserInfoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
