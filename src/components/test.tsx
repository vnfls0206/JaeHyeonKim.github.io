import React from "react"

export interface ITestProps {
  //children?: React.ReactNode,
}

const Test = (
  {}: ITestProps
) => {

  return (
    <h1 className={'bg-red-100'}>
      {'Test Text'}
    </h1>
  )
}

export default Test