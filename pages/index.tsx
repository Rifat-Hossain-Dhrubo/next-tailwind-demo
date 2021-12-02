import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { HiBell, HiCalendar, HiChevronDown, HiMenu } from 'react-icons/hi';
import { promises as fs } from 'fs';
import path from 'path';
import VisuallyHidden from '../components/misc/VisuallyHidden';
import Table from '../components/table';
import user from '../public/images/user.png';

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
  return (
    <div className="min-h-screen pt-2 bg-bg-base">
      <nav className="flex justify-between px-5 py-4 mt-2 bg-white">
        <button type="button">
          <VisuallyHidden>Home</VisuallyHidden>
          <HiMenu className="w-5 h-5 text-gray-700" />
        </button>
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
      <section className="flex justify-end px-4 py-2">
        <div className="inline-flex items-center text-xs font-medium text-gray-700 border-b border-gray-600">
          October 2021
          <HiCalendar className="w-5 h-5 ml-2 text-gray-700" />
        </div>
      </section>

      <section className="p-3 text-center bg-white">
        <h1 className="text-xs font-medium text-gray-700">
          Campaigns:Drill Down
        </h1>
      </section>
      <section className="flex flex-wrap">
        <div className="flex flex-col items-center justify-center flex-grow flex-shrink w-5/12 p-4 m-1 text-center text-gray-700 bg-white lg:flex-nowrap lg:w-1/6">
          <span className="text-xl">10&nbsp; </span>
          <span className="text-xs">Campaign Themes</span>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow flex-shrink w-5/12 p-4 m-1 text-center text-gray-700 bg-white lg:flex-nowrap lg:w-1/6">
          <span className="text-xl">32&nbsp; </span>{' '}
          <span className="text-xs"> Campaign</span>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow flex-shrink w-5/12 p-4 m-1 text-center text-gray-700 bg-white lg:flex-nowrap lg:w-1/6">
          <span className="text-xl">104&nbsp; </span>{' '}
          <span className="text-xs">Triggers</span>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow flex-shrink w-5/12 p-4 m-1 text-center text-gray-700 bg-white lg:flex-nowrap lg:w-1/6">
          <span className="text-xl">60%&nbsp; </span>{' '}
          <span className="text-xs">Personalized</span>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow flex-shrink w-5/12 p-4 m-1 text-center text-gray-700 bg-white lg:flex-nowrap lg:w-1/6">
          <span className="text-xl">104&nbsp; </span>{' '}
          <span className="text-xs">Triggers</span>
        </div>
      </section>
      <Table data={data} />
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
