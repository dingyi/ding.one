import React from "react"
import { styled } from 'stitches.config'
import * as util from '@styles/util'
import MyCal from '@components/Cal'
import GridLink from "@components/GridLink"
import CellGrid from "@components/CellGrid"
import Twitter from "@components/Twitter"
import Github from "@components/Github"
import Stats from "@components/Stats"
import Map from "@components/Map"
import Location from "@components/Location"
import NowPlaying from "@components/NowPlaying"
import Logo from "@ui/Icons/logo"
import Readcv from "@ui/Icons/readcv"
import DEX from "@ui/Icons/dex"
import Blog from "@ui/Icons/blog"
import Cal from "@ui/Icons/cal"
import Mail from "@ui/Icons/mail"

const Grid = styled('div', {
  display: 'grid',
  gridGap: '$3',
  gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
  gridAutoRows: '1fr',
  '@sm': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
  },
})

const Top = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '$3',
  textAlign: 'center',
})

const Item = styled('div', {
  borderRadius: '$6',
  padding: '$4 $3 $3 $3',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: 'rgb(1 24 22 / 80%)',
  boxShadow: 'inset 0 1px 0 var(--shadows-mint4), 0.5px 0.7px 1px hsl(0deg 0% 0% / 12%), 1.5px 2.3px 3.3px -0.7px hsl(166deg 100% 2% / 12%), 3.5px 5.3px 7.6px -1.3px hsl(173deg 100% 2% / 12%), 8.2px 12.4px 17.8px -2px hsl(154deg 100% 2% / 10%)',
  maxWidth: '100%',
  letterSpacing: '-0.025em',
  cursor: 'pointer',
  userSelect: 'none',
  transform: 'translate3d(0, 0, 0)',
  overflow: 'hidden',
  transition: 'all 0.2s ease 0s',
  '&:hover': {
    transform: 'translate3D(0,-1px,0) scale(1.02)',
    boxShadow: 'inset 0 1px 0 $mint4, 0 10px 30px rgba(0 0 0 / 60%)',
    zIndex: '$10',
  },
  variants: {
    type: {
      me: {
        '@xxs': {
          gridArea: '1 / 1 / 2 / 3',
        },
        '@xs': {
          gridArea: '1 / 1 / 2 / 3',
        },
      },
      resume: {
        '& i': {
          background: 'radial-gradient(45% 45% at 50% 50%, rgb(255 92 0 / 18%) 0%, rgb(255 121 0 / 0%) 100%)',
        }
      },
      dex: {
        '& i': {
          background: 'radial-gradient(45% 45% at 50% 50%, rgb(140 0 255 / 32%) 0%, rgb(163 0 255 / 0%) 100%)',
        }
      },
      location: {
        '& i': {
          background: 'radial-gradient(45% 45% at 50% 50%, rgb(40 80 226 / 32%) 0%, rgb(163 0 255 / 0%) 100%)',
        }
      },
      twitter: {
        '& i': {
          background: 'radial-gradient(45% 45% at 50% 50%, rgb(0 110 255 / 32%) 0%, rgb(0 174 255 / 0%) 100%)',
        }
      },
      github: {
        '& i': {
          background: 'radial-gradient(45% 45% at 50% 50%, rgb(200 200 200 / 32%) 0%, rgb(87 87 87 / 0%) 100%)',
        }
      },
      plausible: {
        '& i': {
          background: 'radial-gradient(45% 45% at 50% 50%, rgb(55 76 212 / 60%) 0%, rgb(9 21 93 / 0%) 100%)',
        }
      },
      spotify: {
        '& i': {
          background: 'radial-gradient(45% 45% at 50% 50%, rgb(0 255 117 / 18%) 0%, rgb(0 255 152 / 0%) 100%)',
        }
      },
      blog: {
        '& i': {
          background: 'radial-gradient(45% 45% at 50% 50%, rgb(255 243 0 / 18%) 0%, rgb(229 255 0 / 0%) 100%)',
        }
      },
      gmail: {
        '& i': {
          background: 'radial-gradient(45% 45% at 50% 50%, rgb(255 0 0 / 32%) 0%, rgb(255 0 120 / 0%) 100%)',
        }
      },
      cal: {
        '& i': {
          background: 'radial-gradient(45% 45% at 50% 50%, rgb(0 197 255 / 18%) 0%, rgb(0 199 255 / 0%) 100%)',
        }
      }
    },
  },
})

