from django.shortcuts import render

from op import language

# Create your views here.

def index(request): 
    return render(request, "uuidgen/index.html", {
        'lang': language.get_language(request), 
    }) 
