from rest_framework import routers
from .views import ProjectListViewSet, ResumeViewSet
from django.urls import path, include

router = routers.DefaultRouter()

router.register("projects", ProjectListViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('resume/', ResumeViewSet.as_view()),
]
