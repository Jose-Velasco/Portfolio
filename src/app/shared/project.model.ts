export class Project {
  constructor(
    public isFeatured: boolean,
    public hasVideo: boolean,
    public uniqueTitle: string,
    public abstract: string,
    public picture: string,
    public thumbnailPicture: string,
    public videoId: string,
    public techIcons: string[],
    public about: string,
    public demo: string,
    public code: string
  ) {}
}


