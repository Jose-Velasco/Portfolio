from django.db import models
from .enums import TechIcon
from .modelUtils import get_upload_path, filefieldFileName

# Create your models here.

class ImageAlbum(models.Model):
  name = models.CharField(blank=True, max_length=255)

  def __str__(self) -> str:
     return self.name

  def default(self):
      return self.images.filter(default=True).first()

  def thumbnails(self):
      return self.images.filter(width__lt=100, height_lt=100)

class Image(models.Model):
  name = models.CharField(max_length=255)
  image = models.ImageField(upload_to=get_upload_path)
  default = models.BooleanField(default=False)
  width = models.FloatField(default=100)
  height = models.FloatField(default=100)
  album = models.ForeignKey(ImageAlbum, related_name='images', on_delete=models.CASCADE)

  def __str__(self) -> str:
     return filefieldFileName(self.image)



class Project(models.Model):
  title = models.CharField(max_length=255)
  abstract = models.TextField(blank=True, default="")
  # maps to about for now
  details = models.TextField(blank=True, default="")
  # skills = models.ManyToManyField(Skill)
  demoURL = models.URLField(blank=True, default="#")
  codeURL = models.URLField(blank=True, default="#")
  # maps to videoID in frontend for now
  videoURL = models.URLField(blank=True, default="#")
  album = models.OneToOneField(ImageAlbum, related_name='model', on_delete=models.SET_NULL, blank=True, null=True)
  hasVideo = models.BooleanField(default=False)
  isFeatured = models.BooleanField(default=False)

class Skill(models.Model):
  project = models.ForeignKey(Project, related_name="skill", on_delete=models.CASCADE)
  name = models.CharField(max_length= 100, choices=TechIcon.choices, default=TechIcon.ANGULAR)

  def __str__(self) -> str:
     return f"{self.name}"

class Resume(models.Model):
  pdf = models.FileField(upload_to="resumes")
  showcase = models.BooleanField(default=False)

  def __str__(self) -> str:
     return filefieldFileName(self.pdf)
