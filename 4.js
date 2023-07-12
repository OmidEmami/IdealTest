const proxyResult={}
const proxyMain = new Proxy(proxyResult,{
    get : function(proxyResult,prop){
        return "404"
    }
})
console.log(proxyMain.omid)
console.log(proxyMain.Ali)