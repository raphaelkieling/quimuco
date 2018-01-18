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
    "changer": [
        {
            "recipient": "$",
            "input": "folderName"
        }
    ],
    "commands": {
        "creanteAndRemoveFolder":[
            "mkdir $",
            "rmdir $"
        ]
    }
}
```

#### Angular example
Create a folder called folder1 and after create a base to crud in angular with service (the folder is a example)
```json
{
    "directory": "",
    "changer": [
        {
            "recipient": "$dir1",
            "input": "folder1"
        },
        {
            "recipient": "*",
            "input": "components"
        },
        {
            "recipient": "$",
            "input": "job"
        }
    ],
    "commands": {
        "createFolder": [
            "mkdir $dir1",
        ],
        "createCrud": [
            "ng g m */$",
            "ng g c */$/$-list",
            "ng g c */$/$-form",
            "ng g s */$/service/$"
        ]
    }
}
```

### Run in your folder with container qmc-config.json

```sh
    quimuco
```

### Help
Run in your cmd *quimuco --help* or create a issue