from django.shortcuts import render
from django.http import JsonResponse

from rest_framework import viewsets
from rest_framework.response import Response


def hello_world(request):
    return JsonResponse({"msg": "Hello New World from Server GrandCore.org!"})


class HelloWorldViewSet(viewsets.ModelViewSet):
    """
    Example empty viewset demonstrating the standard
    actions that will be handled by a router class.

    If you're using format suffixes, make sure to also include
    the `format=None` keyword argument for each action.
    """

    def retrieve(self, request, pk=None):
        return Response("Hello New World from Server GrandCore.org!")

