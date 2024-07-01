from django.urls import path 

from . import views 

urlpatterns = [ 
    path("", views.index, name="index"), 
    path("numeration", views.numeration, name="numeration"), 
    # path("random", views.random, name="random"), 
] 
