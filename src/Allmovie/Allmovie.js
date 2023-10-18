import React, { useState } from 'react'
import '../css/Admincomp1.css'
import logo512 from '../Images/logo512.png';

export default function Allmovie() {
     const [Movie, setMovie] = useState([{
        Poster:"Ek Villain",
        Moviename:"Akshay Kumar"
     },
     {
        Poster:"Pushpa",
        Moviename:"Salman Khan"
     },
     {
        Poster:"Inception",
        Moviename:"Hritik"
     },
     {
        Poster:"Thunderstorm",
        Moviename:"Prateek"
     },
     {
        Poster:"Venom",
        Moviename:"Akshay Kumar"
     },
    ])
    return (
        <div className="container my-3">
            <div className="row text-light">
                <div className="col-sm-3 allmovies">
                    {Movie.map((item,index)=>{
                        return (<div className="card">
                        <img src={logo512} class="card-img-top" alt="Logo" />;
                        <div className="card-body">
                            
                            <h5 className="card-title">{item.Poster}</h5>
                            <p className="card-text">{item.Moviename}</p>
                            <a href="#" className="btn btn-primary btn-sm">Edit</a>
                        </div>
                    </div>  )
                    })
                    }
                </div>
            </div>
        </div>
    )
}
