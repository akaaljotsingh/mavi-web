// import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  showNavigationIndicators:any;
  private wowSubscription: Subscription;

  constructor(config: NgbCarouselConfig, private router: Router, private wowService: NgwWowService) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.pauseOnHover = false;
    this.wowService.init(); 
  }

  ngOnInit() {
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item:HTMLElement) => {
        // do whatever you want with revealed element
      });
    
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("navbar1");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
  }

  ngOnDestroy() {
    // unsubscribe (if necessary) to WOW observable to prevent memory leaks
    this.wowSubscription.unsubscribe();
  }

}
