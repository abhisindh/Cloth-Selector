text=`Z_1.png
Z_2.png
Z_3.png
Z_4.png
Z_5.png
Z_6.png`

// TEST
obj={}
JSON.stringify(text)
arr=text.split("\n")
for (i=0;i<arr.length;i++){
    obj[arr[i]]=Date.now()-(86400000*(arr.length-i-1))
}
console.log(JSON.stringify(obj).replace(/'/g, '"'));