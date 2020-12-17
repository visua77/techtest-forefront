import React,{useRef} from 'react'
import PuffLoader from "react-spinners/PuffLoader"
import { css } from "@emotion/core"

//Setting css for the loader
const override = css`
  display: block;
  margin: 0 auto;
  margin-top:2rem;
`;

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  


const Movies = ({loading, posts, handleModal, setDescription})=> {


    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)

    return(
        <div className="wrapper"ref={myRef}>{loading ? <div className="loader">
                <PuffLoader
                css={override}
                size={250}
                color={"rgb(66, 66, 66)"}
                />
                </div>
            :
            posts.results.map(post => (
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
                    <span className="date">{post.release_date}</span>
                </div>
          ))}
        </div>
    )
}

export default Movies