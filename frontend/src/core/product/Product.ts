import Prices from "./Prices";
import Specifications from "./Specifications";

export default interface Product extends Prices {
  id: number;
  uuid: string;
  name: string;
  description: string;
  image: string;
  brand: string;
  rating: number;
  videoReview: string;
  tags: string[];
  specifications: Specifications;
}