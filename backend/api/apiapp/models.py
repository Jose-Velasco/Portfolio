# from django.db import models
# from .enums import TechIcon
# from .modelUtils import get_upload_path

# # Create your models here.

# class ImageAlbum(models.Model):
#   def default(self):
#       return self.images.filter(default=True).first()

#   def thumbnails(self):
#       return self.images.filter(width__lt=100, height_lt=100)

# class Image(models.Model):
#   name = models.CharField(max_length=255)
#   image = models.ImageField(upload_to=get_upload_path)
#   default = models.BooleanField(default=False)
#   width = models.FloatField(default=100)
#   height = models.FloatField(default=100)
#   album = models.ForeignKey(ImageAlbum, related_name='images', on_delete=models.CASCADE)

# class Skill(models.Model):
#   name = models.CharField(max_length= 100,choices=TechIcon.choices, default=TechIcon.ANGULAR)

# class Project(models.Model):
#   title = models.CharField(max_length=100)
#   abstract = models.TextField(blank=True, null=False, default="")
#   # maps to about for now
#   details = models.TextField(blank=True, null=False, default="")
#   skills = models.ManyToManyField(Skill)
#   demoURL = models.TextField(blank=True, null=False, default="#")
#   codeURL = models.TextField(blank=True, null=False, default="#")
#   # maps to videoID in frontend for now
#   videoURL = models.TextField(blank=True, null=False, default="#")
#   album = models.OneToOneField(ImageAlbum, related_name='model', on_delete=models.CASCADE)
#   hasVideo = models.BooleanField(default=False)
#   isFeatured = models.BooleanField(default=False)
