import React from 'react'

const Classes = () => {
  return (
    <div className='conatiner-fluid p-5'>

      <div className='row classes mt-3'>
        <div className='col-12 text-center'>
          <p style={{ fontSize: '1.5rem' }}>Get A Perfect Body</p>
          <h2 style={{ fontWeight: 'bolder' }}>
            Our Training Classes
          </h2>
        </div>
        <div className='col-md-4 col-sm-10 mt-3'>
          <div class="card" style={{width: "25rem",height:'auto'}}>
            <img src="https://cdn.dribbble.com/users/3414434/screenshots/14616859/media/94814b2e5bcd1dd9f926bdd0d98eda5c.gif" class="card-img-top" style={{width:'auto' , height:'300px',objectFit:'cover'}} alt="..."  />
            <div class="card-body">
             <h2 style={{ fontWeight: 'bolder' }}>Yoga</h2>
             <span style={{fontWeight:'bold'}}>Traned by - </span> Yoga Expert
              <p class="card-text">Yoga is a light, which once lit will never dim.</p>
            </div>
          </div>

        </div>

        <div className='col-md-4 col-sm-10 mt-3'>
          <div class="card" style={{width: "25rem",height:'auto'}}>
            <img src="https://cdn.dribbble.com/users/276597/screenshots/3518682/media/546a049de9abc5e135f3748f86ea93dc.gif" class="card-img-top" style={{width:'auto' , height:'300px',objectFit:'cover'}} alt="..." />
            <div class="card-body">
              <h2 style={{ fontWeight: 'bolder' }}>Aerobics</h2>
              <span style={{fontWeight:'bold'}}>Traned by - </span> <> Aerobics Trainer</>
              <p class="card-text">True power of energy comes from Aerobics.</p>
            </div>
          </div>

        </div>

        <div className='col-md-4 col-sm-10 mt-3'>

          <div class="card" style={{width: "25rem",height:'auto'}}>
            <img src="https://media3.giphy.com/media/EXdXQuRlwLv31JygTh/giphy.gif?cid=ecf05e47j30xypm676xacvfjtgyw4psu9t717f5kijbift56&ep=v1_gifs_gifId&rid=giphy.gif&ct=s" class="card-img-top" style={{width:'auto' , height:'300px',objectFit:'contain'}} alt="..." />
            <div class="card-body">
              <h2 style={{ fontWeight: 'bolder' }}>Cardio</h2>
              <span style={{fontWeight:'bold'}}>Traned by - </span> Cardio Experts
              <p class="card-text">Good things come to those who sweat.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Classes