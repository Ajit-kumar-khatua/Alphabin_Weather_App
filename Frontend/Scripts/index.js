let baseUrl="https://weatherapp-9y9i.onrender.com"
let save=document.getElementById("save")
let token=localStorage.getItem("token")

if(token){
    let nav=document.getElementById("nav")
   nav.innerHTML=`
    <a href="./index.html">Home</a>
    <button id="logout">logout</button>
   `
   let logout=document.getElementById("logout")

   logout.addEventListener("click",()=>{
       localStorage.clear()
       window.location.href="./index.html"
   })
}

document.getElementById("search-btn").addEventListener("click",function(){
        
    let input=document.querySelector("input").value;
   
       async function getWeather(){
           try{
               let res=await fetch(`${baseUrl}/api/weather?location=${input}`)
               let data=await res.json()
               displayData(data)
           }
           catch(err){
               console.log(err)
           }
           
       }

       let x=`https://maps.google.com/maps?q=${input}&t=&z=13&ie=UTF8&iwloc=&output=embed`
       let frm=document.querySelector("iframe")
       frm.src=x;
       getWeather()
       savePreference(input)
       save.style.display="flex"
   })

   function displayData(data){
    document.querySelector("#cont").innerHTML=""
    let div=document.createElement("div")

    let place=document.createElement("h1")
    place.innerText=data.name;
    let min=document.createElement("p")
    min.innerText="Min Temp :"+data.main.temp_min+" *F"
    let max=document.createElement("p")
    max.innerText="Max Temp :"+data.main.temp_max+" *F"
    let feel=document.createElement("p")
    feel.innerText="Feels Like :"+data.main.feels_like
    let wind=document.createElement("p")
    wind.innerText="Wind :"+data.wind.speed;
    let cloud=document.createElement("p")
      let i=document.createElement("i")
       i.setAttribute("class","f0c2")
       cloud.append(i)
    cloud.innerText="Cloud: "+data.weather[0].main

    let sunrise=document.createElement("p")
    sunrise.innerText="Sunrise: "+data.sys.sunrise
    let sunset=document.createElement("p")
    sunset.innerText="Sunset: "+data.sys.sunset

    div.append(place,min,max,feel,wind,cloud,sunrise,sunset)

    document.querySelector("#cont").append(div)
 }
       

 let saveBtn=document.getElementById("save-btn")

 function savePreference(location){
    saveBtn.addEventListener("click",async ()=>{
       let obj={location}
       let res=await fetch(`${baseUrl}/api/preference`,{
        method:"POST",
        headers:{
            "Content-Type":"Application/json",
            "Authorization":token
        },
        body:JSON.stringify(obj)
       })
       let data =await res.json()
       alert(data.msg)
    })
   
 }
