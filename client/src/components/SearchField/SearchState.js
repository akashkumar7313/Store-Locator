import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const State = [

  { name: 'Uttar Pradesh' },
  { name: 'Andhra Pradesh' },
  { name: 'Arunachal Pradesh' },
  { name: 'Assam, Bihar' },
  { name: 'Chhattisgarh' },
  { name: 'Haryana' },
  { name: 'Himachal Pradesh' },
  { name: 'Jammu and Kashmir' },
  { name: 'Jharkhand' },
  { name: 'Karnataka' },
  { name: 'Kerala' },
  { name: 'Madhya Pradesh' },
  { name: 'Maharashtra' },
  { name: 'Manipur' },
  { name: 'Meghalaya' },
  { name: 'Mizoram' },
  { name: 'Nagaland' },
  { name: 'Odisha' },
  { name: 'Punjab' },
  { name: 'Rajasthan' },
  { name: 'Sikkim' },
  { name: 'Tamil Nadu' },
  { name: 'Telangana' },
  { name: 'Tripura' },
  { name: 'Uttarakhand' },
  { name: 'West Bengal' },
  { name: 'Andaman and Nicobar Islands' },
  { name: 'Chandigarh' },
  { name: 'Dadra and Nagar Haveli' },
  { name: 'Daman and Diu' },
  { name: 'Delhi' },
  { name: 'Goa' },
  { name: 'Gujarat' },
  { name: 'Haryana' },
  { name: 'Himachal Pradesh' },
]

export default function Example() {
  const [selected, setSelected] = useState(State[0])

  return (
    <div className=" top-16 w-72 z-[20] ">
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Label className="block text-sm font-semibold leading-6 text-black text-start">Select State</Listbox.Label>
        <div className="relative mt-1">
          <Listbox.Button className="relative h-12 w-[390px] md:w-[400px] cursor-default rounded-lg  border-black border-2 bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400" 
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute text-start mt-1 max-h-60 w-[390px] md:w-[400px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-20 focus:outline-none sm:text-sm">
              {State.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}