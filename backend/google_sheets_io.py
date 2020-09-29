import settings
import pandas as pd 

 

def fetch_csv(content_type):
    if content_type == "cases":
        url = settings.GOOGLE_SHEETS_CASES_URL
    elif content_type == "topics":
        url = settings.GOOGLE_SHEETS_SECTIONS_URL
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
