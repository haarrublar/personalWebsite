from django.contrib import admin
from .models import Post

# # by default/easiest registration models
# admin.site.register(Post)

# custom registering models 
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title','slug','author','created', 'publish', 'status','keywords']
    list_filter = ['author','status']
    prepopulated_fields = {'slug':('title',)}