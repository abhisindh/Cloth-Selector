text = `IMG_20210818_091647.jpg
IMG_20210818_091711.jpg
IMG_20210818_091724.jpg
IMG_20210818_091746.jpg
IMG_20210818_091815.jpg
IMG_20210818_100349.jpg
IMG_20210818_100733.jpg
IMG_20210818_100751.jpg`

// TEST
obj={}
JSON.stringify(text)
arr=text.split("\n")
for (i=0;i<arr.length;i++){
    obj[arr[i]]=Date.now()
}
console.log(JSON.stringify(obj).replace(/'/g, '"'));