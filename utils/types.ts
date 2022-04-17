export interface Tree {
  name: string;
  scientificName: string;
  zone: number;
  waterUse: string;
  spread: string;
  slug: string;
  image: {
    url: string;
  };
  height: string;
  growthRate: string;
  foliageColor: string;
  exposure: string;
}

export interface Category {
  name: string;
  href: string;
  image: {
    url: string;
  };
}
