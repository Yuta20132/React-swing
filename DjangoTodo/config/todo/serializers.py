from rest_framework import serializers
from todo import models
from todo.models import Todo

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('title', 'description', 'created_at', 'updated_at')
        