import {
  HiExclamationCircle,
  HiPhone,
  HiUser,
  HiUserAdd,
  HiX,
} from 'react-icons/hi';
import { useFieldArray, useForm } from 'react-hook-form';
import { useState } from 'react';

import { useRouter } from 'next/router';

type FormValues = {
  referralInfo: {
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
      referralInfo: [
        { inclusion: '', period: '', behavior: '', productAttribute: '' },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: 'referralInfo',
    control,
  });

  const onSubmit = async (formData: FormValues) => {
    console.log(formData);
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="px-4 py-8 shadow bg-backgroundColor-primary sm:px-10 sm:rounded-lg">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, index) => {
            return (
              <fieldset key={field.id} className="space-y-3">
                <section>
                  <label
                    htmlFor={`referralInfo-${index}-name`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Friend&apos;s Name
                  </label>
                  <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <HiUser
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id={`referralInfo-${index}-name`}
                      type="text"
                      autoComplete="tel-national"
                      className="block w-full py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none px-9 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
                      aria-describedby={`name-error-${index}`}
                      {...register(`referralInfo.${index}.inclusion`, {
                        required: {
                          value: true,
                          message: 'Name is required',
                        },
                        minLength: {
                          value: 3,
                          message: 'Name must be at least 3 characters',
                        },
                        validate: () => {
                          const values = getValues('referralInfo');
                          const names = values.map((value) => value.inclusion);
                          if (names.length <= 0)
                            return 'You have to provide at least one name';

                          return true;
                        },
                      })}
                    />
                    {errors?.referralInfo?.[index]?.inclusion && (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <HiExclamationCircle
                          className="w-5 h-5 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                </section>
                <section>
                  <label
                    htmlFor={`referralInfo-${index}-name`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Friend&apos;s Name
                  </label>
                  <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <HiUser
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id={`referralInfo-${index}-period`}
                      type="text"
                      autoComplete="tel-national"
                      className="block w-full py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none px-9 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
                      aria-describedby={`period-error-${index}`}
                      {...register(`referralInfo.${index}.period`, {
                        required: {
                          value: true,
                          message: 'Name is required',
                        },
                        minLength: {
                          value: 3,
                          message: 'Name must be at least 3 characters',
                        },
                      })}
                    />
                    {errors?.referralInfo?.[index]?.period && (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <HiExclamationCircle
                          className="w-5 h-5 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                </section>
                <section>
                  <label
                    htmlFor={`referralInfo-${index}-behavior`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Friend&apos;s Name
                  </label>
                  <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <HiUser
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id={`referralInfo-${index}-behavior`}
                      type="text"
                      autoComplete="tel-national"
                      className="block w-full py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none px-9 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
                      aria-describedby={`behavior-error-${index}`}
                      {...register(`referralInfo.${index}.inclusion`, {
                        required: {
                          value: true,
                          message: 'Name is required',
                        },
                        minLength: {
                          value: 3,
                          message: 'Name must be at least 3 characters',
                        },
                      })}
                    />
                    {errors?.referralInfo?.[index]?.behavior && (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <HiExclamationCircle
                          className="w-5 h-5 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                </section>
                <section>
                  <label
                    htmlFor={`referralInfo-${index}-name`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Friend&apos;s Name
                  </label>
                  <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <HiUser
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id={`referralInfo-${index}-productAttribute`}
                      type="text"
                      autoComplete="tel-national"
                      className="block w-full py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none px-9 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
                      aria-describedby={`productAttribute-error-${index}`}
                      {...register(`referralInfo.${index}.productAttribute`, {
                        required: {
                          value: true,
                          message: 'Name is required',
                        },
                        minLength: {
                          value: 3,
                          message: 'Name must be at least 3 characters',
                        },
                      })}
                    />
                    {errors?.referralInfo?.[index]?.inclusion && (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <HiExclamationCircle
                          className="w-5 h-5 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                </section>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    onClick={() => remove(index)}
                  >
                    <HiX className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
                    Delete
                  </button>
                </div>
              </fieldset>
            );
          })}

          <button
            type="button"
            className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium leading-4 bg-white border border-gray-300 rounded-md shadow-sm text-textColor-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() =>
              append({
                inclusion: '',
                period: '',
                behavior: '',
                productAttribute: '',
              })
            }
          >
            <HiUserAdd className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
            Refer Another Friend
          </button>

          <div>
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium border border-transparent rounded-md shadow-sm text-textColor-primary bg-oiiuDarkBlue hover:bg-oiiuGray3 focus:outline-none focus:ring-2 focus:ring-oiiuGray1 focus:ring-offset-2"
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
                'Send Referral'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DynamicForm;
