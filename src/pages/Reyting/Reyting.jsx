import React from 'react';
import { useTranslation } from 'react-i18next';

const Reyting = () => {
  const { t } = useTranslation()
  return (
    <React.Fragment>
      <div className="container">
        <h1 className='box__title'>{t("REYTINGS")}</h1>
        <div className="reytings">

        </div>
      </div>
    </React.Fragment>
  )
}

export default Reyting;