---
title: Projects
desc: P is for Projects. Here’s a few things I’ve worked on in the past few years.
layout: layouts/base
styles: |-
    .links { margin-left: 1em; }
    .project-langs, .list-connective { opacity: .52; }
    .list-connective:last-child { display: none; }
---

# {{ title }} 🛠

{{ desc }} Keep in mind that this ***isn’t*** a complete portfolio.

If you’re a recruiter, <a href="https://benjic.xyz/resume/" class="callout-text">check out my resume</a> and don’t hesitate to [email] me. Check out my developer profiles on [GitHub] and [Glitch], or my professional profile on [LinkedIn].

---

<ul class="a11y xyz-list" id="projects">
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
                    <a href="https://{{ project.urls.glitch }}.glitch.me/">View live on Glitch</a>
                    <span class="list-connective"> • </span>
                {%- endif -%}
                {%- if project.urls.view -%}
                    <a href="{{ project.urls.view }}">View live</a>
                {%- endif -%}
                {%- if project.urls.post -%}
                    <a href="{{ project.urls.post }}">Read post</a>
                {%- endif -%}
            </span>
            {%- endif -%}
        </div>
    </li>
{%- endfor -%}
</ul>

[email]: mailto:benji@benjic.xyz
[GitHub]: https://github.com/MindfulMinun
[Glitch]: https://glitch.com/@MindfulMinun
[LinkedIn]: https://www.linkedin.com/in/benji-cerda/
