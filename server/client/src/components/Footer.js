import React from 'react'
import { useTranslation, initReactI18next } from 'react-i18next'

import '../index.css'
var date = new Date().getFullYear()

function Footer () {
  const { t } = useTranslation()

  return (
    <footer id='contact-section'>
      <div className='contact-us-main'>
        <h2 style={{ paddingTop: '2%' }}>{t('contactus')}</h2>
        <div>
          <div className='contact-us-icons'>
            <img src='https://img.icons8.com/ios-glyphs/30/000000/address.png' />
            {t('address')}: Dilli Haat, Safdarjung Enclave, Delhi
          </div>
          <div className='contact-us-icons'>
            <img src='https://img.icons8.com/ios-glyphs/30/000000/phone--v1.png' />
          {t('Phone')} : +123 456 789
          </div>
          <div className='contact-us-icons'>
            <img
              style={{ flex: 1, width: 50, height: 50, resizeMode: 'contain' }}
              src='https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-email-email-flatart-icons-outline-flatarticons-1.png'
            />
            {t('Email')}: ShopEasy@gmail.org
          </div>
        </div>
        <h5 style={{ color: 'gray' }}>{t('reachus')}</h5>
        <div className='reachUs'>
          <a href='https://www.facebook.com/'>
            <img src='https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png' />
          </a>
          <a href='https://www.instagram.com/'>
            <img src='https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png' />
          </a>
          <a href='https://www.youtube.com/'>
            <img src='https://img.icons8.com/ios-glyphs/30/000000/youtube-play.png' />
          </a>
        </div>
        <p>{t('Copyright')} © {date}</p>
      </div>
    </footer>
  )
}
export default Footer
