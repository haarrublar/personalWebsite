from django.contrib import admin
from django.urls import path
from .views import main, send_mail

urlpatterns = [
    path('', main),
    path('website/send_mail', send_mail, name='send_email'),
]
