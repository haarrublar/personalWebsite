from django.shortcuts import render
from pygments import highlight 
from pygments.lexers import PythonLexer
from pygments.formatters import HtmlFormatter


def home(request):
   return render(request, 'home/home.html')

def about(request):
    return render(request, 'about/about.html')

def resume(request):
    return render(request, 'resume/resume.html')

def footer(request):
    return render(request, 'footer/footer.html')