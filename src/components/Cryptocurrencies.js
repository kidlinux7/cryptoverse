import React, { useState, useEffect } from 'react'
// import  from '';
import { Link } from 'react-router-dom';
import { useGetCryptoStatsQuery } from '../services/cryptoApi';
import Loader from './Loader';


const Cryptocurrencies = ({ simplified }) => {
  // if simplified is true count is going to be 10 else 100
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching, isError } = useGetCryptoStatsQuery(count);

  // Search Functionality
  const [searchTerm, setSearchTerm] = useState('')
  const [cryptos, setCryptos] = useState()

  // useEffect(() => {
  //   if (cryptosList !== undefined) {
  //     converted = Array.from(cryptosList.data.coins)
  //     const filteredData = converted.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
  //     setCryptos(filteredData)
  //   }
  // }, [converted, searchTerm]);


  let converted

  // Handles undefined crash
  if (cryptosList != undefined) {
    converted = Array.from(cryptosList.data.coins)
    // Function will be executed whenever the cryptolist or searchterm changes

    // CryptoList will change when searchtearm changes so they have to be in div state

  } else {
    // cryptosList = []
    converted = []
    // console.log('Oops no didnt')
  }
  // Convert the Object to array so you can use map

  if (isFetching) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Please Check your internet connection.</h1>
  }



  return (
    <div>
      {
        converted !== undefined ?
          <div>
            {
              // If in simplied view show this input field & margintop some pixels
              !simplified ?
                <div className='row my-3 mt-5 align-items-center mx-auto'>
                  <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12 col-12'>
                    <input type='text' className='form-control cryptosearch' placeholder='Search cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)} />
                  </div>
                </div>
                : <p></p>
            }

            <div className='row align-items-center mx-auto'>
              {
                converted !== undefined ?
                  converted.map((currency, index) => (
                    <div key={index} className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12' >

                      <Link className='cardLinks' to={`/crypto/${currency.uuid}`}>
                        <div className="card mb-4">
                          <div className="card-body">
                            <div className='d-flex justify-content-between'>
                              <h5 className="card-title">{currency.rank}.{currency.name}</h5>
                              <img src={currency.iconUrl} alt="CoinImage" className="cryptoIcon" />
                            </div>
                            <h6 className="card-subtitle mb-2 text-muted">{currency.symbol}</h6>
                            <p className="card-text">MarketCap: {(currency.marketCap)}</p>
                            <p className="card-text">Price: {'$ ' + (currency.price)}</p>
                          </div>
                        </div>
                      </Link>

                    </div>
                  )) :
                  <h1></h1>
              }
            </div>

          </div> : <Loader />
      }


    </div>
  )
}

export default Cryptocurrencies