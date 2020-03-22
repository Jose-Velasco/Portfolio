export class Project {
  constructor(
    public isFeatured: boolean,
    public hasVideo: boolean,
    public title: string,
    public abstract: string,
    public picture: string,
    public video: string,
    public techIcons: string[],
    public about: string,
    public demo: string,
    public code: string
  ) {}
}


