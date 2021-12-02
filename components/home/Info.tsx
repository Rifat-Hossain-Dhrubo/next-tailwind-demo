import React from 'react';

const Info = () => {
  return (
    <>
      <section className="p-3 text-center bg-white">
        <h1 className="text-xs font-medium text-gray-700 lg:text-lg xl:text-xl 2xl:text-2xl">
          Campaigns: Drill Down
        </h1>
      </section>
      <section className="flex flex-wrap">
        <div className="flex flex-col items-center justify-center flex-grow flex-shrink w-5/12 p-4 m-1 text-center text-gray-700 bg-white lg:flex-nowrap lg:w-1/12 ">
          <span className="text-xl">10&nbsp; </span>
          <span className="text-xs lg:text-sm">Campaign Themes</span>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow flex-shrink w-5/12 p-4 m-1 text-center text-gray-700 bg-white lg:flex-nowrap lg:w-1/12 ">
          <span className="text-xl">32&nbsp; </span>{' '}
          <span className="text-xs lg:text-sm"> Campaign</span>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow flex-shrink w-5/12 p-4 m-1 text-center text-gray-700 bg-white lg:flex-nowrap lg:w-1/12 ">
          <span className="text-xl">104&nbsp; </span>{' '}
          <span className="text-xs lg:text-sm">Triggers</span>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow flex-shrink w-5/12 p-4 m-1 text-center text-gray-700 bg-white lg:flex-nowrap lg:w-1/12 ">
          <span className="text-xl">60%&nbsp; </span>{' '}
          <span className="text-xs lg:text-sm">Personalized</span>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow flex-shrink w-5/12 p-4 m-1 text-center text-gray-700 bg-white lg:flex-nowrap lg:w-1/12">
          <span className="text-xl">104&nbsp; </span>{' '}
          <span className="text-xs lg:text-sm">Triggers</span>
        </div>
      </section>
    </>
  );
};

export default Info;
