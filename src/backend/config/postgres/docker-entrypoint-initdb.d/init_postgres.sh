#!/bin/bash

psql -U postgres -c "CREATE USER $DB_USER PASSWORD '$DB_PASSWORD'"
psql -U postgres -c "CREATE DATABASE $DB_NAME OWNER $DB_USER"