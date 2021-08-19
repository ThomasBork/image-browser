export class Image {
  public id: string;
  public url: string;
  public title: string;

  public constructor(
    id: string,
    url: string,
    title: string
  ) {
    this.id = id;
    this.url = url;
    this.title = title;
  }
}