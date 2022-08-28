import React, { useState } from 'react'

const Counter = () => {
    var [data,setData]=useState(0)

    const Increment=()=>{
        setData(
            data=data+1
            )
    }
    const Decrement=()=>{
        setData(
            data=data-1
        )
    }

  return (
    <div>
        
        <div className="container">
        <div className="row g-3">
        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <label for="" class="form-control">{data}</label>
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <button onClick={Increment} className="btn btn-warning">INCREMENT</button>
            </div><div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <button onClick={Decrement} className=" btn btn-warning">DECREMENT</button>
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            </div>
        </div>
    </div>


    </div>
  )
}

export default Counter