
import React,{useState} from 'react'
import './data.css'


const Data = (props) => {
    // console.log("section");

    // console.log(props);
    // console.log("section");
    const[vot,setVot]=useState(props.props.map((elem)=>{
        return elem.voting
    }))
    
     console.log(vot);


    const increment=(indx)=>{
        
        vot[indx]=vot[indx]+1
        setVot([...vot])
        
        }

    
    const decrement=(indx)=>{
        // console.log("clicked       ");
        // console.log(indx)

        // const neweva=vot[indx]
        // console.log(neweva);
        
    
        var voot=[...vot]
        //console.log(voot);
        // voot[indx]=neweva-1
        voot[indx]=voot[indx]-1

        
        // console.log(voot);
        setVot(voot)
        //eva=neew+1
        



    }
    //console.log(vot);

//     const vote=(indx)=>{

// return vot[indx]
    
       

//     }

   
   
  return (
    <> 

    {props.props.map((elem,indx)=>{

        return( 
        <div id="main">
        <hr></hr>
        <hr></hr>
        <div id='votes'>
        
        <p>Votes</p>

        <button onClick={()=>increment(indx)}>+</button>
            <h3>{vot[indx]}</h3>
            
            <button onClick={()=>decrement(indx)}>-</button>

          
        </div>

        <div id="img">
        <img src={elem.poster} alt="img"></img>
        </div>

        <div id='details'>
        <h3>{elem.title}</h3>
        <p><b>Genre:</b>{elem.genre}</p>
        <p><b>Director:</b>{elem.director}</p>
        <p><b>Staring:</b>{elem.stars}</p>
        <p>Mins|<span>{elem.language}|<span></span>2 Apr</span></p>
        <p id='views'>{elem.pageViews}<span>| Voted by {elem.totalVoted} people</span></p><br></br><br></br>
        <button id='button'>Watch Trailer</button>
    
        </div>
        </div>
    )}


   
    )}
    </>
    
  )
}

export default Data