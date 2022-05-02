// write js code here corresponding to favourites.html
var fav=JSON.parse(localStorage.getItem("Favourites"));

fav.map(function(elem){
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
    td6.innerText="Remove as Favourite";
    td6.style.color="red";
    td6.style.cursor="pointer"
    td6.addEventListener("click",function(){
        removeToFav(elem)
    })

    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);
})
function removeToFav(elem,index){
    fav.splice(index,1);
    localStorage.setItem("Favourites",JSON.stringify(fav));
    window.location.reload();
}