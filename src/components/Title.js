import React from 'react'

export default function Title(props) {
    return (
        <div className="row my-5 text-white col-12 col-lg-12">
           <div className="col-12 mx-auto my-2 text-center text-title">
              <h1 className="text-uppercase font-weight-bold text-light mt-5">
                  {props.name} <strong className="text-warning">
                      {props.title}
                      </strong>
                </h1> 
            </div> 
        </div>
    )
}
