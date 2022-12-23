


import { motion } from 'framer-motion'
import './services.css'

import serviceData from '../assets/data/serviceData'

const Services = () => {
  return (
   <>
   <section className="services">
     <div className="container">
          <div className='flex flex-col  lg:flex-row gap-10'>

{
     serviceData.map((val, index)=>(
          <div className='flex-1' key={index}>
          <motion.div whileHover={{scale:1.1}} className="service__item transition-all duration-300" style={{background:`${val.bg}`}}>
               <span>
           {val.icon}
               </span>
               <div>
                    <h3>{val.title} </h3>
                    <p>{val.subtitle}</p>
               </div>
          </motion.div>
     </div>
     ))
}


              
          </div>
     </div>
   </section>
   </>
  )
}

export default Services