function changePage(from,to){
    console.log(from,to);
    firstPage=document.getElementsByClassName(from)
    secondPage=document.getElementsByClassName(to)
    for (let i=0;i<firstPage.length;i++){
        firstPage[i].style.display="none";
    }
    for (let i=0;i<secondPage.length;i++){
        secondPage[i].style.display="grid"
    }
}
function getList