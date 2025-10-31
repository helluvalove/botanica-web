export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  data: MenuItem[];
}

export interface Table {
  id: string;
  number: number;
  isAvailable: boolean;
  position: { x: number; y: number };
}