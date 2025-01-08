function criticalCode(){
    throw "throwing an excption";
}

function logError (theExcption){
    console.log(theExcption);
}

console.log("\n***********try..catch**********\n")

try{
    criticalCode()
}catch(ex){
    console.log("Got an error");
    logError(ex)
}

console.log("\n**********Throwing in try....Catch*****\n")
try{
    throw "An Exception that ins thrown ever time"
} catch (ex){
    console.log("Got an error")
    logError(ex)
}

console.log("\n***************try..catch...Finally*********\n")
try{
    criticalCode()
}catch(ex){
    console.log("Got an error")
        logError(ex)
    }finally{
        console.log("code that always will run")
    }

    function hello () {
        console.log("\n**********Throwing Exception*********\n")
    }