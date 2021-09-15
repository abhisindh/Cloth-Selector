text=`SC_001.jpg
SC_002.jpg
SC_003.jpg
SC_004.jpg
SC_005.jpg
SC_006.jpg
SC_007.jpg
SC_008.jpg
SC_009.jpg
SC_010.jpg
SC_011.jpg
SC_012.jpg
SC_013.jpg
SC_014.jpg
SC_015.jpg
SC_016.jpg`

// TEST
obj={}
JSON.stringify(text)
arr=text.split("\n")
for (i=0;i<arr.length;i++){
    obj[arr[i]]=Date.now()-(86400000*(arr.length-i-1))
}
console.log(JSON.stringify(obj).replace(/'/g, '"'));