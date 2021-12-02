import React from 'react';
import Link from 'next/link';
const DesktopNav = () => {
  return (
    <div className="hidden 2xl:flex">
      <Link href="#" passHref>
        <a className="flex items-center justify-center p-4 m-2 text-gray-500 transition-all bg-white transform-gpu hover:text-primary">
          Home
        </a>
      </Link>
      <Link href="/dashboard" passHref>
        <a className="flex items-center justify-center p-4 m-2 text-gray-500 transition-all bg-white transform-gpu hover:text-primary">
          Dashboard
        </a>
      </Link>
      <Link href="#" passHref>
        <a className="flex items-center justify-center p-4 m-2 text-gray-500 transition-all bg-white transform-gpu hover:text-primary">
          Configuration
        </a>
      </Link>
      <Link href="#" passHref>
        <a className="flex items-center justify-center p-4 m-2 text-gray-500 transition-all bg-white transform-gpu hover:text-primary">
          Mdm
        </a>
      </Link>
      <Link href="#" passHref>
        <a className="flex items-center justify-center p-4 m-2 text-gray-500 transition-all bg-white transform-gpu hover:text-primary">
          BluePrint
        </a>
      </Link>
      <Link href="#" passHref>
        <a className="flex items-center justify-center p-4 m-2 text-gray-500 transition-all bg-white transform-gpu hover:text-primary">
          Compose
        </a>
      </Link>
      <Link href="#" passHref>
        <a className="flex items-center justify-center p-4 m-2 text-gray-500 transition-all bg-white transform-gpu hover:text-primary">
          Support
        </a>
      </Link>
    </div>
  );
};

export default DesktopNav;
