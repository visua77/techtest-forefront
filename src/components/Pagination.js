import React,{useState} from 'react'

const Pagination = ({totalpages,  handleClick, page, setPage})=> {

    //console.log(page)

    return(
        <nav className="pagination">
             <p className="pages">{totalpages.length ? totalpages.map(no => 
                <span className={'no'}onClick={()=>{ 
                    handleClick(no)
                    setPage(no)
                    }} key={no}>{no}
                </span>):null}
            </p> 
        </nav>
    )
}

export default Pagination