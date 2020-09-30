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

def get_cases():
    cases = transform.read_google_sheets('cases')
    return cases 


def get_topics():
    topics = transform.read_google_sheets('topics')
    return topics 




if __name__=="__main__":
    main()
