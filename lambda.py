import boto3
import pandas as pd
from io import BytesIO


def lambda_handler(event, context):
    
    key_prod = "Raw/produtos.json"
    key_nf = "Raw/notas_fiscais.json"
    bucket = "datalake-estoque"

    s3 = boto3.client('s3')
    
    obj = s3.get_object(Bucket = bucket, Key = key_nf)
    with BytesIO(obj['Body'].read()) as arquivo: 
        df = pd.read_json(arquivo)
        df['DT_NF'] = pd.to_datetime(df['DT_NF'])
        df['DT_NF'] = df['DT_NF'].dt.strftime('%Y-%m-%d')
        df_json = df.to_json(orient = 'records').encode('utf')
        s3.put_object(Body=df_json, Bucket=bucket, Key="Refined/notas_fiscais.json")
        
    produtos = {
        'Bucket': bucket,
        'Key': key_prod
    }
    s3.copy(produtos, bucket, "Refined/produtos.json")