# Dockerfile
FROM debian:bullseye-slim

# Install dependencies
RUN apt-get update && apt-get install -y curl apt-transport-https

# Add ngrok key and install ngrok
RUN curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null && \
    echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | tee /etc/apt/sources.list.d/ngrok.list && \
    apt-get update && apt-get install -y ngrok

# Add ngrok authtoken
RUN ngrok config add-authtoken 2jQd8EpWO96J1PylNIL3xEX5QSL_2sAoL6prDSkJrsszSxCk1

# Expose the ngrok web interface port
EXPOSE 4040

# Run ngrok
CMD ngrok http http://backend:2500
