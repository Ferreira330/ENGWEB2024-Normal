import pandas as pd
import json

# Load the CSV data into a pandas DataFrame
df = pd.read_csv('contratos2024.csv', on_bad_lines='skip')

# Convert the DataFrame to a JSON string
json_str = df.to_json(orient='records')

# Parse the JSON string into a JSON array
json_array = json.loads(json_str)

# Save the JSON array to a file
with open('contratos2024.json', 'w') as f:
    json.dump(json_array, f)