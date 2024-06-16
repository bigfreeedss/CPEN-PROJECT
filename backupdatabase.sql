#!/bin/bash

# Variables
DATABASE_NAME="CPEN_DEPARTMENT"
BACKUP_PATH="/path/to/backup/your_database_backup.sql"
USER="postgres"
HOST="localhost" # Usually 'localhost' if running locally
PORT="5050" 

# Command to backup the database
pg_dump -U $USER -h $HOST -p $PORT -F c -b -v -f $BACKUP_PATH $DATABASE_NAME
