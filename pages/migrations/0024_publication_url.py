# Generated by Django 5.0.4 on 2024-04-08 06:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0023_project_publication_delete_test'),
    ]

    operations = [
        migrations.AddField(
            model_name='publication',
            name='url',
            field=models.URLField(default='empty'),
            preserve_default=False,
        ),
    ]
