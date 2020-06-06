/*/
    import { randomId, html } from './helpers'
/*/
    const { randomId, html } = require('./helpers')
//*/

/**
 * Image shortcode
 * @param {object} out
 * @param {string} out.alt The image label
 * @param {string} [out.srcset] List of sources for the image
 * @param {string} [out.sizes] List of sizes for the image
 * @param {string} out.src The default source, if srcset isn't supported
 * @param {string} [out.ratio] The image's aspect ratio
 * @param {string} [out.style] Any styles to add to the image box
 */
// export default function (out) {
module.exports = function (out) {
    const { alt, srcset, src, ratio, style, sizes } = out
    const id = randomId()
    let styleAttribute = `--ratio: ${+ratio || 1};`
    styleAttribute += style || ''

    return html`<div class="sticky">
        <div class="ratiod" style="${styleAttribute}">
            <img src="${src}" ${
                srcset ? `srcset="${srcset.replace(/\n\s*/g, '')}"` : ''
            } ${
                sizes ? `sizes="${sizes.replace(/\n\s*/g, '')}"` : ''
            } aria-labelledby="${id}">
        </div>
        <p class="sticky__label" id="${id}">${alt}</p>
    </div>`
}
