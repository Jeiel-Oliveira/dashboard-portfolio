import React from 'react'

import { Return } from './styled'
import { Icon } from 'semantic-ui-react'

function ReturnLink() {
  return <Return className="mb-3" onClick={() => window.history.back()}><Icon name="angle left" size="big" /></Return>
}

export default ReturnLink
