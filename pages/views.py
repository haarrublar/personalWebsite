from django.shortcuts import render
from .models import AuthorInfo, AuthorStudies, ExpertiseCategory, ExpertiseTool, WorkExperience, Project, Publication, AcademicParticipation


# Create your views here.
def home(request):
    author_info = AuthorInfo.objects.all()
    author_studies = AuthorStudies.objects.all()
    expertise_categories = ExpertiseCategory.objects.all()
    expertise_tools = ExpertiseTool.objects.all()
    author_work_experience = WorkExperience.objects.all()
    author_academic_participation = AcademicParticipation.objects.all()
    author_projects = Project.objects.all()
    author_publications = Publication.objects.all()


    return render(
        request,
        'home/home.html',
        {
            'author_info': author_info,
            'author_studies': author_studies,
            'expertise_categories': expertise_categories, 
            'expertise_tools': expertise_tools,
            'author_work_experience': author_work_experience,
            'author_academic_participation': author_academic_participation,
            'author_projects': author_projects,
            'author_publications': author_publications,
        }
    )

def about(request):
    return render(
        request,
        'about/about.html'
    )