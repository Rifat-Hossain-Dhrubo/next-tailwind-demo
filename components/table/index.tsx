/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { HiChevronDown, HiChevronUp, HiMinus, HiPlus } from 'react-icons/hi';
import {
  useTable,
  useExpanded,
  HeaderGroup,
  Row,
  useSortBy,
  Column,
  CellProps,
} from 'react-table';
import { DataType, BaseDataType } from '../../pages';

type Props = {
  data: DataType;
};

function Table({ data }: Props) {
  const columns: Column<BaseDataType>[] = React.useMemo(
    () => [
      {
        // Build our expander column
        id: 'expander', // Make sure it has an ID
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }: any) => (
          <span {...getToggleAllRowsExpandedProps()} />
        ),
        Cell: ({
          row,
        }: {
          row: React.PropsWithChildren<CellProps<BaseDataType, string>>;
        }) =>
          // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
          // to build the toggle for expanding a row
          row.canExpand ? (
            <button
              type="button"
              className="w-5 h-5 text-primary"
              {...row.getToggleRowExpandedProps()}
            >
              {row.isExpanded ? (
                <HiMinus className="w-5 h-5 text-primary" />
              ) : (
                <HiPlus className="w-5 h-5 text-primary" />
              )}
            </button>
          ) : null,
      },
      {
        Header: 'Campaign Theme',
        accessor: 'campaign_theme',
      },
      {
        Header: 'Campaigns',
        accessor: 'campaigns',
      },
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
    []
  );

  const memoizedData = React.useMemo(() => data, [data]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { expanded },
  } = useTable(
    {
      columns: columns,
      data: memoizedData,
    },

    useSortBy,
    useExpanded // Use the useExpanded plugin hook
  );

  return (
    <div className="min-h-[500px] overflow-x-auto lg:mx-auto lg:max-w-7xl lg:mt-6">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <table
              className="min-w-full divide-y divide-gray-200"
              {...getTableProps()}
            >
              <thead className="bg-primary">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        scope="col"
                        className="relative px-6 py-3 text-xs font-bold tracking-wider text-left text-white uppercase border"
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        <div className="flex items-center">
                          {column.render('Header')}
                          <div className="w-5 h-5">
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <HiChevronDown className="w-5 h-5" />
                              ) : (
                                <HiChevronUp className="w-5 h-5" />
                              )
                            ) : (
                              ''
                            )}
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody
                className="font-medium text-gray-700 bg-white divide-y-2 divide-gray-200"
                {...getTableBodyProps()}
              >
                {rows.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"
                            {...cell.getCellProps()}
                          >
                            {cell.render('Cell')}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
