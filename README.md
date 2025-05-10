# School Management API

A RESTful API for managing schools, built with Node.js, TypeScript, Express, and Prisma ORM. This project provides endpoints to create, read, update, and delete school records, and includes a seed script for populating the database with sample school data.

## Features
- Add and list schools based on latitude and longitude
- Uses Prisma ORM for database access
- TypeScript for type safety
- Organized code structure (controllers, routes, seeders)

## Project Structure
```
├── generated/           # Prisma generated client
│   └── prisma/
│       ├── client.js
│       ├── schema.prisma
│       └── ...
├── prisma/              # Prisma schema and migrations
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── controllers/     # Express controllers
│   ├── routes/          # Express routes
│   ├── seed/            # Seed scripts
│   └── index.ts         # Entry point
├── package.json
├── tsconfig.json
└── README.md
```

## API Endpoints

- `GET /schools` — List all schools
- `POST /schools` — Create a new school

## Technologies Used
- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL (default, can be changed)
