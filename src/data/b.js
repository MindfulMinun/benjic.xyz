/**
 * @typedef MindfulProject
 * @prop {string} name Project name
 * @prop {string} desc Project description
 * @prop {string} date Date project started in the form of `YYYY-MM-DD`
 * @prop {string[]} langs The languages used to write the project
 * @prop {object} [urls] Links to the project
 * @prop {string} [urls.github] GitHub repository in the form of `user/repo`
 * @prop {string} [urls.glitch] A link to a live demo on Glitch
 * @prop {string} [urls.source] A link to a live demo, will be labelled "Source"
 * @prop {string} [urls.view] A link to a live demo, will be labelled "View"
 */
// export default function () {
module.exports = function () {
    const out = {}

    // @ts-ignore
    out.url = process.env.NODE_ENV === 'production' ?
        'https://benjic.xyz' :
        'http://localhost:1337'

    out.twitter = {}
    out.twitter.handle = "@MindfulMinun"

    /** @type {MindfulProject[]} */
    out.projects = [
        {
            name: "game-of-life",
            desc: "A JavaScript implementation of Conway's Game of Life, using Uint32Arrays to make sure it runs lightning-fast.",
            date: "2020-05-15",
            langs: ["JavaScript"],
            urls: {
                github: "MindfulMinun/game-of-life"
            }
        }, {
            name: "Lambda",
            desc: "Bringing complex numbers, matrices, and more to JavaScript, in pursuit of making a fully-fledged calculator.",
            date: "2020-04-26",
            langs: ["JavaScript"],
            urls: {
                github: "MindfulMinun/Lambda"
            }
        }, {
            name: "d-flat",
            desc: "Have you ever wondered what the derivative of a song would sound like?",
            date: "2020-05-19",
            langs: ["JavaScript"],
            urls: {
                github: "MindfulMinun/d-flat",
                glitch: "https://mm-d-flat.glitch.me/"
            }
        }, {
            name: "yt-for-me",
            desc: "Steals videos from YouTube, how fun! One of my larger projects.",
            date: "2019-10-18",
            langs: ["JavaScript"],
            urls: {
                github: "MindfulMinun/yt-for-me",
                view: "https://yt.benjic.xyz"
            }
        }, {
            name: "Haruka",
            desc: "A useless Discord bot, one of my larger projects.",
            date: "2018-06-20",
            langs: ["CoffeeScript"],
            urls: {
                github: "MindfulMinun/discord-haruka"
            }
        }, {
            name: "A text based game",
            desc: "A port of a text-based game written in Python by a friend.",
            date: "2018-08-27",
            langs: ["CoffeeScript"],
            urls: {
                glitch: "https://mm-text.glitch.me/"
            }
        }
    ]

    
    return out
}
