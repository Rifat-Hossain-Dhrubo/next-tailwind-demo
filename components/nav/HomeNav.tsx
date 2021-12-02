import React from 'react';
import { HiMenu, HiBell, HiChevronDown } from 'react-icons/hi';
import Image from 'next/image';
import VisuallyHidden from '../misc/VisuallyHidden';
import DesktopNav from './DesktopNav';
import user from '../../public/images/user.png';

type Props = {
  handleToggleMenu: () => void;
};

const HomeNav = ({ handleToggleMenu }: Props) => {
  return (
    <nav className="flex justify-between px-2 py-4 mt-2 bg-white 2xl:py-0">
      <button
        className="self-center px-2 btn-transparent 2xl:hidden"
        type="button"
        onClick={handleToggleMenu}
      >
        <VisuallyHidden>Home</VisuallyHidden>
        <HiMenu className="w-5 h-5 text-gray-700" />
      </button>
      <div className="relative self-center hidden w-20 h-6 2xl:block lg:w-30 lg:h-6">
        <VisuallyHidden>Home</VisuallyHidden>
        <Image src="/images/solus.png" alt="Solus Logo" layout="fill" />
      </div>
      <DesktopNav />
      <div className="flex items-center space-x-2">
        <button type="button">
          <VisuallyHidden>Notifications</VisuallyHidden>
          <HiBell className="w-5 h-5 text-gray-700" />
        </button>
        <button type="button" className="p-0 space-x-1 btn-transparent">
          <VisuallyHidden>User menu</VisuallyHidden>
          <div className="relative w-6 h-6 rounded-full">
            <Image src={user} alt="user picture" />
          </div>
          <span className="text-base">User</span>
          <HiChevronDown className="w-5 h-5 text-primary" />
        </button>
      </div>
    </nav>
  );
};

export default HomeNav;
