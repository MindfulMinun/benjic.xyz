/// <reference lib="dom" />
fetch('https://mirai.benjic.xyz/love/phrases')
    .then(r => r.text())
    .then(t => console.log(t))

const footerP = document.querySelector('[data-blobify]')
if (footerP) {
    footerP.innerHTML = '<p>' + choose([
        "Made with :3c by MindfulMinun",
        "Made with love by MindfulMinun",
        "Made by hand by MindfulMinun",
        "Made with <3 by MindfulMinun",
        "Made with ;) by MindfulMinun",
        "Made with 11ty by MindfulMinun",
        "Made with you in mind by MindfulMinun",
        "Made with <code>Uncaught TypeError: undefined is not a function</code> by MindfulMinun",
        "Made with MindfulMinun by <3",
        "Made with ___ by ___",
        "Made possible by <a href=\"https://ko-fi.com/mindfulminun\">contributions</a> from viewers like you.",
        "Made with <a href=\"https://github.com/MindfulMinun/benjic.xyz\">code</a> by MindfulMinun",
        "Made with love by Benji"
    ]) + '</p>'
}

/**
 * @see https://doc.deno.land/https://mirai.benjic.xyz/pear@next/core/iterable.ts/~/choose
 * @param {T[]} arr
 * @returns {T}
 * @template T
 */
function choose(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}
