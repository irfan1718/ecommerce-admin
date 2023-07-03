import { UserButton } from '@clerk/nextjs';

const setUpPage = () => {
  return (
    <div>
      <div className='p-4'>
        <UserButton afterSignOutUrl='/' />
      </div>
      <div className='flex justify-center items-center h-full'>
        This is a protected route!
      </div>
    </div>
  );
};

export default setUpPage;
