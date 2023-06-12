import Link from "next/link";


export default function Navbar() {
  return (
    <nav>
        <h1>HG</h1>
        <Link href="/about">About</Link>
        <Link href="/ai">AI</Link>
    </nav>
  )
}
