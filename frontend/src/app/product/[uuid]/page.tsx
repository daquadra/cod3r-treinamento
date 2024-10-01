import { products } from "@/core";

export default function PageProduct(props: any): JSX.Element {
  const { uuid } = props.params;
  const product = products.find((product) => product.uuid === uuid);

  return (
    <div>
      <h1>Product: {product?.name}</h1>
    </div>
  );
}