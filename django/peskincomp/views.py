from django.shortcuts import render 
from op import language 

# Create your views here.

BACK_URL = 'https://skin.pmine.org' 

def index(request): 
    return render(request, "peskincomp/index.html", { 
        'lang': language.get_language(request), 
        'url': BACK_URL 
    }) 

def process(request, rid): 
    return render(request, "peskincomp/process.html", { 
        'lang': language.get_language(request), 
        'url': BACK_URL, 
        'rid': rid 
    }) 

def add(request, rid): 
    return render(request, "peskincomp/add.html", { 
        'lang': language.get_language(request), 
        'url': BACK_URL, 
        'rid': rid 
    }) 