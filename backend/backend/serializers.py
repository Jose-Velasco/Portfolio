from rest_framework.serializers import ModelSerializer
from .models import ImageAlbum, Project, Resume, Image

class ImageSerializer(ModelSerializer):
  class Meta:
    model = Image
    fields = ("image",)

class ImageAlbumSerializer(ModelSerializer):
  images = ImageSerializer(many=True, read_only=True)
  class Meta:
    model = ImageAlbum
    fields = ("images", )
    depth = 1

class ProjectSerializer(ModelSerializer):
  images = ImageSerializer(many=True, read_only=True)
  album = ImageAlbumSerializer()
  class Meta:
    model = Project
    fields = ("title", "abstract", "details", "demoURL", "codeURL", "videoURL", "hasVideo", "isFeatured", "images", "album")

class ResumeSerializer(ModelSerializer):
  class Meta:
    model = Resume
    fields = ("pdf", )
