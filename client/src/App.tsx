import React, { useEffect } from "react";

// import { Helmet } from "react-helmet-async";
import styles from "./styles/App.module.scss";
import Header from "./core/components/Header/Header";
import MainLayout from "./core/layouts/MainLayout";
import renderRoutes from "./routing/renderRoutes";
import { routing } from "./routing";
import { useDispatch } from "react-redux";
import { actions as actionsHome } from "./features/HomePage/ducks";

const App: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionsHome.getAll());
  }, []);

  return (
    <div className={styles.root}>
      <Header />
      <MainLayout>{renderRoutes(routing)}</MainLayout>
    </div>
  );
};

export default React.memo(App);
