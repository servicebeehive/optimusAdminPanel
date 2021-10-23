import { AfterViewInit, Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {NavItem} from './menuitem.modal';
import { NavService } from './nav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {
  @ViewChild('appDrawer') appDrawer!: ElementRef;
 
  navItems: NavItem[] = [
    {
      displayName: 'Dashboard',
      iconName: 'assessment',
      route: 'admin/dashboard',
     },
    {
      displayName: 'Plan Creation',
      iconName: 'edit',
      route: 'admin/plancreation',
      // children: [
      //   {
      //     displayName: 'Testimonials',
      //     iconName: 'format_align_center',
      //     route: 'edit-content',
       
      //   },
      //   {
      //     displayName: 'Partners',
      //     iconName: 'people',
      //     route: 'edit-content/partners',
        
      //   },
      //   {
      //     displayName: 'Ambassadors',
      //     iconName: 'person_add',
      //     route: 'edit-content/ambassador'
      //   },
      //   {
      //     displayName: 'Blog',
      //     iconName: 'content_copy',
      //     route: 'edit-content/blog'
      //   },
      //   {
      //     displayName: 'Tutorials',
      //     iconName: 'play_circle_filled',
      //     route: 'edit-content/tutorials'
      //   },
      //   {
      //     displayName: 'FAQs',
      //     iconName: 'list',
      //     route: 'edit-content/faqs'
      //   },

      // ]
    },
    {
      displayName: 'General  Setting',
      iconName: 'insights',
      route: 'admin/general-setting'
     },
    {
      displayName: 'Withdraw Approval',
      iconName: 'person_add_alt',
      route: 'admin/withdraw-approval'
    },
 
    {
      displayName: 'Logout',
      iconName: 'logout',
      route: 'disney/feedback'
    }
   
  ];

  constructor(private navService: NavService) {
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
