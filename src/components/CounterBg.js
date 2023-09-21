import React from 'react'
import CounterCom from './CounterCom'
import CounterPng from "../assets/img/Countusers.png"
import CounterVen from "../assets/img/Countvenues.png"
import CounterCoa from "../assets/img/Countcoaches.png"

const CounterBg = () => {
  return (
    <>
    <section className="CounterBG">
  <div className="container">
    <div className="">
      <div className="counterGrid text-center align-items-center">
        <CounterCom image={CounterPng} text="2500" name="Users"/>
        <CounterCom image={CounterVen} text="489" name="Venues"/>
        <CounterCom image={CounterCoa} text="412" name="Coaches"/>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default CounterBg