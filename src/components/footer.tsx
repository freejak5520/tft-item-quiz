import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t border-border-300 bg-bg-200 p-8 text-center dark:border-border-700 dark:bg-bg-800">
      Made by <strong>Jake Lee</strong>{" "}
      <Link
        className="font-bold text-blue-500 underline"
        href="https://github.com/freejak5520"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </Link>
    </div>
  );
};

export default Footer;
