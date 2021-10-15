import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavService } from '../shared/sidenav/nav.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit,AfterViewInit {

  @ViewChild('sidenav') public sidenav!: MatSidenav;
	constructor(private navService: NavService) {	
    
  }

	ngOnInit(): void {
  
	}
  ngAfterViewInit() {
    this.navService.setSidenav(this.sidenav);
    console.log()
  }

  
}
