db = db.getSiblingDB('eCommerce');

db.createCollection("produtos", {clusteredIndex: {"key": {_id: 1}, "unique": true, "name": "indice de produtos clusterizado" }});
db.createCollection("nota_fiscal", {clusteredIndex: {"key": {_id: 1}, "unique": true, "name": "indice de nota fiscal clusterizado"}});

db.produtos.insertMany([
    {"_id": 1, "NM_PROD": "Boneca de Pano LupaLupa", "DS_PROD": "Boneca de Pano especial feita a mao", "PC_PROD": 55.52, "QT_PROD": 6, "LD_TIME": 8},
    {"_id": 2, "NM_PROD": "Fone ouvido Sony wifi", "DS_PROD": "Fone de ouvido top de mercado", "PC_PROD": 132, "QT_PROD": 2, "LD_TIME": 10},
    {"_id": 3, "NM_PROD": "Jogo tabuleiro imagem  e acao", "DS_PROD": "famoso jogo de tabuleiro", "PC_PROD": 220, "QT_PROD": 0, "LD_TIME": 15},
    {"_id": 4, "NM_PROD": "Celular Samsumg 20 geracao", "DS_PROD": "Novo celular 3d samsumg", "PC_PROD": 2134.99, "QT_PROD": 50, "LD_TIME": 30},
    {"_id": 5, "NM_PROD": "Colchao Castor Molas King", "DS_PROD": "Novo colchao molas king castor", "PC_PROD": 1456, "QT_PROD": 2, "LD_TIME": 15},
    {"_id": 6, "NM_PROD": "Tenis Nike voador", "DS_PROD": "Tenis Nike para pratica esportiva", "PC_PROD": 657.9, "QT_PROD": 0, "LD_TIME": 10},
    {"_id": 7, "NM_PROD": "Meia Mizuno 5 star", "DS_PROD": "Meia Mizuno 5 star", "PC_PROD": 54, "QT_PROD": 0, "LD_TIME": 5},
    {"_id": 8, "NM_PROD": "Calcao banho marinho", "DS_PROD": "Calcao de banho para piscina na cor marinho", "PC_PROD": 65, "QT_PROD": 10, "LD_TIME": 5},
    {"_id": 9, "NM_PROD": "Chave de Fenda 15 opcoes", "DS_PROD": "Chave de fenda especial com15 opcoes de acesso ao parafuso", "PC_PROD": 45.5, "QT_PROD": 3, "LD_TIME": 10},
    {"_id": 10, "NM_PROD": "Furadeira Marcenaria Profissional", "DS_PROD": "Furadeira Thompson de ultima geracao", "PC_PROD": 546, "QT_PROD": 2, "LD_TIME": 10},
    {"_id": 11, "NM_PROD": "Maleta com 150 chaves de boca", "DS_PROD": "Maleta contendo 150 chaves de boca dos  mais variados tipos", "PC_PROD": 499.99, "QT_PROD": 8, "LD_TIME": 20},
    {"_id": 12, "NM_PROD": "Jogo Game of Throne PS6", "DS_PROD": "O novo jogo do Game of Throne disponivel para uso asap", "PC_PROD": 389, "QT_PROD": 1, "LD_TIME": 10},
    {"_id": 13, "NM_PROD": "Notebook core i7 16Gb Memoria Dell 14 inspirion", "DS_PROD": "Notebook Dell Inspirion ultima geracao pesando apenas 0,9kg", "PC_PROD": 2640, "QT_PROD": 2, "LD_TIME": 26},
    {"_id": 14, "NM_PROD": "Notebook core i5 16Gb Memoria Dell 14 inspirion", "DS_PROD": "Notebook Dell Inspirion ultima geracao pesando apenas 0,9kg", "PC_PROD": 2340.5, "QT_PROD": 0, "LD_TIME": 26},
    {"_id": 15, "NM_PROD": "Mouse sem fio", "DS_PROD": "Mouse sem fio com conexao USB", "PC_PROD": 54, "QT_PROD": 2, "LD_TIME": 15},
    {"_id": 16, "NM_PROD": "Livro Viajando com a vida", "DS_PROD": "Livro que explica a importancia de viver feliz", "PC_PROD": 22.9, "QT_PROD": 5, "LD_TIME": 12},
    {"_id": 17, "NM_PROD": "Coleira anti pulga cachorro pequeno", "DS_PROD": "Coleira antipulga para cachorro pequeno", "PC_PROD": 67.8, "QT_PROD": 3, "LD_TIME": 7},
    {"_id": 18, "NM_PROD": "Racao Royal Canin", "DS_PROD": "Racao especial Royal Canin", "PC_PROD": 112.3, "QT_PROD": 0, "LD_TIME": 14},
    {"_id": 19, "NM_PROD": "Smart TV 60 polegadas", "DS_PROD": "Melhor TV smart do mercado", "PC_PROD": 2567.85, "QT_PROD": 0, "LD_TIME": 25},
    {"_id": 20, "NM_PROD": "Livro conhecendo o futuro", "DS_PROD": "Livro que explica o sentido da vida", "PC_PROD": 55, "QT_PROD": 0, "LD_TIME": 12}
])

