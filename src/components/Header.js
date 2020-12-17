import React,{useState,useEffect} from 'react'
import Pagination from './Pagination'

const Header = ({ setTotalPages,page,setPage,  setType, totalpages, handleClick}) => {


    useEffect(()=>{

        if(totalpages){
        setTotalPages([...Array(totalpages).keys()].map(num=> num+1))
        
    }
    
    },[])
   
    //console.log('our pages', totalpages)
    
    return(
        <>
        <header>
            <h1 onClick={()=>handleClick(1)}>Movie app</h1>
            <nav>
                <select onChange={(e)=> setType(e.target.value)}>
                    <option value='popular'>Popular movies</option>
                    <option value='top_rated'>Top-rated movies</option>
                    <option value='now_playing'>Now playing movies</option>
                </select> 
            </nav>
            
        </header>
        {/* <Pagination totalpages={totalpages} setTotalPages={setTotalPages} page={page} setPage={setPage} handleClick={handleClick} /> */}
        </>
    )
}

export default Header