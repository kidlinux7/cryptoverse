import React from "react";

const CryptoDetailsStatsCard = (props) => {
    return (
        <div>
            <div className="card p-0">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <span style={{ fontWeight: "normal" }}>{props.title}</span>
                        <span style={{ fontWeight: "bold" }}>{props.value}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CryptoDetailsStatsCard