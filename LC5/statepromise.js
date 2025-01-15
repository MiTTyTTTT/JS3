const promise = new Promise ((resolve,rejects)=> {
    const res = true;

    if(res){
        resolve("Resolbed!");
    }else{
        rejects(error("Fatal Error"));
    }
}) ;

promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
)