// @ts-nocheck
module.exports = function () {
    const out = {}

    out.url = process.env.NODE_ENV === 'production' ?
        'https://benjic.xyz' :
        'http://localhost:1337';

    out.twitter = {}
    out.twitter.handle = "@MindfulMinun"

    
    return out
}
