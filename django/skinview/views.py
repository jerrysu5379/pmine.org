from django.http import FileResponse
from django.shortcuts import render 
from django.conf import settings 

from op import prop 

# Create your views here.

def index(request): 
    pageprop = prop.getprop(request) 
    return render(request, "skinview/index.html", { 
        'pageprop': pageprop, 
        'static_url': settings.ESSENTIALS 
    }) 

def getstatic(request, filename): 
    return FileResponse(open(f"skinview/static/{filename}", 'rb')) 
