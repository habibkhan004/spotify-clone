console.log("welcome to javascript")
//initializing variables
let index=0;
let audioElement=new Audio();
let songItems=Array.from(document.getElementsByClassName("songItem"));
let songPlay=Array.from(document.getElementsByClassName("songItemPlay"))
let previous=document.getElementById("previous")
let next=document.getElementById("next")
let songNamespan=document.getElementById("songNamespan")


let songs=[
    {songName:"let me love you" , filePath:"./Songs/1.mp3" ,cover:"covers/1.jpg"},
    {songName:"kabi jo badal barsay" , filePath:"./Songs/2.mp3" ,cover:"covers/2.jpg"},
    {songName:"ankh uthi muhabbat nai" , filePath:"./Songs/3.mp3" ,cover:"covers/3.jpg"},
    {songName:"tere sang yaraaa" , filePath:"./Songs/4.mp3" ,cover:"covers/4.jpg"},
    {songName:"teri meri meri teri" , filePath:"./Songs/5.mp3" ,cover:"covers/5.jpg"},
    {songName:"meri rashkay qamar" , filePath:"./Songs/6.mp3" ,cover:"covers/6.jpg"},
    {songName:"aaj ruswa teri galio main" , filePath:"./Songs/7.mp3" ,cover:"covers/7.jpg"},
    {songName:"main tum say ishq karnay ki" , filePath:"./Songs/8.mp3" ,cover:"covers/8.jpg"},
    {songName:"bohat piyar kartay hain" , filePath:"./Songs/9.mp3" ,cover:"covers/9.jpg"},
    {songName:"marjawaan" , filePath:"./Songs/10.mp3" ,cover:"covers/1.jpg"}
]

let myProgressBar=document.getElementById("bar")
console.log(myProgressBar.value)
let masterPlay=document.getElementById("masterPlay")
let gif=document.getElementById("gif")

// audioElement.play();
masterPlay.addEventListener('click', ()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove("fa-play-circle")
            masterPlay.classList.add("fa-pause-circle")
            gif.style.opacity=1;
        }
        else{
            audioElement.pause();
            masterPlay.classList.remove("fa-pause-circle")
            masterPlay.classList.add("fa-play-circle")
            gif.style.opacity=0;
        }
}
)

audioElement.addEventListener('timeupdate', ()=>{
     progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
     console.log(progress)
     myProgressBar.value = progress;


})
myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime= myProgressBar.value*audioElement.duration/100;
})

songItems.forEach((element,i)=>{
            console.log(element,i)
            element.getElementsByTagName('img')[0].src=songs[i].cover;
            element.getElementsByTagName('span')[0].innerHTML=songs[i].songName;
})
const makeAllPlays= () =>{
    songPlay.forEach((e)=>{
            e.classList.remove("fa-pause-circle");
            e.classList.add("fa-play-circle");
})
}
let turn=true;
songPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        index=parseInt (e.target.id)
        console.log(index)
        audioElement.src=`songs/${index+1}.mp3`;

        if(turn){
            makeAllPlays()
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");
            turn=false;
           audioElement.currentTime=0
            audioElement.play();
            masterPlay.classList.remove("fa-play-circle")
            masterPlay.classList.add("fa-pause-circle")
            gif.style.opacity=1;
            songNamespan.innerText=songs[index].songName;

        }
        else{
            makeAllPlays()
            turn=true;
            audioElement.pause();
            masterPlay.classList.remove("fa-pause-circle")
            masterPlay.classList.add("fa-play-circle")
            gif.style.opacity=0; 
            songNamespan.innerText=songs[index].songName;
        }
    })
   
})
next.addEventListener('click', ()=>{
    if(index>=9){
        index=0;
    }
    else{
        index+=1;
           
    }
    audioElement.src=`songs/${index+1}.mp3`
    audioElement.currentTime=0;
    audioElement.play();
    songNamespan.innerText=songs[index].songName;
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")
    gif.style.opacity=1;
})

previous.addEventListener('click', ()=>{
    if(index<=0){
        index=0;
    }
    else{
        index-=1;
           
    }
    audioElement.src=`songs/${index+1}.mp3`
    audioElement.currentTime=0;
    audioElement.play();
    songNamespan.innerText=songs[index].songName;
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")
    gif.style.opacity=1;
})
