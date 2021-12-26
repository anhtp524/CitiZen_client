import React from 'react'
import {Pie} from 'react-chartjs-2'

function PiechartJob() {
    const data = {
        labels: ['Tốt nghiệp THPT', 'Đại học', 'Cao đẳng', 'Tốt nghiệp THCS', 'Tốt nghiệp tiểu học', 'Chưa đi học'],
        datasets: [
          {
            label: 'Helo',
            data: [15,8,6,20,8,5],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'red',
              'rgb(255, 206, 86)',
              'rgb(75, 192, 192)',
              'rgb(153, 102, 255)',
              'rgb(255, 159, 64)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'red',
              'rgb(255, 206, 86)',
              'rgb(75, 192, 192)',
              'rgb(153, 102, 255)',
              'rgb(255, 159, 64)',
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
        <div>
            <Pie data={data} />
        </div>
    )
}

export default PiechartJob
