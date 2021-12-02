import React from 'react';
import HomeCard from './HomeCard';

const Info = () => {
  return (
    <>
      <section className="p-3 mb-2 text-center bg-white rounded-md">
        <h1 className="text-xs font-medium text-gray-700 lg:text-lg xl:text-xl 2xl:text-2xl">
          Campaigns: Drill Down
        </h1>
      </section>
      <section className="flex flex-wrap">
        <HomeCard value={'10'} title="Campaign Themes" />
        <HomeCard value={'32'} title="Campaign" />
        <HomeCard value={'104'} title="Triggers" />
        <HomeCard value={'60%'} title="Personalized" />
        <HomeCard value={'38%'} title="Offer Lead" />
      </section>
    </>
  );
};

export default Info;
