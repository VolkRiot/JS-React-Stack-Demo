// @flow

import React from 'react'

type Prop = {
  message: string,
}

const Message = ({ message }: Prop) =>
  <p>{message}</p>

export default Message
