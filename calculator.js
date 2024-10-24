function calculatePayment() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12;

    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

    if (isFinite(monthlyPayment)) {
        document.getElementById('monthlyPayment').textContent = `Your Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    } else {
        document.getElementById('monthlyPayment').textContent = "Please enter valid numbers.";
    }

    return false;
}
