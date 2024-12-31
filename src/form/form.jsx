import React from 'react'
import './form.css'
function Form() {
  return (
    <div id='contform'>
        <form action="" method="get">
            <input type="text" placeholder='Nom' className='inp' />
            <input type="password" name="" id="" placeholder='Prénom' className='inp'/>
            <div id="lien">
              <a id="lien3" href="">Forget Password?</a>
              <div className='contremember'>
               <label htmlFor="rem">Remember me</label>
               <input type="checkbox" name="" id="rem" />
              </div>
             </div>
            <div id="btn"><input type="submit" value="Envoi" id="envoi" /></div>
        </form>
    </div>
  )
}

export default Form