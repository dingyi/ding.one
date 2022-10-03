import React from "react"
import Link from "next/link"
import { styled } from 'stitches.config'
import { Bookmark } from 'lib/types'

const BookmarkTile = ({ title, link, tags }: Partial<Bookmark>) => {
  return (
    <div>
        <a href={link}>
          <h3>
            {title}
          </h3>
        <div>
          {tags}
        </div>
        </a>
    </div>
  )
}

export default BookmarkTile