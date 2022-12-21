"""
This script will dynamically inject the required api urls that needs to be set
as a environment variable or else the frontend http request to apis will not work.
This script needs to be ran before building the angular frontend app.
This script should only be ran when deploying the app before 'npm run build' command
"""
#!/usr/bin/env python3
import os

# Gets api url from environment variable if set on system
# env variable is not set on system the a default string is set instead
frontend_env_vars = {
  "baseHrefUrl": os.getenv("baseHrefUrl", "SET URL HERE!!!"),
  "baseBackendURL": os.getenv("baseBackendURL", "ENV VAR baseBackendURL is missing!!!"),
  "backendApiURL": os.getenv("backendApiURL", "ENV VAR backendApiURL is missing!!!")
}

# text to replace the old production file
envProdTypeScriptFile = "export const environment = { production: true"

# env vars to add to frontend production envs
for env_var in frontend_env_vars:
  property_to_add = f",{env_var}: '{frontend_env_vars[env_var]}'"
  envProdTypeScriptFile += property_to_add

# closing object syntax
envProdTypeScriptFile += "};"

f = open("src/environments/environment.prod.ts", "w")
f.write(envProdTypeScriptFile)
f.close()
