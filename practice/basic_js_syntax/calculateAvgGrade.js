
function challenge3(score){
    let totalScore = 0;

    for (let i = 0; i<score.length; i++){
        totalScore += score[i];
    }
    let avgGrade = totalScore / score.length;
    
    return avgGrade;
}

console.log(challenge3([10,20]));