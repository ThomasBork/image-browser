import { GiphyImageVariants } from "./giphy-image-variants";

export interface GiphyImage {
  id: string,
  url: string,
  title: string,
  images: GiphyImageVariants
}
