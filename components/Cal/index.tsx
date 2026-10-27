import { useEffect } from "react"
import GridLink from "@components/GridLink"

export default function MyCal() {
  useEffect(() => {
    (async function () {
      // @calcom/embed-react@1.5.1 reads React 18 internals at import time and
      // crashes the Next 15 / React 19 production build. It is only used here.
      const { getCalApi } = await import("@calcom/embed-react")
      const cal = await getCalApi()
      cal("ui", { styles: { branding: { brandColor: "#000000" } } })
    })()
  }, [])
  return (
    <GridLink
      label="Book"
      href="#!"
      dataAttr
    />
  )
}
