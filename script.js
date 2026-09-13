function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior:"smooth"
    });
}
function showCode(type){
    let code = "";

    if(type === "html"){
        code = `
<!DOCTYPE html>
<html>
<head>
    <title>HTML Demo</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is HTML structure</p>
</body>
</html>`;
    }

    else if(type === "css"){
        code = `
h1{
    color: blue;
    font-size: 40px;
}

p{
    color: gray;
}`;
    }

    else if(type === "js"){
        code = `
function greet(){
    alert("Hello Developer!");
}
greet();`;
    }

    else if(type === "full"){
        code = `
<!DOCTYPE html>
<html>
<head>
<style>
body{
    background:black;
    color:white;
    text-align:center;
}
button{
    padding:10px;
}
</style>
</head>
<body>

<h1>Mini Project</h1>
<button onclick="alert('Button Clicked!')">Click Me</button>

</body>
</html>`;
    }

    document.getElementById("codeContent").innerText = code;
    document.getElementById("codeBox").style.display = "block";
}

function closeCode(){
    document.getElementById("codeBox").style.display = "none";
}
// Smooth scroll function (fixed)
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Optional: smooth nav click handling (extra stable)
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
// PAGE LOAD ANIMATION
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});