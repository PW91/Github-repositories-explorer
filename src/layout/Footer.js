import React from 'react'
import { useTranslation } from 'react-i18next'
import { Footer } from '~/layout/Layout.shards'
import { Annotation } from '~/components/Typography/index'

export default () => {
  const { t } = useTranslation('common')
  return (
    <Footer>
      <Annotation>{t('footer.author')}</Annotation>
    </Footer>
  )
}
