import IPostImage from "./IPostImage";

export default interface IPopularAnime {
  id: number,
  name: string,
  description: string,
  position: number,
  image: IPostImage
}