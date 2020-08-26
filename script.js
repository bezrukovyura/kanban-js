const appElement = document.querySelector('.app');

let htmlString = '';



GET_COLUMNS_RESPONSE.forEach((column) => {

    const colmnId = column.id;
    const currentColumnCards = getCardsByColumnId(colmnId);
    let allCardsForColumnHtml = '';

    currentColumnCards.forEach(function (x) {
        debugger
        let userName = .....;
    // Найти имя пользователя по его id, чтобы в карточках отображалось имя пользователя
    // искать можно с помощью [1, 2, 3].find
    allCardsForColumnHtml += getCard(x.title, x.description, userName);
});


htmlString += `<div class="col">
                        <div class="col__header">${column.name}</div>
                        <div class="col_content">${allCardsForColumnHtml}</div>
                    </div>`;
});


appElement.innerHTML = htmlString;

function getCardsByColumnId(id) {
    return GET_CARDS_RESPONSE.filter(function (card) {
        return card.columnId === id;
    })
}

function getCard(title, description, userName) {
    return `<div class="card">
                <div class="card__inform">
                    <div class="card__title">${title}</div>
                    <div class="card__description">${description}</div>
                </div>
                <div class="card__user">
                    <div class="card__user-name">${userName}</div>
                </div>
            </div>`;
}


