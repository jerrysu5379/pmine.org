from django.urls import path 

from . import views 

urlpatterns = [ 
    path("", views.index, name="index"), 
    path("files/<str:filename>", views.getstatic, name="getstatic") 
] 
