import React, { useState, useEffect } from 'react'
import { useGetNewsQuery } from '../services/newsApi';
import { useGetCryptoStatsQuery } from '../services/cryptoApi';

// import { Link } from 'react-router-dom';
import moment from 'moment';
import Loader from './Loader';
import CheckInternetConnection from './CheckInternetConnection';

const News = ({ simplified }) => {
  const count = simplified ? 8 : 100
  const [newsCategory, setNewsCategory] = useState('cryptocurrency')
  const { data: newsList, isFetching, isError } = useGetNewsQuery({ newsCategory, count });
  const { data: selectcryptolist } = useGetCryptoStatsQuery(100);

  let converted
  let convertedcryptolist
  const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

  // Handle undefined crash
  if (newsList != undefined) {
    converted = Array.from(newsList.value)
  } else {
    converted = []
  }

  //Handle cryptolist
  if (selectcryptolist != undefined) {
    convertedcryptolist = Array.from(selectcryptolist.data.coins)
  } else {
    convertedcryptolist = []
  }


  if (isFetching) {
    return <Loader />
  }
  if (isError) {
    return <CheckInternetConnection />
  }

  return (


    <div className='row align-items-center mx-auto'>
      {
        !simplified ?
          <div className='row my-3 mt-5 align-items-center mx-auto'>
            <div className='selectbar col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12 col-12'>
              <select  value={newsCategory} onChange={(e) => setNewsCategory(e.target.value)} className="form-control" aria-label="">
                {
                  convertedcryptolist == undefined ? <Loader /> :
                    convertedcryptolist.map((coin, index) => (
                      <option key={index} value={coin.name}>{coin.name}</option>

                    ))
                }
              </select>
            </div>
          </div>
          : <p></p>
      }
      {

        converted.map((headline, index) => (
          <div key={index} className='col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12 mt-4 align-items-center mx-auto' >

            <div className='cardLinks' href={headline.url} target="_blank" >
              <div className="card">
                {
                  headline.image == undefined ?
                    <img src={demoImage} className="card-img-top" style={{ height: "300px", }} alt="" /> :
                    <img src={headline.image.thumbnail.contentUrl} style={{ height: "auto", }} className="card-img-top" alt="" />
                }

                <div className="card-body">
                  <h5 className="card-title">{(headline.name).length > 30 ? `${headline.name.substring(0, 50)}...` : headline.name}</h5>
                  <p className="card-text"> {(headline.description).length > 90 ? `${headline.description.substring(0, 90)}...` : headline.description}</p>

                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-start'>
                      {
                        headline.provider[0].image == undefined ?
                          <img src={demoImage} className="card-img-top" style={{ height: "30px", width: "30px", borderRadius: "100px" }} alt="" /> :
                          <img src={headline.provider[0].image.thumbnail.contentUrl} style={{ height: "30px", width: "30px" }} />
                      }
                      {
                        headline.provider[0].name == undefined ?
                          <h6>cyrptoverse</h6> :
                          <h6 style={{ color: "grey" }}>{headline.provider[0].name}</h6>
                      }
                    </div>

                    <p className="card-text text-muted"> {moment(headline.datePublished).startOf('ss').fromNow()}</p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        ))
      }


    </div>


  )
}

export default News