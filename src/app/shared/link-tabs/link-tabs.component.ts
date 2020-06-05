import { Component, OnInit } from '@angular/core';
import { MediaLinks } from 'src/app/services/media-links.service';
import { MediaLink } from '../media-link.interface';

@Component({
  selector: 'app-link-tabs',
  templateUrl: './link-tabs.component.html',
  styleUrls: ['./link-tabs.component.scss']
})
export class LinkTabsComponent implements OnInit {
  mediaLinks: MediaLink;

  constructor(private mediaLinksServ: MediaLinks) { }

  ngOnInit(): void {
    this.mediaLinks = this.mediaLinksServ.links;
  }

}
