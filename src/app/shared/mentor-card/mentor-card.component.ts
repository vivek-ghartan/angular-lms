import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mentor-card',
  templateUrl: './mentor-card.component.html',
  styleUrls: ['./mentor-card.component.scss']
})
export class MentorCardComponent implements OnInit {
  @Input() avatar;
  @Input() isOdd;
  constructor() { }

  ngOnInit(): void {
  }

}
