from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from .models import Post
from django.shortcuts import get_object_or_404
from django.core.paginator import Paginator, EmptyPage
from taggit.models import Tag
from django.db.models import Count


def post_list(request, tag_slug=None):
    """
    Create a post list accessing to the Post in the DB using the Manager for the Post Class PublishedManager.
    """
    # call the Published manager using the object within the Post class.
    post_list = Post.published.all()

    all_tags = Tag.objects.annotate(tag_count=Count('post')).order_by('-tag_count')

    published_tags = Tag.objects.filter(post__status=Post.Status.PUBLISHED).annotate(tag_count=Count('post')).order_by('-tag_count')


    tag = None
    if tag_slug:
        tag = get_object_or_404(Tag, slug=tag_slug)
        post_list = post_list.filter(tags__in=[tag])

    paginator = Paginator(post_list,5)
    page_number = request.GET.get('page',1)

    try:
        posts = paginator.page(page_number)
    except EmptyPage:
        posts = paginator.page(paginator.num_pages)


    return render(request,
                  'blog/post/list.html',
                  {'posts': posts,
                   'tag': tag,
                   'all_tags': all_tags,
                   'published_tags': published_tags}
    )

def post_detail(request, year, month, day, post):
    post = get_object_or_404(Post,
                             status=Post.Status.PUBLISHED,
                             slug=post,
                             publish__year=year,
                             publish__month=month,
                             publish__day=day)
    return render(request,
                  'blog/post/detail.html',
                  {'post': post})


