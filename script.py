import json

nome_arquivo ="datasets/contratos2024.json"

mapa_chaves = {
    "idcontrato": "_id",
}

# Open the JSON file with UTF-8 encoding
with open(nome_arquivo, "r", encoding="utf-8") as file:
    data = json.load(file)

# Iterate through the items and update the keys based on the mapping
for item in data:
    for chave_antiga, chave_nova in mapa_chaves.items():
        if chave_antiga in item:
            item[chave_nova] = item.pop(chave_antiga)

# Convert the data back to a JSON string
json_string = json.dumps(data, indent=2, ensure_ascii=False)

# Write the updated JSON back to the file with UTF-8 encoding
with open(nome_arquivo, "w", encoding='utf-8') as file:
    file.write(json_string)
