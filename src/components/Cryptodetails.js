import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi'
import CryptoDetailsStatsCard from './CryptoDetailsStatsCard'
import LinkCards from './LinkCards'
// import  from '';
import HTMLReactParser from 'html-react-parser';
import LineChartCOmponent from './LineChartCOmponent'
import Loader from './Loader'
import CheckInternetConnection from './CheckInternetConnection'


const Cryptodetails = () => {
  const { coinUUID } = useParams()
  const [timePeriod, setTimePeriod] = useState('7d')
  const { data, isFetching, isError } = useGetCryptoDetailsQuery(coinUUID)
  const { data: coinHistory } = useGetCryptoHistoryQuery({ coinUUID, timePeriod })
  // console.log(coinHistory)

  let cryptoDetails;
  let stats = []
  let otherstats = []

  if (data !== undefined) {
    cryptoDetails = data.data.coin
    // console.log(cryptoDetails)
  }

  if (isFetching) {
    <Loader />
  }
  if (isError) {
    <CheckInternetConnection />
  }
  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y']

  if (cryptoDetails !== undefined) {
    stats = [
      { title: 'Price to USD', value: `$ ${cryptoDetails.price && (cryptoDetails.price)}` },
      { title: 'Rank', value: cryptoDetails.rank },
      { title: '24h Volume', value: `$ ${cryptoDetails.volume}` },
      { title: 'Market Cap', value: `$ ${cryptoDetails.marketCap && (cryptoDetails.marketCap)}` },
      { title: 'All-time-high(daily avg.)', value: `$ ${(cryptoDetails.allTimeHigh.price)}` },
    ]
    otherstats = [
      { title: 'Number of Markets', value: `$ ${cryptoDetails.numberOfMarkets && (cryptoDetails.numberOfMarkets)}` },
      { title: 'Number of Exchanges', value: cryptoDetails.numberOfExchanges },
      { title: 'Low Volume', value: cryptoDetails.lowVolume },
      { title: 'Total Supply', value: `$ ${(cryptoDetails.supply.total)}` },
      { title: 'Circulating Supply', value: `$ ${(cryptoDetails.supply.circulating)}` },
    ]


  } else {
    stats = []
    otherstats = []

  }

  return (
    <div>
      {
        cryptoDetails !== undefined ?
          <div>
            <div className='row mt-5 align-items-center'>
              <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12'>
                {
                  cryptoDetails !== undefined ?
                    <div>
                      <div className='topspace'>
                        <div className='d-flex flex-row'>
                          <img src={cryptoDetails.iconUrl} alt="CoinImage" className="cryptoIcon" />
                          <h2 style={{ marginBottom: "0px" }}>{cryptoDetails.name}</h2>
                        </div>
                      </div>
                      <span>{cryptoDetails.name} live statistical summary</span>
                    </div> : <h1></h1>

                }
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 col-12'>
                <select value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} className="form-control" aria-label="">
                  {
                    time.map((time, index) => (
                      <option key={index} value={time}>{time}</option>

                    ))
                  }
                </select>
              </div>
            </div>
            <div className='row mt-2'>
              {
                cryptoDetails !== undefined ?
                  <LineChartCOmponent coinHistory={coinHistory} currentPrice={(cryptoDetails.price)} coinName={cryptoDetails.name} />
                  : <h1></h1>
              }
            </div>
            <div className='row mt-5'>
              <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 col-12 mt-4'>
                {
                  cryptoDetails !== undefined ?
                    <div>
                      <h3 style={{ marginBottom: "0px" }}>{cryptoDetails.name}</h3>
                      <span>An overview showing the statistics of {cryptoDetails.name}</span>
                    </div> : <h1></h1>

                }
                {
                  cryptoDetails !== undefined ?

                    stats.map((stat, index) => (
                      <div key={index}>
                        <CryptoDetailsStatsCard title={stat.title} value={stat.value} />
                      </div>
                    )) : <h1></h1>
                }
                {/* <CryptoDetailsStatsCard title={stat.title} value={stat.value} /> */}

              </div>
              <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 col-12 mt-4'>
                {
                  cryptoDetails !== undefined ?
                    <div>
                      <h3 style={{ marginBottom: "0px" }}>Other Statistics</h3>
                      <span>An overview showing the statistics of {cryptoDetails.name}</span>
                    </div> : <h1></h1>

                }
                {
                  cryptoDetails !== undefined ?

                    otherstats.map((stat, index) => (
                      <div key={index}>
                        <CryptoDetailsStatsCard title={stat.title} value={stat.value} />
                      </div>
                    )) : <h1></h1>
                }
                {/* <CryptoDetailsStatsCard title={stat.title} value={stat.value} /> */}

              </div>
            </div>

            {/* DESCRIPTION & LINKS */}
            <div className='row mt-5'>
              <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                {
                  cryptoDetails !== undefined ?
                    <div>
                      <h3>What is {cryptoDetails.name} ?</h3>
                      {HTMLReactParser(cryptoDetails.description)}

                    </div>
                    : <h1></h1>
                }
              </div>
              <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                {
                  cryptoDetails !== undefined ?

                    cryptoDetails.links.map((link, index) => (
                      <div key={index}>
                        <LinkCards title={link.type} value={link.url} />
                      </div>
                    )) : <h1></h1>
                }
              </div>

            </div>

          </div>: <Loader />
      }

    </div>
  )
}

export default Cryptodetails