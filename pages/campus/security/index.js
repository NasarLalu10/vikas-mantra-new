import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
import styles from './style.module.css'

const Security = () => {

    const pageTitle = 'Campus'

    return (
        <>

            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className='row py-5'>

                        <h2 className={styles.headingPdng}>Security</h2>

                    </div>

                </div>

            </section>

            <section className={styles.sectionPdng + ' greybg'}>

                <div className="container">

                    <div className='row'>

                        <div className='col-md-5 position-relative'>

                            <img src='/assets/vectors/Vector10.png' alt="image" className={styles.vectorImg10} />

                            <h3>Security at VIKAS MANTRA
                                PUBLIC SCHOOL</h3>

                            <hr className={styles.hrLine} />

                            <p className='pt-3'>is maintained through a combination of trained and
                                well-qualified security personnel who man various entry and exit points.
                                Strategically located CCTV cameras at various points in the campus
                                monitor and keep track of movement within the premises. Security measures
                                such as fire alarms, fire extinguishers, key card access, etc. are
                                installed as per government norms and follow best practice in security
                                management. Entry of non-authorised personnel on the campus is strictly
                                prohibited.
                            </p>

                        </div>

                        <div className='col-md-7 position-relative'>

                            <img src='/assets/campus/security.png' alt="image" className={styles.securityImg} />

                            <img src='/assets/vectors/Vector11.png' alt="image" className={styles.vectorImg11} />

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Security;