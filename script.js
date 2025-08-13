const dateDiv=document.querySelector('.date')
let today=new Date()
dateDiv.innerHTML = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  //Abdelhafid's db
  // ✅ Your real Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDHpfE1t6XRekzJ1PMq6Y2axi7-S50U0Xc",
    authDomain: "foyer-status-e0f92.firebaseapp.com",
    databaseURL: "https://foyer-status-e0f92-default-rtdb.firebaseio.com",
    projectId: "foyer-status-e0f92",
    storageBucket: "foyer-status-e0f92.firebasestorage.app",
    messagingSenderId: "447371189360",
    appId: "1:447371189360:web:7a38512cc89bdcf0c2e8b5",
    measurementId: "G-FNXW00259E"
  };
  
  // ✅ Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  const statusEl = document.querySelector("#shop-status");
  
  // ✅ Listen to database updates in real-time
  db.ref("foyer status").on("value", (snapshot) => {
    const status = snapshot.val();
  
    if (status === "open") {
      statusEl.textContent = "Opened ";
      statusEl.className = "open";
    } 
  else {
      statusEl.textContent = "Closed ";
      statusEl.className = "closed";
    }
  });
//end Abdelhafid's db  
const nav=document.querySelector("nav")
const header=document.querySelector("header")
function openNav(){
nav.classList.toggle("nav-open")
header.classList.toggle("nav-open")
}
function closeNav(){
    openNav()
}
function view(img){
    document.getElementById("viewedImg").src=`${img.src}`;
    document.querySelector(".view-img").style.left="50%";
    document.querySelector("main").style.filter="blur(1.2rem)";
    document.querySelector("header").style.filter="blur(1.2rem)";
    document.querySelector("body").style.overflowY="hidden";
    document.querySelector("footer").style.filter="blur(1.2rem)";

}
function unview(){
    document.querySelector(".view-img").style.left="-700px";
    document.querySelector("main").style.filter="blur()";
    document.querySelector("header").style.filter="blur()";
    document.querySelector("body").style.overflowY="auto"
    document.getElementById("viewedImg").src=``;
    document.querySelector("footer").style.filter="blur()";

}
const sendBtn=document.querySelector("#sendcontact")
function sendMsg(){
  const firstNameEle=document.querySelector("#firstname")
const familyNameEle=document.querySelector("#familyname")
const emailEle=document.querySelector("#email")
const msgEle=document.querySelector("#message")
const body={
  first_name:firstNameEle.value,
  family_name:familyNameEle.value,
  email:emailEle.value,
  message:msgEle.value
}
axios.post(`https://foyer-9vzz.onrender.com/comment`,body)
}
sendBtn.addEventListener("click",(e)=>{
  sendMsg()
})

