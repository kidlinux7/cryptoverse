import React from 'react';
import { SpinnerDotted } from 'spinners-react';

const Loader = () => {
    return (
        <div className="loader">
            <div className="container-fluid">
                <div className="d-flex text-center">
                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 mt-5">
                    <SpinnerDotted color='#8a2be2' />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Loader