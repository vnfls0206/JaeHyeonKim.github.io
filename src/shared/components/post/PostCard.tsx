import React from "react"
import { Card, CardActionArea, CardContent } from "@mui/material"
import Typography from "@mui/material/Typography"
import { navigate } from "gatsby"

export interface ICardProps {
    //children?: React.ReactNode,
    title: string,
    link: string,
}

const PostCard = (
    {
        title,
        link
    }: ICardProps
) => {

    const onNav = (link: string) => {
        navigate(`${link}`, {})
    }

    return (
        <Card sx={{ boxShadow: 1, minWidth: 275 }} key={link} variant="outlined">
            <CardActionArea onClick={onNav.bind(this, link)}>
                <CardContent>
                    <div className={'text-[20px] font-[500] text-black/80'}>
                        {title}
                    </div>
                    <Typography gutterBottom variant="h6" component="div">
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {link}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default PostCard;