from django.urls import path 
from . import views 
from .views import RobotsTxtView 

urlpatterns = [ 
    path("", views.index, name="index"), 
    path('robots.txt', RobotsTxtView.as_view()), 
    path("index.html", views.index, name="index"), 
    path("changelog", views.page404, name="page404"), 
    path("developers", views.page404, name="page404"), 
] 
