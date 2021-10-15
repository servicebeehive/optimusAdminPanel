import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosteddatatableComponent } from './posteddatatable/posteddatatable.component';

import { HeadingComponent } from './heading/heading.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    PosteddatatableComponent, HeadingComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
  ],
  exports:[ PosteddatatableComponent,  HeadingComponent,]
})
export class CommoncomponentsModule { }
