import Link from "next/link";
import "../globals.css";

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
          <div className="container max-w-6xl mx-auto py-4 flex items-center">
            <Link
              className="flex items-center gap-2 text-2xl font-sans font-bold text-stone-800"
              href="/"
            >
              {/* アイコン（例: HeroiconsのSparklesアイコン） */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M19 21v-4m2 2h-4M12 8v8m4-4H8"
                />
              </svg>
              大賀万博
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
            &copy; 2025
          </p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
