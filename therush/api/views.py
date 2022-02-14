from http.client import HTTPResponse
import json

from django.http import JsonResponse, HttpResponseServerError


def get_test_data(request):
    if request.method == "GET":
        try:
            formatted_data = {}
            with open("data/rushing.json", "r") as f:
                data = json.load(f)
                for idx, row in enumerate(data):
                    row["id"] = idx

            columns = []
            for column in data[0].keys():
                columns.append({"name": column, "label": column})

            formatted_data["columns"] = columns
            formatted_data["data"] = data
            return JsonResponse(formatted_data, safe=False)
        except:
            return HttpResponseServerError("Server Error")
