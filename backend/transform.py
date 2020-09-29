import testing_documents_io
import google_sheets_io
import filesystem_io 
import json
import time
import datetime

def _excel_date_to_timestamp(date):
    result = datetime.datetime.strptime(date, "%d/%m/%Y").replace(tzinfo=datetime.timezone.utc).timestamp()
    return int(result)


def explode_justices_concurring(value):
    judgments = {}
    value = value.split("(")
    for item in value[::2]:
        print(item)


def process_topic(_dict):
    _ret = {
            "id": _dict["_id"],
            "contentType": "Topic",
            "title": _dict["title"],
            "content": _dict["content"],
            "featured": bool(_dict["featured"]),
            "sections": str(_dict["sections"]).split(";\n"),
            "references": _dict["cases"].split(";\n"),
            "isBillOfRightsSection": _dict["isBillOfRightSection"]
            }
    return _ret


def process_case(_dict):
    """This function is the main machinery of the translation between csv and json. 
    It defines the logic for creating the JSON
    """
    result = {
        "id": _dict["_id"],
        "contentType": "Case",
        "href": _dict["href"],
        "title": _dict["title"],
        "dateOfJudgment": _excel_date_to_timestamp(_dict["dateOfJudgment (DD/MM/YYYY)"]),
        "courtName": _dict["courtName"],
        "topics": _dict["issue"],
        "justicesConcurring": _dict["justicesConcurring"],
        "summary": _dict["summary"],
        "snippet": _dict["snippet"],
        "facts": _dict["facts"],
        "decision": _dict["decision"],
        "dissent": _dict["dissent"],
        "citedCases": _dict["citedCases"].split(";\n") # TODO: put in a function
        }
    return result


def read_google_sheets(content_type):
    df = google_sheets_io.fetch_csv(content_type)

    for _row in df.iterrows():
        row = _row[1]
        _dict = {
            k: v 
            for k, v in zip(df.columns, row)
            }

        if content_type == "cases":
            result = process_case(_dict)
        elif content_type == "topics":
            result = process_topic(_dict)
        else:
            raise ValueError

        yield result


def read_all_testing_documents():
    """Read all testing documents from the filesystem and transform into a 
    list of dictionaries
    """
    all_testing_filenames = testing_documents_io.fetch_all_filenames()

    # Receive list of Dataframes and transform to list of dicts

    all_testing_documents = [
            json.loads(
                testing_documents_io.fetch_xslx_file(filename
                    ).transpose(
                        ).to_json()
                    )
            for filename in all_testing_filenames
            ]

    # remove additional index that pandas inserts
    for document in all_testing_documents:
        for k, v in document.items():
            document[k] = document[k]["1"]

    return all_testing_documents


def write_dict_to_json(filename, content):
    filesystem_io.write_json(filename, content)


def write_testing_file(filename, content):
    raise DeprecationWarning
    testing_documents_io.write_json(filename, content)


def write_df_to_filesystem(df):
    for row in df.iterrows():
        print(type(row))
