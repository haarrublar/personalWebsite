from django.contrib import admin
from .models import AuthorInfo, AuthorStudies, ExpertiseCategory, ExpertiseTool, WorkExperience, Project, Publication, AcademicParticipation

# Register your models here.
@admin.register(AuthorInfo)
class AuthorInfoAdmin(admin.ModelAdmin):
    list_display = ['author_name', 'author_role', 'author_email', 'author_country']

@admin.register(AuthorStudies)
class AuthorStudiesAdmin(admin.ModelAdmin):
    list_display = ['author', 'masters_study', 'bachelor_study']

class ExpertiseToolInline(admin.TabularInline):
    model = ExpertiseTool
    extra = 1
    fields = ['tool_name', 'tool_image', 'tool_url']

@admin.register(ExpertiseCategory)
class ExpertiseCategoryAdmin(admin.ModelAdmin):
    inlines = [ExpertiseToolInline]
    list_display = ['expertise',]

@admin.register(WorkExperience)
class WorkExperienceAdmin(admin.ModelAdmin):
    list_display = ['author', 'company']

@admin.register(AcademicParticipation)
class AcademicParticipationAdmin(admin.ModelAdmin):
    list_display = ['role', 'year', 'event']

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['project_name', 'year']

@admin.register(Publication)
class PublicationAdmin(admin.ModelAdmin):
    list_display = ['title', 'year', 'journal']