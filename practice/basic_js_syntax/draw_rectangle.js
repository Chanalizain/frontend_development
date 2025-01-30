function challenge1(width, height) {
    let rectangleString = '';

    for (let i = 0; i < height; i++) {  // Loop for height
        for (let j = 0; j < width; j++) {  // Loop for width
            rectangleString += '*';  
        }
        rectangleString += '\n';  
    }

    return rectangleString;
}

console.log(challenge1(3, 4));
