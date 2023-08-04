from django.core.mail import send_mail
from django.http import JsonResponse
from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings

# Create your views here.
def main(request):
   return HttpResponse('Hello')

def send_email(request):
   if request.method == 'POST':
      name = request.POST.get('name')
      email = request.POST.get('email')
      message = request.POST.get('message')

      send_mail(
         'Contact Form Submission',
         f'Name: {name}\nEmail: {email}\nMessage: {message}',
         email,  # Use the form's email value as the sender
         settings.EMAIL_HOST_USER,
         fail_silently=False,
      )
      return JsonResponse({'message': 'Email sent successfully'})
   return JsonResponse({'message': 'Invalid request method'}, status=400)
