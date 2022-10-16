import { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"
import GridLink from "@components/GridLink"

export default function MyCal() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      cal("ui", { styles: { branding: { brandColor: "#000000" } } })
    })()
  }, [])
  return (
    <GridLink
      label="Book"
      href=""
      dataAttr
    />
  )
}
