let baseUrl="https://weatherapp-9y9i.onrender.com"

let form=document.querySelector("form")

form.addEventListener("submit",async (e)=>{
    e.preventDefault()
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value

    let obj={email,password}
    try {
        let res=await fetch(`${baseUrl}/users/login`,{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify(obj)
        })

        let data=await res.json()
        alert(data.msg)
        localStorage.setItem("token",data.token)
        window.location.href="./index.html"
        
    } catch (error) {
        console.log(error)
    }
    
})