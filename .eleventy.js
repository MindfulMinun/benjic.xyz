// @ts-nocheck -- 11ty has no type documentation
module.exports = function (config) {
    config.addShortcode('image', require('./11ty-plugins/image'))
    config.addFilter('twemoji', require('./11ty-plugins/twemoji'))
    config.addFilter("addOrigin", path => `https://benjic.xyz${path}`)
    config.addPassthroughCopy(`src/static`)
    config.addPassthroughCopy({
        'src/static/images/pfp-2020.png': '/favicon.png'
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
