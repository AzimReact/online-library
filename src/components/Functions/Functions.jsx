import './Functions.scss';
import React from 'react'
import { FaSortAlphaDown, FaSortAlphaUpAlt } from "react-icons/fa";

export default function Functions({firstFunction, secondFunction}) {
  return (
            <div className='function-container'>
              <div className='sort'>
                <div>
                  <FaSortAlphaDown onClick={secondFunction}/>
                </div>
                <div>
                  <FaSortAlphaUpAlt onClick={firstFunction}/>
                </div>
              </div>
            </div>

  )
}


