import TabSwitcher from '@/components/tab-switcher'
import React from 'react'
import SignInForm from './signin-form'
import SignUpForm from './signup-form'

const AuthenticationPage = () => {
  return (
    <div className='relative bg-background flex h-screen w-full justify-center items-center'>
      <div className='max-w-3xl'>
        <TabSwitcher SignInTab={<SignInForm />} SignUpTab={<SignUpForm />} />
      </div>
    </div>
  )
}

export default AuthenticationPage
