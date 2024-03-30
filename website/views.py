from django.shortcuts import render


def home(request):
   return render(request, 'home/home.html')

def about(request):
    return render(request, 'about/about.html')

def resume(request):
    return render(request, 'resume/resume.html')

def footer(request):
    return render(request, 'footer/footer.html')
