const path = require("path")
console.log(path.dirname("C:/Users/LEGION/Desktop/Batches/Chrome-OS/Backend/path/index.js"))
console.log(path.extname("C:/Users/LEGION/Desktop/Batches/Chrome-OS/Backend/path/index.js"))
console.log(path.basename("C:/Users/LEGION/Desktop/Batches/Chrome-OS/Backend/path/index.js"))
const anypath = path.parse("C:/Users/xcgbhbzfj/asdhgv-OS/Backend/path/index.js")
console.log(anypath)
console.log(anypath.name)
console.log(anypath.base)
const ppath = path.format({
    root:'/ignored',
    dir:'/Sandeep/Swapnil/taataa/byebye',
    base:'node.js'
})
path.format({
    root:'/ignored',
    dir:'/Sandeep/Swapnil/taataa/byebye',
    base:'node.js',
    name :'/ignored',
    ext:'/ignored'
})
console.log(ppath)



