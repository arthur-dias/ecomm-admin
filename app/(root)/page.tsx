import { UserButton } from '@clerk/nextjs'

const SetupPage = () => {
  return (
    <div className='p-5'>
      <UserButton afterSignOutUrl='/' />
      <p>Admin Dashboard</p>
    </div>
  )
}

export default SetupPage
