# Generated by Django 4.1.2 on 2022-10-16 07:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='codeURL',
            field=models.URLField(blank=True, default='#'),
        ),
        migrations.AlterField(
            model_name='project',
            name='demoURL',
            field=models.URLField(blank=True, default='#'),
        ),
        migrations.AlterField(
            model_name='project',
            name='videoURL',
            field=models.URLField(blank=True, default='#'),
        ),
    ]