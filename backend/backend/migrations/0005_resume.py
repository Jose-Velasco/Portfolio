# Generated by Django 4.1.2 on 2022-10-16 20:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_imagealbum_name_alter_project_title'),
    ]

    operations = [
        migrations.CreateModel(
            name='Resume',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pdf', models.FileField(upload_to='resumes')),
            ],
        ),
    ]
