let calculation = localStorage.getItem('calculation') || '';
document.querySelector('.js-display').innerHTML = localStorage.getItem('calculation');

function updateCalculation(value) {
    calculation += value;
    localStorage.setItem('calculation', calculation);
    document.querySelector('.js-display').innerHTML = localStorage.getItem('calculation');
}
