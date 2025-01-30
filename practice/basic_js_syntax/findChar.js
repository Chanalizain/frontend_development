function challenge4(string, char){
    let quantity = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i]==char){
            quantity += 1;
        }
    }
    
    return quantity;
}

console.log(challenge4("hello", "l"));