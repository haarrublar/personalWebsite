# Generated by Django 5.0.4 on 2024-04-07 23:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0013_workexperience_position'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workexperience',
            name='company',
            field=models.CharField(max_length=250),
        ),
    ]
