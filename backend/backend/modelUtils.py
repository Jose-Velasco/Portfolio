import os
from django.db.models import FileField

def get_upload_path(instance, filename):
    model = instance.album.model.__class__._meta
    name = model.verbose_name_plural.replace(' ', '_')
    return f'{name}/images/{filename}'

def filefieldFileName(instance: FileField):
  return os.path.basename(instance.name)
