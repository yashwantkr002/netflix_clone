const apikey="d889edbcdea977a44ab4f1165592a9c6"
const baseurl="https://api.themoviedb.org/3";
const image="https://image.tmdb.org/t/p/w500";



// api paths
const apipath={
    fetchtvallcategory:`${baseurl}/genre/tv/list?api_key=${apikey}`,
    fechtvlist:(id)=>`${baseurl}/discover/tv?api_key=${apikey}&with_genres=${id}`,
    trandinglist:`${baseurl}/trending/tv/week?api_key=${apikey}&language=en-US`,
    youtubeserch:(qry)=>`https://youtube.googleapis.com/youtube/v3/search?q=${qry}&type=video&videoType=any&key=AIzaSyAOVycFKqhgFnb1GsbMfa4kR7XO57G08g8`,

 }


 function init(){
    fetchtranding();
    document.getElementById('head').style.backgroundColor='transparent';
    fetchtvbild();

}
function  fetchtvbild(){
    fetch(apipath.fetchtvallcategory)
    .then(res=>res.json())
    .then(res=>{
    //    console.log(res.genres) 

       const categories=res.genres;
        if(Array.isArray(categories)&& categories.length){

            categories.forEach(catogry=>{

                fatchandBildTVSection(apipath.fechtvlist(catogry.id),catogry.name);
            
            })
          
        }


    })
    .catch(err=>console.error(err))

}

function  fatchandBildTVSection(fatchurl,categoriesName){
    // console.log(fatchurl,categoriesName)
  fetch(fatchurl)
  .then(res=>res.json())
  .then(res=>{
       const movies=res.results
    //   console.log(res.results)
      if(Array.isArray(movies)&&movies.length){
          BildMoviesSection(movies,categoriesName);
      }
      
  })
}
function BildMoviesSection(list,categoriesName){
    const moviesCon=document.getElementById("movies_container");
    // console.log(list,categoriesName);

    const MoviesListHtml =list.map(item =>{
        return `
        <div class="movie-item" id="movie-item">
        <div class="thamnail">
        <img class="movie-item-image"src="${image}${item.backdrop_path}" alt="${item.title}"onmouseover="SearchMovieTrailer('${item.title}','yt${item.id}')">
        </div>   
        <div class="play-video">
        <iframe id="yt${item.id}" class="youname"src="" title="description" allowfullscreen></iframe>
        </div>   
        </div>
        `

    }).join(" ");
    const MOviesSectionHtml=`
    <h2 class="movies-section-heading">${categoriesName}<span class="explor-noutch"> &nbsp; Explor all</span></h2>
    <div class="movies-row">
          ${MoviesListHtml}
    </div>
    `;
    const div=document.createElement("div");
    div.className="movies-section";
    div.innerHTML=MOviesSectionHtml;
    moviesCon.append(div);
    


}

function fetchtranding(){
    fatchandBildSection(apipath.trandinglist,"Tranding Now")
    .then(list=>{
        console.log(list)
        const rand=parseInt(Math.random()*list.length);
        buldbannersection(list[rand]);
    })
    .catch(err=>console.error(err))
   
}
function buldbannersection(mllist){
    console.log(mllist)

    const banner=document.getElementById('baner_section');
    banner.style.backgroundImage=`url("${image}${mllist.backdrop_path}")`;
    const div=document.createElement('div');
    div.className="banner-contant containar";


    div.innerHTML=`
    <h2 class="banner-title">${mllist.original_name.substring(0,15)}</h2>
    <p class="banner-info">Tranding in movies ${mllist.first_air_date
    }</p>
    <p class="banner-overviwe  ">${mllist.overview.substring(0,105)}</p>
    <div class="action-btn-con">
      <button class="action-btn"><i class="fa-solid fa-play"></i>&nbsp; Play</button>
      <button class="action-btn "><i class="fa-solid fa-circle-info"></i>&nbsp; More info</button>
</div>`


    banner.append(div);

}
function fatchandBildSection(fatchurl,categoriesName){
       console.log(fatchurl, categoriesName)
       return fetch(fatchurl)
       .then(res=>res.json())
       .then(res=>{
           
         //  console.log(res.results);
    
           const movies=res.results;
           if(Array.isArray(movies)&&movies.length){
               BildMoviesSection(movies,categoriesName);
           }
           return movies;
       
       })
       .catch(err=>console.error(err))
     
     }

     function SearchMovieTrailer(itemName,itemId){
        if(!itemName) return;
       fetch(apipath.youtubeserch(itemName))
        .then(res=>res.json())
        .then(res=>{
        //    console.log(res)
           const yplay=res.items[0];
           const pyt=yplay.id.videoId;
           play_videos(pyt,itemId)
           
        })
        .catch(err=>console.error(err))
    }
    
    function play_videos(pyt,itemId){
        // console.log(itemId)
        let c=document.getElementById(itemId);  
        c.classList.add("zindex");
        c.src=`https://www.youtube.com/embed/${pyt}?autoplay=1&contro=1`;
    }

    function change(){
        const head=document.getElementById("head");
        if(window.scrollY>5){
            head.style.backgroundColor=" rgb(20, 20, 20)"
        }
        else{
           head.style.backgroundColor="transparent"
        }
       
       }
window.addEventListener("load",init)
window.addEventListener("scroll",change)