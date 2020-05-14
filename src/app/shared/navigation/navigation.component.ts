import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  path: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        //console.log('event', event);
        this.handleHeaderColorChange(event.url);
      }
    })
  }
  handleHeaderColorChange(url) {
    this.path = url.split('/')[1];
    console.log('path', this.path);
  }

}
