from django import template
from ..models import Post
from django.template.defaultfilters import stringfilter
from django.utils.safestring import mark_safe

import markdown

register = template.Library()
@register.simple_tag
def total_post():
    return Post.published.count()

@register.inclusion_tag('blog/post/latest_post.html')
def show_latest_posts(count=2):
    latest_post = Post.published.order_by('-publish')[:count]
    return {'latest_post': latest_post}

@register.filter(name='markdown')
@stringfilter
def render_markdown(value):
    md = markdown.Markdown(extensions=["extra","mdx_math","md_in_html"])
    return mark_safe(md.convert(value))
