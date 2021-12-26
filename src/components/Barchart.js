import React from 'react'
import {Bar} from 'react-chartjs-2'

function Barchart() {
    //let x = 500;
    return (
        <div className='barchart'>
            <Bar
            data={{
                labels:['0-18','18-30','30-65','>65'],
                datasets:[{
                  label:'Number of Girls',
                  data:[100,200,300,400],
                  backgroundColor:'red',
                },
                {
                  label:'Number of Boys',
                  data:[321,212,344,332],
                  backgroundColor:'green',
                },
                ]
              }}
            options={{
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                        

                }
            }}
            >
        
            </Bar>
        </div>
    )
};

export default Barchart;