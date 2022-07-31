import cn from "clsx";
import { ParamsType } from "src/features/HomePage/types";

import styles from "./ProductBlock.module.scss";

interface ProductBlockProps {
  src: string;
  title: string;
  price: string;
  param: Array<ParamsType>;
}
const ProductBlock: React.FC<ProductBlockProps> = (
  props
): React.ReactElement => {
  const { src, title, price, param } = props;

  return (
    <div className={styles.productBlock}>
      <div className={styles.productBlock_container}>
        <div className={cn(styles.child, styles.image)}>
          <img src={src} />
        </div>

        <div className={cn(styles.child, styles.title)}>
          <p className={styles.head}>
            <b>{title}</b>
          </p>
          <div className={styles.line} />
          {param.map((elem: ParamsType) => (
            <div className={styles.parameters}>
              <p>
                <b>{elem.name}</b> - {elem.value}
              </p>
            </div>
          ))}
        </div>

        <div className={cn(styles.child, styles.price)}>
          <p className={styles.priceText}>{price} ₽.</p>
          <p className={styles.basket}>В корзину</p>
        </div>
      </div>
    </div>
  );
};

export default ProductBlock;
