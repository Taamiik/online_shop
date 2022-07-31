import React from "react";
import { useSelector } from "react-redux";

import { getAllProducts } from "./ducks/selectors";
import styles from "./HomePage.module.scss";

interface HomePageProps {
  children: React.ReactNode;
}
const HomePage: React.FC<HomePageProps> = ({
  children,
}): React.ReactElement => {
  const products = useSelector(getAllProducts);

  return <div className={styles.homepage}>{children}</div>;
};

export default HomePage;
