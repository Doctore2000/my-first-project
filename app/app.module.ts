import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {DepComBoxsComponent } from './dep-com-boxs/dep-com-boxs.component';
import {LocationTreeComponent } from './location-tree/location-tree.component';
import {DivTreeComponent } from './location-tree/div-tree/div-tree.component';
import {VarDirective } from './location-tree/grid-tree/grid-tree.component';
import {GridTreeComponent } from './location-tree/grid-tree/grid-tree.component';

@NgModule({
  declarations: [
    DepComBoxsComponent,
    LocationTreeComponent,
    DivTreeComponent,
    GridTreeComponent,
    VarDirective
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [
    DepComBoxsComponent,
    LocationTreeComponent
  ]
})
export class AppModule { }
