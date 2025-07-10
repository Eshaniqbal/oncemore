export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: 'Tops' | 'Bottoms' | 'Outerwear' | 'Accessories';
  gender: 'Men' | 'Women' | 'Unisex';
  season: 'Spring/Summer' | 'Autumn/Winter';
  sizes: string[];
  condition: string;
  origin: string;
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
  slug: string;
};
