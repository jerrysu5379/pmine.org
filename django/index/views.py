from django.shortcuts import render 
from django.views.generic import TemplateView
from op import language 

class RobotsTxtView(TemplateView):
    template_name = "robots.txt"
    content_type = "text/plain" 

# Create your views here.
def index(request): 
    return render(request, f"index/{language.get_language(request)}/index.html") 
