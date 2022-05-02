// write js code here corresponding to matches.html
var jobArr=JSON.parse(localStorage.getItem("schedule"));
var fav=JSON.parse(localStorage.getItem("Favourites"))||[];
  
function hfilter(){
    var select= document.querySelector("#filterVenue").value;
 var filterList = jobArr.filter(function(elem){
        return elem.venue==select;
    })
}

jobArr.map(function(elem){
    var tr= document.createElement("tr");
    var td1= document.createElement("td");
    var td2= document.createElement("td");
    var td3= document.createElement("td");
    var td4= document.createElement("td");
    var td5= document.createElement("td");
    var td6= document.createElement("td");
    

    td1.innerText=elem.num;
    td2.innerText=elem.teamA;
    td3.innerText=elem.teamB;
    td4.innerText=elem.date;
    td5.innerText=elem.venue;
    td6.innerText="Add as Favourites";
    td6.style.color="green";
    td6.style.cursor="pointer"
    td6.addEventListener("click",function(){
        addToFav(elem)
    })

    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);
})
function addToFav(elem){
    fav.push(elem);
    localStorage.setItem("Favourites",JSON.stringify(fav));

}