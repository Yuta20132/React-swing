from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r"todo_info", TodoView, basename="todo_info")
urlpatterns = router.urls