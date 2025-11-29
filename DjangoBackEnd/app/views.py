from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import ProjectList
from .serializers import ProjectListSerializer, ProjectDetailSerializer

# Create your views here.

def index(request):
    return JsonResponse({'hello': 'world', 'name': 'django'})


class ProjectListView(APIView):
    def get(self, request):
        projects = ProjectList.objects.all()
        serializer = ProjectListSerializer(projects, many=True)
        return Response(serializer.data)


class ProjectDetailView(APIView):
    def get(self, request, project_id):
        try:
            project = ProjectList.objects.prefetch_related('desc_list').get(id=project_id)
        except ProjectList.DoesNotExist:
            return Response({"error": "Project not found"}, status=404)
        serializer = ProjectDetailSerializer(project)
        return Response(serializer.data)