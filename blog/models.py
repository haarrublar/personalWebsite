"""
Here we define the tables of our DB. Apply migrations and django transform the models (.py) into DB.

Each class creates a DB.
"""

from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):

    class Status(models.TextChoices):
        """
        Create a status per blog. Two status allowed: draft and published depicting incomplete /in progress and completed respectively. 
        """
        draft = 'df','draft'
        published = 'pb','published'

    title = models.CharField(max_length=250)
    created = models.DateTimeField(auto_now_add=True)
    # the slug term is for URL creation
    slug = models.SlugField(max_length=250)
    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='blog_posts'
    )
    body = models.TextField()
    status = models.CharField(
        max_length=2,
        choices=Status.choices,
        default=Status.draft
    )


    class Meta:
        """
        Meta-class of Post class setting an ordering of the post based on the data of creation and setting indexes to the post for enhancing searching (higher search speed, lower read speed)
        """
        ordering = ['-created']
        indexes = [
            models.Index(fields=['-created'])
        ]

    def __str__(self):
        return self.title