import json
import os
import time
import datetime
import pandas as pd 

NUMBER_OF_TOPICS = 3
NUMBER_OF_CASES = 4

JSON_FILENAME = r'data.json'

PRODUCTION_DOCUMENTS_OUTPUT_PATH = r'JSON' # THIS IS THE FOLDER WHERE PROCESSED JSON WILL BE SAVED

GOOGLE_SHEETS_CASES_URL = r'https://docs.google.com/spreadsheets/d/e/2PACX-1vQo8vfq0cVnNmNs8XBXtkQzWdcL-dFDQAmoXhMrfv-L-5SaitTcADF-vI5i6DWYIKZ3eEZbLiu72x42/pub?gid=0&single=true&output=csv'

GOOGLE_SHEETS_SECTIONS_URL = r'https://docs.google.com/spreadsheets/d/e/2PACX-1vQo8vfq0cVnNmNs8XBXtkQzWdcL-dFDQAmoXhMrfv-L-5SaitTcADF-vI5i6DWYIKZ3eEZbLiu72x42/pub?gid=721746947&single=true&output=csv'





def main():
    cases = read_google_sheets('cases')
    topics = read_google_sheets('topics')
    write_all_documents(cases, topics)


def _excel_date_to_timestamp(date):
    # TODO iso 8601
    result = datetime.datetime.strptime(date, "%d/%m/%Y").replace(tzinfo=datetime.timezone.utc).isoformat()
    return result


def process_topic(_dict):
    if _dict["content"] == "":
        return None
    _ret = {
            "id": _dict["id"],
            "title": _dict["title"],
            "content": _dict["content"],
            "featured": bool(_dict["featured"]),
            "highlighted": bool(_dict["highlighted"]),
            "references": str(_dict["references"]).split(";\n"),
            "cases": [
                _dict["case_" + str(i+1)] for i in range(NUMBER_OF_CASES)
                if _dict["case_" + str(i+1)] != ""
                ],
            }
    return _ret


def process_case(_dict):
    """This function is the main machinery of the translation between csv and json. 
    It defines the logic for creating the JSON
    """
    result = {
        "id": _dict["id"],
        "href": _dict["href"],
        "title": _dict["title"],
        "featured": bool(_dict["featured"]),
        "highlighted": bool(_dict["highlighted"]),
        "dateOfJudgment": _excel_date_to_timestamp(_dict["dateOfJudgment (DD/MM/YYYY)"]),
        "courtName": _dict["courtName"],
        "topics": [
            _dict["topic_" + str(i+1)] for i in range(NUMBER_OF_TOPICS)
            if _dict["topic_" + str(i+1)] != ""
            ],
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
    df = fetch_csv(content_type)

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

        if result is None:
            continue

        yield result



def write_all_documents(cases, topics):
    write_json(
            JSON_FILENAME, 
            {
                "cases": list(cases),
                "topics": list(topics)
                }
            )

def fetch_csv(content_type):
    if content_type == "cases":
        url = GOOGLE_SHEETS_CASES_URL
    elif content_type == "topics":
        url = GOOGLE_SHEETS_SECTIONS_URL
    else:
        raise ValueError(
                "Please choose a valid content type sheet to read.\n"
                f"{content_type} is not a valid selection. Choose between 'cases' and 'topics'"
                )

    df = pd.read_csv(
        url,
        sep=","
        )
    df = df.fillna("")
    return df 


def write_json(filename, content):
    stem = PRODUCTION_DOCUMENTS_OUTPUT_PATH
    leaf = filename
    path = os.path.join(stem, leaf)
    print(f"Writing to production output path: {path}")
    with open(path, "w") as f:
        f.write(json.dumps(content))


if __name__=="__main__":
    main()
