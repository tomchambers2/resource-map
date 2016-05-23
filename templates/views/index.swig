{% extends "../layouts/default.swig" %}

{% block content %}
	<header>
		<h1>Solidarity Map</h1>
		<h1><a href="mailto:ldodd099@gmail.com">Contact</a></h1>
	</header>
	<div class="resource-map" data-locations="{{locationsString}}"></div>
	<section class="resource-directory">
		<div class="categories">
			{% for category in categories %}
				<li>
					<a href="/{{category.slug}}">
						<div>
							{{category.name}}
						</div>
					</a>
				</li>
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
