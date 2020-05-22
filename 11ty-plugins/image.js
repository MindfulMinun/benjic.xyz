
const { randomId, html } = require('./helpers.js') 

module.exports = /**
 * @param {string} alt
 * @param {string} src
 * @param {string | number} ratio
 * @param {string} customStyles
 */
function (alt, src, ratio, customStyles) {
    const id = randomId()
    let styles = `--ratio: ${+ratio || 1};`
    styles += customStyles || ''

    return html`<div class="sticky">
        <div class="ratiod" style="${styles}">
            <img src="${src}" aria-labelledby="${id}">
        </div>
        <p class="sticky__label" id="${id}">${alt}</p>
    </div>`
}
