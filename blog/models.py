"""
Here we define the tables of our DB. Apply migrations and django transform the models (.py) into DB.

Each class creates a DB.
"""

from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=250)
    slug = models.SlugField(max_length=250)
    body = models.TextField()
    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='blog_posts'
    )

    def __str__(self):
        return self.title