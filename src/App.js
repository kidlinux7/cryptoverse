// Type rfce to get boiler plate code
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Navbar, Homepage, Cryptocurrencies, News, MobileNavbar, Cryptodetails } from './components';
import './App.css'


const App = () => {
    return (
        <div className='app'>
            
            <div className='container-fluid'>
                <div className='row align-items-center mx-auto'>
                    <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 bg-dark'>
                        <Navbar />
                    </div>
                </div>
                <div className='row align-items-center mx-auto'>
                    <div className='main col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12'>
                        <Routes>
                            <Route path="/" element={<Homepage />} />
                            <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
                            <Route path="news" element={<News />} />
                            <Route path="crypto/:coinUUID" element={<Cryptodetails />} />
                        </Routes>
                    </div>

                </div>
                
            </div>
            <MobileNavbar />
            


        </div>
    )
}

export default App