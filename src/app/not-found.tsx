import Link from "next/link";

export default function NotFound() {
  return <div className="ob-flow">
    <h1>Page not found</h1>
    <p>If you typed the web address, check it is correct.</p>
    <p>
      If the web address is correct, you can <Link href="/">return to the homepage</Link>.
    </p>
  </div>
}
