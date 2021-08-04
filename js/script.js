selectedSet={}
selectedSetName=''
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
    selectedSetName=name
    selectSet(name);
    console.log(selectedSet);
    for (item in selectedSet){
        let figure=document.createElement("figure")

        path="../images/shirt/"+item
        let img=document.createElement("img")
        img.src=path
        figure.appendChild(img)
        img.classList.add("shirt-icon")
        img.classList.add("second-page")
        img.id=item
        img.setAttribute('onclick','selectItem(this.id)')

        let caption=document.createElement('figcaption')
        caption.innerHTML=new Date(selectedSet[item]).toString().replace('GMT+0530 (India Standard Time)','')
        figure.appendChild(caption)

        list=document.getElementById('shirtList')
        list.insertBefore(figure, list.childNodes[0])
    }
    changePage('first-page','second-page')
}
function selectItem(item){
    if (confirm('Are you sure to select item last worn on '+new Date(selectedSet[item]))){
    console.log(item);
    changeValue(item)}


}
function changeValue(item){
    selectedSet[item]=Date.now();
    console.log(selectedSet[item]);
    localStorage.setItem(selectedSetName,JSON.stringify(selectedSet))
    showList(selectedSetName)
    location=location

}

function JSalert(){
	swal({   title: "Your account will be deleted permanently!",   
    text: "Are you sure to proceed?",   
    type: "warning",   
    showCancelButton: true,   
    confirmButtonColor: "#DD6B55",   
    confirmButtonText: "Yes, Remove My Account!",   
    cancelButtonText: "No, I am not sure!",   
    closeOnConfirm: false,   
    closeOnCancel: false }, 
    function(isConfirm){   
        if (isConfirm) 
    {   
        swal("Account Removed!", "Your account is removed permanently!", "success");   
        } 
        else {     
            swal("Hurray", "Account is not removed!", "error");   
            } });
}



