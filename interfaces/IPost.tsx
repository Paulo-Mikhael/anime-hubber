import IPostImage from "./IPostImage";

export default interface IPost {
  id: number,
  title: string,
  content: string,
  author: string,
  tags: string[],
  type: "post" | "quick-post",
  comments: string[],
  postImage: IPostImage
}