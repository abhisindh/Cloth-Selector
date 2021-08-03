selectedSet={}
function changePage(from,to){
    firstPage=document.getElementsByClassName(from)
    secondPage=document.getElementsByClassName(to)
    for (let i=0;i<firstPage.length;i++){
        firstPage[i].style.display="none";
    }
    for (let i=0;i<secondPage.length;i++){
        secondPage[i].style.display="grid"
    }
}

function back(){
    location.reload()
    
}
function showList(name){
    selectSet(name);
    for (item in selectedSet){
        let figure=document.createElement("figure")

        path="../images/shirt/"+item
        let img=document.createElement("img")
        img.src=path
        figure.appendChild(img)
        img.classList.add("shirt-icon")
        img.classList.add("second-page")
        img.id=item

        let caption=document.createElement('figcaption')
        caption.innerHTML=selectedSet.item
        figure.appendChild(caption)

        list=document.getElementById('shirtList')
        list.insertBefore(figure, list.childNodes[0])
    }
    changePage('first-page','second-page')
}
function selectItem(item){
    console.log(item.id);
    console.log(new Date());

}




