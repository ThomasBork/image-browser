import { GiphyImage } from "./giphy-image";
import { GiphyImagePagination } from "./giphy-image-pagination";

export interface GiphyImageDataSet {
  data: GiphyImage[],
  pagination: GiphyImagePagination
}
