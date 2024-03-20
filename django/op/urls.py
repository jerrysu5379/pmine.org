from django.urls import path 
from . import views 
from . import language 

urlpatterns = [ 
    path("lan/<str:lan>", language.set_language, name="set_lan"), 

    # Navbars and Footdivs 
    path("navbar", views.navbar, name="navbar"), 
    path("footdiv", views.footdiv, name="footdiv"), 
] 
