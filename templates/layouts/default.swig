{% import "../mixins/flash-messages.swig" as FlashMessages %}

<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">

		<title>{{ title|default("Solidarity Map") }}</title>
		<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
		<link href="/styles/site.css" rel="stylesheet">
		<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>

		{%- if user and user.canAccessKeystone -%}
			<link href="/keystone/styles/content/editor.min.css" rel="stylesheet">
		{%- endif -%}

		{%- block css %}{% endblock -%}
		{%- block head %}{% endblock %}
	</head>
	<body>
		{%- block content %}{% endblock -%}

		<script src="/js/jquery/jquery-1.11.3.min.js"></script>
		<script src="/js/bootstrap/bootstrap-3.3.5.min.js"></script>
		<script src="/js/lib/async.min.js"></script>
		{% if user and user.canAccessKeystone -%}
			<script src="/keystone/js/content/editor.js"></script>
		{%- endif -%}
		{%- block js -%}{%- endblock -%}
	</body>
</html>
