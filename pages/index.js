import Head from 'next/head'
import { Main } from '../src/components/Main'
import { OurStory } from '../src/components/OurStory'
import { Services } from '../src/components/Services'
import { News } from '../src/components/News'
import { Careers } from '../src/components/Careers'
import { Contact } from '../src/components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>On Time Express</title>
        <meta name='description' content='Best logistics specialists' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='//db.onlinewebfonts.com/c/f1fcc5aed1e20fc0cdb9f8a7573625bd?family=Integral+CF'
          rel='stylesheet'
          type='text/css'
        />
        <link
          href='//db.onlinewebfonts.com/c/d3675088b72e6fe19997296d172a049c?family=HelveticaNowDisplay'
          rel='stylesheet'
          type='text/css'
        />
      </Head>

      <main className='sm:w-full 2xl:h-screen w-[660px]'>
        <Main />

        <OurStory />

        <Services />

        <News />

        <Careers />

        <Contact />
      </main>
    </div>
  )
}
