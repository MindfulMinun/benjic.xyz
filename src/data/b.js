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
 * @prop {string} [urls.post] A link to a post
 */
// export default function () {
module.exports = function () {
    const out = {}

    out.twitter = {}
    out.twitter.handle = "@MindfulMinun"

    /** @type {MindfulProject[]} */
    out.projects = [
        {
            name: "Drawn to Reality",
            desc: "Help Seiden get over her fears! A 2D platformer made for a game jam by me and five others in less than a week.",
            date: "2022-02-27",
            langs: ["C#", "Unity"],
            urls: {
                "github": "frizbee19/FebGameJam",
                "post": "https://www.rizvee.me/drawntoreality"
            }
        },
        {
            name: "Pink",
            desc: "A simple, lightweight speech-to-text transcription service. Recognize and transcribe over 25 languages.",
            date: "2022-06-08",
            langs: ["TypeScript", "Deno"],
            urls: {
                glitch: "mm-pink"
            }
        }, { 
        //     name: "Dumb-dumb vocaloid quiz!",
        //     desc: "Listen to some vocaloid! Can you identify who's singing?",
        //     date: "2022-06-08",
        //     langs: ["TypeScript", "Deno"],
        //     urls: {
        //         glitch: "mm-vocaloid"
        //     }
        // }, {
            name: "moe-relay",
            desc: "Synchronize various clients to some streaming services, such as YouTube or twist.moe.",
            date: "2020-12-07",
            langs: ["TypeScript"],
            urls: {
                glitch: "moe-relay",
            }
        }, {
            name: "Sakura",
            desc: "Give your photos a 🌸 pink manga aesthetic 🌸 by adding a pink filter to it.",
            date: "2020-09-11",
            langs: ["JavaScript"],
            urls: {
                glitch: "mm-sakura",
                github: "MindfulMinun/sakura"
            }
        }, {
            name: "d-flat",
            desc: "Have you ever wondered what the derivative of a song would sound like? (Spoiler alert: it’s like a high-pass filter)",
            date: "2020-05-19",
            langs: ["JavaScript"],
            urls: {
                glitch: "mm-d-flat",
                github: "MindfulMinun/d-flat"
            }
        // }, {
        //     name: "shawty",
        //     desc: "A link shortener written in Deno",
        //     date: "2020-07-28",
        //     langs: ["JavaScript"],
        //     urls: {
        //         github: "MindfulMinun/shawty"
        //     }
        }, {
            name: "game-of-life",
            desc: "A JavaScript implementation of Conway’s Game of Life, using BigUint64Arrays to ensure it runs lightning-fast.",
            date: "2020-05-15",
            langs: ["JavaScript"],
            urls: {
                glitch: "mm-game-of-life",
                github: "MindfulMinun/game-of-life"
            }
        }, {
            name: "Lambda",
            desc: "Bringing complex numbers, matrices, and more to JavaScript.",
            date: "2020-04-26",
            langs: ["JavaScript"],
            urls: {
                github: "MindfulMinun/Lambda"
            }
        }, {
            name: "yt-for-me",
            desc: "Steals videos from YouTube, how fun!",
            date: "2019-10-18",
            langs: ["JavaScript"],
            urls: {
                github: "MindfulMinun/yt-for-me",
                post: "https://benjic.xyz/b/yt-for-me"
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
                glitch: "mm-text"
            }
        }
    ]

    return out
}
