from django.shortcuts import render 
from django.views.generic import TemplateView
from op import prop  

class RobotsTxtView(TemplateView):
    template_name = "robots.txt"
    content_type = "text/plain" 

# Create your views here.
def index(request): 
    pageprop = prop.getprop(request) 
    return render(request, f"index/{pageprop["lang"]}/index.html", {
        "pageprop": pageprop
    }) 

def page404(request): 
    return render(request, f"index/404.html") 
