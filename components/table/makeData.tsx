// import namor from 'namor'

const range = (len: Number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    campaign_theme: Math.floor(Math.random() * 30),
    campaignes: Math.floor(Math.random() * 100),
    triggers: Math.floor(Math.random() * 100),
    outreach_triggers: Math.floor(Math.random() * 100),
    outreach: Math.floor(Math.random() * 100),
    cust_reached: Math.floor(Math.random() * 100),
    cust_coverage: Math.floor(Math.random() * 100),
  };
};

export default function makeData(...lens: any) {
  const makeDataLevel: any = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
