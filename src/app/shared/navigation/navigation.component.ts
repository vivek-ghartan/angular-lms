import {Component, HostListener, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormControl } from '@angular/forms';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('fadeIn',
      [
        state('void', style({ opacity : 0})),
        transition(':enter', [ animate(300)]),
        transition(':leave', [ animate(500)]),
      ]
    )]
})
export class NavigationComponent implements OnInit {
  path: any;
  myControl = new FormControl();
  logoImg = 'assets/images/logo.svg';
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.handleHeaderColorChange(event.url);
      }
    });
  }
  handleHeaderColorChange(url) {
    this.path = url.split('/')[1];
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 350) {
      const element = document.getElementById('navbar');
      element.classList.add('sticky');
      this.logoImg = 'assets/images/logowhite.svg';

    } else {
      const element = document.getElementById('navbar');
      element.classList.remove('sticky');
      this.logoImg = 'assets/images/logo.svg';
    }
  }

}
