from django.urls import path
from django.views.generic.edit import CreateView

from . import views

app_name = 'michael'

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('featured/', views.FeaturedView.as_view(), name='featured'),
    path('team/', views.TeamView.as_view(), name='team'),
    path('contact/', views.ContactView.as_view(), name='contact'),



    

    
]


