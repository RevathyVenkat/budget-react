import React from 'react'
import { Header } from 'semantic-ui-react'

function MainHeader({title,header='h1'}) {
  return (
    <Header as= {header} >{title}</Header>
    )
}

export default MainHeader