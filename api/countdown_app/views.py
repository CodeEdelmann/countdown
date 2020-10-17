from django.shortcuts import render
from rest_framework import mixins, viewsets

from countdown_app.models import CountdownModel
from countdown_app.serializers import CountdownSerializer

# Create your views here.
class CountdownViewSet(mixins.CreateModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
	serializer_class = CountdownSerializer
	queryset = CountdownModel.objects.all()
	pass
