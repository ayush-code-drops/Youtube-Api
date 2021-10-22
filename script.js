
const searchPlace=document.getElementById('searchPlace');
const searchBtn=document.getElementById('searchBtn');
const results=document.getElementById('results')
results.style.display='flex'
searchBtn.addEventListener('click',handleSearch)

function handleSearch(){
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchPlace.value}&&maxResults=24&&key=AIzaSyCnIdgIp58QRiUZUO2nAGM_eW0OqIhXiSg`)
.then(res=>res.json())
.then(
(res)=>{
console.log(res)
console.log(res.items)
results.innerHTML=""
const videoCont=document.createElement('div')

for(item of res.items){
    var card=createYoutubeCard(item)
   videoCont.append(card)
}
videoCont.className='video-cont'
// videoCont.style.display='flex'
// videoCont.style.gap='20px'
results.append(videoCont)
}
)


}

function createYoutubeCard(data){
    if(data.id.kind==='youtube#channel'){
  return ``
    }
    
    else{
    const div=document.createElement('div')
    
  div.innerHTML=  ` <iframe width="auto"
height="auto" 
src="https://www.youtube.com/embed/${data.id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      return div 
    
    }

    
}

