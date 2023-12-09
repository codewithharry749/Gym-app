import React from 'react'

const Footer = () => {

    const style = { display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'center', alignItems: 'center', cursor: 'pointer', color: 'white' }


    return (
        <div className='container-fluid p-2' style={{ backgroundColor: '#171819' }}>
            <div className='row footer justify-content-around p-5'>
                <div className='col-md-4 col-sm-10 mt-3' style={style}>

                    <ul style={style}>
                        <li>Home</li>
                        <li>about us</li>
                        <li> classes</li>
                        <li>schedules</li>
                        <li>contact</li>

                    </ul>
                </div>

                <div className='col-md-4 col-sm-10 mt-3' style={style}>

                    <ul style={style}>
                        <li>experts info</li>
                        <li>guidencs</li>
                        <li> exercise</li>
                        <li>persionality development</li>
                        <li>yoga</li>

                    </ul>
                </div>

                <div className='col-md-4 col-sm-10 mt-3' style={style}>

                    <ul style={style}>
                        <li><i class="fa-brands fa-facebook f"></i></li>
                        <li><i class="fa-brands fa-x-twitter t"></i></li>
                        <li><i class="fa-brands fa-instagram i"></i></li>
                        <li><i class="fa-brands fa-linkedin l"></i></li>

                    </ul>
                </div>
               
            </div>
            <div className='col-12 text-center' >
                <span style={{ color: 'green'}}>copyright <i class="fa fa-copyright" aria-hidden="true"></i> ❤️ Harikesh Maurya 2023  ❤️</span>
            </div>
        </div>
    )
}

export default Footer;