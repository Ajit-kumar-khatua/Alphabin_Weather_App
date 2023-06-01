
let baseUrl="https://weatherapp-9y9i.onrender.com"

let form=document.querySelector("form")

form.addEventListener("submit",async (e)=>{
    e.preventDefault()
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let gender=document.getElementById("gender").value
    let password=document.getElementById("password").value

    let obj={name,email,gender,password}
    try {
        let res=await fetch(`${baseUrl}/users/register`,{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify(obj)
        })

        let data=await res.json()
        alert(data.msg)
        window.location.href="./login.html"
        
    } catch (error) {
        console.log(error)
    }
    
})