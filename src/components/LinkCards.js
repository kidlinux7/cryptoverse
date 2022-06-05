import React from "react";

const LinkCards = (props) => {
    return (
        <div>
            <div className="d-sm-none d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                <div className="card p-0">
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <span style={{ fontWeight: "normal" }}>{props.title}</span>
                            <div href={props.value} target="_blank" style={{ fontWeight: "bold",color:'blue' }}>{props.value}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-md-none d-lg-none d-xl-none d-xxl-none" >
                <div className="card p-0">
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <div href={props.value} target="_blank"  style={{ fontWeight: "bold",color:'blue' }}>{props.value}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LinkCards