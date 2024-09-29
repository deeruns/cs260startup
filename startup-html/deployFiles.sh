#!/bin/bash

# while getopts k:h:s: flag
# do
#     case "${flag}" in
#         k) key=${OPTARG};;
#         h) hostname=${OPTARG};;
#         s) service=${OPTARG};;
#     esac
# done

# if [[ -z "$key" || -z "$hostname" || -z "$service" ]]; then
#     printf "\nMissing required parameter.\n"
#     printf "  syntax: deployFiles.sh -k <pem key file> -h <hostname> -s <service>\n\n"
#     exit 1
# fi

# printf "\n----> Deploying files for $service to $hostname with $key\n"

# # Step 1
# printf "\n----> Clear out the previous distribution on the target.\n"
# ssh -i "$key" ubuntu@$hostname << ENDSSH
# rm -rf services/${service}/public
# mkdir -p services/${service}/public
# ENDSSH

# # Step 2
# printf "\n----> Copy the distribution package to the target.\n"
# scp -r -i "$key" * ubuntu@$hostname:services/$service/public
#!/bin/bash

# Parse options
while getopts k:h:s: flag
do
    case "${flag}" in
        k) key=${OPTARG};;
        h) hostname=${OPTARG};;
        s) service=${OPTARG};;
    esac
done

# Check for missing parameters
if [[ -z "$key" || -z "$hostname" || -z "$service" ]]; then
    printf "\nMissing required parameter.\n"
    printf "  syntax: deployFiles.sh -k <pem key file> -h <hostname> -s <service>\n\n"
    exit 1
fi

printf "\n----> Deploying files for $service to $hostname with $key\n"

# Step 1: Clear out the previous distribution on the target
printf "\n----> Clear out the previous distribution on the target.\n"
ssh -i "$key" ubuntu@$hostname << ENDSSH
rm -rf services/${service}/public/*
mkdir -p services/${service}/public
ENDSSH

# Check if SSH command was successful
if [[ $? -ne 0 ]]; then
    printf "\nFailed to connect to the server or remove old files. Exiting.\n"
    exit 1
fi

# Step 2: Use rsync to copy files
printf "\n----> Copy the distribution package to the target using rsync.\n"
rsync -avz --exclude 'deployFiles.sh' -e "ssh -i $key" ./ ubuntu@$hostname:services/$service/public/

# Check if rsync was successful
if [[ $? -eq 0 ]]; then
    printf "\n----> Deployment completed successfully.\n"
else
    printf "\n----> Deployment failed.\n"
    exit 1
fi
