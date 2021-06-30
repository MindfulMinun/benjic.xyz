---
layout: layouts/post
title: yt-for-me
desc: >
    yt-for-me was a project I wrote in 2019, designed to be a YouTube clone with download capabilities.
tags:
    - post
    - project
date: 2021-03-11 12:00:00-05
# eleventyExcludeFromCollections: true
---

The backend uses Express and Mustache for templating. It's available in both English and Spanish. It uses a vanilla JS stack, without any frameworks. The app consists of 3 different views: the homepage, the search view, and the video view. I chucked my code so that only scripts critical for loading this specific view are loaded, and all other scripts are are async + deferred.

<div class="sticky">
    <div class="ratiod" style="--ratio: 1.6;">
        <iframe class="ratiod__target" src="https://www.youtube.com/embed/pCSRKvJRmD0?showinfo=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <p class="sticky__label">A video illustrating the user flow and video discovery.</p>
</div>

Under the hood, yt-for-me uses both ffmpeg and ytdl-core. As a web developer, I don’t often work with binaries like ffmpeg, but luckily there’s a precompiled binary that works with Heroku.

{% image
    alt="The download dropdown table with a multitude of options.",
    srcset="
        /static/images/yt-for-me--table@1x.webp 420w,
        /static/images/yt-for-me--table@1x.png 420w,
        /static/images/yt-for-me--table@2x.webp 841w,
        /static/images/yt-for-me--table@2x.png 841w,
        /static/images/yt-for-me--table@3x.webp 1682w,
        /static/images/yt-for-me--table@3x.png 1682w
    ",
    src="/static/images/yt-for-me--table@1x.png",
    ratio="1.507168458781362",
    id="table",
    size="medium"
%}

{% image
    alt="The info panel, indicating a song's name, view count and publisher with music copyright information, along with related videos.",
    srcset="
        /static/images/yt-for-me--info-panel@1x.webp 420w,
        /static/images/yt-for-me--info-panel@1x.png 420w,
        /static/images/yt-for-me--info-panel@2x.webp 841w,
        /static/images/yt-for-me--info-panel@2x.png 841w,
        /static/images/yt-for-me--info-panel@3x.webp 1682w,
        /static/images/yt-for-me--info-panel@3x.png 1682w
    ",
    src="/static/images/yt-for-me--table@1x.png",
    ratio="1.507168458781362",
    id="info-panel",
    size="medium"
%}

{% image
    alt="The dropdown table with more options, featuring Gumi peeking at us from the YouTube embed.",
    srcset="
    /static/images/yt-for-me--table2@1x.webp 530w,
    /static/images/yt-for-me--table2@1x.png 530w,
    /static/images/yt-for-me--table2@2x.webp 1060w,
    /static/images/yt-for-me--table2@2x.png 1060w,
    /static/images/yt-for-me--table2@3x.webp 2120w,
    /static/images/yt-for-me--table2@3x.png 2120w
    ",
    src="/static/images/yt-for-me--table@1x.png",
    ratio="1.394736842105263",
    id="table-2",
    size="large"
%}


<!--  -->
[yt-for-me]: https://yt.benjic.xyz
