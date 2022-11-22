import React, { useEffect, useRef } from 'react'
import styles from './style.module.css'
import Link from 'next/link'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { learning } from '../../data/learning'

function Learning() {
  const pageTitle = 'Learning'
  const myRef = useRef(null)
  const executeScroll = () =>
    myRef.current.scrollIntoView({
      behavior: 'smooth',
    })

  function progressClick(e) {
    const progress = document.getElementById('progress')
    progress.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    })
  }

  useEffect(() => {
    //
    const progress = document.getElementById('progress')
    let learningDivs = document.querySelectorAll('.learningDivs')
    let listOfLearningDivs = progress.querySelectorAll('.node')
    console.log(listOfLearningDivs)
    window.addEventListener('scroll', Scroll, false)

    function Scroll() {
      learningDivs.forEach((lds, index) => {
        let sectionTop = lds.getBoundingClientRect().top
        var ids = lds.getAttribute('id')
        var id = document.getElementById(ids + '-li')

        if (id.nextElementSibling !== null && sectionTop < 0) {
          id.nextElementSibling.children[0].classList.add('green')
          id.nextElementSibling.children[0].classList.remove('grey')
          id.classList.add('green')
          id.classList.remove('grey')
        } else if (id.nextElementSibling !== null && sectionTop > 0) {
          id.nextElementSibling.children[0].classList.remove('green')
          id.nextElementSibling.children[0].classList.add('grey')
          id.classList.remove('green')
          id.classList.add('grey')
        } else {
        }
      })
    }
    //
  }, [])

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className={'pt60' + ' ' + 'pb60'}>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-5 col-lg-6 col-md-7 col-sm-12'>
              <h2>Why VIKAS MANTRA PUBLIC SCHOOL</h2>
            </div>
          </div>
        </div>
      </section>
      <section
        className={
          'whitebg' +
          ' ' +
          'pt60' +
          ' ' +
          'pb60' +
          ' ' +
          'bglogo VectorDot VectorSpiralCenter'
        }
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              {learning.map((item, index) => (
                <div
                  className='mb-5 learningDivs'
                  ref={myRef}
                  id={item.id}
                  key={index}
                >
                  <h4 className='ulineRed'>{item.title}</h4>
                  <p className='pt-4'>{item.desc}</p>
                </div>
              ))}
            </div>

            <div
              className={'col-md-6 learningLogo' + ' ' + styles.vectorSpiral}
            >
              <div className='imgUp imgBgColor pastelLightGreen'>
                <img
                  src='/assets/banners/school-building.png'
                  alt='image'
                  className='img-fluid'
                />
              </div>

              <div className={'sticky-sidebar' + ' ' + 'pt60'}>
                <ul id='progress'>
                  <li
                    id='holistic-approach-li'
                    className={'node' + ' ' + 'green'}
                  >
                    <Link
                      href='#holistic-approach'
                      legacyBehavior
                      onClick={executeScroll}
                    >
                      <a className='aTag'>
                        <p> Holistic Approach</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li id='local-app-li' className={'node' + ' ' + 'grey'}>
                    <Link legacyBehavior href='#local-app'>
                      <a className='aTag' onClick={(e) => progressClick(e)}>
                        <p>Global Outlook, Local Application</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li className={'node' + ' ' + 'grey'} id='recognizing-li'>
                    <Link legacyBehavior href='#recognizing'>
                      <a className='aTag' onClick={(e) => progressClick(e)}>
                        <p>Recognizing That Every Child is Unique</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li className={'node' + ' ' + 'grey'} id='century-li'>
                    <Link legacyBehavior href='#century'>
                      <a className='aTag' onClick={(e) => progressClick(e)}>
                        <p>21st Century Ready Infrastructure</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li className={'node' + ' ' + 'grey'} id='talentedFaculty-li'>
                    <Link legacyBehavior href='#talentedFaculty'>
                      <a
                        className='aTag activatedATag'
                        onClick={(e) => progressClick(e)}
                      >
                        <p>Talented Faculty</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li className={'node' + ' ' + 'grey'} id='richCurriculum-li'>
                    <Link legacyBehavior href='#richCurriculum'>
                      <a className='aTag' onClick={(e) => progressClick(e)}>
                        <p>Rich Curriculum</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li className={'node' + ' ' + 'grey'} id='windowWorld-li'>
                    <Link legacyBehavior href='#windowWorld'>
                      <a
                        className='aTag'
                        href='#'
                        onClick={(e) => progressClick(e)}
                      >
                        <p>Window to the World</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li className={'node' + ' ' + 'grey'} id='wirelessWorld-li'>
                    <Link legacyBehavior href='#wirelessWorld'>
                      <a className='aTag' onClick={(e) => progressClick(e)}>
                        <p>Technologically Wired for a Wireless World</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className={'divider' + ' ' + 'grey'}></div>
                  </li>

                  <li className={'node' + ' ' + 'grey'} id='smorgasbord-li'>
                    <Link legacyBehavior href='#smorgasbord'>
                      <a className='aTag' onClick={(e) => progressClick(e)}>
                        <p>A Smorgasbord of Co-Curricular Choices</p>
                      </a>
                    </Link>
                  </li>
                </ul>
                <input
                  type='button'
                  value='Next'
                  id='next'
                  className='d-none'
                />
                <input
                  type='button'
                  value='Clear'
                  id='clear'
                  className='d-none'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Learning
