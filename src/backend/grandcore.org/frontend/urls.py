from django.urls import path, include

from . import views


urlpatterns = [
    path("", views.index, name="index"),
    path("index.html", views.index, name="index"),
    path("index.htm", views.index, name="index"),
]

