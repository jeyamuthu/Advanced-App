import React from 'react'

import Description from '../../components/user/Description'
import Service from '../../components/user/Service'
import Footer from '../../components/user/Footer'
import Faq from '../../components/user/Faq'

function Home() {
  return (
    <div>
     <Description/>
     <Faq/>
     <Service/>
     <Footer/>
    </div>
  )
}

export default Home