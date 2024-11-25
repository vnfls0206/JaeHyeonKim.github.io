import React from "react"
import { Link } from "gatsby"

export const Header = ({ siteTitle }) => (
  <header
    className={'bg-[#464646]'}
  >
    <div className={'px-0 text-[25px] font-[600] font-sans'}>
      <div style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </div>
    </div>
  </header>
)
