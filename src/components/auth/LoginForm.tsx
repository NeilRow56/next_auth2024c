'use client'

import { CardWrapper } from './CardWrapper'

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account? Register"
      backButtonHref="/auth/register"
    >
      Login Form
    </CardWrapper>
  )
}