from django.shortcuts import render 
from op import language 
from django.conf import settings 

# Create your views here.

BACK_URL = settings.ESSENTIALS + "bbcodetemp/" 

def index(request): 
    return render(request, "bbcodetemp/index.html", { 
        'lang': language.get_language(request), 
        'url': BACK_URL, 
        'temp': "index", 
    }) 

def templates(request, temp): 
    return render(request, f"bbcodetemp/{temp}/index.html", { 
        'lang': language.get_language(request), 
        'url': BACK_URL, 
        'temp': temp, 
    }) 

def viewtemp(request, temp): 
    return render(request, f"bbcodetemp/{temp}/temp.html", { 
        'lang': language.get_language(request), 
        'url': BACK_URL, 
        'temp': temp, 
    }) 
