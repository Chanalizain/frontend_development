function challenge6 (votes){
    countA = 0;
    countB = 0;
    countC = 0;

    for(let i = 0; i < votes.length; i++){
        if(votes[i]== "A"){
            countA += 1;
        }
        if(votes[i]== "B"){
            countB += 1;
        }
        if(votes[i]== "C"){
            countC += 1;
        }
    }

    // Determine the winner
    if (countA > countB && countA > countC) {
        return "A";
    } else if (countB > countA && countB > countC) {
        return "B";
    } else if (countC > countA && countC > countB) {
        return "C";
    } else {
        return "Tie"; 
    }
}
console.log(challenge6(["A", "A", "B", "C"]));