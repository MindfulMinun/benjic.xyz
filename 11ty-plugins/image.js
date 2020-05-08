
const { randomId, html } = require('./helpers.js') 

module.exports = function (alt, src, ratio, styles) {
    const id = randomId()

    return html`<div class="sticky">
        <div class="ratiod" style="--ratio: ${+ratio || 1};${styles || ''}">
            <img src="${src}" aria-labelledby="${id}">
        </div>
        <p class="sticky__label" id="${id}">${alt}</p>
    </div>`
}
