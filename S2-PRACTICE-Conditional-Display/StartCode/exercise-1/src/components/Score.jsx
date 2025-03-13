import React from "react";


const Score = ({courseName, result}) => {
    // Function to determine class for score
    const getScoreClass = (score) => {
        return score < 50 ? "warning" : ""; 
    };
    // Function to calculate statistics
    const calculateStatistics = (scores) => {
        if (scores.length === 0) return { average: 0, min: 0, max: 0 };

        const total = scores.reduce((sum, score) => sum + score, 0);
        const average = (total / scores.length).toFixed(2); // 2 decimal places
        const min = Math.min(...scores);
        const max = Math.max(...scores);

        return { average, min, max };
    };
    

    // Extract scores from result array
    const scores = result.map((student) => student.score);
    const { average, min, max } = calculateStatistics(scores);
    return(
        <div >
            <h2>{courseName}</h2>
            <thead>
                <tr>
                    <th>First name </th>
                    <th>Last name </th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {result.map((student, index) => (
                    <tr key={index}>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td className={getScoreClass(student.score)}>{student.score}</td>
                    </tr>
                ))}
            </tbody>

            {/*statistic panel*/}
            
            <h3>Statistic</h3>
            <div className="statistiContainer">
                <p><strong>Avg: </strong>{average}</p>
                <p><strong>Min: </strong>{average}</p>
                <p><strong>Max: </strong>{average}</p>
            </div>
        </div>
    );
};
export default Score;
