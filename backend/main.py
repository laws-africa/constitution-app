import transform

def main():
    cases()
    topics()

def cases():
    all_documents = transform.read_google_sheets('cases')

    for document in all_documents:
        transform.write_dict_to_json(document['id'], document)


def topics():
    all_documents = transform.read_google_sheets('topics')

    for document in all_documents:
        transform.write_dict_to_json(document['id'], document)


if __name__=="__main__":
    main()
