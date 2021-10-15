import {EventEmitter, Injectable} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {Event, NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class NavService {
  public appDrawer: any;
  public currentUrl = new BehaviorSubject<any>(undefined);

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }
  private sidenav!: MatSidenav;

	public setSidenav(sidenav: MatSidenav) {
		this.sidenav = sidenav;
	}
  public closeNav() {
    this.appDrawer.close();
  }

  public openNav() {
    this.appDrawer.open();
  }
  public toggle(): void {
    console.log(this.sidenav)
		this.sidenav.toggle();
	}
}
