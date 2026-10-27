const billInput = document.getElementById('billAmount');
const calculateBtn = document.getElementById('calculateBtn');
const tipDisplay = document.getElementById('tipAmount');
const totalDisplay = document.getElementById('totalBill');
const errorMessage = document.getElementById('error-message');

calculateBtn.addEventListener('click', function() {
    const billValue = parseFloat(billInput.value);

    if (isNaN(billValue) || billValue <= 0) {
        errorMessage.style.display = 'block';
        tipDisplay.textContent = '';
        totalDisplay.textContent = '';
    } else {
        errorMessage.style.display = 'none';

        const tipRate = 0.15;
        const tip = billValue * tipRate;
        const total = billValue + tip;

        // استخدام علامات الـ Backticks (``) بدلاً من علامات التنصيص العادية ('')
        tipDisplay.textContent = `Calculated Tip: $${tip.toFixed(2)}`;
        totalDisplay.textContent = `Total Bill: $${total.toFixed(2)}`;
    }
});