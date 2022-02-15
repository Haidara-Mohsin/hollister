import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GuysTopsLayout } from './Store/guys-tops-layout';
import { HomeLayoutComponent } from './Store/home-layout.component';
import { GirlsTopsLayout } from './Store/girls-tops-layout.component';
import { GuysBottomsLayout } from './Store/guys-bottoms-layout.component';

const routes: Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'guys-tops', component: GuysTopsLayout},
  {path: 'guys-bottoms', component: GuysBottomsLayout},

  {path: 'home', component: HomeLayoutComponent},
  {path: 'girls-tops', component: GirlsTopsLayout}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
