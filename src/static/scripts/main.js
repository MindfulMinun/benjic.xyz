/// <reference lib="dom" />
console.log(choose([
    "Hello world! I love you, you are my world. <3",
    "Wow, you're looking pretty cute today, aren't ya?",
    "I love you. So much. Please don't ever forget that.",
    "Look at you, wow! I'm so proud of you!",
    "Dude, you look so handsome. Everyday you look stunning.",
    "I believe in you. Trust me, you can do anything."
]))
const footerP = document.querySelector('[data-blobify]')
if (footerP) {
    footerP.innerHTML = '<p>' + choose([
        "Made with :3c by MindfulMinun",
        "Made with love by MindfulMinun",
        "Made with <3 by MindfulMinun",
        "Made with ;) by MindfulMinun",
        "Made with 11ty by MindfulMinun",
        "Made with you in mind by MindfulMinun",
        "Made with `Uncaught TypeError: undefined is not a function` by MindfulMinun",
        "Made with MindfulMinun by <3",
        "Made with ___ by ___",
        "Made possible by <a href=\"https://ko-fi.com/mindfulminun\">contributions</a> from viewers like you.",
        "Made with <a href=\"https://github.com/MindfulMinun/benjic.xyz\">code</a> by MindfulMinun",
        "Made with love by Benji"
    ]) + '</p>'
}

if (navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then(regs => {
        for (let reg of regs) reg.unregister()
    })
}


/**
 * @see https://mindfulminun.keybase.pub/scripts/lib/array.ts
 * @param {T[]} arr
 * @returns {T}
 * @template T
 */
function choose(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}
