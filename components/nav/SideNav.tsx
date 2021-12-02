import Link from 'next/link';
import React, { Dispatch, SetStateAction, useRef } from 'react';
import Home from '../../public/svg/home.svg';
import Dashboard from '../../public/svg/dashboard.svg';
import Configuration from '../../public/svg/configuration.svg';
import Mdm from '../../public/svg/mdm.svg';
import Compose from '../../public/svg/compose.svg';
import Support from '../../public/svg/support.svg';
import BluePrint from '../../public/svg/blueprint.svg';
import MainSideNav from './MainSideNav';
import { animated } from 'react-spring';
import { DialogContent } from '@reach/dialog';
type Props = {
  transitionProps: any;
};
const SideNav = ({ transitionProps }: Props) => {
  const AnimatedDialogContent = animated(DialogContent);
  return (
    <AnimatedDialogContent
      aria-label="Navigate through menu"
      as="div"
      className="fixed top-0 left-0 z-10 flex min-h-screen space-x-3 bg-bg-base"
      style={transitionProps}
    >
      <div className="flex flex-col">
        <Link href="#" passHref>
          <a className="flex items-center justify-center p-5 m-2 text-white transition-all rounded-xl bg-primary hover:scale-110 transform-gpu hover:text-primary">
            <Home className="w-5 h-5 text-2xl" />
          </a>
        </Link>
        <Link href="/dashboard" passHref>
          <a className="flex items-center justify-center p-5 m-2 text-gray-700 transition-all bg-white rounded-full hover:scale-110 transform-gpu hover:text-primary">
            <Dashboard className="w-4 h-4 text-2xl" />
          </a>
        </Link>
        <Link href="#" passHref>
          <a className="flex items-center justify-center p-4 m-2 text-gray-700 transition-all bg-white rounded-full hover:scale-110 transform-gpu hover:text-primary">
            <Configuration className="w-6 h-6 text-2xl" />
          </a>
        </Link>
        <Link href="#" passHref>
          <a className="flex items-center justify-center p-4 m-2 text-gray-700 transition-all bg-white rounded-full hover:scale-110 transform-gpu hover:text-primary">
            <Mdm className="w-6 h-6 text-2xl" />
          </a>
        </Link>
        <Link href="#" passHref>
          <a className="flex items-center justify-center p-4 m-2 text-gray-700 transition-all bg-white rounded-full hover:scale-110 transform-gpu hover:text-primary">
            <Compose className="w-6 h-6 text-2xl" />
          </a>
        </Link>
        <Link href="#" passHref>
          <a className="flex items-center justify-center p-4 m-2 text-gray-700 transition-all bg-white rounded-full hover:scale-110 transform-gpu hover:text-primary">
            <Support className="w-6 h-6 text-2xl" />
          </a>
        </Link>
        <Link href="#" passHref>
          <a className="flex items-center justify-center p-4 m-2 text-gray-700 transition-all bg-white rounded-full hover:scale-110 transform-gpu hover:text-primary">
            <BluePrint className="w-6 h-6 text-2xl" />
          </a>
        </Link>
      </div>
      <MainSideNav />
    </AnimatedDialogContent>
  );
};

export default SideNav;
