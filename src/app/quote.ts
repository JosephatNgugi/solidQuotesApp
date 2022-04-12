export class Quote {

  id: number;
  quote: string;
  upvote: number;
  downvote: number;
  author: string;
  uploader: string;

  constructor(
    id: number,
    quote: string,
    upvote: number,
    downvote: number,
    author: string,
    uploader: string,
  ) {
    (this.id = id),
      (this.quote = quote),
      (this.upvote = upvote),
      (this.downvote = downvote),
      (this.author = author),
      (this.uploader = uploader);
  }
}
