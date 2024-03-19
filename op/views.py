from django.shortcuts import render 
from op import language 

# Create your views here. 

def navbar(request): 
    return render(request, f"op/{language.get_language(request)}/navbar.html") 

def footdiv(request): 
    return render(request, f"op/{language.get_language(request)}/footdiv.html") 
