const blog = getElement('blog-btn-1')

blog.addEventListener('click', function() {
    window.location.href = 'blog.html';
});

const donationPage = getElement('donation-btn');
const cardsSection = getElement('cards-section');
const historyCardsSection = getElement('history-cards-section');
const historyPage = getElement('history-btn');

const donateBtn1 = getElement('donate-btn-1');
const donateBtn2 = getElement('donate-btn-2');
const donateBtn3 = getElement('donate-btn-3');

donationPage.addEventListener('click', function() {
    donationPage.classList.add(
        'bg-green-600', 
        'hover:bg-green-700'
    );

    historyPage.classList.remove(
        'bg-green-600', 
        'hover:bg-green-700'
    );

    historyCardsSection.classList.add('hidden');
    cardsSection.classList.remove('hidden');
});

historyPage.addEventListener('click', function() {
    historyPage.classList.add(
        'bg-green-600', 
        'hover:bg-green-700'
    );

    donationPage.classList.remove(
        'bg-green-600', 
        'hover:bg-green-700'
    );

    historyCardsSection.classList.remove('hidden');
    cardsSection.classList.add('hidden');
});


donateBtn1.addEventListener('click', function() {
    const amount = getElement('donation-amount-1').value;

    if (amount === '') {
        alert('Please Enter a valid amount');
        return;
    }
    if (amount <= 0) {
        alert('Please Enter a valid amount');
        return;
    }
    if (isNaN(amount)) {
        alert('Please Enter a valid amount');
        return;
    }
    if (getStorageAmount('storage') === 0) {
        alert('You have no money to donate 😔');
        return;
    }
    if (amount > getStorageAmount('storage')) {
        alert(`You can donate maximum ${getStorageAmount('storage')} Taka`);
        return;
    }

    addMoney(amount, 'destination-1');
    dropMoney(amount, 'storage');
    addHistory(amount, 'donation-1');
    const modal = getElement('my_modal_5');
    modal.showModal()
});

donateBtn2.addEventListener('click', function() {
    const amount = getElement('donation-amount-2').value;

    if (amount === '') {
        alert('Please Enter a valid amount');
        return;
    }
    if (amount <= 0) {
        alert('Please Enter a valid amount');
        return;
    }
    if (isNaN(amount)) {
        alert('Please Enter a valid amount');
        return;
    }
    if (getStorageAmount('storage') === 0) {
        alert('You have no money to donate 😔');
        return;
    }
    if (amount > getStorageAmount('storage')) {
        alert(`You can donate maximum ${getStorageAmount('storage')} Taka`);
        return;
    }

    addMoney(amount, 'destination-2');
    dropMoney(amount, 'storage');
    addHistory(amount, 'donation-2');
    const modal = getElement('my_modal_5');
    modal.showModal()
});

donateBtn3.addEventListener('click', function() {
    const amount = getElement('donation-amount-3').value;

    if (amount === '') {
        alert('Please Enter a valid amount');
        return;
    }
    if (amount <= 0) {
        alert('Please Enter a valid amount');
        return;
    }
    if (isNaN(amount)) {
        alert('Please Enter a valid amount');
        return;
    }
    if (getStorageAmount('storage') === 0) {
        alert('You have no money to donate 😔');
        return;
    }
    if (amount > getStorageAmount('storage')) {
        alert(`You can donate maximum ${getStorageAmount('storage')} Taka`);
        return;
    }

    addMoney(amount, 'destination-3');
    dropMoney(amount, 'storage');
    addHistory(amount, 'donation-3');
    const modal = getElement('my_modal_5');
    modal.showModal()
});
