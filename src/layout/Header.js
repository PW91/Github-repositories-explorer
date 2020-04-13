import React from 'react'
import { useTranslation } from 'react-i18next'
import { BigHeading } from '~/components/Typography'
import { Header } from '~/layout/Layout.shards'

export default () => {
  const { t } = useTranslation('common')
  return (
    <Header>
      <BigHeading>{t('header.title')}</BigHeading>
    </Header>
  )
}
