from django.urls import path 

from . import views 

urlpatterns = [ 
    path("", views.index, name="index"), 
    path("<str:temp>/", views.templates, name="templates"), 
    path("<str:temp>/temp", views.viewtemp, name="viewtemp"), 
    #path("redstone", views.redstone, name="redstone"), 
] 
