# Switch's-dojo
Training the next generation

Sup.

Hello world!

## Setup the database

Create the docker container

```bash
docker run --name pizzabox \
-p5555:5432 \
-e POSTGRES_USER=aswitch \
-e POSTGRES_PASSWORD=aswitch \
-e POSTGRES_DB=pizzabox \
-d postgres:15
```

Populate the database with the schema

```bash
cat ./database-scripts/init.sql | docker exec -i pizzabox psql -Uaswitch -dpizzabox
```

## How to start my express app 
cd Node-Practice/
DEBUG=myapp:* npm run dev

## Jump into database
sudo -i -u postgres
psql -d pizzabox

## read users
select * from users;
