// import  from "";
import React from "react";
import { LineChart } from 'react-chartkick'
// import "chart.js";
// import { Line } from 'react-chartjs-2'


const LineChartCOmponent = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimeStamp = [];
    var combinedResults = {};
    // const [combinedResults, setCombinedResults ] = setState({})

    if (coinHistory !== undefined) {
        for (let i = 0; i < coinHistory.data.history.length; i += 1) {
            coinPrice.push((parseInt(coinHistory.data.history[i].price)))
            coinTimeStamp.push(new Date((coinHistory.data.history[i].timestamp)*1000).toLocaleDateString())
                
        }
    
    //   var combinedResults = coinTimeStamp.forEach((coinTimeStamp,i) => combinedResults[coinTimeStamp] = coinPrice[i])
        // console.log(coinPrice)
        // console.log(new Date(coinTimeStamp).toLocaleDateString())
    }
    coinTimeStamp.forEach((element, index)=>{
        combinedResults[element] = coinPrice[index]
    });


    return (
        <div>
            {
                coinHistory !== undefined ?
                    <div className="col-xxl-12 col-xl-12 col-lg-12">
                        <h2>{coinName} Price Chart</h2>
                        <span>{coinHistory.data.change} %</span>
                        <span>Current {coinName} Price: $ {currentPrice}</span>
                        <LineChart xtitle="Time" ytitle="Price"  data={combinedResults}/>
                    </div> : <h1></h1>
            }

        </div>
    )

}
export default LineChartCOmponent
