import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <div className="flex justify-center py-8">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg"
        >
          Load More
        </button>
      </div>
    </div>
  );
}
