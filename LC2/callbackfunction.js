function createQuote(quote,callback){
    let myQuote = "Like I aliwat say, "+quote
    callback(myQuote)
}

function logQuote(quote){
    console.log(quote+' yes...')
}

createQuote(" you will hetting better!", logQuote )