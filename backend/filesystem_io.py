import settings 
import os
import json


def write_dataframe_to_json(filename, df):
    stem = settings.TESTING_DOCUMENTS_OUTPUT_PATH 
    leaf = filename + '.json'
    path = os.path.join(stem, leaf)
    _json = df.to_json()


def write_json(filename, content):
    stem = settings.PRODUCTION_DOCUMENTS_OUTPUT_PATH
    leaf = filename + '.json'
    path = os.path.join(stem, leaf)
    print(f"Writing to production output path: {path}")
    with open(path, "w") as f:
        f.write(json.dumps(content))
