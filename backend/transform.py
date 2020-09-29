import google_sheets_io
import filesystem_io
import json
import time
import datetime
import settings


def _excel_date_to_timestamp(date):
    # TODO iso 8601
    result = datetime.datetime.strptime(date, "%d/%m/%Y").replace(tzinfo=datetime.timezone.utc).timestamp()
    return int(result)


def explode_justices_concurring(value):
    judgments = {}
    value = value.split("(")
    for item in value[::2]:
        print(item)


def process_topic(_dict):
    _ret = {
            "id": _dict["id"],
            "contentType": "Topic",
            "title": _dict["title"],
            "content": _dict["content"],
            "featured": bool(_dict["featured"]),
            "references": str(_dict["references"]).split(";\n"),
            "cases": _dict["cases"].split(";\n"),
            }
    return _ret


def process_case(_dict):
    """This function is the main machinery of the translation between csv and json. 
    It defines the logic for creating the JSON
    """
    result = {
        "id": _dict["id"],
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



def write_all_documents(all_documents):
    filesystem_io.write_json(settings.JSON_FILENAME, all_documents)
