import React from "react";


function FamilyCard(props) {
    return (
      
        <div  className="card text-white bg-light mb-3">
        <div className="card-header">{props.name} </div>
        <img src={props.image} title="image 2" className="card-img-top" className="thumb" data-index="2" className="card-img-top" alt="..." />
        <div className="card-body">
            <p className="card-text">{props.description}</p>

            {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                Meet the Family
                </button> */}
        </div>
    </div>
    )
}
export default FamilyCard; 

