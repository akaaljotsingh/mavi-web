// import { Component, OnInit } from '@angular/core';
// import { NgwWowService } from 'ngx-wow';
// import { Subscription } from 'rxjs';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isNavbarCollapsed: any;
  showNavigationIndicators: any;
  private wowSubscription: Subscription;

  menuToggle() {
    var el = document.getElementById("navbarSupportedContent");
    el.classList.toggle('show');
  }


  

  constructor(private router: Router, private wowService: NgwWowService) { 
      this.wowService.init(); 
   }

  ngOnInit() {
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item:HTMLElement) => {
        // do whatever you want with revealed element
      });
  }
  ngOnDestroy() {
    // unsubscribe (if necessary) to WOW observable to prevent memory leaks
    this.wowSubscription.unsubscribe();
  }

}
