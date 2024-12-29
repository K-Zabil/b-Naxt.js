import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 p-6">
      <h1 className="text-5xl font-bold text-white text-center">
        Welcome to the Bank!
      </h1>
      <p className="mt-6 text-xl text-gray-200 text-center max-w-md">
        Explore our product. We offer a wide range of financial services tailored to your needs.
      </p>
      <Link
        href="/dashboard/overview"
        className="mt-8 px-6 py-3 text-lg font-semibold text-white bg-blue-700 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Try the App
      </Link>
    </main>
  );
};