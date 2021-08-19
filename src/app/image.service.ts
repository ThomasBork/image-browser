import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GiphyImageDataSet } from './giphy-image-data-set';
import { GiphyImage } from './giphy-image';
import { Image } from './image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiKey: string = '1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq';

  public constructor(private http: HttpClient) { }

  public getImages(query: string, rating: string, maxImageCount: number, offset: number): Observable<GiphyImageDataSet> {
    const url = `https://api.giphy.com/v1/stickers/search?q=${query}&limit=${maxImageCount}&rating=${rating}&api_key=${this.apiKey}&offset=${offset}`;
    return this.http.get<GiphyImageDataSet>(url);
  }

  public mapImage(giphyImage: GiphyImage): Image {
    return new Image(giphyImage.id, giphyImage.images.original.url, giphyImage.title);
  }
}
