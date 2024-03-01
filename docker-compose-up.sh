#!/bin/bash

docker-compose up -d
RETRIES=30
SLEEP_DURATION=10
SUCCESS=false

echo "Waiting for the application to start and become available at localhost:4173..."
for ((i=0; i<RETRIES; i++)); do
  if curl -f http://localhost:4173/; then
    SUCCESS=true
    break
  fi
  echo "Attempt $((i+1)) of $RETRIES failed, retrying in $SLEEP_DURATION seconds..."
  sleep $SLEEP_DURATION
done

if [ "$SUCCESS" = true ]; then
  echo "Successfully connected to the application on localhost:4173!"
else
  echo "Failed to connect to the application on localhost:4173 after $RETRIES retries."
  exit 1
fi

SUCCESS=false
echo "Waiting for the application to start and become available at localhost:5000/health..."
for ((i=0; i<RETRIES; i++)); do
  if curl -f http://localhost:5000/health; then
    SUCCESS=true
    break
  fi
  echo "Attempt $((i+1)) of $RETRIES failed, retrying in $SLEEP_DURATION seconds..."
  sleep $SLEEP_DURATION
done

if [ "$SUCCESS" = true ]; then
  echo "Successfully connected to the application on localhost:5000/health!"
else
  echo "Failed to connect to the application on localhost:5000/health after $RETRIES retries."
  exit 1
fi

docker-compose down
