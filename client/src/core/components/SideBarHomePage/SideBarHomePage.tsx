import { Link } from "react-router-dom";

import { linksProducts } from "./constans";
import styles from "./SideBarHomePage.module.scss";

interface SideBarHomePageProps {}

const SideBarHomePage: React.FC<
  SideBarHomePageProps
> = (): React.ReactElement => {
  return (
    <div className={styles.sidebarhomepage}>
      <ul className={styles.sidebarhomepage_lists}>
        {linksProducts.map((link) => (
          <Link className={styles.list} to={link.path}>
            {link.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBarHomePage;
