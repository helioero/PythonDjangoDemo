from rest_framework import serializers
from .models import ProjectList, ProjectDesc

# 用于 /project/<id>/ 的完整序列化（含 desc_list）
class ProjectDescSerializer(serializers.ModelSerializer):
    projectId = serializers.IntegerField(source='project.id')

    class Meta:
        model = ProjectDesc
        fields = ['id', 'projectId', 'desc_text', 'materialsAreReady', 'area', 'workDay']

class ProjectDetailSerializer(serializers.ModelSerializer):
    desc_list = ProjectDescSerializer(many=True, read_only=True)
    endDate = serializers.DateField(format="%Y-%m-%d")

    class Meta:
        model = ProjectList
        fields = ['id', 'img', 'title', 'address', 'projectCode', 'maxArea', 'completedArea',
                  'workDays', 'endDate', 'desc_list']


# 用于 /projects/ 的简化序列化（不含 desc_list）
class ProjectListSerializer(serializers.ModelSerializer):
    endDate = serializers.DateField(format="%Y-%m-%d")

    class Meta:
        model = ProjectList
        fields = ['id', 'img', 'title', 'address', 'projectCode', 'maxArea', 'completedArea',
                  'workDays', 'endDate']
