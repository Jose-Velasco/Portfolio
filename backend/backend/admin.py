from django.contrib import admin
from .models import ImageAlbum, Project, Skill, Image, Resume

class SkillInLine(admin.StackedInline):
  model = Skill
  extra = 0

class ImageInLine(admin.TabularInline):
  model = Image
  extra = 0

# Register your models here.
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
  inlines = [SkillInLine]
  list_display = ("title", "abstract")

@admin.register(Skill)
class ProjectAdmin(admin.ModelAdmin):
  pass

@admin.register(ImageAlbum)
class ImageAlbumAdmin(admin.ModelAdmin):
  inlines = [ImageInLine]
  list_display = ("__str__", "total_images")

  def total_images(self, obj):
    return len(obj.images.all())

@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
  list_display = ("__str__", "default")

@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
  list_display = ("__str__", "showcase")
