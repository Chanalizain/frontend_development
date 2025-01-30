function challenge5(sentence){
    let wordCount = 1;
    for (let i = 0; i < sentence.length; i++){
       if(sentence[i]==" "){
        wordCount +=1;
       } 
    }
    
    return wordCount;
}

console.log(challenge5("don't space b4 x after the sentence"))