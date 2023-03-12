import './App.css';
import { useEffect, useRef, useState } from 'react' ;



import StarRatingComponent from 'react-star-rating-component';

function App() {
  const[movies,setMovies]=useState([{Title:"Fantasia" , Rate:"5" ,img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ41JAQWpnfLiq-vG9PFsXcphJCHJKdk8u4u-eCk25X-JSPjYDj"},
  {Title:"Cendrillon" , Rate:"4" ,img:"https://www.films-disney.fr/wp-content/uploads/2018/05/cendrillon.jpg"},
  {Title:"Bambi" , Rate:"5" ,img:" https://fr.web.img2.acsta.net/medias/nmedia/18/35/56/29/18465102.jpg"}])
   const R1=useRef()
  const R2=useRef()
  const R3=useRef()
  const add=()=>{setMovies([...movies,{Title:R1.current.value,Rate:R2.current.value,img:R3.current.value}])}
 const [filtredmovies,setFilter]=useState(movies)
 const search=useRef()
 const filtrer=()=>{
  setFilter(movies.filter(e=>e.Title.toUpperCase().includes(search.current.value.toUpperCase())))
 }
 useEffect(()=>{
  setFilter(movies)
 },[movies])
  return (
    <div >
      <div className='Navbarre'>
    
<input type={"search"} placeholder="enter your search" ref={search} onChange={filtrer}></input>
<input type={"text"} placeholder="Title" ref={R1}></input>
<input type={"text"} placeholder="Rate" ref={R2}></input>
<input type={"text"} placeholder="img" ref={R3}></input>
<button onClick={add}>Add new Movies</button></div>
<div className='group'>
{filtredmovies.map(e=><div className='card'>{e.Title}
<StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={e.Rate}
        
        />
<img src={e.img}></img></div>)}</div>
    </div>
    
  );
}

export default App;
