const appElement = document.querySelector('.app');

let htmlString = '';



GET_COLUMNS_RESPONSE.forEach((column) => {

    const colmnId = column.id;
    const currentColumnCards = getCardsByColumnId(colmnId);
    let allCardsForColumnHtml = '';

    currentColumnCards.forEach(function (x) {
        let user = GET_USERS_RESPONSE.find(user => user.id === x.userId);
        allCardsForColumnHtml += getCard(x.title, x.description, user.name, user.photoUrl);
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

function getCard(title, description, userName, userPhoto) {
    let selectUsersHtml = `<select>`;
    GET_USERS_RESPONSE.forEach(user => {
        selectUsersHtml += `<option>${user.name}</option>`;
    });
    selectUsersHtml += `</select>`;

    return `<div class="card">
                <div class="card__inform">
                    <div class="card__title">${title}</div>
                    <div class="card__description">${description}</div>
                </div>
                <div class="card__user">
                    <div class="card__user-photo">
                        <img src="${userPhoto}" >
                    </div>
                    <div class="card__user-name">${selectUsersHtml}</div>
                </div>
            </div>`;
}





