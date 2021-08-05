
function reset(){
    if (confirm('Are you sure you want to reset the order of list items?')){
        for (let i in setOneInit){
            setOneInit[i]=Date.now()
        }
        console.log(setOneInit);
        for(let i in setTwoInit){
            setTwoInit[i]=Date.now()
        }
        for(let i in setTwoInit){
            setTwoInit[i]=Date.now()
        }for(let i in setThreeInit){
            setThreeInit[i]=Date.now()
        }
            
        localStorage.setItem('setOne',JSON.stringify(setOneInit));
        localStorage.setItem('setTwo',JSON.stringify(setTwoInit));
        localStorage.setItem('setThree',JSON.stringify(setThreeInit));
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
function copyToClp(txt){
    var m = document;
    txt = m.createTextNode(txt);
    var w = window;
    var b = m.body;
    b.appendChild(txt);
    if (b.createTextRange) {
        var d = b.createTextRange();
        d.moveToElementText(txt);
        d.select();
        m.execCommand('copy');
    } 
    else {
        var d = m.createRange();
        var g = w.getSelection;
        d.selectNodeContents(txt);
        g().removeAllRanges();
        g().addRange(d);
        m.execCommand('copy');
        g().removeAllRanges();
    }
    txt.remove();
}
