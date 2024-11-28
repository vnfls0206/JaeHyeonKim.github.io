import React from "react"
import { Card, CardActionArea, CardContent } from "@mui/material"
import Typography from "@mui/material/Typography"
import { navigate, withPrefix } from "gatsby"

export interface ICardProps {
  //children?: React.ReactNode,
  title: string
  link: string
  image: string
}

const PostCard = ({ title, link, image }: ICardProps) => {
  const onNav = (link: string) => {
    navigate(`${link}`, {})
  }

  return (
    <Card sx={{ boxShadow: 1, minWidth: 310, maxHeight: 250}} className={'bg-gray-50'} key={link} variant="outlined">
      <CardActionArea onClick={onNav.bind(this, link)}>
        <CardContent>
          <div className={"text-[20px] font-[600] text-black/60"}>{title}</div>
          <div className={'flex justify-center shadow-md max-w-[300px] h-[160px] w-full my-2 bg-white'}>
            <img
              alt={"react-icon"}
              src={withPrefix(image)}
            />
          </div>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {link}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PostCard
