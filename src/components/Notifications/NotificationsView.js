import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Notification, CloseButton } from '~/components/Notifications/Notifications.shards'

export default () => (
  <Notification>
    <ToastContainer
      closeButton={<CloseButton />}
      draggable={false}
      hideProgressBar
      autoClose={3000}
    />
  </Notification>
)
