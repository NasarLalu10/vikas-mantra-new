import React from 'react'
import { useRouter } from 'next/router'
import Button from 'react-bootstrap/Button'
import styles from './style.module.css'
import Link from 'next/link'
import MobileNav from './MobileNav'

const Nav = () => {
  const { asPath } = useRouter()

  var pageName = asPath.replace('/', '')

  return (
    <>
      <header className={styles.homeheader + ' ' + pageName}>
        <nav className={styles.navTransparent + ' navbar-expand-lg navbar'}>
          <div className='container'>
            <a className={styles.mainLogo + ' ' + 'navbar-brand'} href='#'>
              {pageName === 'home' ? (
                <img src='/assets/vmps-white-logo.png' alt='image' />
              ) : (
                <img src='/assets/vmps-color.png' alt='image' />
              )}
            </a>

            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                <Button className={styles.firstbtn}>70924 50450</Button>
                <Button className={styles.secondtbtn}>Enroll</Button>
              </ul>
            </div>
          </div>
        </nav>

        <nav
          className={styles.navTransparent + ' ' + 'navbar navbar-expand-lg'}
        >
          <div className='container'>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div
              className='collapse navbar-collapse desktop-menu'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav mb-2 mb-lg-0'>
                <li className='nav-item active'>
                  <Link href='/home' legacyBehavior>
                    <a className='nav-link' aria-current='page'>
                      Home
                    </a>
                  </Link>
                </li>

                <li className='nav-item dropdown'>
                  <Link href='/about' legacyBehavior>
                    <a
                      className='nav-link dropdown-toggle'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      About
                    </a>
                  </Link>

                  <ul className='dropdown-menu'>
                    <li>
                      <Link href='/about' legacyBehavior>
                        <a className='dropdown-item'>About Vikas Mantra</a>
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>

                    <li>
                      <Link href='/about/vision-and-philosophy' legacyBehavior>
                        <a className='dropdown-item'>Our Vision & Philosophy</a>
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>

                    <li>
                      <Link href='/about/message-from-chairman' legacyBehavior>
                        <a className='dropdown-item'>Chairman’s Message</a>
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>

                    <li>
                      <Link href='/about/message-from-principal' legacyBehavior>
                        <a className='dropdown-item'>Principal’s Message</a>
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>

                    <li>
                      <Link href='/about/our-team' legacyBehavior>
                        <a className='dropdown-item'>Our Team</a>
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>

                    <li>
                      <Link href='/about/blog' legacyBehavior>
                        <a className='dropdown-item'>Blog</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className='nav-item'>
                  <Link legacyBehavior href='/admissions'>
                    <a className='nav-link'>Admissions</a>
                  </Link>
                </li>

                <li className='nav-item dropdown'>
                  <Link href='/campus' legacyBehavior>
                    <a
                      className='nav-link dropdown-toggle'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Campus
                    </a>
                  </Link>
                  <ul className='dropdown-menu'>
                    <li>
                      <Link href='/campus/classrooms' legacyBehavior>
                        <a className='dropdown-item'>Classrooms</a>
                      </Link>
                    </li>

                    <li>
                      <hr className='dropdown-divider' />
                    </li>
                    <li>
                      <Link
                        href='/campus/facilities-and-Infrastructure'
                        legacyBehavior
                      >
                        <a className='dropdown-item'>
                          Facilities and Infrastructure
                        </a>
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>

                    <li>
                      <Link href='/campus/laboratory' legacyBehavior>
                        <a className='dropdown-item'>Laboratories</a>
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>

                    <li>
                      <Link href='/campus/speciality-room' legacyBehavior>
                        <a className='dropdown-item'>Speciality Rooms</a>
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>

                    <li>
                      <Link href='/campus/library' legacyBehavior>
                        <a className='dropdown-item'>Library</a>
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>

                    <li>
                      <Link href='/campus/technology' legacyBehavior>
                        <a className='dropdown-item'>Technology</a>
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>

                    <li>
                      <Link href='/campus/security' legacyBehavior>
                        <a className='dropdown-item'>Security</a>
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>

                    <li>
                      <Link href='/campus/healthcare' legacyBehavior>
                        <a className='dropdown-item'>Healthcare</a>
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>

                    <li>
                      <Link href='/campus/transportation' legacyBehavior>
                        <a className='dropdown-item'>Transportation</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className='nav-item dropdown'>
                  <Link href='/learning' legacyBehavior>
                    <a
                      className='nav-link dropdown-toggle'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Learning
                    </a>
                  </Link>

                  <ul className='dropdown-menu'>
                    <li>
                      <Link href='/learning' legacyBehavior>
                        <a className='dropdown-item'>
                          Why VIKAS MANTRA PUBLIC SCHOOL
                        </a>
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>

                    <li>
                      <Link href='/learning/curriculum' legacyBehavior>
                        <a className='dropdown-item'>Curriculum</a>
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>

                    <li>
                      <Link href='#' legacyBehavior>
                        <a className='dropdown-item'>Pre-Primary Years</a>
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>

                    <li>
                      <Link href='#' legacyBehavior>
                        <a className='dropdown-item'>Curriculum Framework</a>
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>

                    <li>
                      <Link legacyBehavior href='/learning/online-classes'>
                        <a className='dropdown-item'>Online Classes</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className='nav-item'>
                  <Link legacyBehavior href='/enquiry-form'>
                    <a className='nav-link'>Enquiry Form</a>
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link legacyBehavior href='/mandatory-public-disclosures'>
                    <a className='nav-link'>Mandatory Public Disclosures</a>
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link legacyBehavior href='/events'>
                    <a className='nav-link'>Events</a>
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link legacyBehavior href='/contact'>
                    <a className='nav-link'>Contact Us</a>
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link legacyBehavior href='/careers'>
                    <a className='nav-link'>Career</a>
                  </Link>
                </li>
              </ul>
            </div>

            <MobileNav />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav
