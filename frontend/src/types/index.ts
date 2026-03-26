export interface Teacher {
  name: string;
  qualification: string;
  experience: string;
  methodology: string[];
  image: string;
  bio: string;
}

export interface Subject {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
}

export interface ClassTiming {
  id: number;
  day: string;
  batches: {
    time: string;
    class: string;
    subject: string;
  }[];
}

export interface Fee {
  className: string;
  amount: number;
  duration: string;
  features: string[];
}

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  slug: string;
}