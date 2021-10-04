import React, {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'

export const DynamicChart = () => {    
    const [chartData, setChartData]  = useState({});    
  
    const Chart = () => {
        setChartData({
        labels: ['06/22', '07/22', '08/17', '09/22', '10/02'],
        datasets: [{
                          label: '# of Votes',
                          data: [18.8,19.1,19.3,19.8,20.1],
                          backgroundColor: [
                              'rgba(100, 195, 95, 0.2)'
                          ],
                          borderColor: [
                              'rgba(100, 195, 95, 1)' 
                          ],
                          borderWidth: 1
                      }]
               });
 }
      useEffect(() => {
         Chart();
       }, []);
 
 return(
           <div className="App">
               <h1>Patient Historic</h1>
               <div>
                   <Line
                     data={chartData}
                     options={{
                         responsive:true,
                         title: { text: "IMC", display: true },
                         scales:{
                             yAxes:[ {
                                 ticks:{
                                     beginAtZero: true
                                 }
                             }
                             ]
                         }
                     }}
                   />
               </div>
           </div>
       )
}