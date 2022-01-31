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
  const { index } = props
  return (
    <div >
      <MainSection />
      <Projects />
      <TokenSection />
      <AdvantagesSection />
      <WeDoSection />
      <UpcomingSection />
      <OurPartnersSection />
      <FaqSection />
      <Footer />
    </div>
  )
}
