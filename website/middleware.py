# website/middleware.py

from django.http import HttpResponsePermanentRedirect 
from django.template import RequestContext

class HtmlRedirectMiddleware:

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.path[-5:] != '.html':
            html_path = request.path + '.html'
            
            # Use template RequestContext to check if template exists
            if html_path in RequestContext(request).template_name: 
                return HttpResponsePermanentRedirect(html_path)

        response = self.get_response(request)
        return response