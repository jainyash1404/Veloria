import mongoose from 'mongoose'
import { env } from '@/config/env'
import { logger } from '@/utils/logger'

export async function connectDatabase() {
  if (!env.mongoUri) {
    throw new Error('MONGODB_URI is missing')
  }

  await mongoose.connect(process.env.MONGODB_URI!);

console.log('[DB] MongoDB connected');
console.log('[DB] Database:', mongoose.connection.name);
console.log('[DB] Host:', mongoose.connection.host);
}
