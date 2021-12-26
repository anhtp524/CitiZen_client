import React from 'react'
import {Pie} from 'react-chartjs-2'

function PiechartSex() {
    const data = {
        labels: ['Nam','Nữ'],
        datasets: [
          {
            label: 'Helo',
            data: [600,400],
            backgroundColor: [
              'rgb(7, 87, 7)',
              'red',
            ],
            borderColor: [
              'rgb(7, 87, 7)',
              'red',
            ],
            borderWidth: 1,
          },
        ],
    }
    return (
        <div>
            <Pie data={data} />
        </div>
    )
}

export default PiechartSex
