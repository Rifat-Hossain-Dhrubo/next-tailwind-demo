import React from 'react';
import Pin from '../../public/svg/pin.svg';
import Bulb from '../../public/svg/bulb.svg';
import Img from '../../public/svg/image.svg';
import Link from 'next/link';
const MainSideNav = () => {
  return (
    <div className="min-h-screen px-5 py-4 bg-white rounded-t-2xl">
      <section className="text-gray-800 ">
        <header className="flex items-center p-2 space-x-3">
          <span className="inline-flex items-center">
            <Pin aria-hidden="true" />
          </span>
          <h3 className="text-base font-medium">Pinned Reports</h3>
        </header>
        <div className="flex flex-col px-4">
          <Link href="#" passHref>
            <a className="px-4 py-2 hover:bg-sky-400 hover:bg-opacity-20">
              Segment Moves
            </a>
          </Link>
          <Link href="#" passHref>
            <a className="px-4 py-2 hover:bg-sky-400 hover:bg-opacity-20">
              Trigger List
            </a>
          </Link>
          <Link href="#" passHref>
            <a className="px-4 py-2 hover:bg-sky-400 hover:bg-opacity-20">
              Daily Performance
            </a>
          </Link>
          <Link href="#" passHref>
            <a className="px-4 py-2 hover:bg-sky-400 hover:bg-opacity-20">
              Link
            </a>
          </Link>
        </div>
      </section>
      <section className="text-gray-800 ">
        <header className="flex items-center p-2 space-x-3">
          <Img aria-hidden="true"> </Img>
          <h3 className="text-base font-medium">Performance</h3>
        </header>
        <div className="flex flex-col px-4">
          <Link href="#" passHref>
            <a className="px-4 py-2 hover:bg-sky-400 hover:bg-opacity-20">
              Outreaches
            </a>
          </Link>
          <Link href="#" passHref>
            <a className="px-4 py-2 hover:bg-sky-400 hover:bg-opacity-20">
              Campaign
            </a>
          </Link>
          <Link href="#" passHref>
            <a className="px-4 py-2 hover:bg-sky-400 hover:bg-opacity-20">
              Goals
            </a>
          </Link>
          <Link href="#" passHref>
            <a className="px-4 py-2 hover:bg-sky-400 hover:bg-opacity-20">
              Lift
            </a>
          </Link>
          <Link href="#" passHref>
            <a className="px-4 py-2 hover:bg-sky-400 hover:bg-opacity-20">
              Accuracy
            </a>
          </Link>
          <Link href="#" passHref>
            <a className="px-4 py-2 hover:bg-sky-400 hover:bg-opacity-20">
              Attribution
            </a>
          </Link>
        </div>
      </section>
      <section className="text-gray-800 ">
        <header className="flex items-center p-2 space-x-3">
          <Bulb aria-hidden="true"> </Bulb>
          <h3 className="text-base font-medium">Insights</h3>
        </header>
        <div className="flex flex-col px-4">
          <Link href="#" passHref>
            <a className="px-4 py-2 hover:bg-sky-400 hover:bg-opacity-20">
              Base
            </a>
          </Link>
          <Link href="#" passHref>
            <a className="px-4 py-2 hover:bg-sky-400 hover:bg-opacity-20">
              Customers
            </a>
          </Link>
          <Link href="#" passHref>
            <a className="px-4 py-2 hover:bg-sky-400 hover:bg-opacity-20">
              Segments
            </a>
          </Link>
          <Link href="#" passHref>
            <a className="px-4 py-2 hover:bg-sky-400 hover:bg-opacity-20">
              Product
            </a>
          </Link>
          <Link href="#" passHref>
            <a className="px-4 py-2 hover:bg-sky-400 hover:bg-opacity-20">
              Store
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MainSideNav;
