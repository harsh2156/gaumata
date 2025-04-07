import React from 'react'
import HeroSection from '../components/HeroSection'
import HeroCard from '../components/HeroCard'
import TechnologyPartner from '../components/TechnologyPartner'
import WhyWeBest from '../components/WhyWeBest'

const Home: React.FC = () => {
  return (
    <div>
        <HeroSection />
        <div className='flex justify-between absolute -bottom-28 left-20'>
          <HeroCard src='/card1img.svg'  title='Ayushman Cowfit' paragraph='Ayushman Cowfit is an Artificial Intelligence powered cattle health solution crafted for livestock wellbeing and effective herd management by working on optimal early interventions.'/>
        </div>
        <div className='flex justify-between absolute -bottom-28 right-20'>
          <HeroCard src='/card2img.svg'  card2={true}  title='Cowfit Studio' paragraph='Cowfit Studio, a premier ecommerce hub, specializes in dairy products for cattle safety & comfort. Catering to all scales of farming, it provides a wide array of quality items, prioritizing customer contentment & nationwide reach.'/>
        </div>

        <TechnologyPartner />

        <WhyWeBest/>

    </div>
  )
}

export default Home