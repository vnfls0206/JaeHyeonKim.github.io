import React from "react"
import { withPrefix } from "gatsby"

export interface IPostImageProps {
  //children?: React.ReactNode,
  src: string,

}

const PostImage = (
  {
    src
  }: IPostImageProps
) => {

  return (
    <img
      alt={"내부 이미지 경로 URL"}
      className={"w-full"}
      src={withPrefix(src)}
    />
  )
}

export default PostImage