import transform

def main():
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
