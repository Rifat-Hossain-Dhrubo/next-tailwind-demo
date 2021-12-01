import {
  HiExclamationCircle,
  HiPhone,
  HiPlus,
  HiUser,
  HiUserAdd,
  HiX,
} from 'react-icons/hi';
import { useFieldArray, useForm } from 'react-hook-form';
import { useState } from 'react';

import { useRouter } from 'next/router';

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
  const [loading, setLoading] = useState<'loading' | 'idle'>('idle');
  const checkPhoneNumber = (phone: string) => {
    const regex = /^(\+88)/g;
    const found = phone.match(regex);
    if (found == null) {
      return `+88${phone}`;
    }
    return phone;
  };

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<FormValues>({
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
    <div className="m-1 mx-auto bg-white rounded-b-2xl">
      <div className="py-3 mx-4 border-b border-gray-300">
        <h2 className="text-base font-medium text-gray-900 lg:pl-[5.5rem]">
          Recommendation
        </h2>
      </div>
      <div className="px-4 py-8 shadow bg-backgroundColor-primary sm:px-10 sm:rounded-lg rounded-b-2xl">
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
                    className="block text-sm font-medium text-gray-500"
                  >
                    Inclusion
                  </label>
                  <div className="relative mt-1">
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
                    className="block text-sm font-medium text-gray-500"
                  >
                    Period
                  </label>
                  <div className="relative mt-1">
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
                    className="block text-sm font-medium text-gray-500"
                  >
                    Behavior
                  </label>
                  <div className="relative mt-1">
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
                    className="block text-sm font-medium text-gray-500"
                  >
                    Product attribute
                  </label>
                  <div className="relative mt-1">
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

                <div className="flex justify-end">
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
                      className="py-1 btn-secondary"
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
            <button
              type="submit"
              className="btn-secondary"
              disabled={loading === 'loading'}
            >
              {loading === 'loading' ? (
                <svg
                  className="w-5 h-5 mr-3 -ml-1 text-textColor-primary animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                'Save'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DynamicForm;
