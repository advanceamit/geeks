import React, { useState } from 'react'
import axios from "axios"
import Data from './Data'
// import { urlencoded } from 'express';

function Home() {

    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [third, setThird] = useState("");
    const [fourth, setFourth] = useState("");
    const[apii,setApii]=useState(true)
    const[dat,setDat]=useState('')



    // THIS POST REQUESTION IS GIVING ERROR...
    async function submitHanddler(e) {
        
        e.preventDefault();

        console.log(first, second, third, fourth);
        // const requestOptions = {
        //     method: 'POST',
           
        //     body :{ 
        //         category:JSON.stringify(first), 
        //         language:JSON.stringify(second),
        //         genre:JSON.stringify(third),
        //         sort:JSON.stringify(fourth),
        //     }
        // }

        console.log(first, second, third, fourth);

        // const response = fetch(`https://hoblist.com/movieList?category=${first}&language=${second}&genre=${third}&sort=${fourth}`, requestOptions);
        // const data = response.json();
        // console.log(data);
        // this.setState({ postId: data.id });
        //alert("OOPS! coudnt Find Anythng")

        try {
            var response= await axios.post('https://hoblist.com/api/movieList',{category:first,language:second, genre:third,sort:fourth})
            setDat(response.data.result)
                    console.log(response.data.result);

                }

        
        catch (e) {
            alert("OOPS! Error occured")
            console.log(e);
        }
        setApii(false)

    }

    return (
        
        <>
        {apii ? <>
            <h1>detail to search movie</h1>
            <form onSubmit={submitHanddler}>
                <div className="form-group">
                    <label>Category</label>
                    <input type="text" className="form-control" onChange={(event) => setFirst(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Language</label>
                    <input type="text" className="form-control"  onChange={(event) => setSecond(event.target.value)} />
                </div>


                <div className="form-group">
                    <label>Genre</label>
                    <input type="text" className="form-control"  onChange={(event) => setThird(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Sort</label>
                    <input type="text" className="form-control"  onChange={(event) => setFourth(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Post Request</button>
            </form>
                 </>:<Data props={dat}/> }
                 </>
    )
        }

export default Home