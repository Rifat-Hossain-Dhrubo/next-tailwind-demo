import React, { useRef, useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@reach/disclosure';
import { useClickAway } from 'react-use';
import VisuallyHidden from './misc/VisuallyHidden';
import { HiX } from 'react-icons/hi';

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
  const [isDisClosureOpen, setDisClosureOpen] = React.useState(false);

  const ref = useRef<HTMLDivElement | null>(null);
  useClickAway(ref, () => {
    if (isDisClosureOpen) {
      setDisClosureOpen(false);
    }
  });

  const transformArrayToString = (inputs: typeof OPTIONS) => {
    return inputs.map((input) => input.value).join(` | `);
  };

  const handleOptionSelected = (selected: typeof OPTIONS) => {
    setSelected(selected);
    setHeaderString(transformArrayToString(selected));
  };

  const handleDisclosureChange = () => {
    setDisClosureOpen(!isDisClosureOpen);
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
    <section>
      <div className="min-h-[3rem] border-b border-gray-400 mb-2">
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

      <div className="">
        <Disclosure open={isDisClosureOpen} onChange={handleDisclosureChange}>
          <DisclosureButton
            className="inline-flex items-center px-4 py-2 text-sm font-medium leading-4 bg-white border border-gray-300 rounded-md shadow-sm text-textColor-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            disabled={isDisClosureOpen}
          >
            Add
          </DisclosureButton>
          <button
            className="inline-flex items-center px-4 py-2 text-sm font-medium leading-4 bg-white border border-gray-300 rounded-md shadow-sm text-textColor-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            type="button"
            onClick={clearAllSelectedOptions}
          >
            Clear all
          </button>
          <div className="mt-2">
            <DisclosurePanel ref={ref} as="div">
              <MultiSelect
                options={OPTIONS}
                value={selected}
                onChange={handleOptionSelected}
                labelledBy={'Select'}
                defaultIsOpen={true}
              />
            </DisclosurePanel>
          </div>
        </Disclosure>
      </div>
      <div className="w-full mt-6">
        <span className="text-sm font-bold text-gray-500">Header</span>
        <textarea
          rows={1}
          className="w-full py-2 pl-2 text-gray-900 placeholder-gray-800 border-0 border-b border-gray-300 shadow-sm appearance-none resize-none pr- focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
          name="header"
          id="header"
          defaultValue={headerString}
        />
      </div>
      <div className="w-full mt-6">
        <span className="text-sm font-bold text-gray-500">Template</span>
        <textarea
          rows={1}
          className="w-full py-2 pl-2 text-gray-900 placeholder-gray-800 border-0 border-b border-gray-300 shadow-sm appearance-none resize-none pr- focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
          name="header"
          id="header"
          defaultValue={'<SOLUS_PFIELD>Customer ID<SOLUS_PFIELD>'}
        />
      </div>
    </section>
  );
};

export default SelectBox;
