# Generated by Django 5.0.3 on 2024-03-25 21:01

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_post_created'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={'ordering': ['-created']},
        ),
        migrations.AddIndex(
            model_name='post',
            index=models.Index(fields=['-created'], name='blog_post_created_76eb4c_idx'),
        ),
    ]
