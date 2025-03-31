@echo off
REM Output file for environment variables
set ENV_FILE=.env.production

REM Clear the existing .env.production file if it exists
if exist %ENV_FILE% del %ENV_FILE%

REM Fetch GitHub environment variables and write them to .env.production
for /f "tokens=*" %%i in ('gh variable list -e PRODUCTION --json name,value -q ".[] | \"\(.name)=\(.value)\""') do (
    echo %%i >> %ENV_FILE%
)

echo .env.production file created successfully!
