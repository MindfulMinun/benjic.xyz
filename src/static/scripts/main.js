const footerP = document.querySelector('[data-blobify]')
if (footerP) {
    const choose = [
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
    ]
    footerP.innerHTML = `<p>${choose[Math.floor(Math.random() * choose.length)]}</p>`
}

if (navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then(regs => {
        for (let reg of regs) { reg.unregister() }
    })
}
