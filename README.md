# Sistema-de-controle-de-Estoque

## Objetivo do Projeto:
  Esse sistema tem por objetivo trazer informações relevantes referente ao estoque de um eCommerce, mostrando alguns dados que podem servir de insights para futuras ações.

## Proposta de solução:
  - Tecnologias utilizadas:
      - Banco de dados: MongoDB
          Foi utilizado o MongoDb devido a sua grande escalabilidade e performance. Tratando de um eCommerce, se faz necessário a performance do armazenamento e a velocidade da informação, já que qualquer gargalo  
 e/ou lentidão poderia acarretar em mal funcionamento do eCommerce e assim perder clientes.
 
      - Ingestão de dados: Nifi
          O Nifi por ser uma ferramenta muito poderosa, eficaz e de simples configuração, acabou sendo a tecnologia para ingestão de dados. O Nifi coleta os dados do mongoDB e transfere ao Data Lake (S3 - AWS).  
      
      - Data Lake: Amazon S3
         O Datalake foi construído no Amazon S3 devido à sua escalabilidade e facilidade de uso. 
      
      - ETL: Lambda - AWS
          Foi necessário utilizar o Amazon Lambda para realizar a ingestão dos dados da camada Raw do data lake para a Refined.
      
      - Visualização: Power Bi
          Para construção da visualização foi utilizado o Power Bi por permitir desenvolver as visualizações necessárias de forma simples e eficaz.
