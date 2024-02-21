'use server'

import bcryptjs from 'bcryptjs'

import * as z from 'zod'
import { RegisterSchema } from '../schemas'
import { db } from '@/lib/db'
import { getUserByEmail } from '../data/user'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { email, password, name } = validatedFields.data

  const hashedPassword = await bcryptjs.hash(password, 12)

  //check if user already exists

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: 'Email already in use' }
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })

  //TODO send verification token email

  return { success: 'Confirmation email sent!' }
}
