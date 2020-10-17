from rest_framework import serializers

from countdown_app.models import CountdownModel

class CountdownSerializer(serializers.ModelSerializer):
	class Meta:
		model = CountdownModel
		fields = "__all__"
