# MM API

## list
- Method : GET
- Params :
  - `path`

This API call should return an array of files (object) with the following properties :
- `type` : *dir* or *file*
- `path` : e.g. `folder/file.jpg` (no leading slash)
- `basename` : e.g. `file.jpg`
- `extension` : e.g. `jpg`
- `filename` : e.g. `file`

## download

- Method : GET
- Params :
  - `path`

## upload

- Method : POST
- Params :
  - `path`
  - `file`