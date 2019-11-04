# Deploying a microservice with NodeJS, Express and Docker
After run, create a .env file, use .env.exemple.

## TO BUILD and RUN your microservice
`docker-compose up -d --build`

## Execute HTTP requests
To test your microservice, open your Terminal and run the commands below.

### GET
```bash
curl -X GET \
  http://localhost:9030/ \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache'
```

Response: 
```json
{
  "status":"Microservice is Ready!",
  "mode":"development"
}
```                              

### POST
```bash
curl -X POST \
  http://localhost:9030/entity \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
	"name": "User name",
	"email": "user@email.com",
	"password": "1234567890"
}'
```

Response: 
```json
{
  "message":"implement here your POST method",
  "body":{
    "name":"User name",
    "email":"user@email.com",
    "password":"1234567890"
  }
}
```

### PUT
```bash
curl -X PUT \
  http://localhost:9030/entity/1 \
  -H 'Content-Type: application/json' \
  -d '{
	"name": "User name",
	"email": "user@email.com",
	"entity-attribute": "entity attribute value"
}'
```

### DELETE
```bash
curl -X DELETE http://localhost:9030/entity/1'
```
Response HTTP Code: 200
