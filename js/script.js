var setOne=['IMG_20210709_200308.jpg', 'IMG_20210709_200357.jpg', 'IMG_20210709_200340.jpg', 'IMG_20210709_200408.jpg', 'IMG_20210709_200419.jpg', 'IMG_20210709_200432.jpg', 'IMG_20210709_200445.jpg', 'IMG_20210709_200454.jpg', 'IMG_20210709_200501.jpg', 'IMG_20210709_200512.jpg', 'IMG_20210709_200521.jpg', 'IMG_20210709_200536.jpg', 'IMG_20210709_200545.jpg', 'IMG_20210709_200552.jpg', 'IMG_20210709_200600.jpg', 'IMG_20210709_200648.jpg', 'IMG_20210709_200832.jpg', 'IMG_20210709_200913.jpg','IMG_20210712_092905.jpg']
    
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
function showList(set,name){
    for (let i=0;i<set.length;i++){
        path="../images/"+name+'/'+set[i]
        let img=document.createElement("img")
        img.src=path
        img.classList.add("shirt-icon")
        list=document.getElementById('shirtList')
        list.insertBefore(img, list.childNodes[0])

    }
    changePage('first-page','second-page')
}