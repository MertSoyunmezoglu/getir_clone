import React from 'react'

export default function WhatEat({restaurant: { whatEat}}) {
  return (
    <div>
    <img src={whatEat} alt="" />
    </div>
  )
}
