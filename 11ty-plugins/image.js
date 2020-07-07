/*/
    import { randomId, html } from './helpers'
/*/
    const { randomId, html } = require('./helpers')
//*/

const MEDIA_SIZES = {
    small: '(min-width: 560px) 480px, 100vw',
    medium: '(min-width: 640px) 640px, 100vw',
    large: '(min-width: 840px) 840px, 100vw'
}

/**
 * Image shortcode
 * @param {object} out
 * @param {string} out.alt The image label
 * @param {string} [out.srcset] List of sources for the image
 * @param {string} [out.sizes] List of sizes for the image
 * @param {string} out.src The default source, if srcset isn't supported
 * @param {string} [out.ratio] The image's aspect ratio
 * @param {string} [out.id] The labels id, not the image's
 * @param {string} [out.style] Any styles to add to the image box
 * @param {keyof MEDIA_SIZES} [out.size] 
 */
// export default function (out) {
module.exports = function (out) {
    let { alt, srcset, src, ratio, style, sizes, id, size } = out
    id = id || randomId()
    let styleAttribute = `--ratio: ${+ratio || 1};`
    styleAttribute += style || ''

    let actualSizes =
        (sizes && sizes.replace(/\n\s*/g, '')) ||
        MEDIA_SIZES[size]

    return html`<figure id="${id}">
        <div class="sticky${ size ? ` sticky--${size}` : '' }">
            <div class="ratiod" style="${styleAttribute}">
                <img class="ratiod__target" src="${src}" ${
                    srcset ? `srcset="${srcset.replace(/\n\s*/g, '')}"` : ''
                } ${
                    actualSizes ? `sizes="${actualSizes}"` : ''
                } aria-labelledby="${id}-label" alt="">
            </div>
            <figcaption>
                <p class="sticky__label" id="${id}-label">${alt}</p>
            </figcaption>
        </div>
    </figure>`
}
