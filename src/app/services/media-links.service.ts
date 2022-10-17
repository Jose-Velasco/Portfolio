import { Injectable } from '@angular/core';
import { MediaLink } from '../shared/media-link.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MediaLinksService {
  private readonly _backendApiURL: string = environment.backendApiURL;
  private _httpHeaders = new HttpHeaders({"Content-Type": "application/json"});
  private _links: MediaLink = {
    linkedin: "https://www.linkedin.com/in/jose-l-velasco/",
    github: "https://github.com/Jose-Velasco",
    email: "jose.juarez.velasco@gmail.com",
    resume: "./assets/resume/JoseVelascoResume.pdf"
  };

  constructor(private http: HttpClient) {}

  get links(): MediaLink {
    return this._links;
  }

  setLinks(newLink: string, linkToChange: "linkedin" | "github" | "email" | "resume") {
    this._links[linkToChange] = `${this._backendApiURL}${newLink}`;
  }

  fetchResumeURL() {
    return this.http.get(`${this._backendApiURL}/resume`, {headers: this._httpHeaders});
  }
}