db.nota_fiscal.insertMany([
    {"_id": 1, "ID_CLIENTE": 1, "NR_NF": 50, "VL_NF": 108, "DT_NF": "2023/05/13", "ID_PROD": 15, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 2, "ID_CLIENTE": 2, "NR_NF": 51, "VL_NF": 162, "DT_NF": "2023/05/13", "ID_PROD": 7, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 3, "ID_CLIENTE": 3, "NR_NF": 52, "VL_NF": 2134.99, "DT_NF": "2023/05/13", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 4, "ID_CLIENTE": 4, "NR_NF": 53, "VL_NF": 4269.98, "DT_NF": "2023/05/13", "ID_PROD": 4, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 5, "ID_CLIENTE": 5, "NR_NF": 54, "VL_NF": 270, "DT_NF": "2023/05/14", "ID_PROD": 15, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 6, "ID_CLIENTE": 6, "NR_NF": 55, "VL_NF": 162, "DT_NF": "2023/05/14", "ID_PROD": 15, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 7, "ID_CLIENTE": 7, "NR_NF": 56, "VL_NF": 110, "DT_NF": "2023/05/15", "ID_PROD": 20, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 8, "ID_CLIENTE": 8, "NR_NF": 57, "VL_NF": 275, "DT_NF": "2023/05/15", "ID_PROD": 20, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 9, "ID_CLIENTE": 9, "NR_NF": 58, "VL_NF": 585, "DT_NF": "2023/05/15", "ID_PROD": 8, "QTD_PROD": 9, "TP_OPER": 1},
    {"_id": 10, "ID_CLIENTE": 10, "NR_NF": 59, "VL_NF": 2134.99, "DT_NF": "2023/05/15", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 11, "ID_CLIENTE": 11, "NR_NF": 60, "VL_NF": 2640, "DT_NF": "2023/05/16", "ID_PROD": 13, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 12, "ID_CLIENTE": 12, "NR_NF": 61, "VL_NF": 2567.85, "DT_NF": "2023/05/16", "ID_PROD": 19, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 13, "ID_CLIENTE": 13, "NR_NF": 62, "VL_NF": 2640, "DT_NF": "2023/05/16", "ID_PROD": 13, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 14, "ID_CLIENTE": 14, "NR_NF": 63, "VL_NF": 2640, "DT_NF": "2023/05/16", "ID_PROD": 13, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 15, "ID_CLIENTE": 15, "NR_NF": 64, "VL_NF": 108, "DT_NF": "2023/05/17", "ID_PROD": 15, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 16, "ID_CLIENTE": 16, "NR_NF": 65, "VL_NF": 68.7, "DT_NF": "2023/05/17", "ID_PROD": 16, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 17, "ID_CLIENTE": 17, "NR_NF": 66, "VL_NF": 135.6, "DT_NF": "2023/05/18", "ID_PROD": 17, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 18, "ID_CLIENTE": 18, "NR_NF": 67, "VL_NF": 499.9, "DT_NF": "2023/05/18", "ID_PROD": 11, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 19, "ID_CLIENTE": 19, "NR_NF": 68, "VL_NF": 5135.7, "DT_NF": "2023/05/18", "ID_PROD": 19, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 20, "ID_CLIENTE": 20, "NR_NF": 69, "VL_NF": 162, "DT_NF": "2023/05/18", "ID_PROD": 7, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 21, "ID_CLIENTE": 21, "NR_NF": 70, "VL_NF": 271.2, "DT_NF": "2023/05/18", "ID_PROD": 17, "QTD_PROD": 4, "TP_OPER": 1},
    {"_id": 22, "ID_CLIENTE": 22, "NR_NF": 71, "VL_NF": 114.5, "DT_NF": "2023/05/18", "ID_PROD": 16, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 23, "ID_CLIENTE": 23, "NR_NF": 72, "VL_NF": 5135.7, "DT_NF": "2023/05/19", "ID_PROD": 19, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 24, "ID_CLIENTE": 24, "NR_NF": 73, "VL_NF": 2340.5, "DT_NF": "2023/05/20", "ID_PROD": 14, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 25, "ID_CLIENTE": 25, "NR_NF": 74, "VL_NF": 389, "DT_NF": "2023/05/20", "ID_PROD": 12, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 26, "ID_CLIENTE": 26, "NR_NF": 75, "VL_NF": 55.52, "DT_NF": "2023/05/21", "ID_PROD": 1, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 27, "ID_CLIENTE": 27, "NR_NF": 76, "VL_NF": 499.9, "DT_NF": "2023/05/21", "ID_PROD": 11, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 28, "ID_CLIENTE": 28, "NR_NF": 77, "VL_NF": 546, "DT_NF": "2023/05/22", "ID_PROD": 10, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 29, "ID_CLIENTE": 29, "NR_NF": 78, "VL_NF": 778, "DT_NF": "2023/05/22", "ID_PROD": 12, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 30, "ID_CLIENTE": 30, "NR_NF": 79, "VL_NF": 45.8, "DT_NF": "2023/05/22", "ID_PROD": 16, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 31, "ID_CLIENTE": 31, "NR_NF": 80, "VL_NF": 162, "DT_NF": "2023/05/22", "ID_PROD": 15, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 32, "ID_CLIENTE": 32, "NR_NF": 81, "VL_NF": 182, "DT_NF": "2023/05/24", "ID_PROD": 9, "QTD_PROD": 4, "TP_OPER": 1},
    {"_id": 33, "ID_CLIENTE": 33, "NR_NF": 82, "VL_NF": 114.5, "DT_NF": "2023/05/24", "ID_PROD": 16, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 34, "ID_CLIENTE": 34, "NR_NF": 83, "VL_NF": 132, "DT_NF": "2023/05/24", "ID_PROD": 2, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 35, "ID_CLIENTE": 35, "NR_NF": 84, "VL_NF": 132, "DT_NF": "2023/05/24", "ID_PROD": 2, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 36, "ID_CLIENTE": 36, "NR_NF": 85, "VL_NF": 220, "DT_NF": "2023/05/24", "ID_PROD": 3, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 37, "ID_CLIENTE": 37, "NR_NF": 86, "VL_NF": 132, "DT_NF": "2023/05/25", "ID_PROD": 2, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 38, "ID_CLIENTE": 38, "NR_NF": 87, "VL_NF": 2340.5, "DT_NF": "2023/05/25", "ID_PROD": 14, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 39, "ID_CLIENTE": 39, "NR_NF": 88, "VL_NF": 2340.5, "DT_NF": "2023/05/26", "ID_PROD": 14, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 40, "ID_CLIENTE": 40, "NR_NF": 89, "VL_NF": 2340.5, "DT_NF": "2023/05/26", "ID_PROD": 14, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 41, "ID_CLIENTE": 41, "NR_NF": 90, "VL_NF": 2134.99, "DT_NF": "2023/05/26", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 42, "ID_CLIENTE": 42, "NR_NF": 91, "VL_NF": 2134.99, "DT_NF": "2023/05/26", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 43, "ID_CLIENTE": 43, "NR_NF": 92, "VL_NF": 2134.99, "DT_NF": "2023/05/27", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 44, "ID_CLIENTE": 44, "NR_NF": 93, "VL_NF": 45.8, "DT_NF": "2023/05/27", "ID_PROD": 16, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 45, "ID_CLIENTE": 45, "NR_NF": 94, "VL_NF": 45.8, "DT_NF": "2023/05/28", "ID_PROD": 16, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 46, "ID_CLIENTE": 46, "NR_NF": 95, "VL_NF": 45.8, "DT_NF": "2023/05/28", "ID_PROD": 16, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 47, "ID_CLIENTE": 47, "NR_NF": 96, "VL_NF": 67.8, "DT_NF": "2023/05/29", "ID_PROD": 17, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 48, "ID_CLIENTE": 48, "NR_NF": 97, "VL_NF": 67.8, "DT_NF": "2023/05/29", "ID_PROD": 17, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 49, "ID_CLIENTE": 49, "NR_NF": 98, "VL_NF": 1456, "DT_NF": "2023/05/30", "ID_PROD": 5, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 50, "ID_CLIENTE": 50, "NR_NF": 99, "VL_NF": 1456, "DT_NF": "2023/05/30", "ID_PROD": 5, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 51, "ID_CLIENTE": 51, "NR_NF": 100, "VL_NF": 1456, "DT_NF": "2023/05/31", "ID_PROD": 5, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 52, "ID_CLIENTE": 52, "NR_NF": 101, "VL_NF": 1456, "DT_NF": "2023/05/31", "ID_PROD": 5, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 53, "ID_CLIENTE": 53, "NR_NF": 102, "VL_NF": 55.52, "DT_NF": "2023/05/31", "ID_PROD": 1, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 54, "ID_CLIENTE": 54, "NR_NF": 103, "VL_NF": 999.8, "DT_NF": "2023/06/01", "ID_PROD": 11, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 55, "ID_CLIENTE": 55, "NR_NF": 104, "VL_NF": 999.8, "DT_NF": "2023/06/01", "ID_PROD": 11, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 56, "ID_CLIENTE": 56, "NR_NF": 105, "VL_NF": 1167, "DT_NF": "2023/06/02", "ID_PROD": 12, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 57, "ID_CLIENTE": 57, "NR_NF": 106, "VL_NF": 396, "DT_NF": "2023/06/03", "ID_PROD": 2, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 58, "ID_CLIENTE": 58, "NR_NF": 107, "VL_NF": 264, "DT_NF": "2023/06/03", "ID_PROD": 2, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 59, "ID_CLIENTE": 59, "NR_NF": 108, "VL_NF": 264, "DT_NF": "2023/06/04", "ID_PROD": 2, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 60, "ID_CLIENTE": 60, "NR_NF": 109, "VL_NF": 440, "DT_NF": "2023/06/04", "ID_PROD": 3, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 61, "ID_CLIENTE": 61, "NR_NF": 110, "VL_NF": 220, "DT_NF": "2023/06/04", "ID_PROD": 3, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 62, "ID_CLIENTE": 62, "NR_NF": 111, "VL_NF": 220, "DT_NF": "2023/06/05", "ID_PROD": 3, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 63, "ID_CLIENTE": 63, "NR_NF": 112, "VL_NF": 112.3, "DT_NF": "2023/06/06", "ID_PROD": 18, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 64, "ID_CLIENTE": 64, "NR_NF": 113, "VL_NF": 112.3, "DT_NF": "2023/06/07", "ID_PROD": 18, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 65, "ID_CLIENTE": 65, "NR_NF": 114, "VL_NF": 67.8, "DT_NF": "2023/06/09", "ID_PROD": 17, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 66, "ID_CLIENTE": 66, "NR_NF": 115, "VL_NF": 108, "DT_NF": "2023/06/10", "ID_PROD": 15, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 67, "ID_CLIENTE": 67, "NR_NF": 116, "VL_NF": 162, "DT_NF": "2023/06/10", "ID_PROD": 7, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 68, "ID_CLIENTE": 68, "NR_NF": 117, "VL_NF": 2134.99, "DT_NF": "2023/06/10", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 69, "ID_CLIENTE": 69, "NR_NF": 118, "VL_NF": 4269.98, "DT_NF": "2023/06/10", "ID_PROD": 4, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 70, "ID_CLIENTE": 70, "NR_NF": 119, "VL_NF": 270, "DT_NF": "2023/06/11", "ID_PROD": 15, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 71, "ID_CLIENTE": 71, "NR_NF": 120, "VL_NF": 162, "DT_NF": "2023/06/11", "ID_PROD": 15, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 72, "ID_CLIENTE": 72, "NR_NF": 121, "VL_NF": 110, "DT_NF": "2023/06/11", "ID_PROD": 20, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 73, "ID_CLIENTE": 73, "NR_NF": 122, "VL_NF": 110, "DT_NF": "2023/06/12", "ID_PROD": 20, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 74, "ID_CLIENTE": 74, "NR_NF": 123, "VL_NF": 195, "DT_NF": "2023/06/12", "ID_PROD": 8, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 75, "ID_CLIENTE": 75, "NR_NF": 124, "VL_NF": 2134.99, "DT_NF": "2023/06/12", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 76, "ID_CLIENTE": 76, "NR_NF": 125, "VL_NF": 5280, "DT_NF": "2023/06/13", "ID_PROD": 13, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 77, "ID_CLIENTE": 77, "NR_NF": 126, "VL_NF": 12839.25, "DT_NF": "2023/06/13", "ID_PROD": 19, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 78, "ID_CLIENTE": 78, "NR_NF": 127, "VL_NF": 7920, "DT_NF": "2023/06/14", "ID_PROD": 13, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 79, "ID_CLIENTE": 79, "NR_NF": 128, "VL_NF": 5280, "DT_NF": "2023/06/15", "ID_PROD": 13, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 80, "ID_CLIENTE": 80, "NR_NF": 129, "VL_NF": 270, "DT_NF": "2023/06/16", "ID_PROD": 15, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 81, "ID_CLIENTE": 81, "NR_NF": 130, "VL_NF": 206.1, "DT_NF": "2023/06/16", "ID_PROD": 16, "QTD_PROD": 9, "TP_OPER": 1},
    {"_id": 82, "ID_CLIENTE": 82, "NR_NF": 131, "VL_NF": 67.8, "DT_NF": "2023/06/16", "ID_PROD": 17, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 83, "ID_CLIENTE": 83, "NR_NF": 132, "VL_NF": 499.9, "DT_NF": "2023/06/19", "ID_PROD": 11, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 84, "ID_CLIENTE": 84, "NR_NF": 133, "VL_NF": 2567.85, "DT_NF": "2023/06/19", "ID_PROD": 19, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 85, "ID_CLIENTE": 85, "NR_NF": 134, "VL_NF": 108, "DT_NF": "2023/06/19", "ID_PROD": 7, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 86, "ID_CLIENTE": 86, "NR_NF": 135, "VL_NF": 203.4, "DT_NF": "2023/06/22", "ID_PROD": 17, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 87, "ID_CLIENTE": 87, "NR_NF": 136, "VL_NF": 22.9, "DT_NF": "2023/06/22", "ID_PROD": 16, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 88, "ID_CLIENTE": 88, "NR_NF": 137, "VL_NF": 5135.7, "DT_NF": "2023/06/22", "ID_PROD": 19, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 89, "ID_CLIENTE": 89, "NR_NF": 138, "VL_NF": 11702.5, "DT_NF": "2023/06/23", "ID_PROD": 14, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 90, "ID_CLIENTE": 90, "NR_NF": 139, "VL_NF": 1167, "DT_NF": "2023/06/24", "ID_PROD": 12, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 91, "ID_CLIENTE": 91, "NR_NF": 140, "VL_NF": 111.04, "DT_NF": "2023/06/24", "ID_PROD": 1, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 92, "ID_CLIENTE": 92, "NR_NF": 141, "VL_NF": 2499.5, "DT_NF": "2023/06/24", "ID_PROD": 11, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 93, "ID_CLIENTE": 93, "NR_NF": 142, "VL_NF": 4914, "DT_NF": "2023/06/24", "ID_PROD": 10, "QTD_PROD": 9, "TP_OPER": 1},
    {"_id": 94, "ID_CLIENTE": 94, "NR_NF": 143, "VL_NF": 389, "DT_NF": "2023/06/24", "ID_PROD": 12, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 95, "ID_CLIENTE": 95, "NR_NF": 144, "VL_NF": 22.9, "DT_NF": "2023/06/25", "ID_PROD": 16, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 96, "ID_CLIENTE": 96, "NR_NF": 145, "VL_NF": 54, "DT_NF": "2023/06/25", "ID_PROD": 15, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 97, "ID_CLIENTE": 97, "NR_NF": 146, "VL_NF": 45.5, "DT_NF": "2023/06/25", "ID_PROD": 9, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 98, "ID_CLIENTE": 98, "NR_NF": 147, "VL_NF": 22.9, "DT_NF": "2023/06/26", "ID_PROD": 16, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 99, "ID_CLIENTE": 99, "NR_NF": 148, "VL_NF": 264, "DT_NF": "2023/06/27", "ID_PROD": 2, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 100, "ID_CLIENTE": 100, "NR_NF": 149, "VL_NF": 396, "DT_NF": "2023/06/28", "ID_PROD": 2, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 101, "ID_CLIENTE": 101, "NR_NF": 150, "VL_NF": 440, "DT_NF": "2023/06/28", "ID_PROD": 3, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 102, "ID_CLIENTE": 102, "NR_NF": 151, "VL_NF": 132, "DT_NF": "2023/06/28", "ID_PROD": 2, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 103, "ID_CLIENTE": 103, "NR_NF": 152, "VL_NF": 4681, "DT_NF": "2023/06/28", "ID_PROD": 14, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 104, "ID_CLIENTE": 104, "NR_NF": 153, "VL_NF": 7021.5, "DT_NF": "2023/06/28", "ID_PROD": 14, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 105, "ID_CLIENTE": 105, "NR_NF": 154, "VL_NF": 9362, "DT_NF": "2023/06/28", "ID_PROD": 14, "QTD_PROD": 4, "TP_OPER": 1},
    {"_id": 106, "ID_CLIENTE": 106, "NR_NF": 155, "VL_NF": 10674.95, "DT_NF": "2023/06/28", "ID_PROD": 4, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 107, "ID_CLIENTE": 107, "NR_NF": 156, "VL_NF": 108, "DT_NF": "2023/06/29", "ID_PROD": 15, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 108, "ID_CLIENTE": 108, "NR_NF": 157, "VL_NF": 54, "DT_NF": "2023/06/29", "ID_PROD": 7, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 109, "ID_CLIENTE": 109, "NR_NF": 158, "VL_NF": 2134.99, "DT_NF": "2023/06/29", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 110, "ID_CLIENTE": 110, "NR_NF": 159, "VL_NF": 2134.99, "DT_NF": "2023/06/30", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 111, "ID_CLIENTE": 111, "NR_NF": 160, "VL_NF": 54, "DT_NF": "2023/07/01", "ID_PROD": 15, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 112, "ID_CLIENTE": 112, "NR_NF": 161, "VL_NF": 54, "DT_NF": "2023/07/02", "ID_PROD": 15, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 113, "ID_CLIENTE": 113, "NR_NF": 162, "VL_NF": 110, "DT_NF": "2023/07/03", "ID_PROD": 20, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 114, "ID_CLIENTE": 114, "NR_NF": 163, "VL_NF": 165, "DT_NF": "2023/07/04", "ID_PROD": 20, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 115, "ID_CLIENTE": 115, "NR_NF": 164, "VL_NF": 65, "DT_NF": "2023/07/04", "ID_PROD": 8, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 116, "ID_CLIENTE": 116, "NR_NF": 165, "VL_NF": 4269.98, "DT_NF": "2023/07/04", "ID_PROD": 4, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 117, "ID_CLIENTE": 117, "NR_NF": 166, "VL_NF": 13200, "DT_NF": "2023/07/04", "ID_PROD": 13, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 118, "ID_CLIENTE": 118, "NR_NF": 167, "VL_NF": 7703.55, "DT_NF": "2023/07/05", "ID_PROD": 19, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 119, "ID_CLIENTE": 119, "NR_NF": 168, "VL_NF": 5280, "DT_NF": "2023/07/06", "ID_PROD": 13, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 120, "ID_CLIENTE": 120, "NR_NF": 169, "VL_NF": 13200, "DT_NF": "2023/07/07", "ID_PROD": 13, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 121, "ID_CLIENTE": 121, "NR_NF": 170, "VL_NF": 486, "DT_NF": "2023/07/07", "ID_PROD": 15, "QTD_PROD": 9, "TP_OPER": 1},
    {"_id": 122, "ID_CLIENTE": 122, "NR_NF": 171, "VL_NF": 22.9, "DT_NF": "2023/07/07", "ID_PROD": 16, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 123, "ID_CLIENTE": 123, "NR_NF": 172, "VL_NF": 67.8, "DT_NF": "2023/07/08", "ID_PROD": 17, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 124, "ID_CLIENTE": 124, "NR_NF": 173, "VL_NF": 499.9, "DT_NF": "2023/07/09", "ID_PROD": 11, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 125, "ID_CLIENTE": 125, "NR_NF": 174, "VL_NF": 2567.85, "DT_NF": "2023/07/10", "ID_PROD": 19, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 126, "ID_CLIENTE": 126, "NR_NF": 175, "VL_NF": 54, "DT_NF": "2023/07/11", "ID_PROD": 7, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 127, "ID_CLIENTE": 127, "NR_NF": 176, "VL_NF": 135.6, "DT_NF": "2023/07/12", "ID_PROD": 17, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 128, "ID_CLIENTE": 128, "NR_NF": 177, "VL_NF": 68.7, "DT_NF": "2023/07/13", "ID_PROD": 16, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 129, "ID_CLIENTE": 129, "NR_NF": 178, "VL_NF": 5135.7, "DT_NF": "2023/07/13", "ID_PROD": 19, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 130, "ID_CLIENTE": 130, "NR_NF": 179, "VL_NF": 2340.5, "DT_NF": "2023/07/13", "ID_PROD": 14, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 131, "ID_CLIENTE": 131, "NR_NF": 180, "VL_NF": 778, "DT_NF": "2023/07/14", "ID_PROD": 12, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 132, "ID_CLIENTE": 132, "NR_NF": 181, "VL_NF": 166.56, "DT_NF": "2023/07/15", "ID_PROD": 1, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 133, "ID_CLIENTE": 133, "NR_NF": 182, "VL_NF": 1999.6, "DT_NF": "2023/07/16", "ID_PROD": 11, "QTD_PROD": 4, "TP_OPER": 1},
    {"_id": 134, "ID_CLIENTE": 134, "NR_NF": 183, "VL_NF": 2730, "DT_NF": "2023/07/16", "ID_PROD": 10, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 135, "ID_CLIENTE": 135, "NR_NF": 184, "VL_NF": 778, "DT_NF": "2023/07/16", "ID_PROD": 12, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 136, "ID_CLIENTE": 136, "NR_NF": 185, "VL_NF": 22.9, "DT_NF": "2023/07/17", "ID_PROD": 16, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 137, "ID_CLIENTE": 137, "NR_NF": 186, "VL_NF": 54, "DT_NF": "2023/07/18", "ID_PROD": 15, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 138, "ID_CLIENTE": 138, "NR_NF": 187, "VL_NF": 45.5, "DT_NF": "2023/07/19", "ID_PROD": 9, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 139, "ID_CLIENTE": 139, "NR_NF": 188, "VL_NF": 22.9, "DT_NF": "2023/07/19", "ID_PROD": 16, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 140, "ID_CLIENTE": 140, "NR_NF": 189, "VL_NF": 132, "DT_NF": "2023/07/19", "ID_PROD": 2, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 141, "ID_CLIENTE": 141, "NR_NF": 190, "VL_NF": 264, "DT_NF": "2023/07/20", "ID_PROD": 2, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 142, "ID_CLIENTE": 142, "NR_NF": 191, "VL_NF": 440, "DT_NF": "2023/07/21", "ID_PROD": 3, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 143, "ID_CLIENTE": 143, "NR_NF": 192, "VL_NF": 396, "DT_NF": "2023/07/22", "ID_PROD": 2, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 144, "ID_CLIENTE": 144, "NR_NF": 193, "VL_NF": 9362, "DT_NF": "2023/07/23", "ID_PROD": 14, "QTD_PROD": 4, "TP_OPER": 1},
    {"_id": 145, "ID_CLIENTE": 145, "NR_NF": 194, "VL_NF": 11702.5, "DT_NF": "2023/07/23", "ID_PROD": 14, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 146, "ID_CLIENTE": 146, "NR_NF": 195, "VL_NF": 2340.5, "DT_NF": "2023/07/24", "ID_PROD": 14, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 147, "ID_CLIENTE": 147, "NR_NF": 196, "VL_NF": 2134.99, "DT_NF": "2023/07/24", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 148, "ID_CLIENTE": 148, "NR_NF": 197, "VL_NF": 2134.99, "DT_NF": "2023/07/25", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 149, "ID_CLIENTE": 149, "NR_NF": 198, "VL_NF": 2134.99, "DT_NF": "2023/07/26", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 150, "ID_CLIENTE": 150, "NR_NF": 199, "VL_NF": 22.9, "DT_NF": "2023/07/27", "ID_PROD": 16, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 151, "ID_CLIENTE": 151, "NR_NF": 200, "VL_NF": 22.9, "DT_NF": "2023/07/27", "ID_PROD": 16, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 152, "ID_CLIENTE": 152, "NR_NF": 201, "VL_NF": 54, "DT_NF": "2023/07/27", "ID_PROD": 15, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 153, "ID_CLIENTE": 153, "NR_NF": 202, "VL_NF": 54, "DT_NF": "2023/07/28", "ID_PROD": 7, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 154, "ID_CLIENTE": 154, "NR_NF": 203, "VL_NF": 2134.99, "DT_NF": "2023/07/29", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 155, "ID_CLIENTE": 155, "NR_NF": 204, "VL_NF": 2134.99, "DT_NF": "2023/07/30", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 156, "ID_CLIENTE": 156, "NR_NF": 205, "VL_NF": 108, "DT_NF": "2023/07/31", "ID_PROD": 15, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 157, "ID_CLIENTE": 157, "NR_NF": 206, "VL_NF": 108, "DT_NF": "2023/07/31", "ID_PROD": 15, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 158, "ID_CLIENTE": 158, "NR_NF": 207, "VL_NF": 110, "DT_NF": "2023/07/31", "ID_PROD": 20, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 159, "ID_CLIENTE": 159, "NR_NF": 208, "VL_NF": 55, "DT_NF": "2023/08/01", "ID_PROD": 20, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 160, "ID_CLIENTE": 160, "NR_NF": 209, "VL_NF": 65, "DT_NF": "2023/08/01", "ID_PROD": 8, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 161, "ID_CLIENTE": 161, "NR_NF": 210, "VL_NF": 2134.99, "DT_NF": "2023/08/01", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 162, "ID_CLIENTE": 162, "NR_NF": 211, "VL_NF": 2640, "DT_NF": "2023/08/02", "ID_PROD": 13, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 163, "ID_CLIENTE": 163, "NR_NF": 212, "VL_NF": 2567.85, "DT_NF": "2023/08/02", "ID_PROD": 19, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 164, "ID_CLIENTE": 164, "NR_NF": 213, "VL_NF": 2640, "DT_NF": "2023/08/02", "ID_PROD": 13, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 165, "ID_CLIENTE": 165, "NR_NF": 214, "VL_NF": 2640, "DT_NF": "2023/08/02", "ID_PROD": 13, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 166, "ID_CLIENTE": 166, "NR_NF": 215, "VL_NF": 108, "DT_NF": "2023/08/03", "ID_PROD": 15, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 167, "ID_CLIENTE": 167, "NR_NF": 216, "VL_NF": 45.8, "DT_NF": "2023/08/04", "ID_PROD": 16, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 168, "ID_CLIENTE": 168, "NR_NF": 217, "VL_NF": 203.4, "DT_NF": "2023/08/05", "ID_PROD": 17, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 169, "ID_CLIENTE": 169, "NR_NF": 218, "VL_NF": 1499.7, "DT_NF": "2023/08/05", "ID_PROD": 11, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 170, "ID_CLIENTE": 170, "NR_NF": 219, "VL_NF": 5135.7, "DT_NF": "2023/08/05", "ID_PROD": 19, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 171, "ID_CLIENTE": 171, "NR_NF": 220, "VL_NF": 108, "DT_NF": "2023/08/06", "ID_PROD": 7, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 172, "ID_CLIENTE": 172, "NR_NF": 221, "VL_NF": 135.6, "DT_NF": "2023/08/07", "ID_PROD": 17, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 173, "ID_CLIENTE": 173, "NR_NF": 222, "VL_NF": 22.9, "DT_NF": "2023/08/08", "ID_PROD": 16, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 174, "ID_CLIENTE": 174, "NR_NF": 223, "VL_NF": 2567.85, "DT_NF": "2023/08/09", "ID_PROD": 19, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 175, "ID_CLIENTE": 175, "NR_NF": 224, "VL_NF": 2340.5, "DT_NF": "2023/08/10", "ID_PROD": 14, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 176, "ID_CLIENTE": 176, "NR_NF": 225, "VL_NF": 778, "DT_NF": "2023/08/11", "ID_PROD": 12, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 177, "ID_CLIENTE": 177, "NR_NF": 226, "VL_NF": 166.56, "DT_NF": "2023/08/12", "ID_PROD": 1, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 178, "ID_CLIENTE": 178, "NR_NF": 227, "VL_NF": 499.9, "DT_NF": "2023/08/12", "ID_PROD": 11, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 179, "ID_CLIENTE": 179, "NR_NF": 228, "VL_NF": 1092, "DT_NF": "2023/08/12", "ID_PROD": 10, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 180, "ID_CLIENTE": 180, "NR_NF": 229, "VL_NF": 1945, "DT_NF": "2023/08/12", "ID_PROD": 12, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 181, "ID_CLIENTE": 181, "NR_NF": 230, "VL_NF": 68.7, "DT_NF": "2023/08/13", "ID_PROD": 16, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 182, "ID_CLIENTE": 182, "NR_NF": 231, "VL_NF": 108, "DT_NF": "2023/08/14", "ID_PROD": 15, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 183, "ID_CLIENTE": 183, "NR_NF": 232, "VL_NF": 227.5, "DT_NF": "2023/08/15", "ID_PROD": 9, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 184, "ID_CLIENTE": 184, "NR_NF": 233, "VL_NF": 206.1, "DT_NF": "2023/08/16", "ID_PROD": 16, "QTD_PROD": 9, "TP_OPER": 1},
    {"_id": 185, "ID_CLIENTE": 185, "NR_NF": 234, "VL_NF": 132, "DT_NF": "2023/08/16", "ID_PROD": 2, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 186, "ID_CLIENTE": 186, "NR_NF": 235, "VL_NF": 132, "DT_NF": "2023/08/16", "ID_PROD": 2, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 187, "ID_CLIENTE": 187, "NR_NF": 236, "VL_NF": 220, "DT_NF": "2023/08/17", "ID_PROD": 3, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 188, "ID_CLIENTE": 188, "NR_NF": 237, "VL_NF": 132, "DT_NF": "2023/08/18", "ID_PROD": 2, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 189, "ID_CLIENTE": 189, "NR_NF": 238, "VL_NF": 2340.5, "DT_NF": "2023/08/19", "ID_PROD": 14, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 190, "ID_CLIENTE": 190, "NR_NF": 239, "VL_NF": 4681, "DT_NF": "2023/08/20", "ID_PROD": 14, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 191, "ID_CLIENTE": 191, "NR_NF": 240, "VL_NF": 7021.5, "DT_NF": "2023/08/21", "ID_PROD": 14, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 192, "ID_CLIENTE": 192, "NR_NF": 241, "VL_NF": 4269.98, "DT_NF": "2023/08/21", "ID_PROD": 4, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 193, "ID_CLIENTE": 193, "NR_NF": 242, "VL_NF": 2134.99, "DT_NF": "2023/08/21", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 194, "ID_CLIENTE": 194, "NR_NF": 243, "VL_NF": 4269.98, "DT_NF": "2023/08/21", "ID_PROD": 4, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 195, "ID_CLIENTE": 195, "NR_NF": 244, "VL_NF": 68.7, "DT_NF": "2023/08/21", "ID_PROD": 16, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 196, "ID_CLIENTE": 196, "NR_NF": 245, "VL_NF": 222.08, "DT_NF": "2023/08/22", "ID_PROD": 1, "QTD_PROD": 4, "TP_OPER": 1},
    {"_id": 197, "ID_CLIENTE": 197, "NR_NF": 246, "VL_NF": 660, "DT_NF": "2023/08/22", "ID_PROD": 2, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 198, "ID_CLIENTE": 198, "NR_NF": 247, "VL_NF": 135.6, "DT_NF": "2023/08/22", "ID_PROD": 17, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 199, "ID_CLIENTE": 199, "NR_NF": 248, "VL_NF": 67.8, "DT_NF": "2023/08/23", "ID_PROD": 17, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 200, "ID_CLIENTE": 200, "NR_NF": 249, "VL_NF": 1456, "DT_NF": "2023/08/24", "ID_PROD": 5, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 201, "ID_CLIENTE": 201, "NR_NF": 250, "VL_NF": 1456, "DT_NF": "2023/08/25", "ID_PROD": 5, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 202, "ID_CLIENTE": 202, "NR_NF": 251, "VL_NF": 1456, "DT_NF": "2023/08/25", "ID_PROD": 5, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 203, "ID_CLIENTE": 203, "NR_NF": 252, "VL_NF": 1456, "DT_NF": "2023/08/26", "ID_PROD": 5, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 204, "ID_CLIENTE": 204, "NR_NF": 253, "VL_NF": 111.04, "DT_NF": "2023/08/26", "ID_PROD": 1, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 205, "ID_CLIENTE": 205, "NR_NF": 254, "VL_NF": 999.8, "DT_NF": "2023/08/26", "ID_PROD": 11, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 206, "ID_CLIENTE": 206, "NR_NF": 255, "VL_NF": 1499.7, "DT_NF": "2023/08/27", "ID_PROD": 11, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 207, "ID_CLIENTE": 207, "NR_NF": 256, "VL_NF": 108, "DT_NF": "2023/08/28", "ID_PROD": 15, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 208, "ID_CLIENTE": 208, "NR_NF": 257, "VL_NF": 162, "DT_NF": "2023/08/29", "ID_PROD": 7, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 209, "ID_CLIENTE": 209, "NR_NF": 258, "VL_NF": 2134.99, "DT_NF": "2023/08/30", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 210, "ID_CLIENTE": 210, "NR_NF": 259, "VL_NF": 108, "DT_NF": "2023/08/30", "ID_PROD": 15, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 211, "ID_CLIENTE": 211, "NR_NF": 260, "VL_NF": 162, "DT_NF": "2023/08/30", "ID_PROD": 7, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 212, "ID_CLIENTE": 212, "NR_NF": 261, "VL_NF": 2134.99, "DT_NF": "2023/08/31", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 213, "ID_CLIENTE": 213, "NR_NF": 262, "VL_NF": 4269.98, "DT_NF": "2023/09/01", "ID_PROD": 4, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 214, "ID_CLIENTE": 214, "NR_NF": 263, "VL_NF": 270, "DT_NF": "2023/09/01", "ID_PROD": 15, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 215, "ID_CLIENTE": 215, "NR_NF": 264, "VL_NF": 162, "DT_NF": "2023/09/01", "ID_PROD": 15, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 216, "ID_CLIENTE": 216, "NR_NF": 265, "VL_NF": 110, "DT_NF": "2023/09/02", "ID_PROD": 20, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 217, "ID_CLIENTE": 217, "NR_NF": 266, "VL_NF": 660, "DT_NF": "2023/09/02", "ID_PROD": 2, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 218, "ID_CLIENTE": 218, "NR_NF": 267, "VL_NF": 585, "DT_NF": "2023/09/02", "ID_PROD": 8, "QTD_PROD": 9, "TP_OPER": 1},
    {"_id": 219, "ID_CLIENTE": 219, "NR_NF": 268, "VL_NF": 2134.99, "DT_NF": "2023/09/03", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 220, "ID_CLIENTE": 220, "NR_NF": 269, "VL_NF": 2640, "DT_NF": "2023/09/04", "ID_PROD": 13, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 221, "ID_CLIENTE": 221, "NR_NF": 270, "VL_NF": 2567.85, "DT_NF": "2023/09/04", "ID_PROD": 19, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 222, "ID_CLIENTE": 222, "NR_NF": 271, "VL_NF": 2640, "DT_NF": "2023/09/05", "ID_PROD": 13, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 223, "ID_CLIENTE": 223, "NR_NF": 272, "VL_NF": 1456, "DT_NF": "2023/09/06", "ID_PROD": 5, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 224, "ID_CLIENTE": 224, "NR_NF": 273, "VL_NF": 108, "DT_NF": "2023/09/07", "ID_PROD": 7, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 225, "ID_CLIENTE": 225, "NR_NF": 274, "VL_NF": 68.7, "DT_NF": "2023/09/08", "ID_PROD": 16, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 226, "ID_CLIENTE": 226, "NR_NF": 275, "VL_NF": 1315.8, "DT_NF": "2023/09/09", "ID_PROD": 6, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 227, "ID_CLIENTE": 227, "NR_NF": 276, "VL_NF": 499.9, "DT_NF": "2023/09/10", "ID_PROD": 11, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 228, "ID_CLIENTE": 228, "NR_NF": 277, "VL_NF": 5135.7, "DT_NF": "2023/09/11", "ID_PROD": 19, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 229, "ID_CLIENTE": 229, "NR_NF": 278, "VL_NF": 162, "DT_NF": "2023/09/12", "ID_PROD": 7, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 230, "ID_CLIENTE": 230, "NR_NF": 279, "VL_NF": 271.2, "DT_NF": "2023/09/13", "ID_PROD": 17, "QTD_PROD": 4, "TP_OPER": 1},
    {"_id": 231, "ID_CLIENTE": 231, "NR_NF": 280, "VL_NF": 114.5, "DT_NF": "2023/09/13", "ID_PROD": 16, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 232, "ID_CLIENTE": 232, "NR_NF": 281, "VL_NF": 5135.7, "DT_NF": "2023/09/13", "ID_PROD": 19, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 233, "ID_CLIENTE": 233, "NR_NF": 282, "VL_NF": 2340.5, "DT_NF": "2023/09/13", "ID_PROD": 14, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 234, "ID_CLIENTE": 234, "NR_NF": 283, "VL_NF": 108, "DT_NF": "2023/09/13", "ID_PROD": 15, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 235, "ID_CLIENTE": 235, "NR_NF": 284, "VL_NF": 162, "DT_NF": "2023/09/13", "ID_PROD": 7, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 236, "ID_CLIENTE": 236, "NR_NF": 285, "VL_NF": 2134.99, "DT_NF": "2023/09/13", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 237, "ID_CLIENTE": 237, "NR_NF": 286, "VL_NF": 4269.98, "DT_NF": "2023/09/13", "ID_PROD": 4, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 238, "ID_CLIENTE": 238, "NR_NF": 287, "VL_NF": 270, "DT_NF": "2023/09/13", "ID_PROD": 15, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 239, "ID_CLIENTE": 239, "NR_NF": 288, "VL_NF": 162, "DT_NF": "2023/09/14", "ID_PROD": 15, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 240, "ID_CLIENTE": 240, "NR_NF": 289, "VL_NF": 2912, "DT_NF": "2023/09/15", "ID_PROD": 5, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 241, "ID_CLIENTE": 241, "NR_NF": 290, "VL_NF": 7280, "DT_NF": "2023/09/16", "ID_PROD": 5, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 242, "ID_CLIENTE": 242, "NR_NF": 291, "VL_NF": 585, "DT_NF": "2023/09/17", "ID_PROD": 8, "QTD_PROD": 9, "TP_OPER": 1},
    {"_id": 243, "ID_CLIENTE": 243, "NR_NF": 292, "VL_NF": 2134.99, "DT_NF": "2023/09/18", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 244, "ID_CLIENTE": 244, "NR_NF": 293, "VL_NF": 2640, "DT_NF": "2023/09/19", "ID_PROD": 13, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 245, "ID_CLIENTE": 245, "NR_NF": 294, "VL_NF": 2567.85, "DT_NF": "2023/09/20", "ID_PROD": 19, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 246, "ID_CLIENTE": 246, "NR_NF": 295, "VL_NF": 2640, "DT_NF": "2023/09/21", "ID_PROD": 13, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 247, "ID_CLIENTE": 247, "NR_NF": 296, "VL_NF": 2640, "DT_NF": "2023/09/22", "ID_PROD": 13, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 248, "ID_CLIENTE": 248, "NR_NF": 297, "VL_NF": 108, "DT_NF": "2023/09/22", "ID_PROD": 15, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 249, "ID_CLIENTE": 249, "NR_NF": 298, "VL_NF": 68.7, "DT_NF": "2023/09/22", "ID_PROD": 16, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 250, "ID_CLIENTE": 250, "NR_NF": 299, "VL_NF": 135.6, "DT_NF": "2023/09/23", "ID_PROD": 17, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 251, "ID_CLIENTE": 251, "NR_NF": 300, "VL_NF": 499.9, "DT_NF": "2023/09/23", "ID_PROD": 11, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 252, "ID_CLIENTE": 252, "NR_NF": 301, "VL_NF": 5135.7, "DT_NF": "2023/09/24", "ID_PROD": 19, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 253, "ID_CLIENTE": 253, "NR_NF": 302, "VL_NF": 162, "DT_NF": "2023/09/25", "ID_PROD": 7, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 254, "ID_CLIENTE": 254, "NR_NF": 303, "VL_NF": 271.2, "DT_NF": "2023/09/25", "ID_PROD": 17, "QTD_PROD": 4, "TP_OPER": 1},
    {"_id": 255, "ID_CLIENTE": 255, "NR_NF": 304, "VL_NF": 108, "DT_NF": "2023/09/25", "ID_PROD": 15, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 256, "ID_CLIENTE": 256, "NR_NF": 305, "VL_NF": 162, "DT_NF": "2023/09/26", "ID_PROD": 7, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 257, "ID_CLIENTE": 257, "NR_NF": 306, "VL_NF": 2134.99, "DT_NF": "2023/09/27", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 258, "ID_CLIENTE": 258, "NR_NF": 307, "VL_NF": 4269.98, "DT_NF": "2023/09/27", "ID_PROD": 4, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 259, "ID_CLIENTE": 259, "NR_NF": 308, "VL_NF": 270, "DT_NF": "2023/09/28", "ID_PROD": 15, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 260, "ID_CLIENTE": 260, "NR_NF": 309, "VL_NF": 1167, "DT_NF": "2023/09/28", "ID_PROD": 12, "QTD_PROD": 3, "TP_OPER": 1},
    {"_id": 261, "ID_CLIENTE": 261, "NR_NF": 310, "VL_NF": 999.8, "DT_NF": "2023/09/28", "ID_PROD": 11, "QTD_PROD": 2, "TP_OPER": 1},
    {"_id": 262, "ID_CLIENTE": 262, "NR_NF": 311, "VL_NF": 275, "DT_NF": "2023/09/29", "ID_PROD": 20, "QTD_PROD": 5, "TP_OPER": 1},
    {"_id": 263, "ID_CLIENTE": 263, "NR_NF": 312, "VL_NF": 585, "DT_NF": "2023/09/29", "ID_PROD": 8, "QTD_PROD": 9, "TP_OPER": 1},
    {"_id": 264, "ID_CLIENTE": 264, "NR_NF": 313, "VL_NF": 2134.99, "DT_NF": "2023/09/30", "ID_PROD": 4, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 265, "ID_CLIENTE": 265, "NR_NF": 314, "VL_NF": 2640, "DT_NF": "2023/09/30", "ID_PROD": 13, "QTD_PROD": 1, "TP_OPER": 1},
    {"_id": 266, "ID_CLIENTE": 266, "NR_NF": 315, "VL_NF": 2567.85, "DT_NF": "2023/09/30", "ID_PROD": 19, "QTD_PROD": 1, "TP_OPER": 1}
])