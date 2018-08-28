import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// library.add(fas, far);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isNavbarCollapsed: any;
  showNavigationIndicators: any;

  menuToggle() {
    var el = document.getElementById("navbarSupportedContent");
    el.classList.toggle('show');
  }


  

  constructor() { }

  ngOnInit() {
    
  }

}
