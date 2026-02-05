export interface Product {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  features: string[];
  isRegulated?: boolean;
  category: 'industrial' | 'tertiary';
}

export interface NavLink {
  label: string;
  path: string;
}

export interface Stat {
  label: string;
  value: string;
}