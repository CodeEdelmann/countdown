import uuid
from django.db import models

# Create your models here.
class CountdownModel(models.Model):
	uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	countdown_target = models.DateTimeField()
