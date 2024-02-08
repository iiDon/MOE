import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div dir="rtl">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
