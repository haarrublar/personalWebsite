from django.contrib.sitemaps import Sitemap
from django.urls import reverse

class StaticViewSitemap(Sitemap):
    priority = 0.5
    changefreq = "daily"

    def items(self):
        pages_views = [
            'home_view', 'about',  # Add your pages app views here
        ]
        blog_views = [
            'post_list', 'post_list_by_tag', 'post_detail',  # Add your blog app views here
        ]

        return pages_views + blog_views

    def location(self, item):
        if item in ['post_list', 'post_list_by_tag', 'post_detail']:
            # Handle blog app views that require additional arguments
            if item == 'post_detail':
                return reverse('blog:post_detail', args=[2023, 4, 12, 'sample-post'])
            elif item == 'post_list_by_tag':
                return reverse('blog:post_list_by_tag', args=['sample-tag'])
            else:
                return reverse('blog:post_list')
        else:
            # Handle pages app views and other static views
            return reverse('pages:' + item)