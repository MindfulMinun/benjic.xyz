const twemoji = require('twemoji')

/**
 * 11ty filter, replaces emoji with Twemoji!
 * @param {string} emojiText Text that may contain emoji in it
 * @returns {string} HTML with emoji replaced with images to emoji SVGs
 */
module.exports = function (emojiText) {
    return twemoji.parse(emojiText, {
        folder: 'svg',
        ext: '.svg'
    })
}
