import React from 'react'

function StatsCard(props) {
    return (
        
            <div className='col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6 col-6'>
                <div className='globalstatisticscard'>
                    <div className='d-flex flex-column justify-content-start'>
                        <p className='globalstatisticscardTitle'>{props.statsTitle}</p>
                        <h3 className='globalstatisticscardValue'>{props.statsValue}</h3>
                    </div>
                </div>
            </div>
     


    );
}
export default StatsCard