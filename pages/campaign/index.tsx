import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { MultiSelect } from 'react-multi-select-component';
import Select, { components } from 'react-select';
import Table from '../../Component/Table';
import React from 'react';
import makeData from '../../Component/Table/makeData';

import campaignData from '../../Data/campaign.json';

const Campaign: NextPage = () => {
  const columns = React.useMemo(
    () => [
      {
        // Build our expander column
        id: 'expander', // Make sure it has an ID
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }: any) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? '👇' : '👉'}
          </span>
        ),
        Cell: ({ row }: any) =>
          // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
          // to build the toggle for expanding a row
          row.canExpand ? (
            <span
              {...row.getToggleRowExpandedProps({
                style: {
                  // We can even use the row.depth property
                  // and paddingLeft to indicate the depth
                  // of the row
                  paddingLeft: `${row.depth * 2}rem`,
                },
              })}
            >
              {row.isExpanded ? '👇' : '👉'}
            </span>
          ) : null,
      },
      {
        Header: 'Name',
        columns: [
          {
            Header: 'Campaign Theme',
            accessor: 'campaign_theme',
          },
          {
            Header: 'Campaigns',
            accessor: 'campaignes',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Triggers',
            accessor: 'triggers',
          },
          {
            Header: 'Outreachs/Triggers',
            accessor: 'outreach_triggers',
          },
          {
            Header: 'Outreachs',
            accessor: 'outreach',
          },
          {
            Header: '# Cust Reached',
            accessor: 'cust_reached',
          },
          {
            Header: '% Cust Coverage',
            accessor: 'cust_coverage',
          },
        ],
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(5, 5, 5), []);

  console.log(data);

  return (
    <div className="p-4 mx-auto">
      <div>
        <Table columns={columns} data={campaignData} />
      </div>
    </div>
  );
};

export default Campaign;
