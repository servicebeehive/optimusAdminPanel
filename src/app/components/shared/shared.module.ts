import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class SharedModule { }
