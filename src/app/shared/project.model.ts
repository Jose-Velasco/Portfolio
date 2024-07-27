import { Album } from "./image.interface";
import { TechIcon } from "./tech-icon.interface";

export class Project {
  constructor(
    private _id,
    public title: string,
    public abstract: string,
    public details: string,
    public demoURL: string,
    public codeURL: string,
    public videoURL: string,
    public album: Album,
    // public picture: string,
    // public thumbnailPicture: string,
    public tech_skills: TechIcon[],
    public isFeatured: boolean,
    public hasVideo: boolean,
  ) {}

  get id() { return this._id; }
}

