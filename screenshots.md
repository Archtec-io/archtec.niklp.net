---
layout: default
title: Screenshots
nav_order: 3
description: Screenshots
last_modified_date: "21 March 2025"
---

# Screenshots

Click on an image to view it in full screen mode.
<!--- convert screenshot w/: cwebp -q 60 X.png -o X.webp --->

<link rel="stylesheet" href="{{ site.baseurl }}{% link assets/css/gallery.css %}">

<script async src="{{ site.baseurl }}{% link assets/js/gallery.js %}"></script>

<div id="modal-img-container" class="w3-modal w3-black" style="padding-top:0" onclick="this.style.display='none'">
    <div id="modal-wrapper" class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64" style="width:100%">
        <span class="w3-closebtn" onclick="document.getElementById('modal-img-container').style.display='none'">&times;</span>
        <img id="modal-img" class="w3-image">
        <p id="img-caption"></p>
    </div>
</div>

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
  {% for image in site.data.images %}
    <div style="overflow: hidden; text-align: center;">
      <img src="{{ image.src }}" alt="{{ image.alt }}" loading="lazy" onclick="imgClick(this)" style="width: 100%; height: auto; object-fit: cover;">
      <p style="margin: 5px 0;">{{ image.alt }}</p>
    </div>
  {% endfor %}
</div>
