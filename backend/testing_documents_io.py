import settings
import pandas as pd
import glob
import os


def fetch_xslx_file(filename):
    content = pd.read_excel(filename, index_col=0, header=None)
    return content
    


def fetch_all_filenames():
    stem = settings.TESTING_DOCUMENTS_INPUT_PATH
    leaf = r'*.xlsx'
    path = os.path.join(stem, leaf)
    all_filenames = glob.glob(path)
    return all_filenames


