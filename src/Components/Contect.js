import React from 'react'

const Contect = () => {
  return (
    <div className='container-fluid  ' >
      <div className='row justify-content-around p-5 about_left'>
        <div className='col-md-5 col-sm-10 mt-5'>
          <h3 style={{ fontWeight: 'bolder' }}>Feel free to ask anything</h3>
          <div className="mb-3">
           
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name" />
          </div>
          <div className="mb-3">
           
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Example@gmail.com" />
          </div>
          <div className="mb-3">
           
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='massage'></textarea>
          </div>
          <button type="button" className="btn btn-dark  w-100">Send MASSAGE</button>

         </div>

        <div className='col-md-5 col-sm-10 mt-5'>
          <h3 style={{ fontWeight: 'bolder' }}>Where you can find us</h3>
          <i class="fa fa-location-arrow" aria-hidden="true"></i><span> Kannauj ,Uttar Pradesh , India</span>
          <hr/>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28428.548540027845!2d79.8951741582832!3d27.043795623860337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e6f7915d83851%3A0x46732ed4c2e2e2ad!2sKannauj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1701806415258!5m2!1sen!2sin" width="430" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contect