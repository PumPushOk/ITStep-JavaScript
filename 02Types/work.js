const tests = [
    { question: '2+2=4', answer: true, mark: 1 },
    { question: '2*2=8', answer: false, mark: 1 },
    { question: '20/4=5', answer: true, mark: 2 },
    { question: '2*5*7=72', answer: false, mark: 4 },
    { question: '15*15+2=227', answer: true, mark: 5 },
];

let gamesPlayed = 0;
let trueAnswers = [];
let gamesPoints = [];

while (true) {
    const testAgain = confirm('Test again?');

    let testsLength = tests.length;
    let points = 0;
    trueAnswers[gamesPlayed] = [];

    if (!testAgain)
        break;

    for (let i = 0; i < testsLength; i++) {
        const answer = confirm(`[${i + 1}/${testsLength}]    ${tests[i].question}`);

        if (answer === tests[i].answer) {
            alert('Right!');
            points += tests[i].mark;
            console.log(gamesPlayed);
            trueAnswers[gamesPlayed].push(i+1);
        }
        else {
            alert('Wrong');
        }
    }

    alert(`You have ${points} points!`);
    gamesPoints.push(points);
    gamesPlayed++;
}

let statistic = `Your statistic:\nGames played:${gamesPlayed}\n`;

for (let i = 0; i < gamesPlayed; i++) {
    let rightAnswersString = trueAnswers[i].join(', ');

    statistic += `${i + 1}. Points: ${gamesPoints[i]}, Right answers: ${trueAnswers[i].length}, [${rightAnswersString}]\n`;
}

alert(statistic);