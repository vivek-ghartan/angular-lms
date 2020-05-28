import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss']
})
export class IconCardComponent implements OnInit {

  @Input() title;
  @Input() description;
  @Input() imgUrl;
  @Input() variant = 'image';
  mainClass = 'home-learning-box text-center';
  // Supporting Two variants - icon, image;
  constructor() { }

  ngOnInit(): void {
    if (this.variant === 'icon') {
      this.mainClass = 'ha-box';
    }
  }

}
