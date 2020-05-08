module.exports = function (config) {

    config.addShortcode('image', require('./11ty-plugins/image.js'))
    config.addShortcode('footer', require('./11ty-plugins/footer.js'))
    
    config.addPassthroughCopy(`src/static/images`)
    config.addPassthroughCopy(`src/static/other`)
    config.addPassthroughCopy(`src/static/scripts`)
    config.addPassthroughCopy(`src/static/styles`)

    config.addPassthroughCopy({
        'src/static/images/pfp-2020.png': '/favicon.png'
    })

    return {
        dir: {
            input: 'src',
            output: 'dist',
            data: 'data'
        },
        passthroughFileCopy: true
    }
}
