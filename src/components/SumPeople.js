import React from 'react'
import * as BsIcon from 'react-icons/bs'
import './sumpeople.css'

function SumPeople() {
    return (
        <div className='sumpeople'>
            <div className='main'><span>Tổng dân số Việt Nam: 1000</span></div>
            <div className='main'>
                <span className='male'><BsIcon.BsGenderMale /></span>
                <span className='male'>Nam: 600</span> 
                <span className='female'><BsIcon.BsGenderFemale /></span>
                <span className='female'>Nữ: 400</span>
            </div>
            
        </div>
    )
}

export default SumPeople
