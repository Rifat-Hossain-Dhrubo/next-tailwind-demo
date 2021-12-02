import { HiPlus, HiX } from 'react-icons/hi';
import { useFieldArray, useForm } from 'react-hook-form';
import React from 'react';

const options = [
  { label: 'Grapes', value: 'grapes' },
  { label: 'Mango', value: 'mango' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Water', value: 'watermelon' },
  { label: 'Apple', value: 'apple' },
  { label: 'Tang', value: 'tangerine' },
  { label: 'Pine', value: 'pineapple' },
  { label: 'Peach', value: 'peach' },
];

type FormValues = {
  dynamic: {
    inclusion: string;
    period: string;
    behavior: string;
    productAttribute: string;
  }[];
};

const DynamicForm = (): JSX.Element => {
  const { register, control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      dynamic: [
        { inclusion: '', period: '', behavior: '', productAttribute: '' },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: 'dynamic',
    control,
  });

  const onSubmit = async (formData: FormValues) => {
    console.log(formData);
  };

  return (
    <div className="mx-auto mt-1 bg-white ">
      <div className="py-3 mx-4 border-b border-gray-300">
        <h2 className="text-base font-medium text-gray-900 lg:pl-[5.5rem]">
          Recommendation
        </h2>
      </div>
      <div className="px-4 py-8 bg-backgroundColor-primary sm:px-10">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, index) => {
            return (
              <fieldset
                key={field.id}
                className="grid grid-cols-1 gap-4 pb-4 border-b border-gray-200 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-5"
              >
                <section className="flex items-center justify-between space-x-2">
                  <label
                    htmlFor={`dynamic-${index}-inclusion`}
                    className="block text-sm font-medium text-gray-500 lg:flex-grow-0 lg:flex-shrink"
                  >
                    Inclusion
                  </label>
                  <div className="relative mt-1 lg:flex-grow lg:flex-shrink-0">
                    <select
                      id={`dynamic-${index}-inclusion`}
                      autoComplete="tel-national"
                      className="select"
                      aria-describedby={`inclusion-error-${index}`}
                      {...register(`dynamic.${index}.inclusion`)}
                    >
                      {options.map((option) => {
                        return (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </section>
                <section className="flex items-center justify-between space-x-2">
                  <label
                    htmlFor={`dynamic-${index}-period`}
                    className="block text-sm font-medium text-gray-500 lg:flex-grow-0 lg:flex-shrink"
                  >
                    Period
                  </label>
                  <div className="relative mt-1 lg:flex-grow lg:flex-shrink-0">
                    <select
                      id={`dynamic-${index}-period`}
                      autoComplete="tel-national"
                      className="select"
                      aria-describedby={`period-error-${index}`}
                      {...register(`dynamic.${index}.period`)}
                    >
                      {options.map((option) => {
                        return (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </section>
                <section className="flex items-center justify-between space-x-2">
                  <label
                    htmlFor={`dynamic-${index}-behavior`}
                    className="block text-sm font-medium text-gray-500 lg:flex-grow-0 lg:flex-shrink"
                  >
                    Behavior
                  </label>
                  <div className="relative mt-1 lg:flex-grow lg:flex-shrink-0">
                    <select
                      id={`dynamic-${index}-behavior`}
                      autoComplete="tel-national"
                      className="select"
                      aria-describedby={`behavior-error-${index}`}
                      {...register(`dynamic.${index}.behavior`)}
                    >
                      {options.map((option) => {
                        return (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </section>
                <section className="flex items-center justify-between space-x-2">
                  <label
                    htmlFor={`dynamic-${index}-productAttribute`}
                    className="block text-sm font-medium text-gray-500 lg:flex-grow-0 lg:flex-shrink"
                  >
                    Product attribute
                  </label>
                  <div className="relative mt-1 lg:flex-grow lg:flex-shrink-0">
                    <select
                      id={`dynamic-${index}-productAttribute`}
                      autoComplete="tel-national"
                      className="select"
                      aria-describedby={`productAttribute-error-${index}`}
                      {...register(`dynamic.${index}.productAttribute`)}
                    >
                      {options.map((option) => {
                        return (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </section>

                <div className="flex justify-end col-end-[-1]">
                  {index > 0 ? (
                    <button
                      type="button"
                      className="py-1 btn-secondary"
                      onClick={() => remove(index)}
                    >
                      <HiX className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
                      Remove
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="py-1 min-w-[7.75rem] justify-center btn-secondary"
                      onClick={() =>
                        append({
                          inclusion: '',
                          period: '',
                          behavior: '',
                          productAttribute: '',
                        })
                      }
                    >
                      <HiPlus
                        className="w-5 h-5 mr-2 -ml-1"
                        aria-hidden="true"
                      />
                      Add
                    </button>
                  )}
                </div>
              </fieldset>
            );
          })}

          <div>
            <button type="submit" className="btn-secondary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DynamicForm;
