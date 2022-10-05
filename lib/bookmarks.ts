import { Bookmark } from "lib/types"

const PER_PAGE = 50

export const fetchBookmarks = async (page = 0): Promise<Bookmark[]> => {

  const req = await fetch(
    `https://api.raindrop.io/rest/v1/raindrops/${process.env.RAINDROP_COLLECTION}?sort=-created&search=type:link&perpage=${PER_PAGE}&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
      },
    }
  )

  const data = await req.json()


  return data?.items.map((item: Bookmark) => ({
    _id: item._id,
    title: item.title,
    link: item.link,
    cover: item.cover,
    tags: item.tags,
    created: item.created,
    lastUpdate: item.lastUpdate
  }))

  /* if (data.items.length === PER_PAGE) {
    bookmarks.push(...await fetchBookmarks(page + 1))
  } */

}