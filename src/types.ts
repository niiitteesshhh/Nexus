export interface Game {
  id: string;
  title: string;
  category: string;
  rating: number;
  image: string;
  price: string;
  description: string;
  developer: string;
  releaseDate: string;
}

export interface EsportPlayer {
  id: string;
  name: string;
  handle: string;
  game: string;
  achievement: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface Post {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  image?: string;
}
