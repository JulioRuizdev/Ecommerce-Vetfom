# Proyecto del Curso de Integrador 2

## Descripción:

Proyecto hecho en nextjs

## Requisitos:

- Nodejs 20 o superior
- npm 6 o superior
- nextjs 10 o superior
- Base de datos Postgres SQL

## Instalación:

1. Clonar el repositorio
2. Instalar las dependencias con `npm install`
3. Crear un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:
4. Ejecutar el docker con para la base de datos `docker-compose up -d`
5. Ejecutar el proyecto con `npm run dev`

7.- migrar a la base de datos con prisma

npm install prisma --save-dev
npx prisma init --datasource-provider PostgreSQL
npx prisma migrate dev --name {nombre de la migracion}
npx prisma migrate dev

8.- ejecutar el seed `npm run seed`

## Integrantes:

![Imagen de WhatsApp 2024-10-08 a las 13 27 32_56d2f7f7](https://github.com/user-attachments/assets/ca2e0db9-0d19-4d06-a7df-a4fde4c14ac8)
