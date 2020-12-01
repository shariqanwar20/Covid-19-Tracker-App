import React, { useContext } from 'react';
import {Bar, Line} from 'react-chartjs-2';
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

const ChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Infected',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(255, 148, 77, 0.4)',
      borderColor: 'rgb(255, 148, 77)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgb(255, 148, 77)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgb(255, 148, 77)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    },
    {
      label: 'Recovered',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(92, 214, 92, 0.4)',
      borderColor: 'rgb(92, 214, 92)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgb(92, 214, 92)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgb(92, 214, 92)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    },
    {
      label: 'Deaths',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(255, 77, 77, 0.4)',
      borderColor: 'rgb(255, 77, 77)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgb(255, 77, 77)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgb(255, 77, 77)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    }
  ]
};

export default function Chart({apiData}){
    const apiContext = useContext(ApiContext);

    
    if (apiContext.api.includes("countries"))
    {
      if (!apiData.loading)
        data.datasets[0].data = [apiData.chartData.countryData.cases, apiData.chartData.countryData.recovered, apiData.chartData.countryData.deaths];
      else
        data.datasets[0].data = [];
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
    }
    else{
      if (!apiData.loading)
      {
        ChartData.datasets[0].data = Object.values(apiData.chartData.dailyApiData.cases);
        ChartData.datasets[1].data = Object.values(apiData.chartData.dailyApiData.recovered);
        ChartData.datasets[2].data = Object.values(apiData.chartData.dailyApiData.deaths);

        ChartData.labels = Object.keys(apiData.chartData.dailyApiData.cases)
      }
      return (
        <div>
          <h2>Line Example</h2>
          <Line data={ChartData} />
        </div>
      );
    }
};