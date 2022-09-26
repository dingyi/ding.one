import { styled } from 'stitches.config'
import styles from "./ExpTile.module.css"
import * as util from '@styles/util'

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '1rem 0',
  transition: 'background-color 0.15s ease',
  ['& span']: {
    opacity: 0,
    transition: 'opacity 0.2s ease, color 0.2s ease',
  },
  '&:hover span': {
    opacity: 1,
  },
})

export const Content = styled('p', {
  fontSize: '$2',
  lineHeight: '$2',
  color: '$content',
  marginTop: '$2',
})

export const Stack = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
})

export const Date = styled('div', {
  width: '68px',
  fontSize: '$1',
  color: '$whiteA10',
  marginTop: '1.5px',
  marginBottom: '0.5rem',
  marginRight: '2rem',
})

export default function ExpTile({ title, content, url, date }: any) {
  return (
    <Container>
      <div>
        <Date> {date}</Date>
      </div>
      <Stack>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.titleLink}
          >
            <h3 className={util.tileTitle()}>{title}</h3>
            <span
              className={util.externalIcon({
                css: {
                  marginLeft: '$2',
                }
              })}
            >↗</span>
          </a>
        ) : (
          <h3 className={util.tileTitle()}>{title}</h3>
        )}
        <Content>{content}</Content>
      </Stack>
    </Container>
  )
}