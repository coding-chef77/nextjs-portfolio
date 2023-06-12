import Link from "next/link";

export default function Navbar() {
  return (
    <header className="text-white body-font border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl">HG</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/about" className="mr-5 hover:text-gray-900">
            Om Meg
          </Link>
          <Link href="/ai" className="mr-5 hover:text-gray-900">
            KI
          </Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900">
            <button className="bg-white text-slate-900 px-4 py-2 font-semibold text-sm rounded-lg shadow-md hover:bg-slate-900 hover:text-white group flex items-center gap-2 transition-colors duration-300 ease-in-out">
              <h1>Kontakt meg</h1>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 transform group-hover:rotate-180 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}