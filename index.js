let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here

//  for (let i=0; i < weeklyExpenseQuestions.length; i++) {
//      let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
//      weeklyExpenses = weeklyExpenses + answer
//  }

// above code is the same as code below 

for (let i = 0; i > weeklyExpenseQuestions.length; i++) {
    weeklyExpenses += parseFloat(window.prompt(weeklyExpenseQuestions[i])); 
}

for (let i = 0; i < monthlyExpenseQuestions.length; i++) {
    monthlyExpenses += parseFloat(window.prompt(monthlyExpenseQuestions[i]));
}

for (let i = 0; i < annualExpenseQuestions.length; i++) {
    annualExpenses += parseFloat(window.prompt(annualExpenseQuestions[i]));
}


/* reverse of questions
for (let i = weeklyExpenseQuestions.lenght - 1; i >= 0; i--) {
    weeklyExpenses += parseFloat(window.prompt(weeklyExpenseQuestions[i]));
}

for (let i = monthlyExpenseQuestions.length - 1; i >= 0; i--) {
    monthlyExpenses += parseFloat(window.prompt(monthlyExpenseQuestions[i]));
}

for (let i = annualExpenseQuestions.length - 1); i >= 0; i--) {
    annualExpenses += parseFloat(window.prompt(annualExpenseQuestions[i]));
}

*/