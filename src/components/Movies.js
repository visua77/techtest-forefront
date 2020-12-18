import React,{useRef} from 'react'
import PuffLoader from "react-spinners/PuffLoader"
import { css } from "@emotion/core"

//Setting css for the loader
const override = css`
  display: block;
  margin: 0 auto;
  margin-top:2rem;
`;

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop-300)  


const Movies = ({loading, posts, handleModal, setDescription, getmovies})=> {


    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)

    return(
    <>{/* <p className="info"ref={myRef}>Page {page} out of {totalpages.length-1+1}</p> */}
        
        <div className="wrapper"ref={myRef}>
            
            {loading ? <div className="loader">
                <h4>Loading</h4>
                <PuffLoader
                css={override}
                size={250}
                color={"rgb(66, 66, 66)"}
                />
                </div>
            :
            getmovies === false ? <h4>Hello, you havent loaded any movies yet, hit that button!</h4>:
            getmovies ? posts.map(post => (
                <div className="card" key={post.id} onClick={()=>{
                    handleModal()
                    setDescription({
                        id: post.id,
                        title:post.title, 
                        description:post.overview,
                        img:post.backdrop_path
                    })
                    executeScroll()
                    
                    }}>
                    <img src={`https://image.tmdb.org/t/p/w200${post.poster_path}`} alt="#"/>
                    <span className="span-wrapper"><span className="date">{post.release_date}</span><span className="date">{post.vote_average}</span></span>
                </div>
          ))
        :null}
        </div></>
    )
}

export default Movies