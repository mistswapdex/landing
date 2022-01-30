import Head from 'next/head'
import Image from 'next/image'
import AdvantagesSection from '../containers/AdvantagesSection'
import FaqSection from '../containers/FaqSection'
import Footer from '../containers/Footer'
import MainSection from '../containers/MainSection'
import OurPartnersSection from '../containers/OurPartnersSection'
import Projects from '../containers/Projects'
import TokenSection from '../containers/TokenSection'
import UpcomingSection from '../containers/UpcomingSection'
import WeDoSection from '../containers/WeDoSection'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  console.log(props)
  const { index } = props
  console.log(index.main_section)
  return (
    <div >
     <MainSection lang={index.main_section} />
     <Projects lang={index.projects} />
     <TokenSection lang={index.token_section} />
     <AdvantagesSection lang={index.advantages_section} />
    <WeDoSection />
    <UpcomingSection lang={index.upcoming} />
    <OurPartnersSection lang={index.our_partners} />
    <FaqSection lang={index.faq_section} />
    <Footer />
    </div>
  )
}

//Translate function
export async function getStaticProps({locale}){
  const response = await import(`../lang/${locale}.json`)
 
console.log(response.index)
  return {
    props:{
      
       index: response.index

    }
  }
}
