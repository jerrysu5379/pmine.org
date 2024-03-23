from django.urls import path 
from . import views 
from .views import RobotsTxtView 

urlpatterns = [ 
    path("", views.index, name="index"), 
    path('robots.txt', RobotsTxtView.as_view()), 
] 
