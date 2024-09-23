function getElement(id) {
    return document.getElementById(id);
}

function getInnerText(id) {
    return getElement(id).innerText;
}

function createElement(id) {
    return document.createElement(id);
}

function getStorageAmount(storage) {
    const element = getElement(storage);
    const textValue = element.innerText;
    const value = parseFloat(textValue);
    return value;
}

function addMoney(amount, destination) {
    const element = getElement(destination);
    const textValue = element.innerText;
    const value = parseFloat(textValue);
    const total = value + parseFloat(amount);
    element.innerText = total;
}

function dropMoney(amount, destination) {
    const element = getElement(destination);
    const textValue = element.innerText;
    const value = parseFloat(textValue);
    const total = value - parseFloat(amount);
    element.innerText = total;
}

function addHistory(amount, donated_to) {
    const historyCardContainer = createElement('div');
    const historyCard = createElement('div');
    const historyCardHeader = createElement('h2');
    const historyCardPara = createElement('p');

    historyCardContainer.classList.add(
        'card',
        'bg-base-100',
        'shadow-xl', 
        'my-10'
    );
    historyCard.classList.add(
        'card-body'
    );
    historyCardHeader.classList.add(
        'card-title'
    );

    const text = getInnerText(donated_to);

    historyCardHeader.innerText = `${amount} Taka is Donated to ${text}`;
    historyCardPara.innerText = `Date: ${new Date().toString()}`;

    historyCard.appendChild(historyCardHeader);
    historyCard.appendChild(historyCardPara);
    historyCardContainer.appendChild(historyCard);


    const historyContainer = getElement('history-cards-section')
    historyContainer.insertBefore(historyCardContainer, historyContainer.firstChild);

}