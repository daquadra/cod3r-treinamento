import { Product } from "@/core";
import Image from "next/image";
import Link from "next/link";

export interface ProductItemProps {
  product: Product;
}

export default function ProductItem(props: ProductItemProps): JSX.Element {
  const { product } = props;
  return (
    <Link href={`product/${product.uuid}`} className="flex flex-col bg-violet-dark border border-white/10 rounded-lg">
      <div className="w-full h-48 relative">
        <Image src={product.image} alt={product.name} fill className="object-contain" />
      </div>
      <div className="flex-1 flex flex-col gap-3 p-5 border-t border-white/10">
        <span className="text-lg font-semibold">{product.name}</span>
        <div className="self-start text-sm border-b border-dashed">
          {product.specifications.emphasis}
        </div>
      </div>
    </Link>
  );
}