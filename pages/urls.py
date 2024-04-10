from django.urls import path
from . import views

# make your pages app urls here
app_name = 'pages'
urlpatterns = [
    path('',views.home, name='home_view'),
    path('about/', views.about, name='about'),
]