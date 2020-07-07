---
title: yt-for-me
desc: --- --- --- --- --- 
layout: layouts/base
---

# {{ title }} – writeup

[yt-for-me] sometimes goes down, or doesn’t work as expected. Here’s some screenshots of it in action.

---

Under the hood, [yt-for-me] uses both ffmpeg and ytdl-core. As a web developer, I don’t often work with binaries like ffmpeg, but luckily there’s a precompiled binary that works with Heroku&hellip; most of the time. I’m not sure whether the binary includes codecs, but I assume it doesn’t, since there’s always a couple of formats that simply won’t get converted by the backend.

Furthermore, the Heroku app goes down once it has run out of hours for the month, and since I’m a college student I can’t really afford to pay for a server that isn’t getting used.

<div class="sticky">
    <div class="ratiod" style="--ratio: 1.6;">
        <iframe class="ratiod__target" src="https://www.youtube.com/embed/pCSRKvJRmD0?showinfo=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <p class="sticky__label">A video describing the user flow and video discovery.</p>
</div>


{% image
    alt="The download dropdown table with a multitude of options.",
    srcset="
        /static/images/yt-for-me--table@1x.webp 420w,
        /static/images/yt-for-me--table@1x.png 420w,
        /static/images/yt-for-me--table@2x.webp 841w,
        /static/images/yt-for-me--table@2x.png 841w,
        /static/images/yt-for-me--table@4x.webp 1682w,
        /static/images/yt-for-me--table@4x.png 1682w
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
        /static/images/yt-for-me--info-panel@4x.webp 1682w,
        /static/images/yt-for-me--info-panel@4x.png 1682w
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
    /static/images/yt-for-me--table2@4x.webp 2120w,
    /static/images/yt-for-me--table2@4x.png 2120w
    ",
    src="/static/images/yt-for-me--table@1x.png",
    ratio="1.394736842105263",
    id="table-2",
    size="large"
%}


<!--  -->
[yt-for-me]: https://yt.benjic.xyz
