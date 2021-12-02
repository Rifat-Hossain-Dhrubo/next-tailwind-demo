import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import VisuallyHidden from '../misc/VisuallyHidden';

const Pagination = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-4 pt-24 bg-white shadow rounded-b-2xl gap-y-2">
      <div className="flex items-center justify-center ">
        <button
          className="px-1 py-2 m-1 rounded focus:outline-none focus:ring focus:ring-offset-1 focus:ring-sky-400"
          type="button"
        >
          <VisuallyHidden>Go Left</VisuallyHidden>
          <HiChevronLeft aria-hidden="true" className="w-5 h-5" />
        </button>
        <div className="space-x-3">
          <button
            className="inline-flex items-center justify-center px-3 py-2 text-sm text-black bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-400"
            type="button"
          >
            11
          </button>
          <button
            className="inline-flex items-center justify-center px-3 py-2 text-sm text-black bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-400"
            type="button"
          >
            12
          </button>
          <button
            className="inline-flex items-center justify-center px-3 py-2 text-sm text-white rounded-full bg-primary hover:bg-sky-500 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-500"
            type="button"
          >
            13
          </button>
          <button
            className="inline-flex items-center justify-center px-3 py-2 text-sm text-black bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-400"
            type="button"
          >
            14
          </button>
          <button
            className="inline-flex items-center justify-center px-3 py-2 text-sm text-black bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-400"
            type="button"
          >
            15
          </button>
        </div>
        <button
          className="px-1 py-2 m-1 rounded focus:outline-none focus:ring focus:ring-offset-1 focus:ring-sky-400"
          type="button"
        >
          <VisuallyHidden>Go Right</VisuallyHidden>
          <HiChevronRight aria-hidden="true" className="w-5 h-5" />
        </button>
      </div>
      <div>
        <button type="button" className="btn-primary">
          CLM Output Details &gt;&gt;
        </button>
      </div>
      <div className="w-full">
        <p className="mt-2 text-sm text-center text-gray-600">
          Step <span className="text-primary">13</span> to 20
        </p>
      </div>
    </div>
  );
};

export default Pagination;
