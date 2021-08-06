
function displaySets(){
    for (i in collectionObj){
        var data=localStorage['set'+i]

        
    
            var div=document.createElement('div')
            div.classList.add('box')
            document.body.insertBefore(div,backup)

            var p=document.createElement('p')
            p.innerHTML='set'+i
            div.appendChild(p)

            var textarea=document.createElement('textarea')
            textarea.innerHTML=data
            div.appendChild(textarea)

            var input=document.createElement('input')
            input.placeholder='set'+i
            input.id='set'+i+'-input'
            div.appendChild(input)

            var button=document.createElement('button')
            button.id='set'+i
            button.innerHTML='update'
            button.setAttribute('onclick','getValue(this.id)')
            div.appendChild(button)

            var loadButton=document.createElement('button')
            loadButton.id='load'+i
            loadButton.innerHTML='load from backup'
            loadButton.setAttribute('onclick','loadFromBackupOne(this.id)')
            div.appendChild(loadButton)

            var saveButton=document.createElement('button')
            saveButton.id='save'+i
            saveButton.innerHTML='save to backup'
            saveButton.setAttribute('onclick','saveToBackupOne(this.id)')
            div.appendChild(saveButton)
        
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
    for (i in collectionObj){
    localStorage.setItem('back'+i,localStorage.getItem('set'+i))
    }
    }
}
function saveToBackupOne(id){
    num=id.replace('save','')
    console.log(num);
    if (confirm('Sure to backup current data?')){
    
    localStorage.setItem('back'+num,localStorage.getItem('set'+num))
    
    }
}
function loadFromBackup(){
    if (confirm('Sure to load last backedup data?')){
        for (i in collectionObj){
        checkBackupEmpty(i)
        }
        }
    location=location
    
}
function loadFromBackupOne(id){
    num=id.replace('load','')
    console.log(num);
    if (confirm('Sure to load last backedup data?')){
        checkBackupEmpty(num)
        }
}
function checkBackupEmpty(num){
    var set='set'+num
    var back='back'+num
    if (localStorage.getItem(back)){
        localStorage.setItem(set,localStorage.getItem(back))

}}