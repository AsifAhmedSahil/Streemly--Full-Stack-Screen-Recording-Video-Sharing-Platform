'use client'
import { authClient } from '@/lib/auth-client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {

  const handleSignIn =async () =>{
    return await authClient.signIn.social({provider:"google"})

  }
  

  return (
    <main className='sign-in'>
      
        <aside className='testimonial'>
          <Link href="/">
          <Image src="/assets/icons/logo.svg" height={32} width={32} alt='logo' />
          <h1>Streemly</h1>
          </Link>

          <div className='description'>
            <section>
              <figure>
                {Array.from({length:5}).map((_,index)=>(
                  <Image src={"/assets/icons/star.svg"} width={20} height={20} key={index} alt='star'/>
                ))}
              </figure>
              <p>Stremly makes screen recording easy. It is too fast , easy, smooth and shareable  in seconds</p>
              <article>
                <Image src={"/assets/images/jason.png"} alt='json' width={64} height={64} className='rounded-full'/>
                <div>
                  <h2>Asif ahmed Sahil</h2>
                  <p>Full Stack Engineer</p>
                </div>
              </article>
            </section>
          </div>

          <p>&copy; Streemly {(new Date()).getFullYear()}</p>
        </aside>

        {/* right side */}

        <aside className='google-sign-in'>
          <section>
            <Link href={"/"}>
              <Image src="/assets/icons/logo.svg" height={40} width={40} alt='logo' />
              <h1>Streemly</h1>
            </Link>
            <p>Produce and share your very frist <span>Streemly videos</span> effortlessly</p>
            <button onClick={handleSignIn}>
              <Image src="/assets/icons/google.svg" alt='google' width={22} height={22}/>
              <span>Sign in with google</span>
            </button>
          </section>

        </aside>

        <div className='overlay'/>
      

    </main>
  )
}

export default page