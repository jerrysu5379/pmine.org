from django.urls import path 

from . import views 

urlpatterns = [ 
    path("", views.index, name="index"), 
    path("<int:rid>/process", views.process, name="process"), 
    path("<int:rid>/add", views.add, name="add"), 
] 
