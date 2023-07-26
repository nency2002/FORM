document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(e);

    let name = document.getElementById("name").value
    let number = document.getElementById("number").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let imageurl = document.getElementById("imageurl").value
    let content = document.getElementById("content").value


    let user={
        name:name,
        number:number,
        email:email, 
        password:password,
        imageurl:imageurl,
        content:content,
    }
    document.getElementById("user").innerHTML=`name : ${user.name}`
    document.getElementById("num").innerHTML=`number : ${user.number}`
    document.getElementById("emailid").innerHTML=`email : ${user.email}`
    document.getElementById("pass").innerHTML=`password : ${user.password}`
    document.getElementById("image").src=imageurl;
    document.getElementById("icontent").innerHTML=`content : ${user.content}` 

});
