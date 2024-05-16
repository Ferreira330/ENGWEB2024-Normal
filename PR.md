Persistência de Dados: 

No que toca a persistência de dados utilizei o mongoDB.
Para transformar o ficheiro csv num json utilizei o website https://csvjson.com/
Utilizei o scrypt.py para converter o atributo idContrato em _id
Importei o Json para o mongoDB usando os seguintes códigos no terminal:
    docker cp datasets/contratos2024.json mongoEW:/tmp
    docker exec mongoEW mongoimport -d contratos -c contratos /tmp/contratos2024.json --jsonArray
    
Respostas Textuais:
1. db.contratos.countDocuments();
2. db.contratos.countDocuments({ tipoprocedimento: "Ajuste Direto Regime Geral" });
3. db.contratos.distinct("entidade_comunicante").sort();
4. db.contratos.aggregate([{$group: {_id: "$tipoprocedimento",count: { $sum: 1 }}},{$sort: { _id: 1 }}]);
5. db.contratos.aggregate([{$group: {_id: "$tipoprocedimento",count: { $sum: 1 }}},{$sort: { _id: 1 }}]);


Como executar as aplicações:
dentro de cada pasta, correr
    npm install
    npm start
    
