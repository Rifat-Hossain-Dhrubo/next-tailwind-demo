import type { NextPage } from 'next';
import { HiChevronDown } from 'react-icons/hi';
import { components } from 'react-select';
import DynamicForm from '../components/table/DynamicForm';
import SelectBox from '../components/table/SelectBox';

const Input = (props: any) => (
  <components.Input
    {...props}
    inputClassName="outline-none border-none shadow-none focus:ring-transparent"
  />
);

const Home: NextPage = () => {
  return (
    <div className="p-4 mx-auto">
      <SelectBox />

      <div>
        <DynamicForm />
      </div>
    </div>
  );
};

export default Home;
