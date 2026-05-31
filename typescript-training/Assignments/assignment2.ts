/*
Assignment-2 (Conditional Statements)

A bank evaluates loan applicants based on the following criteria:
1. Credit Score:
o If the credit score is above 750, the loan is automatically approved.
o If the credit score is between 650 and 750, additional checks are performed.
o If the credit score is below 650, .
2. Income:
o For credit scores between 650 and 750, the customer’s income must be at least $50,000
for the loan to be considered.

3. Employment Status:the loan is denied
o If the customer’s income is at least 50,000, the system checks whether the customer is
employed.
o If the customer is unemployed, the loan is denied.
4. Debt-to-Income Ratio:
o If the customer is employed, the system checks the debt-to-income (DTI) ratio.
o If the DTI ratio is less than 40%, the loan is approved.
o If the DTI ratio is 40% or greater, the loan is denied.

Create common function and then based on below details, print whether user is eligible to get the loan
or not
customerName = "John Doe";
creditScore = 720;
income = 55000.0;
isEmployed = true;
debtToIncomeRatio = 35.0;
*/

function loanEligibility(customerName: string, creditScore: number, income: number, isEmployed: boolean, debtToIncomeRatio: number): void {
console.log(`Verifying Loan Eligibility for Customer ${customerName}`);


if (creditScore >= 750) {
    console.log(`the loan is automatically approved for ${customerName}`);
} else if (creditScore >= 650) {
    console.log(`because of Credit Score is lesser than 750 additional checks are performed for customer: ${customerName}`);

    if (income >= 50000) {
        console.log(`Income is greater than 50,000 so loan to be considered for customer: ${customerName}`);

        if (isEmployed = true) {
        console.log(`Customer is Employed so the system checks the debt-to-income (DTI) ratio for customer: ${customerName}`);

        if (debtToIncomeRatio < 40) {
        console.log(`Because of debt-to-income (DTI) ratio lesser than 40 the loan is approved for customer: ${customerName}`);

    } else if (debtToIncomeRatio >= 40) {
        console.log(`Because of debt-to-income (DTI) ratio greater than 40 the loan is denied for customer: ${customerName}`);
    }
    } else if (isEmployed = false) {
        console.log(`the loan is denied for customer: ${customerName}`);
    }
    } else {
        console.log(`the loan is denied for customer: ${customerName}`);
    }
} else if (creditScore < 650) {
    console.log(`the loan is denied for customer: ${customerName}`);
}

}

loanEligibility(
    "John Doe",   // customerName
    720,          // creditScore
    55000.0,      // income
    true,         // isEmployed
    35.0          // debtToIncomeRatio
);