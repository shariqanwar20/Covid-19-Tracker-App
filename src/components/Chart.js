import React, { useContext } from 'react';
import {Bar} from 'react-chartjs-2';
import { ApiContext } from '../ContextAPI/GlobalContext';

const data = {
  labels: ['Infected', 'Recovered', 'Deaths'],
  datasets: [
    {
      label: 'Cases',
      backgroundColor: ['rgb(255, 148, 77)', 'rgb(92, 214, 92)', 'rgb(255, 77, 77)'],
      borderColor: ['rgb(255, 148, 77)', 'rgb(92, 214, 92)', 'rgb(255, 77, 77)'],
      borderWidth: 1,
      hoverBackgroundColor: ['rgb(255, 128, 0)','rgb(41, 163, 41)','rgb(255, 26, 26)'],
      hoverBorderColor: ['rgb(255, 128, 0)','rgb(41, 163, 41)','rgb(255, 26, 26)'],
      data: []
    }
  ]
};

export default function Chart(){
    const apiContext = useContext(ApiContext);
    data.datasets[0].data = [apiContext.dataArr[0].cases, apiContext.dataArr[0].deaths, apiContext.dataArr[0].recovered];

    return (
      <div>
        <h2>Covid Stats</h2>
        <Bar
          data={data}
          width={100}
          height={60}
          options={{
            maintainAspectRatio: true,
            responsive: true
          }}
          redraw={true}
        />
      </div>
    );
};