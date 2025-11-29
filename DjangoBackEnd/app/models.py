from django.db import models

class ProjectList(models.Model):
    img = models.CharField(max_length=255)
    title = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    projectCode = models.CharField(max_length=50)
    maxArea = models.DecimalField(max_digits=10, decimal_places=2)
    completedArea = models.DecimalField(max_digits=10, decimal_places=2)
    workDays = models.IntegerField()
    endDate = models.DateField()
    class Meta:
        db_table = 'project_list'


class ProjectDesc(models.Model):
    project = models.ForeignKey(
        ProjectList,
        related_name='desc_list',
        db_column='projectId', # 对应 MySQL 表里实际列名
        on_delete=models.CASCADE)
    desc_text = models.CharField(max_length=255)
    materialsAreReady = models.BooleanField(default=False)
    area = models.DecimalField(max_digits=10, decimal_places=2)
    workDay = models.IntegerField()
    class Meta:
        db_table = 'project_desc'