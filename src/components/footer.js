import React from 'react'
import Link from 'gatsby-link'

import styles from "../styles/FooterStyles.module.css";

import facebook from '../img/facebook-logo.png'
import twitter from '../img/twitter-logo-silhouette.png'
import linkedin from '../img/linkedin-logo.png'

const Strip = () => {
  return (
    <div className={styles.bottomStrip}>
      <div>DCommons, Inc. © 2018</div>
      <div>Privacy Policy</div>
      <div>Terms of Service</div>
    </div>
  )
}

const SocialLinks = (props) => {
  return (
    <div className={styles.socialLinksContainer}>
      <a className={styles.socialLink} href="https://www.facebook.com/univjobs/"><img src={facebook}></img></a>
      <a className={styles.socialLink} href="https://twitter.com/univjobsapp"><img src={twitter}></img></a>
      <a className={styles.socialLink} href="https://www.linkedin.com/company/univjobs/?originalSubdomain=ca"><img src={linkedin}></img></a>
    </div>
  )
}

const FooterMenuSection = (props) => {
  return (
    <div className={styles.menuSection}>
      <div className={styles.menuHeader}>{props.title}</div>
      {
        props.links.map((link, index) => {
          return <div className={styles.menuItem} key={index}>{link.name}</div>
        })
      }
    </div>
  )
}

const Footer = ({ siteTitle }) => (
  <div className={styles.container}>
    <div className={styles.linksContainer}>
      <FooterMenuSection title={'Company'} links={
        [
          { name: 'About', url: '/about' },
          { name: 'Contact Us', url: '/contact'},
          { name: 'Why Univjobs', url: '/why-univjobs' }
        ]
      }/>
      <FooterMenuSection title={'Product'} links={
        [
          { name: 'Blog', url: '/blog' },
          { name: 'Pricing', url: '/pricing'}
        ]
      }/>
      <FooterMenuSection title={'For employers'} links={
        [
          { name: 'Register', url: 'https://app.univjobs.ca/register/employer' },
          { name: 'How to be successful on Univjobs', url: '/blog/how-to-be-most-successful-on-univjobs'}
        ]
      }/>
      <SocialLinks/>
    </div>
    <Strip/>
  </div>
)

export default Footer
