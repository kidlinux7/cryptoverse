import React from 'react'
import { useGetCryptoStatsQuery } from '../services/cryptoApi';
// import  from '';
import Cryptocurrencies from './Cryptocurrencies';
import StatsCard from './statsCard';
import News from './News';
import { Link } from 'react-router-dom';
import CheckInternetConnection from './CheckInternetConnection';
import Loader from './Loader';

const Homepage = () => {
  const { data, isFetching, isError } = useGetCryptoStatsQuery(10);
  let globalStats;

  // Handles undefined crash
  if (data != undefined) {
    // console.log(data.data.stats)
    globalStats = data.data.stats
  }
  if (isError) {
    <CheckInternetConnection />
  }


  if (isFetching) {
    <Loader />
  }
  return (
    <div >
      {
        globalStats !== undefined ?
          <div>
            <div>
              <h5 className='first_row'>Global Crypto Status</h5>
              <div className="d-md-none d-lg-none d-xl-none d-xxl-none">

                {/* <div className='d-flex align-content-start flex-wrap'> */}
                <StatsCard statsTitle="Total Cryptos" statsValue={globalStats.total == undefined ? 0 : globalStats.total} />
                <StatsCard statsTitle="Total Exchnages" statsValue={globalStats.totalExchanges} />
                <StatsCard statsTitle="Total MarketCap" statsValue={(globalStats.totalMarketCap)} />
                <StatsCard statsTitle="Total Markets" statsValue={(globalStats.totalMarkets)} />
                <StatsCard statsTitle="Total Volume(24h)" statsValue={(globalStats.total24hVolume)} />
              </div>
              <div className="d-sm-none d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                <div className='d-flex align-content-start flex-wrap'>
                  <StatsCard statsTitle="Total Cryptos" statsValue={globalStats.total == undefined ? 0 : globalStats.total} />
                  <StatsCard statsTitle="Total Exchnages" statsValue={globalStats.totalExchanges} />
                  <StatsCard statsTitle="Total MarketCap" statsValue={(globalStats.totalMarketCap)} />
                  <StatsCard statsTitle="Total Markets" statsValue={(globalStats.totalMarkets)} />
                  <StatsCard statsTitle="Total Volume(24h)" statsValue={(globalStats.total24hVolume)} />
                </div>
              </div>
            </div>

            <div className='d-flex justify-content-between mt-5'>
              <h5>Top 10 Cryptocurrencies</h5>
              <Link className='showmore' to="/cryptocurrencies">Show more</Link>
            </div>
            <Cryptocurrencies simplified={true} />


            <div className='d-flex justify-content-between mt-5'>
              <h5>Latest Crypto News</h5>
              <Link className='showmore' to="/news">Show more</Link>
            </div>
            <News simplified={true} />

          </div> : <Loader />
      }



    </div>
  )
}

export default Homepage