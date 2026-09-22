---
permalink: /
title: "Thomas Allard"
browser_title: "Home"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% capture intro_text %}
Postdoctoral researcher at Stanford University.

I am currently a postdoctoral researcher at Stanford University, working with David Donoho. Before joining Stanford University, I was a postdoctoral researcher at ETH Zurich (2025),
where I also completed my PhD (2019-2024) under the supervision of Helmut Bölcskei
on the topic of <i>Metric Entropy of Ellipsoids with Applications to Machine Learning</i>.

<p><b>Research Interests</b>:</p>
<table class="research-interests" style="width: 100%; border-collapse: collapse; border: 0; margin: 0 0 1.3em; font-size: inherit;">
  <tr>
    <td style="width: 50%; padding: 0 1rem 0.2rem 0; border: 0; font-size: inherit;">&bull; Approximation Theory</td>
    <td style="width: 50%; padding: 0 0 0.2rem 0; border: 0; font-size: inherit;">&bull; Harmonic Analysis</td>
  </tr>
  <tr>
    <td style="width: 50%; padding: 0 1rem 0 0; border: 0; font-size: inherit;">&bull; Mathematical Statistics</td>
    <td style="width: 50%; padding: 0; border: 0; font-size: inherit;">&bull; Statistical Learning</td>
  </tr>
</table>

{% endcapture %}

{% assign intro_text = intro_text | strip %}
{% if site.data.coauthors %}
  {% for coauthor in site.data.coauthors %}
    {% assign coauthor_name = coauthor[0] | strip %}
    {% assign coauthor_url = coauthor[1] %}
    {% assign coauthor_href = coauthor_url %}
    {% assign coauthor_link_class = "pub-author-link" %}
    {% if coauthor_url contains '://' %}
      {% assign coauthor_href = coauthor_url %}
    {% else %}
      {% assign coauthor_href = coauthor_url | relative_url %}
    {% endif %}
    {% if coauthor_name == site.name or coauthor_name == site.author.name %}
      {% assign coauthor_link_class = "pub-author-link is-self" %}
    {% endif %}
    {% capture coauthor_link %}<a class="{{ coauthor_link_class }}" href="{{ coauthor_href }}"{% if coauthor_url contains '://' %} target="_blank" rel="noopener"{% endif %}>{{ coauthor_name }}</a>{% endcapture %}
    {% assign intro_text = intro_text | replace: coauthor_name, coauthor_link %}
  {% endfor %}
{% endif %}

{{ intro_text | markdownify }}

## News


{% assign news_posts = site.posts | where_exp: "post", "post.categories contains 'news'" %}
{% if news_posts.size > 0 %}
<div class="home-news-list">
  {% for post in news_posts limit: 3 %}
  <article class="home-news-item">
    <h3 class="home-news-title">{{ post.title | escape }}</h3>
    <time class="home-news-date" datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%B %-d, %Y" }}</time>
    <div class="home-news-text">{% include home-news-content.html post=post %}</div>
  </article>
  {% endfor %}
</div>
{% if news_posts.size > 3 %}
<section class="home-news-previous" aria-labelledby="previous-news-title">
<h3 id="previous-news-title" class="home-news-archive-title">Previous News</h3>
<div class="home-news-archive">
  {% for post in news_posts offset: 3 %}
  <details class="home-news-older">
    <summary class="home-news-summary">
      <span class="home-news-summary-heading">
        <span class="home-news-title">{{ post.title | escape }}</span>
        <time class="home-news-date" datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%B %-d, %Y" }}</time>
      </span>
      <span class="home-news-chevron" aria-hidden="true"></span>
    </summary>
    <div class="home-news-text">{% include home-news-content.html post=post %}</div>
  </details>
  {% endfor %}
</div>
</section>
{% endif %}
{% else %}
<p>No news yet.</p>
{% endif %}
