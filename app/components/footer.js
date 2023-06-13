import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white body-font border-t border-amber-600">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">© 2021 HG —
          <Link href="/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@hgsite</Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href="/about" className="text-gray-400 hover:text-gray-900">
            Om Meg
          </Link>
          <Link href="/ai" className="ml-5 text-gray-400 hover:text-gray-900">
            KI
          </Link>
          <Link href="/contact" className="ml-5 text-gray-400 hover:text-gray-900">
            Kontakt meg
          </Link>
        </span>
      </div>
    </footer>
  );
}