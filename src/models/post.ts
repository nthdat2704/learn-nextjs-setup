export interface Author {
  name: string;
  title: string;
  profileUrl: string;
  avatarUrl: string;
}

export interface Post {
  id: number | string;
  title: string;
  slug: string;
  author?: Author;
  tagList: string[];
  publishedDate: string;
  description: string;
  mdContent?: string;
  htmlContent?: string;
  thumbnailUrl?: string;
}
