from django.db import models
from django.urls import reverse
from django.core.validators import FileExtensionValidator


class AuthorInfo(models.Model):
    author_name = models.CharField(max_length=50)
    author_role = models.CharField(max_length=50)
    author_email = models.EmailField(max_length=100)
    author_git_user = models.CharField(max_length=50)
    author_country = models.CharField(max_length=50)
    author_photo = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=None)
    author_intro = models.TextField()
    author_resume = models.TextField()

    def __str__(self):
        return self.author_name

class AuthorStudies(models.Model):
    author = models.ForeignKey(AuthorInfo, 
                               on_delete=models.CASCADE, related_name='studies',
                               default=1)
    masters_study = models.CharField(max_length=100)
    masters_university = models.CharField(max_length=100)
    masters_graduation_date = models.DateField()

    bachelor_study = models.CharField(max_length=100)
    bachelor_university = models.CharField(max_length=100)
    bachelor_graduation_date = models.DateField()

    def __str__(self):
        return f"{self.author.author_name}'s study: {self.masters_study}"
    
class ExpertiseCategory(models.Model):
    expertise = models.CharField(max_length=100)
    author = models.ForeignKey(AuthorInfo, 
                               on_delete=models.CASCADE, related_name='expertise',
                               default=1)

    def __str__(self):
        return self.expertise
    
    def get_absolute_url(self):
        return reverse('expertise_category_detail', args=[str(self.id)])

class ExpertiseTool(models.Model):
    tool = models.ForeignKey(ExpertiseCategory, on_delete=models.CASCADE, related_name='subcategories')
    tool_name = models.CharField(max_length=100)
    tool_url = models.URLField(max_length=200)
    tool_image = models.FileField(upload_to="images/", validators=[FileExtensionValidator(['pdf', 'doc', 'svg', 'png','jpg'])])

    def __str__(self):
        return self.tool_name
    
class WorkExperience(models.Model):
    author = models.ForeignKey(AuthorInfo, 
                               on_delete=models.CASCADE, related_name='work_experiences',
                               default=1)
    company = models.CharField(max_length=250)
    position = models.CharField(max_length=250)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    is_current = models.BooleanField(default=False)
    country = models.CharField(max_length=100)
    job_description = models.TextField()

    def __str__(self):
        return f"{self.company} ({self.start_date} - {self.end_date})"

class AcademicParticipation(models.Model):
    author = models.ForeignKey(AuthorInfo, 
                               on_delete=models.CASCADE, related_name='academic_participations',
                               default=1)
    role = models.CharField(max_length=100)
    year = models.IntegerField()
    event = models.TextField()
    skills = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.role} - {self.year}"

class Project(models.Model):
    author = models.ForeignKey(AuthorInfo, 
                               on_delete=models.CASCADE, related_name='projects',
                               default=1)
    project_name = models.CharField(max_length=250)
    year = models.IntegerField()
    description = models.TextField(null=True, blank=True)
    skills = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.project_name} - {self.year}"

class Publication(models.Model):
    author = models.ForeignKey(AuthorInfo, 
                               on_delete=models.CASCADE, related_name='publications',
                               default=1)
    title = models.CharField(max_length=250)
    participants = models.CharField(max_length=250)
    role = models.CharField(max_length=250,null=True, blank=True)
    url = models.URLField(max_length=200)
    journal = models.CharField(max_length=250)
    year = models.IntegerField()

    def __str__(self):
         return f"{self.title} - {self.year}"

