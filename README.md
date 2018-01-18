## Quimuco
quick multi commands   

### Install
```sh
    npm install quimuco
``` 

### Creating a config
Create a config called qmc-config.json in folder project

#### Example
```json
{
    "directory": "",
    "commands": [
        "mkdir hello world",
    ]
}
```

#### Create and Remove a folder in folder src (check the fild DIRECTORY in json)
```json
{
    "directory": "src",
    "changer": {
        "recipient": "$",
        "input": "folderName"
    },
    "commands": [
        "mkdir $",
        "rmdir $"
    ]
}
```

#### Angular example
```json
{
    "directory": "",
    "changer": {
        "recipient": "$",
        "input": "navbar"
    },
    "commands": [
        "ng g m components/$",
        "ng g c components/$/$-list",
        "ng g c components/$/$-form",
        "ng g s components/$/service/$"
    ]
}
```

### Run in your folder with container qmc-config.json

```sh
    quimuco
```

### Help
Run in your cmd *quimuco --help* or create a issue