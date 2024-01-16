# product-catalog-management-backend
Challenger maked by AnotaAi. In this challenger, i have to make a product catalog system using NodeJS, with Express and Amazon S3.

**RF - Requisitos funcionais**
[ ] - Deve ser possível registrar um produto com seu dono contendo: title, description, price, category, owner_id;
[ ] - Deve ser possível registrar uma categoria com seu dono, contendo: title, description, owner_id;
[ ] - Deve ser possível associoar um produto à uma categoria;
[ ] - Deve ser possível alterar os dados de um produto ou categoria;
[ ] - Deve ser possível deletar os dados de um produto ou categoria;

**RN - Regras de Negócio**
[ ] - Um produto só pode ser associado apenas à uma categoria;
[ ] - Todos os produtos e todas as categorias só podem estar associados à um dono;
[ ] - Retornar o catálogo de produtos como um JSON contendo as categorias e items de um dono;
[ ] - O endpoint do catálogo não precisa fazer buscas no banco de dados, apenas retorne o JSON com as categorias;
[ ] - Sempre que houver uma alteração no catálogo, deve publicar essa alteração no tópico "catálogo-emit" no serviço AWS SQS;
[ ] - Implemente um consumer que ouça alterações de catálogo de um dono específico;
[ ] - Quando o consumer receber uma mensagem, ele deve fazer uma busca no banco de dados, gera o arquivo JSON e publica no AWS S3;

**RNF - Requisitos não funcionais**
[X] - Uso de Node.JS para backend;
[ ] - Uso de Express.JS como microframework HTTP;
[X] - MongoDB para armazenar os dados;
[ ] - AWS SQS para notificar mudanças no catálogo;
[ ] - AWS S3 para armazenar o catálogo JSON;