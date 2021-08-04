function displaySet(set){
    let setDisp=document.getElementById(set+'Disp')
    setDisp.innerHTML=(localStorage.getItem(set))
    console.log(setOneDisp.innerHTML);
}
function getValue(set){
    let field=document.getElementById(set+'-input')
    console.log(field.value);
    updateSet(set,field.value)
}

function updateSet(name,set){
    if (confirm('Are you sure to update'+name)){
    localStorage.setItem(name,set)
}}
var setOneInit={'IMG_20210709_200308.jpg': '.', 'IMG_20210709_200357.jpg': '.', 'IMG_20210709_200340.jpg': '.', 'IMG_20210709_200408.jpg': '.', 'IMG_20210709_200419.jpg': '.', 'IMG_20210709_200432.jpg': '.', 'IMG_20210709_200445.jpg': '.', 'IMG_20210709_200454.jpg': '.', 'IMG_20210709_200501.jpg': '.', 'IMG_20210709_200512.jpg': '.', 'IMG_20210709_200521.jpg': '.', 'IMG_20210709_200536.jpg': '.', 'IMG_20210709_200545.jpg': '.', 'IMG_20210709_200552.jpg': '.', 'IMG_20210709_200600.jpg': '.', 'IMG_20210709_200648.jpg': '.', 'IMG_20210709_200832.jpg': '.', 'IMG_20210709_200913.jpg': '.', 'IMG_20210712_092905.jpg': '.'}   
var setTwoInit={'IMG_20210804_150133.jpg': '.', 'IMG_20210804_150151.jpg': '.', 'IMG_20210804_150215.jpg': '.', 'IMG_20210804_150226.jpg': '.', 'IMG_20210804_150457.jpg': '.', 'IMG_20210804_150509.jpg': '.', 'IMG_20210804_150519.jpg': '.'}

function copy(set){
 copyToClp(JSON.stringify(set))  
 console.log(set); 
}