exports.calculateBalanceSheet = (expenses) => {
    let balanceSheet = '';
  
    // Logic to calculate balance sheet
    // For simplicity, we create a CSV string here
    balanceSheet += 'Payer,Participant,Amount\n';
    expenses.forEach(expense => {
      expense.participants.forEach(participant => {
        balanceSheet += `${expense.payer.name},${participant.user.name},${participant.amount}\n`;
      });
    });
  
    return balanceSheet;
  };
  