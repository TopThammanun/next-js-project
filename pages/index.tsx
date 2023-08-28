import Link from "next/link";

export default function Home() {
  return (
    <Link
      href="/testPage"
      className="flex content-center gap-2 px-4 py-2 font-semibold text-white transition-colors duration-200 rounded-lg bg-primary-600 hover:bg-primary-700"
    >
      View Demo
    </Link>
  )
}
