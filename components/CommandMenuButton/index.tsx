import * as Tooltip from "@radix-ui/react-tooltip"
import { styled } from 'stitches.config'
import * as util from '@styles/util'

const Shortcut = styled('div', {
  background: '$numberBackground',
  borderRadius: '$2',
  padding: '0 4px',
  justifyContent: 'center',
  display: 'none',
  flexDirection: 'column',
  alignItems: 'center',
  '@xs': {
    display: 'flex',
  },
})

export default function CommandMenuButton({
  setOpen
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <>

      <Tooltip.Provider delayDuration={200} skipDelayDuration={300}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              aria-label="Open Command Menu"
              onClick={() => setOpen(true)}
              className={util.CMDKButton()}
            >
              ⌘
            </button>
          </Tooltip.Trigger>

          <Tooltip.Content className={util.tooltip()}>
            <span className={util.shortcutLabel()}>Press</span>
            <Shortcut>
              <span className={util.shortcutText()}>⌘ + K</span>
            </Shortcut>
            <Tooltip.Arrow className={util.arrow()} />
          </Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
    </>
  )
}