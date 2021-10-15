import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { NavService } from "./nav.service";
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';

@NgModule({
  declarations: [
    SidenavComponent,
    MenuListItemComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule
    
 
  ],
  exports:[
    SidenavComponent,
    MenuListItemComponent
  ],
  providers:[NavService]
})
export class SidenavModule { }
