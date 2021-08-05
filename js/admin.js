
function displaySets(){
    for (i in collectionObj){
        var data=localStorage[i]

        
    
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
   
            div.appendChild(button)
        
    }
}

function getValue(set){
    let field=document.getElementById(set+'-input')

    updateSet(set,field.value)
}

function updateSet(name,set){
    if (confirm('Are you sure to update '+name)){
    localStorage.setItem(name,set)
}}

function copy(set){
 copyToClp(set)  

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
        checkBackupEmpty('One')
        checkBackupEmpty('Two')
        checkBackupEmpty('Three')
        }
    
}
function checkBackupEmpty(num){
    var set='set'+num
    var back='back'+num
    if (localStorage.getItem(back)!=null | localStorage.getItem(back)!=''){
        localStorage.setItem(set,localStorage.getItem(back))
    }

}