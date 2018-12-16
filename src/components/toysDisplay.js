import React from "react";

function ToyDisplay(props) {
  return ( 
    <div>
        <div class="card">
            <div class="card-image">
                <img src={ process.env.PUBLIC_URL + props.image } />
            </div>
            <div class="card-stacked">
                <div class="card-content">
                    <h5>${ props.cost }</h5>
                </div>
            </div>
        </div>
    </div>
    )
};

export default ToyDisplay;