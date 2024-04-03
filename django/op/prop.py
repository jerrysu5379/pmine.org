from op import language 
from op import color 

def getprop(request): 
    return { 
        "lang": language.get_language(request), 
        "color": color.get_color(request) 
    } 
