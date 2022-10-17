import React from 'react';
import { useTranslation } from 'react-i18next';

const Photo = () => {
  const { t } = useTranslation()
  return (
    <React.Fragment>
      <div className="container">
        <h1 className='box__title'>{t("F_V")}</h1>
        <div className="reytings">

        </div>
      </div>
    </React.Fragment>
  )
}

export default Photo;