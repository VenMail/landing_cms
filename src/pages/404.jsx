import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-base font-semibold text-gray-500">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-10">
        <Link href="/" className="text-sm font-semibold text-white bg-black px-4 py-2 rounded-md hover:opacity-90">
          Go back home
        </Link>
      </div>
    </main>
  )
}
