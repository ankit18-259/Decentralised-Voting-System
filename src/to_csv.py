import json
from pprint import pprint
import pandas as pd

def change_json_to_csv():
    df1 = pd.read_json (r'../data/nodeData/node1.json')
    x1 = df1.to_csv(r'Pydata/node1.csv', index= None)

    df2 = pd.read_json (r'../data/nodeData/node2.json')
    x2 = df2.to_csv(r'Pydata/node2.csv', index= None)

    df3 = pd.read_json (r'../data/nodeData/node3.json')
    x3 = df3.to_csv(r'Pydata/node3.csv', index= None)

    df4 = pd.read_json (r'../data/nodeData/node4.json')
    x4 = df4.to_csv(r'Pydata/node4.csv', index= None)

    df5 = pd.read_json (r'../data/nodeData/node5.json')
    x5 = df5.to_csv(r'Pydata/node5.csv', index= None)

    df6 = pd.read_json (r'../data/nodeData/node6.json')
    x6 = df6.to_csv(r'Pydata/node6.csv', index= None)

    df7 = pd.read_json (r'../data/nodeData/node7.json')
    x7 = df7.to_csv(r'Pydata/node7.csv', index= None)

    df8 = pd.read_json (r'../data/nodeData/node8.json')
    x8 = df8.to_csv(r'Pydata/node8.csv', index= None)
