#!/bin/bash
set -e
ollama serve &
sleep 5

if ! ollama list | grep -q llama3; then
    echo "Pulling llama3 model..."
    ollama pull llama3
fi

wait
