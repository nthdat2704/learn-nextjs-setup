export interface Work {
  id: string | number;
  title: string | number;
  tagList: string[];
  shortDescription: string;
  fullDescription: string;
  thumbnailUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface WorkFilterPayload {
  search: string;
  taglist_search: string;

  selectedTagList?: string[];
}
