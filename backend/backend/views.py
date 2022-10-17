from rest_framework.mixins import ListModelMixin
from rest_framework.viewsets import GenericViewSet
from rest_framework.generics import RetrieveAPIView
from .models import Project, Resume
from .serializers import ProjectSerializer, ResumeSerializer
from rest_framework.response import Response

# Create your views here.
class ProjectListViewSet(GenericViewSet, ListModelMixin):
  queryset = Project.objects.all()
  serializer_class = ProjectSerializer


class ResumeViewSet(RetrieveAPIView):
  def get(self, request):
    defaultResume = Resume.objects.filter(showcase=True).first()
    serializer = ResumeSerializer(defaultResume)
    return Response(serializer.data)
