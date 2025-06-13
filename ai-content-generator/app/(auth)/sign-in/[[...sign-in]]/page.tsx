import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex py-20 justify-center items-center'>
      <SignIn />
    </div>
  )
}