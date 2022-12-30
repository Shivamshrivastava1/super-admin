let list2 = document.getElementById('list2');
let list1 = document.getElementById('list1');
let dis = document.getElementsByClassName('sponspore-display');
let diss = document.getElementsByClassName('sponspored-display-1');
let list3 = document.getElementById('list3');
let list4 = document.getElementById('list4');
let list5 = document.getElementById('list5');
let list6 = document.getElementById('list6');

list2.addEventListener("click",()=>{
    dis[0].style.display = "flex";
    dis[1].style.display = "flex";
    diss[0].style.display = "none";
    diss[1].style.display = "none";
    diss[2].style.display = "none";
    diss[3].style.display = "none";
    dis[2].style.display = "none";
    dis[3].style.display = "none";
})

list1.addEventListener("click",()=>{
    dis[0].style.display = "none";
    dis[1].style.display = "none";
    diss[2].style.display = "none";
    diss[3].style.display = "none";
    diss[0].style.display = "flex";
    diss[1].style.display = "flex";
    dis[2].style.display = "none";
    dis[3].style.display = "none";
    dis[4].style.display = "none";
    dis[5].style.display = "none";
    diss[4].style.display = "none";
    diss[5].style.display = "none";
})

list3.addEventListener("click",()=>{
    diss[0].style.display = "none";
    diss[1].style.display = "none";
    dis[0].style.display = "none";
    dis[1].style.display = "none";
    diss[2].style.display = "flex";
    diss[3].style.display = "flex";
    dis[2].style.display = "none";
    dis[3].style.display = "none";
    dis[4].style.display = "none";
    dis[5].style.display = "none";
    diss[4].style.display = "none";
    diss[5].style.display = "none";
})

list4.addEventListener("click",()=>{
    diss[0].style.display = "none";
    diss[1].style.display = "none";
    dis[0].style.display = "none";
    dis[1].style.display = "none";
    diss[2].style.display = "none";
    diss[3].style.display = "none";
    dis[2].style.display = "flex";
    dis[3].style.display = "flex";
    dis[4].style.display = "none";
    dis[5].style.display = "none";
    diss[4].style.display = "none";
    diss[5].style.display = "none";
})

list5.addEventListener("click",()=>{
    diss[0].style.display = "none";
    diss[1].style.display = "none";
    dis[0].style.display = "none";
    dis[1].style.display = "none";
    diss[2].style.display = "none";
    diss[3].style.display = "none";
    dis[2].style.display = "none";
    dis[3].style.display = "none";
    dis[4].style.display = "none";
    dis[5].style.display = "none";
    diss[4].style.display = "flex";
    diss[5].style.display = "flex";
})

list6.addEventListener("click",()=>{
    diss[0].style.display = "none";
    diss[1].style.display = "none";
    dis[0].style.display = "none";
    dis[1].style.display = "none";
    diss[2].style.display = "none";
    diss[3].style.display = "none";
    dis[2].style.display = "none";
    dis[3].style.display = "none";
    dis[4].style.display = "flex";
    dis[5].style.display = "flex";
    diss[4].style.display = "none";
    diss[5].style.display = "none";
})