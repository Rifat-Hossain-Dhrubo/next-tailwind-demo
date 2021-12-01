import React, { useRef, useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import { useClickAway } from 'react-use';
import VisuallyHidden from './misc/VisuallyHidden';
import { HiMinus, HiPlus, HiX } from 'react-icons/hi';
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
} from '@reach/menu-button';

const OPTIONS = [
  { label: 'Grapes 🍇', value: 'grapes' },
  { label: 'Mango 🥭', value: 'mango' },
  { label: 'Strawberry 🍓', value: 'strawberry' },
  { label: 'Watermelon 🍉', value: 'watermelon' },
  { label: 'Pear 🍐', value: 'pear' },
  { label: 'Apple 🍎', value: 'apple' },
  { label: 'Tangerine 🍊', value: 'tangerine' },
  { label: 'Pineapple 🍍', value: 'pineapple' },
  { label: 'Peach 🍑', value: 'peach' },
];
const SelectBox = () => {
  const [selected, setSelected] = useState<typeof OPTIONS>([]);
  const [headerString, setHeaderString] = useState('');

  const ref = useRef<HTMLDivElement | null>(null);
  const secondRef = useRef<HTMLDivElement | null>(null);

  const transformArrayToString = (inputs: typeof OPTIONS) => {
    return inputs.map((input) => input.value).join(` | `);
  };

  const handleOptionSelected = (selected: typeof OPTIONS) => {
    setSelected(selected);
    setHeaderString(transformArrayToString(selected));
  };

  const removeSelectedOption = (value: string) => {
    const filteredSelectedOptions = selected.filter(
      (option) => option.value !== value
    );
    setSelected(filteredSelectedOptions);
    setHeaderString(transformArrayToString(filteredSelectedOptions));
  };

  const clearAllSelectedOptions = () => {
    setSelected([]);
    setHeaderString('');
  };

  return (
    <section className="mt-3 lg:mt-12">
      <div className="block lg:flex lg:items-center lg:space-x-12">
        <h3 className="mb-3 text-sm font-bold text-gray-500">Preference</h3>
        <div className="min-h-[3rem] border-b border-gray-400 mb-2 lg:w-full lg:min-h-[2rem] lg:flex lg:space-x-4">
          <div className="lg:flex-shrink lg:min-w-[4rem]">
            {selected.map((item) => (
              <div
                className="inline-flex items-center justify-between px-3 py-1 m-1 text-black bg-gray-200 rounded-full"
                key={item.value}
              >
                <span className="text-sm"> {item.value}</span>
                <button
                  className="ml-1"
                  onClick={() => removeSelectedOption(item.value)}
                >
                  <HiX aria-hidden="true" className="w-4 h-4" />
                  <VisuallyHidden>Remove {item.value}</VisuallyHidden>
                </button>
              </div>
            ))}
          </div>
          <div className="relative hidden max-w-xs mr-auto lg:flex lg:flex-shrink-0 lg:mb-1">
            <div className="w-full min-w-[300px]">
              <Menu>
                <div className="space-x-4">
                  <MenuButton className="btn-primary">
                    <HiPlus aria-hidden="true" className="w-4 h-4 mr-1" />
                    Add
                  </MenuButton>
                  <button
                    className="btn-transparent"
                    type="button"
                    onClick={clearAllSelectedOptions}
                  >
                    <HiMinus aria-hidden="true" className="w-4 h-4 mr-1" />
                    Remove All
                  </button>
                </div>

                <div className="min-w-[300px]">
                  <MenuList
                    className="min-w-[300px] bg-transparent border-none relative top-1"
                    portal={true}
                    as="div"
                  >
                    <MultiSelect
                      options={OPTIONS}
                      shouldToggleOnHover={true}
                      value={selected}
                      onChange={handleOptionSelected}
                      labelledBy={'Select'}
                      defaultIsOpen={true}
                    />
                  </MenuList>
                </div>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      <div className="block max-w-xs mr-auto lg:hidden">
        <Menu>
          <div className="space-x-4">
            <MenuButton className="btn-primary">
              <HiPlus aria-hidden="true" className="w-4 h-4 mr-1" />
              Add
            </MenuButton>
            <button
              className="btn-transparent"
              type="button"
              onClick={clearAllSelectedOptions}
            >
              <HiMinus aria-hidden="true" className="w-4 h-4 mr-1" />
              Remove All
            </button>
          </div>

          <div>
            <MenuList
              className="min-w-[300px] bg-transparent border-none relative top-1"
              portal={true}
              as="div"
            >
              <MultiSelect
                options={OPTIONS}
                shouldToggleOnHover={true}
                value={selected}
                onChange={handleOptionSelected}
                labelledBy={'Select'}
                defaultIsOpen={true}
              />
            </MenuList>
          </div>
        </Menu>
      </div>
      <div className="block lg:grid lg:grid-cols-2 lg:gap-x-72 lg:items-center ">
        <div className="w-full mt-6 lg:max-w-sm lg:flex lg:space-x-4">
          <span className="text-sm font-bold text-gray-500">Header</span>
          <textarea
            className="w-full py-2 pl-2 text-gray-900 placeholder-gray-800 border-0 border-b border-gray-300 shadow-sm appearance-none focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm lg:p-0 lg:px-2 lg:pb-2 lg:min-h-[5rem]"
            name="header"
            id="header"
            defaultValue={headerString}
          />
        </div>
        <div className="w-full mt-6 lg:max-w-sm lg:flex lg:space-x-4">
          <span className="text-sm font-bold text-gray-500">Template</span>
          <textarea
            className="min-h-[2rem] w-full py-2 pl-2 text-gray-900 placeholder-gray-800 border-0 border-b border-gray-300 shadow-sm appearance-none   focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm lg:p-0 lg:px-2 lg:pb-2 lg:min-h-[5rem]"
            name="header"
            id="header"
            defaultValue={'<SOLUS_PFIELD>Customer ID<SOLUS_PFIELD>'}
          />
        </div>
      </div>
    </section>
  );
};

export default SelectBox;
