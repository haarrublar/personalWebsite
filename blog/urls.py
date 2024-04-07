from django.urls import path
from . import views
# from .feeds import LatestPostsFeed # activate in case RSS FEED

app_name = 'blog'
urlpatterns = [
    #post views
    path('', views.post_list, name='post_list'),
    path('tag/<slug:tag_slug>/', views.post_list, name='post_list_by_tag'),
    path('<int:year>/<int:month>/<int:day>/<slug:post>/', views.post_detail, name='post_detail'),
    # path('feed/', LatestPostsFeed(), name='post_feed'), # activate in case RSS FEED
    # path('search/', views.post_search, name='post_search'), #for implementing searchbar
]

