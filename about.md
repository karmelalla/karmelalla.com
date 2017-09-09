---
layout: page
title: О сайте
permalink: /about/
---
Этот блог появился в первую очередь для меня самой. Как практика - помнить и осознавать себя, каждый бесценный день своей жизни. 

Во-вторых, для родных. Чтобы они могли лучше следить за происходящим. Хоть немного прочувствовать наши впечатления и переживания. 

Ну и конечно, для друзей и всех тех, кому будет интересно следить за нашими сказочными приключениями. 
Пожалуйста, не судите строго. Это всего лишь мои заметки. Если вам понравится - я буду рада. 

Пожалуйста, подписывайтесь <a href="http://karmelalla.com/subscribe/" target="_blank"> по этой ссылке </a> и читайте с удовольствием.

{% assign cooking_counter = 0 %}
{% assign stories_counter = 0 %}
{% assign images_counter = 0 %}

{% for post in site.posts %}
  {% if post.categories contains "cooking" %}
    {% assign cooking_counter = cooking_counter | plus: 1 %}
  {% else %}
    {% assign stories_counter = stories_counter | plus: 1 %}
  {% endif %}
  
  {% for image in post.images %}
    {% assign images_counter = images_counter | plus: 1 %}
  {% endfor %}
{% endfor %}

<u>Статистика сайта:</u>
  * Количество [историй](/): {{stories_counter}}
  * Количество [рецептов](/cooking/): {{cooking_counter}} 
  * Количество [фотографий](/gallery/): {{images_counter}}
