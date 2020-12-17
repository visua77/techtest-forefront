import React,{useState} from 'react'

const Pagination = ({totalpages, handleClick})=> {


    const pages = [...Array(totalpages).keys()].map(num=> num+1)

    return(
        <nav className="pagination">
            <p className="pages">{pages.map(no => 
                <span className="no"onClick={()=> 
                    handleClick(no)}key={no}>{no}
                </span>)}
            </p>
        </nav>
    )
}

export default Pagination