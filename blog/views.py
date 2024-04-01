from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from .models import Post
from django.shortcuts import get_object_or_404


def post_list(request):
    """
    Create a post list accessing to the Post in the DB using the Manager for the Post Class PublishedManager.
    """
    # call the Published manager using the object within the Post class.
    posts = Post.published.all()
    return render(request,
                  'blog/post/list.html',
                  {'posts': posts}
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
                  {'posts': post})


