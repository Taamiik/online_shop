import { debounce } from "throttle-debounce";
import { useCallback, useMemo, useState } from "react";
import InfiniteScroller from "react-infinite-scroller";

import ProductBlock from "../../../components/ProductBlock/ProductBlock";
import styles from "./Content.module.scss";

import Loader from "../../../components/Loader/Loader";
import { productsType } from "../../../features/HomePage/types";

interface ContentScrollProps {
  items: Array<productsType>
}

const ContentScroll: React.FC<ContentScrollProps> = (props): React.ReactElement => {
  const { items } = props
  const [scroll, setScroll] = useState(2);

  const hasMore = useMemo(() => scroll < items.length, [scroll, items]);

  const handleLoadMore = useCallback(() => {
    setScroll(scroll + 2);
  }, [scroll]);

  const handleLoadMoreDebounced = debounce(500, handleLoadMore);

  return (
    <InfiniteScroller
      loadMore={handleLoadMoreDebounced}
      hasMore={hasMore}
      initialLoad={false}
      threshold={1000}
      loader={<Loader />}
      className={styles.content}
    >
      {items.slice(0, scroll).map((elem) => (
        <ProductBlock src={elem.image} title={elem.title} price={elem.price} param={elem.param} />
      ))}
    </InfiniteScroller>
  );
};

export default ContentScroll;
