/*
    export default async function (config) {
/*/
    module.exports = function (config) {
//*/

    // config.addShortcode('image', await import('./11ty-plugins/image'))
    // config.addShortcode('footer', await import('./11ty-plugins/footer'))
    config.addShortcode('image', require('./11ty-plugins/image'))
    config.addShortcode('footer', require('./11ty-plugins/footer'))
    
    config.addPassthroughCopy(`src/static/images`)
    config.addPassthroughCopy(`src/static/other`)
    config.addPassthroughCopy(`src/static/scripts`)
    config.addPassthroughCopy(`src/static/styles`)

    config.addPassthroughCopy({
        'src/static/images/pfp-2020.png': '/favicon.png',
        'src/netlify.toml': '/netlify.toml'
    })

    return {
        dir: {
            input: 'src',
            output: 'dist',
            data: 'data'
        },
        markdownTemplateEngine: "njk",
        passthroughFileCopy: true
    }
}
