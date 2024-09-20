# Backend - API para Enviar SMS con NestJS

Este es el backend de una aplicación web que permite enviar SMS a través de un panel de administración. El proyecto está desarrollado con **NestJS** y utiliza **Firebase Firestore** como base de datos, y **Altiria** para el envío de SMS.

## Tecnologías utilizadas

- **NestJS**: Framework de Node.js para construir aplicaciones del lado del servidor.
- **Firestore**: Base de datos NoSQL de Google.
- **Altiria**: API para el envío de mensajes SMS.

## Endpoints

### **Users**
<table><thead><tr><th>Método</th><th>Endpoint</th><th>Descripción</th><th>Body (JSON)</th><th>Response (JSON)</th></tr></thead><tbody><tr><td>GET</td><td><code>/api/users</code></td><td>Obtiene el listado de usuarios</td><td>N/A</td><td>Array de usuarios</td></tr><tr><td>POST</td><td><code>/api/users</code></td><td>Crea un nuevo usuario</td><td><code>{ "username": "string", "phone": "string", "photoURL": "string" }</code></td><td><code>{ "id": "string", "username": "string", "phone": "string", "photoURL": "string" }</code></td></tr></tbody></table>

#### Ejemplo de respuesta para `GET /api/users`

```json
[
  {
    "id": "abc123",
    "username": "John Doe",
    "phone": "573142226709",
    "photoURL": "https://example.com/photo.jpg"
  }
]
```

#### Ejemplo de body para `POST /api/users`

```json
{
  "username": "John Doe",
  "phone": "573456780000",
  "photoURL": "https://example.com/photo.jpg"
}
```

### **SMS**

<table><thead><tr><th>Método</th><th>Endpoint</th><th>Descripción</th><th>Body (JSON)</th><th>Response (JSON)</th></tr></thead><tbody><tr><td>POST</td><td><code>/api/sms</code></td><td>Envía un mensaje SMS a un usuario</td><td><code>{ "to": "+1234567890", "message": "string" }</code></td><td><code>{ "message": "SMS enviado correctamente" }</code></td></tr></tbody></table>

#### Ejemplo de body para `POST /api/sms`

```json
{
  "to": "573125678900",
  "message": "Hello, this is a test message!"
}
```

#### Ejemplo de respuesta para `POST /api/sms`

```json
{
  "destination": "573125678900"
}
```

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