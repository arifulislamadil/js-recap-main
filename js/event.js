document.getElementById("funevent").addEventListener("click",function(){
    document.getElementById("para").innerText="hello this is from inner text"
})

const directFun=()=>{
    document.getElementById("para").innerText="from direct Fun"
}

const inputChange =()=>{
   let inputBtn= document.getElementById("input-field");
   const inputField = inputBtn.value;
  let p = document.getElementById('para1');
  p.innerText=inputField;
  inputBtn.value=""


}