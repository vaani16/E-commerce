import React from 'react'
import banner from './images/banner.jpg'
import "./Hom.css"
import Products from './Products'



function Hom() {
  return (
    <div className='Home'>
     <img src={banner} alt="home page banner" className="Home_image" />
      
      <div className="Home_row">
     <Products id={1} title=" Womens yello fit dress"  price={2000} rating ={4}
     image="https://images.unsplash.com/photo-1612722432474-b971cdcea546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80" />
     <Products  id={2} title=" DANVOUY Womens T Shirt Casual Cotton Short"  price={600} rating ={3}
     image="https://images.unsplash.com/photo-1585145197082-dba095ba01ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=402&q=80" />
     <Products id={3} title=" BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats"  price={2050} rating ={2}
     image="https://images.unsplash.com/photo-1575919988855-f727358015b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
    </div>

    <div className="Home_row">
     <Products  id={4} title="Pearl Bracelets with dangling stone"  price={350} rating ={4}
     image="https://plus.unsplash.com/premium_photo-1681276170111-6d89676463db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJyYWNlbGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
     <Products id={5} title=" Multicolor beaded bracelet"  price={500} rating ={4}
     image="https://images.unsplash.com/photo-1638768892257-8aec93a524e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
     <Products id={6} title=" Multilayer pendant with blue stone and a moon"  price={650} rating ={4}
     image="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />

    </div>

    <div className="Home_row">
     <Products  id={7} title="BRANDY'S Women grey dress"  price={2500} rating ={4}
     image="https://images.unsplash.com/photo-1596783047904-4000addd05cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
     <Products id={8} title=" LEAPOCK'S pink printed dress"  price={1700} rating ={4}
     image="https://images.unsplash.com/photo-1623098943463-e4c0ebcf5f4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
     <Products id={9} title="BRIGHT'S long knitted comfy wear"  price={1950} rating ={4}
     image="https://images.unsplash.com/photo-1639926784543-d6777b39dceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=570&q=80" />

    </div>

    </div>
  )
}

export default Hom
