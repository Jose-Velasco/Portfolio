import { Injectable } from '@angular/core';
import { MediaLink } from '../shared/media-link.interface';

@Injectable({
  providedIn: 'root'
})
export class MediaLinks {
  private _links: MediaLink = {
    linkedin: "https://www.linkedin.com/in/jose-l-velasco/",
    github: "https://github.com/Jose-Velasco",
    email: "jose.juarez.velasco@gmail.com",
    resume: "path to resume"
  };

  get links(): MediaLink {
    return this._links;
  }
}
