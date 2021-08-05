function displaySets(){
    for (i in localStorage){
        var data=localStorage[i]
        if (typeof data=='string' && i.includes('set')){
           // console.log(i+'='+data);
    
            var div=document.createElement('div')
            div.classList.add('box')
            document.body.insertBefore(div,backup)
    
            var textarea=document.createElement('textarea')
            textarea.innerHTML=data
            div.appendChild(textarea)

            var input=document.createElement('input')
            input.placeholder=i
            input.id=i+'-input'
            div.appendChild(input)

            var button=document.createElement('button')
            button.id=i
            button.innerHTML='update'
            button.setAttribute('onclick','getValue(this.id)')
            //console.log(button.id);
            div.appendChild(button)
        }
    }
}

function getValue(set){
    let field=document.getElementById(set+'-input')
    console.log(field.value);
    updateSet(set,field.value)
}

function updateSet(name,set){
    if (confirm('Are you sure to update '+name)){
    localStorage.setItem(name,set)
}}
var setOneInit={'IMG_20210709_200308.jpg': '.', 'IMG_20210709_200357.jpg': '.', 'IMG_20210709_200340.jpg': '.', 'IMG_20210709_200408.jpg': '.', 'IMG_20210709_200419.jpg': '.', 'IMG_20210709_200432.jpg': '.', 'IMG_20210709_200445.jpg': '.', 'IMG_20210709_200454.jpg': '.', 'IMG_20210709_200501.jpg': '.', 'IMG_20210709_200512.jpg': '.', 'IMG_20210709_200521.jpg': '.', 'IMG_20210709_200536.jpg': '.', 'IMG_20210709_200545.jpg': '.', 'IMG_20210709_200552.jpg': '.', 'IMG_20210709_200600.jpg': '.', 'IMG_20210709_200648.jpg': '.', 'IMG_20210709_200832.jpg': '.', 'IMG_20210709_200913.jpg': '.', 'IMG_20210712_092905.jpg': '.'}   
var setTwoInit={'IMG_20210804_150133.jpg': '.', 'IMG_20210804_150151.jpg': '.', 'IMG_20210804_150215.jpg': '.', 'IMG_20210804_150226.jpg': '.', 'IMG_20210804_150457.jpg': '.', 'IMG_20210804_150509.jpg': '.', 'IMG_20210804_150519.jpg': '.'}
var setThreeInit={'IMG_20210804_150151.jpg': '.', 'IMG_20210804_150215.jpg': '.', 'IMG_20210804_150226.jpg': '.', 'IMG_20210804_150457.jpg': '.', 'IMG_20210804_150509.jpg': '.', 'IMG_20210804_150519.jpg': '.'}
var backOne=localStorage.getItem('backOne')
var backTwo=localStorage.getItem('backTwo')
function copy(set){
 copyToClp(set)  
 console.log(set); 
}
function saveToBackup(){
    if (confirm('Sure to backup current data?')){
    localStorage.setItem('backOne',localStorage.getItem('setOne'))
    localStorage.setItem('backTwo',localStorage.getItem('setTwo'))
    localStorage.setItem('backThree',localStorage.getItem('setThree'))
    }
}
function loadFromBackup(){
    if (confirm('Sure to load last backedup data?')){
        localStorage.setItem('setOne',localStorage.getItem('backOne'))
        localStorage.setItem('setTwo',localStorage.getItem('backTwo'))
        localStorage.setItem('setThree',localStorage.getItem('backThree'))
        }
    location=location
}