from countdown_app.views import CountdownViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('countdowns', CountdownViewSet, basename='countdown')
urlpatterns = router.urls
