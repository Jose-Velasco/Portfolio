from django.contrib import admin
from .models import ImageAlbum, Project, Skill, Image

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

@admin.register(Image)
class ImageAlbumAdmin(admin.ModelAdmin):
  pass
