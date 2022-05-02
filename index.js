// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myFun);
var jobArr=JSON.parse(localStorage.getItem("schedule"))||[];
function myFun(){
    event.preventDefault();
    var obj={
     num: document.querySelector("#matchNum").value,
     teamA: document.querySelector("#teamA").value,
     teamB: document.querySelector("#teamB").value,
     date: document.querySelector("#date").value,
     venue: document.querySelector("#venue").value,
    }
    jobArr.push(obj);
    localStorage.setItem("schedule",JSON.stringify(jobArr));
   console.log(obj);
    
}