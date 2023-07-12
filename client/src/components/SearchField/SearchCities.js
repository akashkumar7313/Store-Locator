import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const Cities = [
  { name: 'Agra' },
  { name: 'Aligarh' },
  { name: 'Allahabad' },
  { name: 'Ambedkar Nagar' },
  { name: 'Amethi' },
  { name: 'Amroha' },
  { name: 'Auraiya' },
  { name: 'Azamgarh' },
  { name: 'Baghpat' },
  { name: 'Bahraich' },
  { name: 'Ballia' },
  { name: 'Balrampur' },
  { name: 'Banda' },
  { name: 'Barabanki' },
  { name: 'Bareilly' },
  { name: 'Basti' },
  { name: 'Bhadohi' },
  { name: 'Bijnor' },
  { name: 'Budaun' },
  { name: 'Bulandshahr' },
  { name: 'Chandauli' },
  { name: 'Chitrakoot' },
  { name: 'Deoria' },
  { name: 'Etah' },
  { name: 'Etawah' },
  { name: 'Faizabad' },
  { name: 'Farrukhabad' },
  { name: 'Fatehpur' },
  { name: 'Firozabad' },
  { name: 'Gautam Buddha Nagar' },
  { name: 'Ghaziabad' },
  { name: 'Ghazipur' },
  { name: 'Gonda' },
  { name: 'Gorakhpur' },
  { name: 'Hamirpur' },
  { name: 'Hapur' },
  { name: 'Hardoi' },
  { name: 'Hathras' },
  { name: 'Jalaun' },
  { name: 'Jaunpur' },
  { name: 'Jhansi' },
  { name: 'Kannauj' },
  { name: 'Kanpur Dehat' },
  { name: 'Kanpur Nagar' },
  { name: 'Kasganj' },
  { name: 'Kaushambi' },
  { name: 'Kushinagar' },
  { name: 'Lakhimpur Kheri' },
  { name: 'Lalitpur' },
  { name: 'Lucknow' },
  { name: 'Maharajganj' },
  { name: 'Mahoba' },
  { name: 'Mainpuri' },
  { name: 'Mathura' },
  { name: 'Mau' },
  { name: 'Meerut' },
  { name: 'Mirzapur' },
  { name: 'Moradabad' },
  { name: 'Muzaffarnagar' },
  { name: 'Pilibhit' },
  { name: 'Pratapgarh' },
  { name: 'Raebareli' },
  { name: 'Rampur' },
  { name: 'Saharanpur' },
  { name: 'Sambhal' },
  { name: 'Sant Kabir Nagar' },
  { name: 'Shahjahanpur' },
  { name: 'Shamli' },
  { name: 'Shravasti' },
  { name: 'Siddharthnagar' },
  { name: 'Sitapur' },
  { name: 'Sonbhadra' },
  { name: 'Sultanpur' },
  { name: 'Unnao' },
  { name: 'Varanasi' }
];


export default function Example() {
  const [selected, setSelected] = useState(Cities[0])

  return (
    <div className=" top-16 w-72 z-[10] ">
      <Listbox value={selected} onChange={setSelected}>
      <Listbox.Label className="block text-sm font-semibold leading-6 text-black text-start">Select Cities</Listbox.Label>
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
              {Cities.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
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
