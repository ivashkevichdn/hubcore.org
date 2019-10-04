from django.urls import path, include
from rest_framework import routers
from . import views

# router = routers.DefaultRouter()

# router.register(r"hello_world", views.HelloWorldViewSet)

# urlpatterns = [path("v0/", include(router.urls), name="versiot0")]

urlpatterns = [path("v0/hello_world", views.hello_world, name="versiot0")]

