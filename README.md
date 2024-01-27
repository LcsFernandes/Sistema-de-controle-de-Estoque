# Sistema-de-controle-de-Estoque

## Objetivo do Projeto:
   Esse sistema tem por objetivo construir um Pipeline de dados para trazer informações relevantes referente ao estoque de um eCommerce, mostrando algumas informações que podem servir de insights para futuras ações.

## Proposta de solução:

  - **Arquitetura**:
    ![Arquitetura](https://github.com/LcsFernandes/Sistema-de-controle-de-Estoque/assets/47150397/3510ce65-d230-429c-b15c-2ebf5b3df0c7)


    
  - **Tecnologias utilizadas**:

       - **Docker**:
            - Foi utlizado o docker para containerização das aplicaçãoes locais (Mongodb e Nifi). [compose.yml](https://github.com/LcsFernandes/Sistema-de-controle-de-Estoque/blob/3312f86351697604a6f3084353a85c6e569642db/Docker/compose.yml)
         
      - **Banco de dados: MongoDB**
          - Foi utilizado o MongoDb devido a sua grande escalabilidade e performance. Tratando de um eCommerce, se faz necessário a performance do armazenamento e a velocidade da informação, já que qualquer gargalo e/ou lentidão poderia acarretar em mal funcionamento do eCommerce e assim perder clientes. [configuração das coleções](https://github.com/LcsFernandes/Sistema-de-controle-de-Estoque/blob/0975520aac3616ff9da1ff18d8009086d75f119e/Docker/schema.js)
 
      - **Ingestão de dados: Nifi**
         - O Nifi por ser uma ferramenta muito poderosa, eficaz e de simples configuração, acabou sendo a tecnologia para ingestão de dados. O Nifi coleta os dados do mongoDB e transfere ao Data Lake no amazon S3. [Nifi](https://github.com/LcsFernandes/Sistema-de-controle-de-Estoque/blob/8b70651e4a0364155c0a59bebaf8d289d0421ff9/NiFi/Nifi.png)  
      
      - **Data Lake: Amazon S3**
        - O Datalake foi construído no Amazon S3 devido à sua escalabilidade e facilidade de uso. [Data lake](https://github.com/LcsFernandes/Sistema-de-controle-de-Estoque/blob/acc6f8307c6196fcc05ce22d197e56e79d0de805/Datalake/DataLake_estrututra.png)
      
      - **ETL: Lambda - AWS**
         - Foi necessário utilizar o Amazon Lambda para realizar a transformação e ingestão dos dados da camada Raw do data lake para a Refined. [Codigo](https://github.com/LcsFernandes/Sistema-de-controle-de-Estoque/blob/ba2ca546f9589f009d2dcc2dbf4443b1fe13a284/lambda.py)
      
      - **Visualização: Power Bi**
         - Para construção da visualização foi utilizado o Power Bi por permitir desenvolver as visualizações necessárias de forma simples e eficaz. [Dashboard](https://github.com/LcsFernandes/Sistema-de-controle-de-Estoque/tree/cd7c66a6726364fd1488644638f2336aa69afe48/powerBi)
