from django.urls import path 

from . import views 

urlpatterns = [ 
    path("", views.index, name="index"), 
    #path("cinder", views.cinder, name="cinder"), 
    #path("yan", views.yan, name="yan"), 
    #path("redstone", views.redstone, name="redstone"), 
] 
