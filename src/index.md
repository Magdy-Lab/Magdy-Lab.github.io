---
layout: layout.njk
title: Welcome to My Research Lab
---

{% assign sortedNews = news | sort: "date" | reverse %}
{% assign latest_news = sortedNews[0] %}

{% assign sortedPapers = papers | sort: "date" | reverse %}
{% assign latest_paper = sortedPapers[0] %}

<div class="hero">
  <h1>Advancing Data, Intelligence, and Computation</h1>
  <p>We develop cutting-edge systems and models to drive innovation in data management, spatial computing, quantum technologies, and artificial intelligence.</p>

  {% if latest_paper %}
    <div class="latest-paper-snippet" style="margin: 2rem auto; max-width: 600px; background: var(--card); padding: 1.5rem 2rem; border-radius: 10px; box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12); transition: box-shadow 0.3s ease;">
      <h3 style="margin-bottom: 0.4rem;">Latest Publication</h3>
      <p style="font-weight: bold; font-size: 1.05rem;">{{ latest_paper.title }}</p>
      <p style="font-size: 0.9rem; color: var(--subtext); margin-bottom: 0.6rem;">{{ latest_paper.conference }}</p>
      <p style="overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">
        {{ latest_paper.abstract }}
      </p>
      <a onclick="loadContent('/papers')" style="display:inline-block; margin-top: 0.5rem; font-size: 0.9rem; color: var(--accent); text-decoration: underline;">Read More</a>
    </div>
  {% endif %}

  {% if latest_news %}
    <div class="latest-news-snippet" style="margin: 2rem auto; max-width: 600px; background: var(--card); padding: 1.5rem 2rem; border-radius: 10px; box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12); transition: box-shadow 0.3s ease;">
      <h3 style="margin-bottom: 0.4rem;">Latest News</h3>
      <p style="font-weight: bold; font-size: 1.05rem;">{{ latest_news.title }}</p>
      <p style="font-size: 0.9rem; color: var(--subtext); margin-bottom: 0.6rem;">{{ latest_news.date }}</p>
      <p style="overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">
        {{ latest_news.text }}
      </p>
      <a onclick="loadContent('/news')" style="display:inline-block; margin-top: 0.5rem; font-size: 0.9rem; color: var(--accent); text-decoration: underline;">Read More</a>
    </div>
  {% endif %}

  <!-- Optional nav links -->
  <!--
  <div class="links">
    <a href="{{ '/people' | url }}">Meet the Team</a>
    <a href="{{ '/papers' | url }}">Published Research</a>
    <a href="{{ '/news' | url }}">Latest News</a>
    <a href="{{ '/chatbot' | url }}">Chat with the Lab</a>
  </div>
  -->

  <!-- Collaborators Section -->
  <div class="collaborators" style="margin-top: 3rem;">
    <h3 style="margin-bottom: 1rem;">Our Collaborators</h3>
    <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 2rem; padding: 1rem 0;">
      <img src="{{ '/assets/images/logos/Azur.png' | url }}" alt="Microsoft Azure" style="height: 50px; padding: 0.5rem;" />
      <img src="{{ '/assets/images/logos/USC.jpg' | url }}" alt="University of Southern California" style="height: 50px; padding: 0.5rem;" />
      <img src="{{ '/assets/images/logos/Google.png' | url }}" alt="Google" style="height: 50px; padding: 0.5rem;" />
      <img src="{{ '/assets/images/logos/QCRI.png' | url }}" alt="QCRI" style="height: 50px; padding: 0.5rem;" />
    </div>
  </div>
</div>
