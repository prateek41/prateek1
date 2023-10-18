import React from 'react'
import { useState } from "react";
export default function Addmovie() {
    //const onSubmu
    const [Poster, setPoster] = useState('');
    const [Moviename, setMoviename] = useState('');
    const [Rating, setRating] = useState('');
    const [Languages, setLanguages] = useState('');

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with:', { Poster, Moviename, Rating, Languages });
        // You can add logic to handle form submission here (e.g., sending data to a server)
      };
    return (
        <div>
            <div className="container my-3" style={{ width: "600px" }}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="exampleFormControlFile1">   Poster</label>
                        <input type="file" value={Poster} onChange={(e) => setPoster(e.target.value)} className="form-control-file" id="exampleFormControlFile1" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Movie Name</label>
                        <input type="text" value={Moviename} onChange={(e) => setMoviename(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Movie Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Rating</label>
                        <select className="form-control" value={Rating} onChange={(e) => setRating(e.target.value)} id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Languages</label>
                        <textarea className="form-control" onChange={(e) => setLanguages(e.target.value)} value={Languages} id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary btn-sm ">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
