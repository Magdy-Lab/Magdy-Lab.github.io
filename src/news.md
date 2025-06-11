---
layout: layout.njk
title: Latest News
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
    text-underline-offset: 6px;
  }
</style>

<h2>Latest News</h2>

<div class="news-list">
  {% for item in news | sort(attribute="date") | reverse %}
    <div class="news-card">
      <h3>
        {{ item.title }}
        {% if loop.index0 == 0 %}
          <span class="newest">NEWEST</span>
        {% endif %}
      </h3>
      <p class="news-date">{{ item.date }}</p>
      <p>{{ item.text }}</p>

      {% if item.images %}
        {% if item.images.length == 1 %}
          <div class="news-single-image">
            <img src="{{ item.images[0] | url }}" alt="{{ item.title }}" />
          </div>
        {% else %}
          <div class="news-images-flex">
            {% for image in item.images %}
              <div class="flex-image">
                <img src="{{ image | url }}" alt="{{ item.title }} image {{ loop.index }}" />
              </div>
            {% endfor %}
          </div>
        {% endif %}
      {% endif %}
    </div>
  {% endfor %}
</div>
