import { Ollama } from "ollama";

const ollama: Ollama = new Ollama({ host: 'http://cook_ollama_next:11434' });

export { ollama };