const allBtns = document.querySelectorAll(".pass");
let timeouts = "";
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const generateRandomPasswordBtn = document.querySelector(".btn");

allBtns.forEach((btn)=>{
  btn.addEventListener("click", ()=>{
    copyText(btn);
    console.log("btn-called");
  });
});


async function copyText(btn) {
  const text = btn.textContent;

  try{
    await navigator.clipboard.writeText(text);
    console.log("password copied");
  }
  catch(err){
    console.error("Failed to copy: ", err);
  }

  displayCopiedMsg();
  
}



function timerFunction(){
  return new Promise((resolve, reject)=>{
    clearTimeout(timeouts);
    const timeoutId = setTimeout(()=>{
      console.log("hi");
      resolve("time passed successfully")
    }, 1000)
    timeouts = timeoutId;
  })
}



async function displayCopiedMsg(){
  try{
  console.log("1");
  const copyMsgEl = document.querySelector(".copy-msg");
  copyMsgEl.classList.contains("show") == false && copyMsgEl.classList.add("show");
  const setTimer = await timerFunction();
  console.log("2");
  copyMsgEl.classList.contains("show")&& copyMsgEl.classList.remove("show");
  }catch(err){
    console.log(err);
  }
}

generateRandomPasswordBtn.addEventListener("click",()=>{
  displayRandomPasswords();
})

function getRandomNumber(){
  return Math.floor(Math.random()*characters.length);
}

function getRandomPassword(){
  let password = [];
  for(let i=0; i<12; i++){
    password.push(characters[getRandomNumber()]);
  }

  return password.join("");
}

function displayRandomPasswords(){
  
  const password1 = getRandomPassword();
  const password2 = getRandomPassword();

  document.getElementById("pass-1").textContent = password1;
  document.getElementById("pass-2").textContent = password2;

}
