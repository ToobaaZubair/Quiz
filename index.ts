import inquirer from "inquirer";
// const info= await inquirer.prompt([{
//     type:"list",
//     name:"choice",
//     choices:["Quiz Start","Exit"]
   
// }])
// if(info.choice==="Quiz"){
//     const quiz=await inquirer.prompt([{
//         type:"list",
//         name:"Quest#1",
//         message:"Who is the founder of Pakistan?",
//         choices:["Allama Iqbal","Hafeez jalahndri","Quaid e Azam","Benazir Bhutto"],
//         answer:"Quaid e Azam"
//     },{
//         type:"list",
//         name:"Quest#2",
//         message:"Who is the Prime Minister of Pakistan",
//         choices:["Imran Ahmed Khan Niazi","Bilawal Bhutto","nawaz shrif","Asif Zardari"],
//         answer:"Imran Ahmed Khan Niazi"
//     },{
//         type:"list",
//         name:"Quest#3",
//         message:"What is the currency of Pakistan?",
//         choices:["USD","EUR","PKR","AUD"],
//         answer:"PKR"
//     },{
//         type:"list",
//         name:"Quest#4",
//         message:"What is the national sports of Pakistan?",
//         choices:["Hockey","Cricket","Tennis","Football"],
//         answer:"Hockey"

//     },{
//         type:"list",
//         name:"Quest#5",
//         message:"Who is the captian of Pakistan,s Cricket team",
//         choices:["Haris Rauf","Shaheen Afridi","Babar Azam","Rizwan"],
//         answer:"Babar Azam"
//     }])
   
//     function calculateScore(answers: any): void {
//         let score = 0;
//         for (const question of quiz) {
//             const userAnswer = answers[question.name];
//             if (userAnswer === question.answer) {
//                 score++;
//             }
//         }

// }
// async function runQuiz() {
//     try {
//         const answers = await inquirer.prompt(quiz);
//         const score = calculateScore(answers);
//         console.log('Your score:', score, 'out of', quiz.length);
//     } catch (error) {
//         console.error('Error occurred:', error);
//     }
// }

// runQuiz();
// }
// if(info.choice==="Exit"){
//     console.log(`Exiting......`);
    
// }



async function main() {
    const info = await inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Choose an option:",
            choices: ["Quiz Start", "Exit"]
        }
    ]);

    if (info.choice === "Quiz Start") {
        const quiz = [
            {
                type: "list",
                name: "Quest#1",
                message: "Who is the founder of Pakistan?",
                choices: ["Allama Iqbal", "Hafeez jalandhari", "Quaid e Azam", "Benazir Bhutto"],
                answer: "Quaid e Azam"
            },
            {
                type: "list",
                name: "Quest#2",
                message: "Who is the Prime Minister of Pakistan?",
                choices: ["Imran Ahmed Khan Niazi", "Bilawal Bhutto", "Nawaz Sharif", "Asif Zardari"],
                answer: "Imran Ahmed Khan Niazi"
            },
            {
                type: "list",
                name: "Quest#3",
                message: "What is the currency of Pakistan?",
                choices: ["USD", "EUR", "PKR", "AUD"],
                answer: "PKR"
            },
            {
                type: "list",
                name: "Quest#4",
                message: "What is the national sports of Pakistan?",
                choices: ["Hockey", "Cricket", "Tennis", "Football"],
                answer: "Hockey"
            },
            {
                type: "list",
                name: "Quest#5",
                message: "Who is the captain of Pakistan's Cricket team?",
                choices: ["Haris Rauf", "Shaheen Afridi", "Babar Azam", "Rizwan"],
                answer: "Babar Azam"
            }
        ];

        async function runQuiz() {
          
                const answers = await inquirer.prompt(quiz);
                const score = calculateScore(answers);
                console.log('Your score:', score, 'out of', quiz.length);
           
        }

        function calculateScore(answers: any): number {
            let score = 0;
            for (const question of quiz) {
                const userAnswer = answers[question.name];
                if (userAnswer === question.answer) {
                    score++;
                }
            }
            return score;
        }

        await runQuiz();
    } else if (info.choice === "Exit") {
        console.log("Exiting...");
    }
}

main();
