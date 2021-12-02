import type { GetStaticProps, NextPage } from 'next';
import Table from '../../components/table';
import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import { CellProps, Column } from 'react-table';
import { HiMinus, HiPlus } from 'react-icons/hi';

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
const Campaign: NextPage<Props> = ({ data }) => {
  return (
    <div className="p-4 mx-auto">
      <div>
        <Table data={data} />
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

export default Campaign;
