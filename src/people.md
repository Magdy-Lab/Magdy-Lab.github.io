---
layout: layout.njk
title: Lab Members
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
<h2>Advisor</h2>
<div class="grid">
{% include "member-card.njk", member: members.advisor %}
</div>

<h2>Current Students</h2>
<div class="grid">
  {% for person in members.current %}
    {% include "member-card.njk", member: person %}
  {% endfor %}
</div>

<h2>Graduated Students</h2>
<div class="grid">
  {% for person in members.alumni %}
    {% include "member-card.njk", member: person %}
  {% endfor %}
</div>