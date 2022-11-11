import { styled } from 'stitches.config'
import External from "@ui/Icons/external"
import * as util from '@styles/util'
import * as link from '@styles/link'

const Container = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '1rem 0',
  transition: 'background-color 0.15s ease',
  '& span': {
    opacity: 0,
    transition: 'opacity 0.2s ease, color 0.2s ease',
  },
  '&:hover span': {
    opacity: 1,
  },
})

const Left = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  overflow: 'visible',
})

const Content = styled('p', {
  fontSize: '$2',
  lineHeight: '$2',
  color: '$content',
  marginTop: '$2',
})

const Stack = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
})

const Date = styled('div', {
  width: '96px',
  fontSize: '$1',
  color: '$whiteA10',
  marginBottom: '0.5rem',
  marginRight: '2rem',
})

export default function ExpTile({ title, content, url, date }) {
  return (
    <Container>
      <Left>
        <Date> {date}</Date>
      </Left>
      <Stack>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={link.externalLink()}
          >
            <h3 className={util.tileTitle()}>{title}</h3>
            <span
              className={util.externalIcon({
                css: {
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  marginLeft: '$2',
                  '& svg': {
                    fill: '$content',
                  },
                }
              })}
            >
              <External />
            </span>
          </a>
        ) : (
          <h3 className={util.tileTitle()}>{title}</h3>
        )}
        <Content>{content}</Content>
      </Stack>
    </Container>
  )
}