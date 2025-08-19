import { exploreProducts } from "./data";
export interface categoryItemsProps {
  text: string;
  to: string;
}

export interface HamburgerIconProps {
  className?: string;
}

export interface LastestArrivalsProps {
  name: string;
  image: string;
  price: string;
  id: string;
}

export interface SalesProductProps {
  product: {
    id: string;
    name: string;
    price: number;
    prevPrice: number;
    image: string;
    rating: number;
  };
}

export interface BestSellingProductProps {
  product: {
    id: string;
    name: string;
    price: number;
    prevPrice: number;
    rating: number;
    image: string;
  };
}

export interface exploreProductsProps {
  product: {
    id: string;
    name: string;
    price: number;
    rating: number;
    image: string;
  };
}
