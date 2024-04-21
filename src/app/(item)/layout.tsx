const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col">
      <div className="p-16">{children}</div>
    </div>
  );
};

export default Layout;
