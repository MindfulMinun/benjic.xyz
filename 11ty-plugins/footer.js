const { html } = require('./helpers.js')
module.exports = function () {
    return html`
<footer class="footer">
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
}
