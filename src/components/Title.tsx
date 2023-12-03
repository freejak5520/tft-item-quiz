type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => {
  return (
    <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
      {children}
    </h1>
  );
};

export default Title;
