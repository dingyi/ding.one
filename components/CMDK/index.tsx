import React from 'react'
import CommandMenu from '@components/CommandMenu'
import { AnimatePresence, motion, MotionProps } from 'framer-motion'
import useOnClickOutside from 'use-onclickoutside'

function CommandWrapper(
  props: MotionProps & {
    onClick: (e: any) => any
    children: React.ReactNode
  },
) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.2 }}
      style={{
        //height: 475,
        width: 500,
        position: 'absolute',
        zIndex: '9999',
        top: 'calc(50% - 250px)',
        left: 'calc(50% - 250px)',
      }}
      {...props}
    />
  )
}

export default function CMDK() {

  const [open, setOpen] = React.useState(false)

  const ref = React.useRef(null)
  useOnClickOutside(ref, () => {
    if (open) setOpen(false)
  })

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {

    function listener(e: KeyboardEvent) {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }

    function listenerEsc(e: KeyboardEvent) {
      if (e.key === 'Escape' && open) {
        setOpen((o) => !o)
      }
    }

    document.addEventListener('keydown', listener)
    document.addEventListener('keydown', listenerEsc)

    return () => {
      document.removeEventListener('keydown', listener)
      document.removeEventListener('keydown', listenerEsc)
    }
  }, [open])

  const Close = () => {
    setOpen(!open)
  }

  return (
    <AnimatePresence
      initial={false}
      exitBeforeEnter={true}
      onExitComplete={() => null}
    >
      {open && (
        <>
          <div onClick={Close} ref={ref}>
            <CommandWrapper onClick={(e) => e.stopPropagation()}>
              <CommandMenu />
            </CommandWrapper>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}