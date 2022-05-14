import React, { useEffect } from 'react'
import download from './image/download.jpg'
import image from './image/image.jpg'
import { useState } from 'react'
import  './css/index.css'


const App = () => {
  const [search, setsearch] = useState("")
  const [show, setshow] = useState(false)
  const [heading, setheading] = useState('')
  const [Video, setVideo] = useState('')
  const [tag, settag] = useState('')
  

  function onChangehandler(e){
    setsearch(e.target.value)
    

  }

  useEffect(()=>{
    
  const GetItems =async()=>{
    try {
      let url = `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${search}&&numResults=6`
    

      let res = await fetch(url);
      let data = await res.json();
      // console.log(data)
      const tag1=data.results[0].tags[0]
      const tag2=data.results[0].tags[1]
      const tag3=data.results[0].tags[2]
      
      settag({tag1,tag2,tag3})

      const video1= data.results[0].video
      const video2= data.results[1].video
      const video3= data.results[2].video
      const video4= data.results[3].video
      const video5= data.results[4].video
      const video6= data.results[5].video



    
  
      setVideo({
        video1,
        video2,
        video3,
        video4,
        video5,
        video6,
      })

      setheading(data.results[0].heading)
      setshow(true)
      
  }catch(err){
    console.log(err)
  }



}
    
   GetItems();
   setshow(false)
    

  },[search]);


//   const GetItems =async()=>{
//     try {
//       let url = `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${search}&&numResults=6`
    

//       let res = await fetch(url);
//       let data = await res.json();
//       // console.log(data)
//       const tag1=data.results[0].tags[0]
//       const tag2=data.results[0].tags[1]
//       const tag3=data.results[0].tags[2]
      
//       settag({tag1,tag2,tag3})

//       const video1= data.results[0].video
//       const video2= data.results[1].video
//       const video3= data.results[2].video
//       const video4= data.results[3].video
//       const video5= data.results[4].video
//       const video6= data.results[5].video



    
  
//       setVideo({
//         video1,
//         video2,
//         video3,
//         video4,
//         video5,
//         video6,
//       })

//       setheading(data.results[0].heading)
//       setshow(true)
      
//   }catch(err){
//     console.log(err)
//   }



// }
// let videourl='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
// const poster = "https://unsplash.com/photos/ZRns2R5azu0"
  
  return (
    <div>
      
     {/* <div className='nav'>
       

       
       <input className='flex' type="text" onChange={onChangehandler}placeholder="Search.." value={search}/>
       
       
       
      </div> */}

<nav class="navbar navbar-expand-lg navbar-primary bg-dark">
  <div class="container-fluid">
      <img className='flex' src={download} style={{width: "8vw",height:"10vh"}}alt="not found"/>
    
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <input className="form-control me-2" style={{width: "78vw",margin: "0px 30px 0px 30px "   }} onChange={onChangehandler}  value={search} type="search" placeholder="Search" aria-label="Search"/>
      
     
    </div>
    
      <img className='flex' src={image} style={{width: "8vw",height:"10vh"}}alt="not found"/>
  </div>
</nav>



<div class="container">
  <div class="row align-items-start">
    <div class="col">
      

{show===true &&
    (<div class="card" style={{width: "25rem"}}>
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">{heading}</h5>
    
<video width="320" height="240" controls>
  <source src={Video.video1} type="video/mp4"/>
</video>
<br/>

{tag.tag2}
<br/>

{tag.tag1}
<br/>

{tag.tag3}
    
  </div></div>) }
    </div>
    <div class="col">
      

{show===true &&
    (<div class="card" style={{width: "25rem"}}>
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">{heading}</h5>
    
<video width="320" height="240" controls>
  <source src={Video.video2} type="video/mp4"/>
</video>
<br/>

{tag.tag2}
<br/>

{tag.tag1}
<br/>

{tag.tag3}
    
  </div></div>) }
    </div>
    <div class="col">
      

{show===true &&
    (<div class="card" style={{width: "25rem"}}>
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">{heading}</h5>
    
<video width="320" height="240" controls>
  <source src={Video.video3} type="video/mp4"/>
</video>
<br/>

{tag.tag2}
<br/>

{tag.tag1}
<br/>

{tag.tag3}
    
  </div></div>) }
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
      

{show===true &&
    (<div class="card" style={{width: "25rem"}}>
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">{heading}</h5>
    
<video width="320" height="240" controls>
  <source src={Video.video4} type="video/mp4"/>
</video>
<br/>

{tag.tag2}
<br/>

{tag.tag1}
<br/>

{tag.tag3}
    
  </div></div>) }
    </div>
    <div class="col">
      

{show===true &&
    (<div class="card" style={{width: "25rem"}}>
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">{heading}</h5>
    
<video width="320" height="240" controls>
  <source src={Video.video5} type="video/mp4"/>
</video>
<br/>

{tag.tag2}
<br/>

{tag.tag1}
<br/>

{tag.tag3}
    
  </div></div>) }
    </div>
    <div class="col">
      

{show===true &&
    (<div class="card" style={{width: "25rem"}}>
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">{heading}</h5>
    
<video width="320" height="240" controls>
  <source src={Video.video6} type="video/mp4"/>
</video>
<br/>

{tag.tag2}
<br/>

{tag.tag1}
<br/>

{tag.tag3}
    
  </div></div>) }
    </div>
  </div>
  
</div>




  </div>
  




    


      


    
  )
}

export default App