import transform
import requests
import filesystem_io
import os


# Get your auth token from https://edit.laws.africa/accounts/profile/api/
INDIGO_AUTH_TOKEN = os.environ.get('INDIGO_AUTH_TOKEN')


def write_constitution():
    headers = {'Authorization': f'Token {INDIGO_AUTH_TOKEN}'}
    resp = requests.get('https://api.laws.africa/v2/akn/za/act/1996/constitution/toc.json', headers=headers)
    resp.raise_for_status()
    # {"toc": [...]}
    data = resp.json()

    resp = requests.get('https://api.laws.africa/v2/akn/za/act/1996/constitution.html', headers=headers)
    resp.raise_for_status()
    data['body'] = resp.text
    filesystem_io.write_json('constitution.json', data)


def main():
    #write_constitution()
    cases = get_cases()
    topics = get_topics()
    transform.write_all_documents(cases, topics)

def write_all_documents(cases, topics):
    write_json(
            JSON_FILENAME, 
            {
                "cases": {case[0]: case[1] for case in cases},
                "topics": {topic[0]: topic[1] for topic in topics}
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
