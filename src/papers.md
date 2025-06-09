---
layout: layout.njk
title: Published Research
---
<style>
  h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    color: #e2e8f0;
    font-size: 1.8rem;
    letter-spacing: -0.5px;
    margin: 1.5rem 0 1rem;
    text-decoration: underline;
    text-underline-offset: 6px; /* Push underline away from text for a cleaner look */
  }
</style>

<h2>Published Research</h2>

<div class="papers-list">
  {% assign sortedPapers = papers | sort: "date" | reverse %}
  {% for paper in sortedPapers %}
    <div class="paper-card">
      <h3><a href="{{ paper.link }}" target="_blank">{{ paper.title }}</a></h3>
      <p class="meta authors-inline">
        {% for author in paper.authors %}<a href="{{ author.profile }}" target="_blank">{{ author.name }}</a>{% if forloop.last == false %}, {% endif %}{% endfor %}
        • {{ paper.conference }}
      </p>
      <p class="abstract">{{ paper.abstract }}</p>
    </div>
  {% endfor %}
</div>

