import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'

const Library = () => {
    return (
        <>
            <section className='pt-5'>

                <div className='container position-relative'>

                    <div className='row'>

                        <div className='col-md-12'>
                            <FontAwesomeIcon icon={faHouse} className={styles.homeIcon} />
                            |
                            <a className='mx-2'>Campus</a>
                        </div>


                    </div>

                    <div className='row py-5'>

                        <h2 className={styles.headingPdng}>Library</h2>
                        <img src='/assets/vectors/Vector.png' alt ="image" className={styles.vectorImg1} />

                    </div>

                </div>

            </section>

            <section className='greybg py-5'>

                <div className="container">

                    <div className='row'>

                        <div className='col-md-5 position-relative'>

                            <h3>The library is at the heart of
                                learning, research and knowledge
                                assimilation
                            </h3>

                            <hr className={styles.hrLine} />

                            <p className='pt-3'>at VIKAS MANTRA PUBLIC SCHOOL. Its close proximity to
                                classrooms and visually appealing design makes it a virtual extension of
                                the classroom environment. The library aims to instil a love for reading
                                by providing students with the required depth and breadth of classical
                                and modern-day literature.
                            </p>

                            <p>Within the VIKAS MANTRA PUBLIC SCHOOL has incorporated a number of specialty
                                rooms to strengthen and support core academic learning and co-curricular
                                programmes.campus, the library is a space where students can get away from
                                the rattle and hum of urban living and immerse themselves in a topic or
                                subject of their choice. Besides traditional paper books, the VIKAS MANTRA
                                PUBLIC SCHOOL library is equipped with e-books, videos and electronic
                                databases for referencing and research. The school houses separate Junior
                                and Senior libraries in order to provide relevant and age-appropriate
                                reading resources to its respective target audience.
                            </p>

                        </div>

                        <div className='col-md-7 position-relative'>

                            <img src='/assets/campus/library.png' alt ="image" className={styles.libraryImg} />

                            <img src='/assets/vectors/Vector5.png' alt ="image" className={styles.vectorImg5} />

                        </div>

                    </div>

                    <div className={styles.sectionPdng + ' row'}>

                        <div className='col-md-8'>

                            <h3>The libraries at VIKAS MANTRA PUBLIC SCHOOL offer reading resources such as:</h3>

                            <hr className={styles.hrLine} />

                        </div>

                        <div className='col-md-4'>
                            <div></div>
                        </div>

                        <div className='col-md-8 position-relative'>

                            <ul>

                                <li className='pt-3'>A wide spectrum of books, magazines, periodicals, and dailies which support the core learning curriculum.</li>

                                <li className='pt-3'>Abridged novels, children’s story books, early reading tools in the Junior Library.</li>

                                <li className='pt-3'>Digital resources such as e-books, videos, online databases and other aids to research.</li>

                                <li className='pt-3'>Literature in multiple languages, sourced from around the globe.</li>

                                <li className='pt-3'>Departmental sections which stock subject-specific resources.</li>

                                <li className='pt-3'>Computers which allow students to access online publications and journals.</li>

                            </ul>

                            <img src='/assets/vectors/Vector10.png' alt ="image" className={styles.vectorImg10} />

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Library;