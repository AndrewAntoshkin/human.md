import type { Product } from "@/lib/types";
import { getStatementText } from "@/lib/product-utils";

type ObjectLabelProps = {
  product: Product;
  collectionVersion?: string;
  collectionName?: string;
  className?: string;
};

export function ObjectLabel({
  product,
  collectionVersion = "1.0.0",
  collectionName = "Human",
  className = "",
}: ObjectLabelProps) {
  const statement = getStatementText(product.backText);

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <p className="text-sm tracking-tight">
        <span className="text-black/50">Object </span>
        <span>{product.id}</span>
      </p>
      <p className="text-sm tracking-tight">&ldquo;{statement}&rdquo;</p>
      <p className="text-xs text-black/40">
        Collection v{collectionVersion} {collectionName}
      </p>
    </div>
  );
}
