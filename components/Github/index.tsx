import GitHubCalendar from 'react-github-calendar'
import GithubLarge from "@ui/Icons/githubLarge"
import * as util from '@styles/util'

export default function GitHub() {

  const selectLastMonth = (contributions: any[]) => {
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth()
    const shownMonths = 6

    return contributions.filter(day => {
      const date = new Date(day.date)
      const monthOfDay = date.getMonth()

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      )
    })
  }

  return (
    <>
      <div className={util.roundIcon({
        css: {
          background: 'rgb(145 145 145 / 8%)',
          border: '1px solid rgb(227 227 227 / 8%)',
          marginBottom: '$3',
        }
      })}>
        <GithubLarge />
      </div>
      <GitHubCalendar
        username="dingyi"
        transformData={selectLastMonth}
        hideTotalCount
        hideColorLegend
        weekStart="1"
        //hideMonthLabels
      />
    </>
  )
}