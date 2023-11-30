/* eslint-disable @next/next/no-img-element */
import SpecialButton from '@/modules/common/components/special-button'
import { ScholarshipProps } from '@/types'
import React from 'react'
import { LuClock3 } from 'react-icons/lu'
import { PiHandPalmLight, PiTrophy } from 'react-icons/pi'
import { SlArrowDown } from 'react-icons/sl'

const Scholarship: React.FC<{ scholarship: ScholarshipProps }> = ({ scholarship }) => {
  return (
    <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <span>{scholarship.id}</span>
              <img src={scholarship.logo} alt={scholarship.name} />
              <h3 className="max-w-[250px]">{scholarship.name}</h3>
            </div>

            <div className="flex gap-6 items-center">
              <div className="flex gap-3 items-center p-4 bg-white rounded-3xl border border-neutral-200 shadow-xs shadow-neutral-200">
                <div className="text-2xl">
                  <PiTrophy />
                </div>
                <span>${scholarship.price.toLocaleString()}</span>
              </div>

              <div className="flex gap-3 items-center p-4 bg-white rounded-3xl border border-neutral-200 shadow-xs shadow-neutral-200">
                <div className="text-2xl">
                  <LuClock3 />
                </div>
                <span>{scholarship.date}</span>
              </div>

              <SpecialButton text="Apply" icon={<PiHandPalmLight />} />

              <div>
                <SlArrowDown />
              </div>
            </div>
          </div>
  )
}

export default Scholarship