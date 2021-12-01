import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import VisuallyHidden from '../components/misc/VisuallyHidden';
import { useRouter } from 'next/router';
import SelectBox from '../components/SelectBox';
const Form: NextPage = () => {
  const router = useRouter();
  const { active } = router.query;

  return (
    <div className="min-h-screen bg-bg-base">
      <header className="flex justify-between px-4 py-5">
        <div className="relative w-20 h-6">
          <VisuallyHidden>Home</VisuallyHidden>
          <Image src="/images/solus.png" alt="Solus Logo" layout="fill" />
        </div>
        <button type="button" className="text-xs text-gray-400">
          Logout
        </button>
      </header>
      <main className="h-full px-4 py-4 bg-white shadow rounded-2xl">
        <div>
          <h2 className="text-xl font-medium text-gray-700">Event</h2>
        </div>
        <section>
          <div className="flex space-x-6 border-b border-gray-300">
            <Link href="/?active=creative" passHref>
              <a
                className={`block py-2 text-sm  ${
                  active === 'creative'
                    ? 'text-primary border-b border-primary'
                    : 'text-gray-500'
                }`}
              >
                Creative
              </a>
            </Link>
            <Link href="/?active=microSite" passHref>
              <a
                className={`block py-2 text-sm text-gray-500 ${
                  active === 'microsite'
                    ? 'text-primary border-b border-primary'
                    : 'text-gray-500'
                }`}
              >
                Microsite
              </a>
            </Link>
          </div>
          <SelectBox />
          <div className="mt-3 mb-5">
            <button className="btn-secondary">Validate</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Form;
