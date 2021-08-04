
function reset(){
    if (confirm('Are you sure you want to reset the order of list items?')){
    var setOne={'IMG_20210709_200308.jpg': '.', 'IMG_20210709_200357.jpg': '.', 'IMG_20210709_200340.jpg': '.', 'IMG_20210709_200408.jpg': '.', 'IMG_20210709_200419.jpg': '.', 'IMG_20210709_200432.jpg': '.', 'IMG_20210709_200445.jpg': '.', 'IMG_20210709_200454.jpg': '.', 'IMG_20210709_200501.jpg': '.', 'IMG_20210709_200512.jpg': '.', 'IMG_20210709_200521.jpg': '.', 'IMG_20210709_200536.jpg': '.', 'IMG_20210709_200545.jpg': '.', 'IMG_20210709_200552.jpg': '.', 'IMG_20210709_200600.jpg': '.', 'IMG_20210709_200648.jpg': '.', 'IMG_20210709_200832.jpg': '.', 'IMG_20210709_200913.jpg': '.', 'IMG_20210712_092905.jpg': '.'}   
    var setTwo={'IMG_20210804_150133.jpg': '.', 'IMG_20210804_150151.jpg': '.', 'IMG_20210804_150215.jpg': '.', 'IMG_20210804_150226.jpg': '.', 'IMG_20210804_150457.jpg': '.', 'IMG_20210804_150509.jpg': '.', 'IMG_20210804_150519.jpg': '.'}
    const x=Date.now()
    for (i in setOne){
        setOne[i]=x
        
    }
    for (i in setTwo){
        setTwo[i]=x
    }
    localStorage.setItem('setOne',JSON.stringify(setOne));
    localStorage.setItem('setTwo',JSON.stringify(setTwo));
    }
    location=location
    
}
function sortSet(set){
    const sortable = Object.fromEntries(
        Object.entries(set).sort(([,a],[,b]) => b-a)
    );
    
    return(sortable);
}
   
function selectSet(set){
    parsedSet=JSON.parse(localStorage.getItem(set));
    selectedSet=sortSet(parsedSet)
    selectedSetName=set;
    
    
}
