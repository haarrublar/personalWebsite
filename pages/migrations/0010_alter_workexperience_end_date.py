# Generated by Django 5.0.4 on 2024-04-07 23:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0009_workexperience'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workexperience',
            name='end_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]