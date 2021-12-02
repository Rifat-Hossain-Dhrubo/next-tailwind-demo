import React from 'react';

type Props = {
  value: string;
  title: string;
};

const HomeCard = ({ value, title }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow flex-shrink w-5/12 p-4 m-1 ml-0 text-center text-gray-700 bg-white rounded lg:flex-nowrap lg:w-1/12 ">
      <span className="text-xl">{value}&nbsp; </span>
      <span className="text-xs lg:text-sm">{title}</span>
    </div>
  );
};

export default HomeCard;
