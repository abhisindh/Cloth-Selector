text = `IMG_20210815_181340.jpg
IMG_20210815_181520.jpg
IMG_20210815_181601.jpg
IMG_20210815_181638.jpg`

// TEST
obj={}
JSON.stringify(text)
arr=text.split("\n")
for (i=0;i<arr.length;i++){
    obj[arr[i]]=Date.now()
}
console.log(JSON.stringify(obj).replace(/'/g, '"'));