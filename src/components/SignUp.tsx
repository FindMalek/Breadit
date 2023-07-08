import { Icons } from '@/components/Icons'
import Link from 'next/link'
import UserAuthForm from '@/components/UserAuthForm'

const SignUp = () => {
    return (
        <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
            <div className='flex flex-col space-y-2 text-center'>
                <Icons.logo className='w-6 h-6 mx-auto'/>
                <h1 className='text-2xl font-semibold tracking-tight'>Sign Up</h1>
                <p className='text-sm max-w-ws mx-auto'>
                    By continuing you are setting up a Breadit account and
                    you agree to our User Agreement and Privacy Policy.
                </p>

                {/* Sign In Form */}
                <UserAuthForm />

                <p className='px-8 text-center text-sm text-zinc-700'>
                    Already a Breaditor?{' '}
                    <Link href='/signin' className='hover:text-zinc-800 text-sm underline underline-offset-4'>
                        Sign In
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default SignUp;