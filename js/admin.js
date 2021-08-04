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
    localStorage.setItem(name,set)
}