import { Component, OnInit } from '@angular/core';
import { NavService } from '../sidenav/nav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public adminname='Alex'
  public userImg="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
 constructor(public navService: NavService){}
 toggleActive:boolean = false;
  ngOnInit(): void {
  
  }
  openclose(){
    this.toggleActive = !this.toggleActive;
   // this.navService.closeNav()
    this.navService.toggle();

  }

}
