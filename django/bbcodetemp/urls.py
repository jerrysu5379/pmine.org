from django.urls import path 

from . import views 

urlpatterns = [ 
    path("", views.index, name="index"), 
    path("<str:temp>/", views.templates, name="templates"), 
    path("<str:temp>/temp", views.viewtemp, name="viewtemp"), 
    path("spxxklp/view", views.spxxklp, name="spxxklp"), 
    path("spxxklp/download", views.spxxklpdown, name="spxxklpdown"), 
    #path("redstone", views.redstone, name="redstone"), 
] 
