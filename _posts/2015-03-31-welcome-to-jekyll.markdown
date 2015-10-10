---
layout: post
title:  "NYCCLI: A Timeline"
date:   2015-03-31 15:31:54
categories: timeline
---

```html
	<head>
		<!-- jQuery -->
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
		<!-- BEGIN TimelineJS -->
		<script type="text/javascript" src="http://cdn.knightlab.com/libs/timeline/latest/js/storyjs-embed.js"></script>
		<script>
			$(document).ready(function() {
				createStoryJS({
					type:		'timeline',
					width:		'800',
					height:		'600',
					source:		'path_to_json/or_link_to_googlespreadsheet',
					embed_id:	'my-timeline'
				});
			});
		</script>
		<!-- END TimelineJS -->
	</head>
	<body>	
		<div id="my-timeline"></div>
	</body>
```

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
