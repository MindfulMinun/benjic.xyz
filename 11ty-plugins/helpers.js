/**
 * Map of unsafe HTML characters to their escaped equivalents
 */
const XSS_ESCAPES = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
}

/**
 * Template tag to join stuff together
 * @param {TemplateStringsArray} strings The unchanging parts of the string
 * @param {...any} [exprs] The expressions within it
 * @returns {string} The joint string
 * @public
 * @author MindfulMinun
 * @since 2020-05-06
 * @version 1.0.0
 */
module.exports.html = function html(strings, ...exprs) {
    let out = ''
    for (let i = 0; i < strings.length; i++) {
        out += strings[i] + (typeof exprs[i] !== 'undefined' ? exprs[i] : '')
    }
    return out
}

/**
 * Generates an id. Probably unique.
 * @param {string} [prefix] The prefix to use. Defaults to 'id'
 * @returns {string} Good-looking time string
 * @public
 * @author MindfulMinun
 * @since 2020-05-06
 * @version 1.0.0
 */
// export function randomId(prefix = 'id') {
module.exports.randomId = function randomId(prefix = 'id') {
    return `${prefix}-${Math.random().toString(36).substring(7)}`
}

/**
 * Escapes unsafe strings for use in HTML
 * @param {string} unsafe The string to escape
 * @returns {string} The string, now safe to insert into html
 * @public
 * @author MindfulMinun
 * @since 2020-05-06
 * @version 1.0.0
 */
// export function xss(unsafe) {
module.exports.xss = function xss(unsafe) {
    return unsafe.replace(/["'&<>]/g, match => XSS_ESCAPES[match] || match)
}

/**
 * Parses an HTML string
 * @param {string} html The string to parse, can have multiple root elements
 * @returns {HTMLCollection} The collection of parsed elements
 * @public
 * @author MindfulMinun
 * @since 2020-05-07
 * @version 1.0.0
 */
// export function parseHTML(html) {
module.exports.parseHTML = function parseHTML(html) {
    if (typeof document === "undefined") {
        throw Error("Cannot parse HTML outside of a browser. Sorry :/")
    }
    var template = document.createElement('template')
    template.innerHTML = html
    return template.children
}
