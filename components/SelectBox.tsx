import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
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

  const transformArrayToString = (inputs: typeof OPTIONS) => {
    return inputs.map((input) => input.value).join(` | `);
  };

  const handleSelected = (selected: typeof OPTIONS) => {
    setSelected(selected);
    setHeaderString(transformArrayToString(selected));
  };

  return (
    <div>
      <textarea name="header" id="header" defaultValue={headerString} />
      <MultiSelect
        options={OPTIONS}
        value={selected}
        onChange={handleSelected}
        labelledBy={'Select'}
      />
    </div>
  );
};

export default SelectBox;
