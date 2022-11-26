# SkeletonDirectory.js 🧙‍♂️+📜.json =💀📂

## Description

Small script that generates a folder and file structure skeleton from a .json file.

You can add your own .json files in the folder `skeletons` (or make a pull request 😉).

## Instalation and use

`npm i`

`node skeletonStructure.js`

## JSON format example

```json
{
    "name": "Structure name",
    "structure": [
        {
            "type": "folder",
            "name": "Documents",
            "children": [
                {
                    "type": "folder",
                    "name": "Text files",
                    "children": [
                        {
                            "type": "file",
                            "name": "MyTextDocument.txt"
                        }
                    ]
                }
            ]
        },
        {
            "type": "folder",
            "name": "Photos",
            "children": []
        }
    ]
}

```
