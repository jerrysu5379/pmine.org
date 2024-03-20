from django.shortcuts import render 
from op import language 

# Create your views here.
def index(request): 
    return render(request, f"index/{language.get_language(request)}/index.html") 
