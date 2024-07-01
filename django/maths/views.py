from django.shortcuts import render

# Create your views here.

from op import prop 

from django.conf import settings 

BACK_URL = settings.ESSENTIALS + "maths/" 

trantext = {

} 

def index(request): 
    pageprop = prop.getprop(request) 
    return render(request, 'maths/index.html', {
        'pageprop': pageprop, 
        'trans': trantext.get(pageprop["lang"], {}), 
        'url': BACK_URL 
    }) 

def numeration(request): 
    pageprop = prop.getprop(request) 
    return render(request, 'maths/numeration.html', {
        'pageprop': pageprop, 
        'trans': trantext.get(pageprop["lang"], {}), 
        'url': BACK_URL 
    }) 
