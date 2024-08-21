#!/bin/sh
# entrypoint.sh

check_tables_exist() {
  # SQL query to check if tables exist
  SQL="SELECT to_regclass('public.USUARIO');"
  # Run the query using psql
  TABLES_EXIST=$(psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" -t -c "$SQL" | xargs)

  # Check if the result is not null (meaning the table exists)
  if [ "$TABLES_EXIST" = "public.usuario" ]; then
    return 0 # Tables exist
  else
    return 1 # Tables do not exist
  fi
}

until nc -z -v -w30 postgres 5432
do
  echo "Waiting for PostgreSQL..."
  sleep 1
done

echo "PostgreSQL is up - checking if database is initialized"

if ! check_tables_exist; then
  echo "Tables do not exist - running migrations and seeding"
  npm run migrate
  npm run seed
else
  echo "Tables already exist - skipping migrations and seeding"
fi

echo "Starting application..."
exec npm start
