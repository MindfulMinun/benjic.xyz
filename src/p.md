---
title: Projects
desc: P is for Projects. Here’s a few things I’ve worked on in the past few years.
layout: layouts/base
styles: |-
    .project-list {
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
    }
    .project-list > li {
        padding: .5em;
    }
    .project-list > li > strong {
        font-size: 1.5em;
    }
    .project-list > li > p {
        margin: 0;
        margin-bottom: .5em;
    }
    .project-list > li > p {
        margin: 0;
        margin-bottom: .5em;
    }
    .links { margin-left: 1em; }
    .project-langs, .list-connective { opacity: .52; }
    .list-connective:last-child { display: none; }
---

# {{ title }}

{{ desc }} Keep in mind that this ***isn’t*** a complete portfolio.

Check out my developer profiles on [GitHub] and [Glitch].

---

<ul class="a11y project-list">
{%- for project in b.projects -%}
    <li>
        <strong>{{ project.name }}</strong>
        <p>{{ project.desc }}</p>
        <div class="flex">
            <span class="flex-grow project-langs">
            {%- if project.langs -%}
                {{ project.langs | join(', ') }}
            {%- endif -%}
            </span>
            {%- if project.urls -%}
            <span class="links">
                {%- if project.urls.github -%}
                    <a href="https://github.com/{{ project.urls.github }}">GitHub</a>
                    <span class="list-connective"> • </span>
                {%- endif -%}
                {%- if project.urls.source -%}
                    <a href="{{ project.urls.source }}">Source</a>
                    <span class="list-connective"> • </span>
                {%- endif -%}
                {%- if project.urls.glitch -%}
                    <a href="{{ project.urls.glitch }}">View live on Glitch</a>
                    <span class="list-connective"> • </span>
                {%- endif -%}
                {%- if project.urls.view -%}
                    <a href="{{ project.urls.view }}">View live</a>
                {%- endif -%}
            </span>
            {%- endif -%}
        </div>
    </li>
{%- endfor -%}
</ul>

[GitHub]: https://github.com/MindfulMinun
[Glitch]: https://glitch.com/@MindfulMinun
