from rest_framework import routers
from .views import ProjectListViewSet, ResumeViewSet
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()

router.register("projects", ProjectListViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('resume/', ResumeViewSet.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
