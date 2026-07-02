import { PrismaClient } from "../generated/prisma/client";

// PrismaClient is not used yet, this is a placeholder for future DB connection.
// Uncomment and configure when PostgreSQL is available.

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// export const prisma = globalForPrisma.prisma ?? new PrismaClient({
//   adapter: ... // Prisma Driver Adapter required in Prisma 7
// });

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export {};
