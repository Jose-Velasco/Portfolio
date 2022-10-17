from rest_framework.serializers import ModelSerializer
from .models import Project, Resume

class ProjectSerializer(ModelSerializer):
  class Meta:
    model = Project
    fields = "__all__"

class ResumeSerializer(ModelSerializer):
  class Meta:
    model = Resume
    fields = ("pdf", )
