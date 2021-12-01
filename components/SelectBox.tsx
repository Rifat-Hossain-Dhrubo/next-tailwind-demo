import React, { useRef, useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@reach/disclosure';
import { useClickAway } from 'react-use';

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
    const newSelected = selected.filter((option) => option.value !== value);
    setSelected(newSelected);
    setHeaderString(transformArrayToString(newSelected));
  };

  return (
    <div>
      <div>
        <textarea name="header" id="header" defaultValue={headerString} />
      </div>
      <section>
        {selected.map((item) => (
          <div key={item.value}>
            {item.value}

            <button onClick={() => removeSelectedOption(item.value)}> X</button>
          </div>
        ))}
      </section>
      <Disclosure open={isDisClosureOpen} onChange={handleDisclosureChange}>
        <DisclosureButton
          className="inline-flex items-center px-4 py-2 text-sm font-medium leading-4 bg-white border border-gray-300 rounded-md shadow-sm text-textColor-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          disabled={isDisClosureOpen}
        >
          Add
        </DisclosureButton>
        <DisclosurePanel ref={ref} as="div">
          <MultiSelect
            options={OPTIONS}
            value={selected}
            onChange={handleOptionSelected}
            labelledBy={'Select'}
          />
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export default SelectBox;
