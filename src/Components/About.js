import React, { useEffect } from "react"

const About = () => {

  return (
    <div className='container-fluid p-5 ' style={{
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
    }}>
      <div className='row justify-content-around p-5 about_left'>
        <div className='col-md-5 col-sm-10'>
          <h3 style={{ fontWeight: 'bolder' }}>Hello, we are MyGym</h3>
          <p>WE can assure you that ,if you join us you will surely maintain your Health and Fitness.</p>
          <p>If you have any question regarding MyGym Membership, you can contact us immediately. Thank you.</p>
        </div>
        &nbsp;
        <div className='col-md-5 col-sm-10 d-flex flex-row'>

          <img
            style={{ width: '400px' }}
            src='https://studio.code.org/v3/assets/a6nW3JMGyvu3NtWSmKgeXWeMvAeyBrvAjB4bUzwfQso/Ladymeditating.gif' alt='not found' className='img-fluid' />

        </div>
      </div>
    </div>
  )
}

export default About