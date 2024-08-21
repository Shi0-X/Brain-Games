# Makefile
# Comando para instalar dependencias usando npm ci
install:
    npm ci
# Comando para ejecutar el juego brain-games
brain-games:
    node bin/brain-games.js
# Comando para publicar el paquete
publish:
    npm publish --dry-run
