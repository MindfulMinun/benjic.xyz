// @ts-nocheck -- 11ty has no type documentation
module.exports = function (config) {
    config.addShortcode('image', require('./11ty-plugins/image'))
    config.addFilter('twemoji', require('./11ty-plugins/twemoji'))
    config.addFilter("addOrigin", path => `https://benjic.xyz${path}`)
    config.addPassthroughCopy(`src/static`)
    config.addPassthroughCopy({
        'src/static/images/pfp-2020.png': '/favicon.png'
    })

    config.addFilter('toDateTime', date => {
        if (!(date instanceof Date)) {
            date = new Date(date)
        }

        return date.toLocaleString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false,
            timeZone: 'America/Chicago'
        })
    })

    config.addFilter('toDate', date => {
        if (!(date instanceof Date)) {
            date = new Date(date)
        }

        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            timeZone: 'America/Chicago'
        })
    })
    
    config.addFilter('toISODateTime', date => {
        if (!(date instanceof Date)) {
            date = new Date(date)
        }
        return date.toISOString()
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
