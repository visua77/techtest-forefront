import React,{useEffect, useState} from 'react'
import Header from './components/Header'
import Movies from './components/Movies'
import Modal from './components/Modal'
import Footer from './components/Footer'

//Api key here
const API_KEY = '7bad066f3ffa3daf68ae80d43ff12b31'

function App() {

  //Setting state here
  const[loading, setLoading] = useState(true)
  const[posts, setPosts] = useState([])
  const [loopPosts, setLoopPosts] = useState([])
  const[type, setType] = useState('popular')

  const [description, setDescription] = useState({
    id:undefined, 
    title:undefined, 
    description:undefined,
    img:undefined 
  })
  const[modaltoggle, setModalToggle] = useState(false)
  const[getmovies, setGetMovies] = useState(false)

  

useEffect(()=> {


  const fetchLoop = async(page)=> {
  
  const URL = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`
  const fetchRes = await fetch(URL)
  .then(res => res.json())
  setLoopPosts(prev => [...prev, fetchRes])
}

[1,2,3,4,5].forEach(page => fetchLoop(page))


const flattenedArray = loopPosts.flatMap(item => item.results)

setPosts(flattenedArray)
setLoading(false)



},[getmovies])

const handleModal =()=> {
    setModalToggle(prev => !prev)
}



return (
    <>
      <Modal description={description} modaltoggle={modaltoggle} handleModal={handleModal} />
      <Header setGetMovies={setGetMovies} />
      <Movies loading={loading} setLoading={setLoading} posts={posts} getmovies={getmovies} handleModal={handleModal} setDescription={setDescription} />
      <Footer />
    </>
  )
}

export default App;
