from rest_framework import serializers
from .models import ImageAlbum, Project, Resume, Image, Skill

class ImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = Image
    fields = ("image",)

class ImageAlbumSerializer(serializers.ModelSerializer):
  images = ImageSerializer(many=True, read_only=True)
  thumbnail = serializers.SerializerMethodField()
  class Meta:
    model = ImageAlbum
    fields = ("images", "thumbnail")
    depth = 1

  def get_thumbnail(self, instance: ImageAlbum):
    image: Image = instance.default()
    serImage = ImageSerializer(image)
    if image is None or not "image" in serImage.data:
      return "#"
    return self.context["request"].build_absolute_uri(serImage.data["image"])

class SkillSerializer(serializers.ModelSerializer):
  class Meta:
    model = Skill
    fields = ("name", "imageURL")

class ProjectSerializer(serializers.ModelSerializer):
  images = ImageSerializer(many=True, read_only=True)
  album = ImageAlbumSerializer()
  # skills = SkillSerializer(many=True, read_only=True, source="skill")
  class Meta:
    model = Project
    # fields = ("title", "abstract", "details", "demoURL", "codeURL", "videoURL", "hasVideo", "isFeatured", "images", "album", "skills")
    fields = ("title", "abstract", "details", "demoURL", "codeURL", "videoURL", "hasVideo", "isFeatured", "images", "album", "tech_skills")

class ResumeSerializer(serializers.ModelSerializer):
  class Meta:
    model = Resume
    fields = ("pdf", )
