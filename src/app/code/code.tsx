import Menucode from "./menucode";
import Pagination from "./pagination";
import Filter from "./filter";

const code = () => {
  return (
    <div id="kelas" className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-32">
        {/* Title */}
        <div className="max-w-xl mb-12">
          <h1 className="text-4xl font-bold text-amber-600 sm:text-5xl">
            Course Code Kami
          </h1>
          <div className="ml-1 mt-3 h-1 w-32 rounded bg-amber-500" />
        </div>
        <Filter />
        <Menucode />
        <Pagination />
      </div>
    </div>
  );
};

export default code;
