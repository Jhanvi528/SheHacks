import React from 'react'
import vocalforlocal from '../images/vocalforlocal.png'
import { useTranslation, initReactI18next } from 'react-i18next'

function AboutUs () {
  const { t } = useTranslation()
  return (
    <div id='aboutUs-section'>
      <div>
        <h1 className='about-us-title'>
          <span style={{ color: '#151965' }}>{t('vocalfor')} </span>
          <span style={{ color: '#E43F5A' }}>{t('LOCAL')}</span>
        </h1>
        <div className='about-us-content'>
          <p>{t('p1')}</p>
          <p>{t('p2')}</p>
          <p>{t('p3')}</p>
        </div>
      </div>
      <div>
        <img src={vocalforlocal}></img>
      </div>
    </div>
  )
}

export default AboutUs
