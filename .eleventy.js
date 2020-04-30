// @ts-nocheck

function randomId() {
    return `id-${Math.random().toString(36).substring(7)}`
}

module.exports = function (config) {
    const base = 'src'

    // config.addPassthroughCopy({
    //     'node_modules/normalize.css/normalize.css': '/static/styles/normalize.css'
    // })


    config.addShortcode('image', function (alt, src, ratio, styles) {
        const id = randomId()

        return `<div class="sticky">
            <div class="ratiod" style="--ratio: ${+ratio || 1};${styles || ''}">
                <img src="${src}" aria-labelledby="${id}">
            </div>
            <p class="sticky__label" id="${id}">${alt}</p>
        </div>`
    })

    config.addShortcode('footer', function () {
        return `<footer class="footer">
            <div class="footer__ppal">
                <div class="container">
                    <div class="flex">
                        <h3 class="sr-only">Footer</h3>
                        <a class="footer__img" href="/">
                            <span class="sr-only">Home</span>
                            <img src="/static/images/pfp-2020.png" style="width: 100%; height: auto;" alt="">
                        </a>
                        <div class="flex-grow">
                            <p>I’m supposed to be studying.</p>
                            <h4 class="sr-only">Social links</h4>
                            <ul class="a11y">
                                <li>
                                    <a href="https://twitter.com/MindfulMinun">
                                        <span class="sr-only">Twitter</span>
                                        <span class="icon" style="--mask: url(/static/other/twitter.svg)"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/MindfulMinun/">
                                        <span class="sr-only">GitHub</span>
                                        <span class="icon" style="--mask: url(/static/other/github.svg)"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://keybase.io/mindfulminun">
                                        <span class="sr-only">Keybase</span>
                                        <span class="icon" style="--mask: url(/static/other/keybase.svg)"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/mindfulminun/">
                                        <span class="sr-only">Instagram</span>
                                        <span class="icon" style="--mask: url(/static/other/instagram.svg)"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__ribbon">
                <div class="container" data-blobify>
                    <p>hello world</p>
                </div>
            </div>
        </footer>`
    })

    config.addPassthroughCopy(`${base}/static/*`)
    // config.addPassthroughCopy(`${base}/static/images`)
    // config.addPassthroughCopy(`${base}/static/other`)
    // config.addPassthroughCopy(`${base}/static/scripts`)
    // config.addPassthroughCopy(`${base}/static/styles`)
    return {
        dir: {
            input: 'src',
            output: 'dist'
        },
        passthroughFileCopy: true
    }
}
