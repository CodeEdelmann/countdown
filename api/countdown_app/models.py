import uuid
from django.db import models
from django.utils import timezone
from rest_framework.exceptions import APIException

class CountdownModel(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    countdown_target = models.DateTimeField()

    def save(self, *args, **kwargs):
        if self.countdown_target < timezone.now():
            raise InvalidCountdownTarget
        super().save(*args, **kwargs)

class InvalidCountdownTarget(APIException):
    status_code = 422
    default_detail = "Cannot count down to a moment in the past"
    default_code = "invalid_countdown_target"
