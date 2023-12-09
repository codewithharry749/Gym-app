import React from 'react'

const Primium_card = () => {
    const style = { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }
    return (

        <div className='container-fluid p-3' style={{ backgroundColor: '#0B0B0E' }} >
            <div className='row justify-content-around' style={style}>

                <div className='col-md-6 col-sm-10' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                    <div class="card py-2" style={{ width: "18rem", float: 'left' }}>
                        <img src='https://img.freepik.com/free-photo/close-up-athlete-training_23-2150845570.jpg?t=st=1701853964~exp=1701857564~hmac=54a1e7bbea571ab9db68451c8be23c3af810958e30297f79c670fa283d1525c5&w=360' alt='pic not found' className='img-fluid' style={{ height: '200px', objectFit: 'cover', borderRadius: '50%', width: '200px', margin: 'auto' }} />
                        <div class="card-body">
                            <h5 class="card-title">mini membership</h5>
                            <h6>price : $10</h6>
                            <h6>time duration : 8hr</h6>
                            <h6 style={{ color: 'gold' }}>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </h6>
                            <h6 style={{ fontSize: '.8rem', color: 'red' }}>
                                offer : 10% discount on joining new member
                            </h6>
                            <p style={{ fontSize: '.8rem' }} class="card-text">With a dedicated space to visit for working out, you'll feel motivated to get a proper workout and get your heart pumping.</p>
                            <a href="#" class="btn btn-primary">go premium $9</a>
                        </div>
                    </div>

                </div>

                <div className='col-md-6 col-sm-10' style={style}>
                    <div class="card py-2 mt-2" style={{ width: "18rem" }}>
                        <img src='https://img.freepik.com/free-photo/man-lifting-barbell-with-word-bar-it_1340-40535.jpg?t=st=1701854953~exp=1701858553~hmac=d3c6f3b9041dc07fe83d9c7ca7213d2e10b40d8e04f3433e0d152b71004b1e42&w=360' alt='pic not found' className='img-fluid' style={{ height: '200px', objectFit: 'cover', borderRadius: '50%', width: '200px', margin: 'auto' }} />
                        <div class="card-body">
                            <h5 class="card-title">grande membership</h5>
                            <h6>price : $25</h6>
                            <h6>time duration : 24hr</h6>
                            <h6 style={{ color: 'gold' }}>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </h6>
                            <h6 style={{ fontSize: '.8rem', color: 'red' }}>
                                offer : 20% discount on joining new member
                            </h6>
                            <p style={{ fontSize: '.8rem' }} class="card-text">Grand Karma Membership short tenure membership is only the smartest way to get the holiday. Its totally flexible and unique.</p>
                            <a href="#" class="btn btn-primary">go premium $20</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Primium_card