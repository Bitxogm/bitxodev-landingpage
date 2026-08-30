# Stage 1: build
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
# lucide-react@0.344.0 declara peerDependency react hasta ^18; la v1.x que sí
# soporta React 19 elimina los iconos de marca (Github/Twitter/Linkedin) que
# usa el sitio, así que se mantiene 0.344.0 y se fuerza la instalación.
RUN npm ci --legacy-peer-deps

COPY . .
RUN npm run build

# Stage 2: serve
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
