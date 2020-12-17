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

  const [page,setPage] = useState(1)
  const[type, setType] = useState('popular')
  //State for 100 posts(5)
  const [totalpages, setTotalPages] = useState(5)
  const [description, setDescription] = useState({
    id:undefined, 
    title:undefined, 
    description:undefined,
    img:undefined 
  })
  const[modaltoggle, setModalToggle] = useState(false)

  

useEffect(()=> {

  /* //Making the call to the API and setting state not sure if keep key here? Remember 100 latest posts! Maybe we need to loop over the fetch  times?
  const apiCall = async ()=>{
  const URL = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`

  await fetch(URL)
  .then(res => res.json())
  .then(data => setPosts(data))
  .catch(err => console.log(err))

  setLoading(false)
  
}
apiCall() */


const fetchLoop = async(page)=> {

  const URL = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`
  const fetchRes = await fetch(URL)
  .then(res => res.json())
  setLoopPosts(prev => [...prev, fetchRes])
}

[1,2,3,4,5].forEach(page => fetchLoop(page))



setLoading(false)

},[])



  const flattenedArray = loopPosts.flatMap(item => item.results)


//console.log('testing',posts)



const handleClick = async (num) => {

  setLoading(true)
  
    const URL = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=${num}`
      //hide API-key later
    await fetch(URL)
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(err => console.log(err))

    setLoading(false)

}

const handleModal =()=> {
    setModalToggle(prev => !prev)
}



return (
    <>
      <Modal description={description} modaltoggle={modaltoggle} handleModal={handleModal} />
      <Header totalpages={totalpages} setTotalPages={setTotalPages} page={page} setPage={setPage} setType={setType} handleClick={handleClick} />
      <Movies loading={loading} setLoading={setLoading} posts={flattenedArray} handleModal={handleModal} setDescription={setDescription} page={page} totalpages={totalpages} />
      <Footer />
    </>
  )
}

export default App;
