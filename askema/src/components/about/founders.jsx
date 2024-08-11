import React from 'react'
import behailu from '../../Assets/behailu.jpg'
import betty from '../../Assets/betty.jpg'

export default function Founders() {
  return (
    <div className='col text-center' style={{color: "#3F2305"}}>
      <h3 className=' py-5'>Company Founders</h3>
      <p className=''>Meet the team behind Askema Engineering.  </p>

      <div className='col'  >
        
        <div className="founder1 row " style={{  display: 'flex', justifyContent: 'space-around'}}>

            <div className="founder1-text pt-5 pe-0 " style={{maxWidth: "450px"}}>
            <h2 className='my-3'>Behailu Seboka</h2> 
            <p className=''><br /> Founder and CEO <br />Machanical Engineering <br/>"አስኬማ ሁሌም በስራ ላይ" </p>
            </div>
            <div className="founder1-image blur-md">
                <img src={behailu} height={"400px"} width={"350px"} alt="" />
            </div>


        </div>``

        <div className="founder2 row my-4" style={{  display: 'flex', justifyContent: 'space-around'}}>

            <div className="founder2-image blur-md">
                <img src={betty} height={"350px"} width={"350px"} alt="" />

            </div>
            <div className="founder2-text pt-5" style={{maxWidth: "450px"}}>
                <h2 className='my-3'>Bethlehem Ayele</h2> 
                <p className=''>Marketing Manager</p>
            </div>
            </div>
        </div>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/bH8Bx12YZTs?si=nmIA6kqj65kyLbp5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}
