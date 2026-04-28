import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="fixed inset-0 z-[999] flex items-center justify-center bg-black px-4">
      <div className="text-center max-w-xl text-white">
        <h1 className="text-7xl md:text-9xl font-extrabold mb-4">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          This page went missing 🕵️‍♂️
        </h2>

        <p className="text-gray-400 mb-8">
          Either the URL is wrong or the page rage-quit.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-white text-black font-medium
                       transition-all hover:scale-105 hover:shadow-lg"
          >
            Go Home 🏠
          </Link>

          <button
            className="px-6 py-3 rounded-xl border border-gray-600
                       transition-all hover:bg-white hover:text-black"
          >
            Works on my machine™
          </button>
        </div>

        {/* <p className="mt-10 text-sm text-gray-500 italic">
          Tip: This route was not found in the routing table of destiny.
        </p> */}
        <p className="mt-10 text-sm text-muted-foreground italic">
  Tip: Maybe the component didn’t render… or React is just testing your patience.
</p>
      </div>
    </section>
  );
};