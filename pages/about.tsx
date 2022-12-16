import { NextSeo } from 'next-seo'
import Layout from "@components/Layouts/Global"
import ExpTile from "@components/Tiles/ExpTile"
import PageTile from "@components/PageTitle"
import * as util from '@styles/util'
import * as link from '@styles/link'

export default function About() {
  return (
    <>
      <Layout>
        <NextSeo title="About" description="Who am I and what I do." />
        <PageTile>About</PageTile>
        <div className={util.inset()}>
          <p className={util.description()}>
            A product designer & design-focused engineer based in Shenzhen, China. With 10+ years of experience in digital design, front-end development and team management. More resume details on <a target="_blank" href="https://read.cv/dingyi" rel="noopener noreferrer">read.cv</a>. I'm looking for a new job, if you are interested, ping me.</p>
          <div className={util.divider()}></div>
          <div>
            <h2>Career</h2>
            <ExpTile
              date="2022–2022.10"
              title="Product Design at Mask Network"
              url={"https://mask.io"}
              content={
                "Working on some new projects including apps and branding with a tons of talent web3 guys."
              }
            />
            <ExpTile
              date="2021-2022"
              title="Creative Director at Provice"
              url={"https://privoce.com"}
              content={
                "A web3 company working on discord like social products, I helped them design all web and apps."
              }
            />
            <ExpTile
              date="2019–2021"
              title="Design Manager at OPPO"
              url={"https://oppo.com"}
              content={
                "Collaborated with the design team and engineering team for in-house projects like design system, design tooling, Figma plugins."
              }
            />
            <ExpTile
              date="2016-2019"
              title="Freelancer at DEX Group"
              url={"https://dex.group"}
              content={
                "A tiny digital design agency works closely with clients, design products for startups and founders. It is also an online design community, runs events, design trips and courses."
              }
            />
            <ExpTile
              date="2012–2016"
              title="Design Director at 36Kr"
              url={"https://36kr.com"}
              content={
                "I designed 36Kr websites, Next(like Product Hunt), Kr Space, and many other things. I aslo managed a small product design team around 10+ people."
              }
            />
            <ExpTile
              date="2011–2012"
              title="Principal Designer at QFPay"
              url={"https://sourcebits.com"}
              content={
                "I helped them design almost everything as the first designer at this early stage startup. It's like Square of China."
              }
            />
            <ExpTile
              date="2010–2011"
              title="UI Designer at Sourcebits"
              url={"https://sourcebits.com"}
              content={
                "At this India-based global design agency, I designed visual interfaces for web, iPhone and Android platforms."
              }
            />
          </div>
          <div className={util.divider()}></div>
          <div className={util.read()}>
            <h2>Website</h2>
            <p>
              Powered by{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={link.externalLink()}
              >
                Next.js
              </a>{" "}
              and deployed on{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className={link.externalLink()}
              >
                Vercel
              </a>
              . Data stored in{" "}
              <a
                href="http://notion.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={link.externalLink()}
              >
                Notion
              </a>,{" "}
              <a
                href="https://raindrop.io/"
                target="_blank"
                rel="noopener noreferrer"
                className={link.externalLink()}
              >
                Raindrop
              </a>{" "} and JSON.{" "}
              I prefer {" "}
              <a
                href="https://stitches.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className={link.externalLink()}
              >
                Stitches
              </a>{" "}
              as my CSS Framework, and Colors System based on{" "}
              <a
                href="https://www.radix-ui.com/docs/colors/getting-started/installation"
                target="_blank"
                rel="noopener noreferrer"
                className={link.externalLink()}
              >
                Radix Colors
              </a>,{" "}
              <a
                href="https://cmdk.paco.me/"
                target="_blank"
                rel="noopener noreferrer"
                className={link.externalLink()}
              >
                ⌘K
              </a>{" "}
              is used for Command Menu.{" "}
            </p>
            <p>
              FYI: this site is NOT done yet, tons of stuff and data need to polish.
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}