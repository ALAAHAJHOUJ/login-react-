import React from 'react'
import './cont.css'
import Head from './head'
import Form from './form'
import Last from './last'
import Exemple from './exemple'


function Container() {
  const arr=[1,2,3,4];
  return (
     <div id='container'>
       <Head></Head>
       <Form></Form>
       <Last></Last>
       <Exemple propr={arr}></Exemple>
     </div>
  )
}

export default Container