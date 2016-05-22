{% extends "../layouts/default.swig" %}

{% block content %}
	<header>
		<h1>Resource Map</h1>
	</header>
	<div class="resource-map" data-locations="{{locationsString}}"></div>
	<section class="resource-directory">
		<div class="categories">
			{% for category in categories %}
				<a href="/{{category.slug}}"><li>{{category.name}}</li></a>
			{% endfor %}
		</div>
		<div class="locations">
			{% for location in locations %}
				<li>{{location.name}} <span class="location-detail">{{location.category.name}}</span></li>
			{% endfor %}
		</div>
	</section>
{% endblock %}

{% block js %}
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCwDsv0OFpB9X3fkzWkSRCyRRyLA3Rhx6A"></script>
	<script src="/js/render_map.js"></script>
{% endblock %}
