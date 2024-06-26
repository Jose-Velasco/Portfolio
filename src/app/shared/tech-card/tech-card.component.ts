import { Component, OnInit, Input } from '@angular/core';
import { TechIcon } from '../tech-icon.enum';

@Component({
  selector: 'app-tech-card',
  templateUrl: './tech-card.component.html',
  styleUrls: ['./tech-card.component.scss']
})
export class TechCardComponent implements OnInit {
  @Input() iconName: TechIcon;

  constructor() { }

  ngOnInit(): void {
  }

}
