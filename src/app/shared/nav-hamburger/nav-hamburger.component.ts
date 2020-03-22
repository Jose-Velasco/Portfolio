import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-hamburger',
  templateUrl: './nav-hamburger.component.html',
  styleUrls: ['./nav-hamburger.component.scss']
})
export class NavHamburgerComponent implements OnInit {
  @Output() onToggled = new EventEmitter<boolean>();
  isToggled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick():void {
    this.isToggled = !this.isToggled;
    this.onToggled.emit(this.isToggled);
  }

}
