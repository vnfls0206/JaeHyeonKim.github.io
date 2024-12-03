import React from "react"
import { Card, CardActionArea, CardContent } from "@mui/material"
import Typography from "@mui/material/Typography"
import { navigate, withPrefix } from "gatsby"

export interface ICardProps {
	//children?: React.ReactNode,
	title: string
	link: string
	image: string
	date: string
	tags: string[]
	summary?: string
}

const PostCard = ({ title, link, image, tags, date, summary }: ICardProps) => {
	const onNav = (link: string) => {
		navigate(`${link}`, {})
	}

	return (
		<Card
			sx={{ boxShadow: 1, width: 310, maxHeight: 350 }}
			className={"bg-[#caf6ff]/50"}
			key={link}
			variant="elevation"
		>
			<CardActionArea onClick={onNav.bind(this, link)}>
				<CardContent className={"px-0 py-0 h-full"}>
					<div
						className={
							"flex justify-center shadow-md w-full h-[160px] bg-white"
						}
					>
						<img alt={"react-icon"} src={withPrefix(image)} />
					</div>

					<h4 className={"px-3"}>
						<div className={"pt-5 text-[1rem] font-semibold"}>
							{title}
						</div>

						<div className={"pt-1 text-[14px] text-gray-700 h-14"}>
							{summary ?? ""}
						</div>

						<div
							className={
								"flex justify-between text-[12px] text-gray-500 pb-3"
							}
						>
							<div>{link}</div>
							<div>{date}</div>
						</div>
					</h4>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default PostCard
