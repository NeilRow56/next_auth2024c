import LoginButton from '@/components/auth/LoginButton'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
})

async function HomePage() {
  return (
    <main className="flex h-full flex-col items-center justify-center ">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            'text-6xl font-semibold drop-shadow-md',
            font.className
          )}
        >
          🔐 Online Working Papers
        </h1>
        <p className="text-lg ">Authentication </p>
        <div>
          <LoginButton>
            <Button variant="default" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}

export default HomePage
