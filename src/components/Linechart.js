import React from 'react'
import {Line} from 'react-chartjs-2'

function Linechart() {
    return (
        <div className='linechart'>
            <Line
            data={{
                labels:['2015','2016','2017','2018','2019'],
                datasets:[
                    {
                        label: 'Young',
                        data:[20,30,40,50,60],
                        backgroundColor: 'black',
                        fill: false,
                        borderColor: 'blue'
                    },
                    {
                        label: 'Middle',
                        data:[300,200,210,102,129],
                        backgroundColor: 'black',
                        fill: false,
                        borderColor: 'red'
                    },
                    {
                        label: 'Old',
                        data:[80,320,40,80,60],
                        backgroundColor: 'black',
                        fill: false,
                        borderColor: 'violet'
                    },
                ]
            }}
            >
            </Line>
        </div>
    )
}

export default Linechart