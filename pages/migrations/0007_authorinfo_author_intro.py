# Generated by Django 5.0.4 on 2024-04-07 22:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0006_expertisetool_tool_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='authorinfo',
            name='author_intro',
            field=models.TextField(default='empty'),
            preserve_default=False,
        ),
    ]