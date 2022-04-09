export class Quote {
  showAuthor: boolean;

  id: number;
  quote: string;
  upvote: number;
  downvote: number;
  author: string;

  constructor(
    id: number,
    quote: string,
    upvote: number,
    downvote: number,
    author: string
  ) {
    (this.id = id),
      (this.quote = quote),
      (this.upvote = upvote),
      (this.downvote = downvote),
      (this.author = author);

    this.showAuthor = false;
  }
}