const Bio = styled('div', {
  padding: '0 $3',
})

export default function GridList() {
  return (
    <Grid>
      <Item type="me">
        <Top>
          <div className={util.roundIcon()}>
            <Logo />
          </div>
        </Top>
        <Bio>
          <p>
            {/* <span className="material-symbols-outlined">
              waving_hand
            </span>{"  "} */}
            A product designer & design-focused engineer with 10+ years of experience in digital design, front-end development and team management.
          </p>
        </Bio>
      </Item>
      <Item type="resume">
        <CellGrid />
        <Top>
          <div className={util.roundIcon({
            css: {
              background: 'rgb(255 130 0 / 8%)',
              border: '1px solid rgb(255 174 87 / 8%)',
            }
          })}>
            <Readcv />
          </div>
        </Top>
        <div>
          <GridLink
            href="https://read.cv/dingyi"
            label="Resumé"
            external
          />
        </div>
      </Item>
      <Item type="twitter">
        <CellGrid />
        <Top>
          <Twitter />
        </Top>
        <div>
          <GridLink
            href="https://twitter.com/dingyi"
            label="Follow"
            external
          />
        </div>
      </Item>
      <Item type="github">
        <CellGrid />
        <Top>
          <Github />
        </Top>
        <div>
          <GridLink
            href="https://github.com/dingyi"
            label="Follow"
            external
          />
        </div>
      </Item>
      <Item type="plausible">
        <CellGrid />
        <Top>
          <Stats />
        </Top>
        <div>
          <GridLink
            href="https://plausible.io/ding.one/"
            label="Stats"
            external
          />
        </div>
      </Item>
      <Item type="spotify">
        <CellGrid />
        <Top>
          <NowPlaying />
        </Top>
        <div>
          <GridLink
            href="https://open.spotify.com/user/dingyi"
            label="Listen"
            external
          />
        </div>
      </Item>
      <Item type="location">
        <Map />
        <CellGrid />
        <Top>
          <Location />
        </Top>
        <GridLink
          href="https://goo.gl/maps/ZNNaRiXLqjWX2dWG9"
          label="Location"
          external
        />
      </Item>
      <Item type="dex">
        <CellGrid />
        <Top>
          <div className={util.roundIcon({
            css: {
              background: 'rgb(113 0 255 / 8%)',
              border: '1px solid rgb(158 87 255 / 8%)',
            }
          })}>
            <DEX />
          </div>
        </Top>
        <GridLink
          href="https://dex.zhubai.love/"
          label="Subscribe"
          external
        />
      </Item>
      <Item type="blog">
        <CellGrid />
        <Top>
          <div className={util.roundIcon({
            css: {
              background: 'rgb(149 152 0 / 8%)',
              border: '1px solid rgb(238 255 60 / 8%)',
            }
          })}>
            <Blog />
          </div>
        </Top>
        <div>
          <GridLink
            href="/posts"
            label="Read"
          />
        </div>
      </Item>
      <Item type="cal">
        <CellGrid />
        <Top>
          <div className={util.roundIcon({
            css: {
              background: 'rgb(0 187 182 / 8%)',
              border: '1px solid rgb(66 255 253 / 8%)',
            }
          })}>
            <Cal />
          </div>
        </Top>
        <div>
          <MyCal />
        </div>
      </Item>
      <Item type="gmail">
        <CellGrid />
        <Top>
          <div className={util.roundIcon({
            css: {
              background: 'rgb(255 0 0 / 8%)',
              border: '1px solid rgb(255 86 86 / 8%)',
            }
          })}>
            <Mail />
          </div>
        </Top>
        <div>
          <GridLink
            href="mailto:hi@ding.one"
            label="Mail"
            external
          />
        </div>
      </Item>
    </Grid>
  )
}