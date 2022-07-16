import React from "react";
import Head from "next/head";
import Header from './application/components/Header';
import Banner from './application/components/Banner';
import SmallCard  from './application/components/SmallCard';
import MediumCard from './application/components/MediumCard';
import LargeCard from './application/components/LargeCard';
import Footer from './application/components/Footer';

export default function HOME({ exploreData, cardsData }) {
  return (
    <div className=''>
      <Head>
        <title>Design Event MBOSS.US</title>
        <link rel="icon" href="https://i.ibb.co/CM7x3FX/1628329259246.png" />
      </Head>
     
    <Header /> {/*You have to create an own Header page in e new components directory*/}
    <Banner /> 
   

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-4'>Explore nearby</h2>
          {/*Pull some data from a server - API endpoints */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          { exploreData?.map(({img, distance, location}) => (
            <SmallCard
              key={img}
              img={img}
              distance={distance}
              location={location}
            />
          )) }
          </div>
        </section>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold py-8'>Celebrate Anywhere</h2>
          {/*Pull some data from a server - API endpoints */}
          <div className='flex space-x-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 hover:overflow-contain hidden:overflow-x-scroll p-4 -ml-6'>
          { cardsData?.map(({img, title}) => (
            <MediumCard 
              key={img} 
              img={img} 
              title={title} 
            /> 
          )) }
          </div>
        </section>
        <section className=''> 
        <LargeCard />    
        </section>
        <section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </section>
      </main>
      <Footer className=''/>
    
    </div> 
  );
}


export const getStaticProps = async () => {
  const [exploreDataRes, cardsDataRes] = await Promise.all([
    fetch("https://jsonkeeper.com/b/8SGQ"),
    fetch("https://jsonkeeper.com/b/8GCH"),
  ])

  const [exploreData, cardsData] = await Promise.all([
    exploreDataRes.json(),
    cardsDataRes.json(),
  ])

  return {
    props: {
      exploreData,
      cardsData,
    },
    revalidate: 5
  }
}