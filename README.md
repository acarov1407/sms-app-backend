# Backend - API para Enviar SMS con NestJS

Este es el backend de una aplicación web que permite enviar SMS a través de un panel de administración. El proyecto está desarrollado con **NestJS** y utiliza **Firebase Firestore** como base de datos, y **Altiria** para el envío de SMS.

## Endpoints

### Users
<table><thead><tr><th>Método</th><th>Endpoint</th><th>Descripción</th><th>Body (JSON)</th><th>Response (JSON)</th></tr></thead><tbody><tr><td>GET</td><td><code>/api/users</code></td><td>Obtiene el listado de usuarios</td><td>N/A</td><td>Array de usuarios</td></tr><tr><td>POST</td><td><code>/api/users</code></td><td>Crea un nuevo usuario</td><td><code>{ "username": "string", "phone": "string", "photoURL": "string" }</code></td><td><code>{ "id": "string", "username": "string", "phone": "string", "photoURL": "string" }</code></td></tr></tbody></table>

## Requisitos

Antes de comenzar, asegúrate de tener los siguientes requisitos instalados en tu sistema:

- Node.js (v14 o superior)
- NPM (v6 o superior)
- NestJS CLI (`npm install -g @nestjs/cli`)

## Configuración

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/sms-app-backend.git
cd sms-app-backend
```

### 2. Instala las dependencias
```bash
npm install
```

### 3. Variables de entorno

Crea un archivo .env en la raíz del proyecto y define las siguientes variables:
```bash
FIREBASE_PROJECT_ID=id-proyecto-firebase
FIREBASE_PRIVATE_KEY=key-proyecto-firebase
FIREBASE_CLIENT_EMAIL=client-email-proyecto-firebase
FIREBASE_STORAGE_BUCKET=nombre-bucket-proyecto-firebase
```

### 5. Inicia la aplicación

```bash
npm run start
```