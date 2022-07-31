interface MainLayoutProps {
  children: React.ReactElement;
}
const MainLayout: React.FC<MainLayoutProps> = (props): React.ReactElement => {
  const { children } = props;
  return <div>{children}</div>;
};

export default MainLayout;
