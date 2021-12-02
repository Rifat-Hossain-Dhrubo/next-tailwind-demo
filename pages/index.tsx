import type { GetStaticProps, NextPage } from 'next';
import { HiCalendar } from 'react-icons/hi';
import { promises as fs } from 'fs';
import path from 'path';
import Table from '../components/table';
import SideNav from '../components/nav/SideNav';
import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { DialogOverlay } from '@reach/dialog';
import MainSideNav from '../components/nav/MainSideNav';
import HomeNav from '../components/nav/HomeNav';
import Info from '../components/home/Info';
import CustomHead from '../components/common/CustomHead';
export interface BaseDataType {
  campaign_theme: string;
  campaigns: number;
  triggers: number;
  outreach_triggers: number;
  outreach: number;
  cust_coverage: number;
  cust_reached: number;
  subRows: Array<BaseDataType>;
}

export type DataType = Array<BaseDataType>;

type Props = {
  data: DataType;
};

const Home: NextPage<Props> = ({ data }) => {
  const [showMenu, setShowMenu] = useState(false);
  const AnimatedDialogOverlay = animated(DialogOverlay);
  const close = () => setShowMenu(false);
  const showMenuTransition = useTransition(showMenu, {
    from: { transform: 'translate3d(-100%,0,0)' },
    enter: { transform: 'translate3d(0%,0,0)' },
    leave: { transform: 'translate3d(-100%,0,0)' },
  });

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative">
      <CustomHead />
      {showMenuTransition(
        (transitionProps, item) =>
          item && (
            <AnimatedDialogOverlay
              className="fixed top-0 left-0 z-10 w-full min-h-screen bg-gray-400 bg-opacity-40"
              as="div"
              isOpen={showMenu}
              onDismiss={close}
            >
              <SideNav transitionProps={transitionProps} />
            </AnimatedDialogOverlay>
          )
      )}
      <div className="relative min-h-screen pt-2 pb-8 bg-gray-200 2xl:pt-0">
        <HomeNav handleToggleMenu={handleToggleMenu} />
        <section className="flex justify-end px-4 py-4">
          <div className="inline-flex items-center text-xs font-medium text-gray-700 border-b border-gray-600">
            October 2021
            <HiCalendar className="w-5 h-5 ml-2 text-gray-700" />
          </div>
        </section>
        <main className="2xl:grid-cols-12 2xl:grid gap-x-4">
          <div className="hidden col-span-2 2xl:block 2xl:-my-8">
            <MainSideNav />
          </div>
          <div className="col-span-10 2xl:pr-4">
            <Info />
            <Table data={data} />
          </div>
        </main>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const dataDirectory = path.join(process.cwd(), 'data');
  const fileName = 'campaign.json';
  const filePath = path.join(dataDirectory, fileName);
  const fileContents = await fs.readFile(filePath, 'utf8');
  const data: DataType = JSON.parse(fileContents);

  return {
    props: {
      data,
    },
  };
};

export default Home;
