import Link from "next/link";

const GITHUB_URL = "https://github.com/nanaism";
const HANDLE_NAME = "oga_aiichiro";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      <div className="bg-stone-50 py-16 space-y-8 min-h-screen">
        {/* header */}
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
          <div className="container max-w-6xl mx-auto py-4 flex">
            <Link className="text-xl font-bold text-stone-800" href="/">
              ✨ Portfolio Showcase
            </Link>
          </div>
        </header>

        {/* Page Content */}
        {props.children}

        {/* Footer */}
        <footer className="text-center">
          <p className="text-gray-700">
            Created by{" "}
            <Link className="text-emerald-600" href={GITHUB_URL}>
              @{HANDLE_NAME}
            </Link>{" "}
            &copy; 2024
          </p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
