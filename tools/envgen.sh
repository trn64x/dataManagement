#!/bin/bash

# Output file for environment variables
env_file=".env.production"

# Clear the existing .env.production file if it exists
> "$env_file"

# Fetch GitHub environment variables and write them to .env.production
gh variable list -e PRODUCTION --json name,value -q '.[] | "\(.name)=\(.value)"' > "$env_file"

echo ".env.production file created successfully!"
