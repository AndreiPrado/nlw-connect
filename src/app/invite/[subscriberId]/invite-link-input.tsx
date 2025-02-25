'use client'

import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Copy, Link } from 'lucide-react'
import { useState } from 'react'
import { Tooltip } from './tooltip'

interface InviteLinkInputProps {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  const [tooltipClass, setTooltipClass] = useState('')

  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)

    setTooltipClass('bottom-6 visible')

    setTimeout(() => {
      setTooltipClass('')
    }, 4000)
  }

  return (
    <div>
      <InputRoot>
        <InputIcon>
          <Link className="size-5" />
        </InputIcon>
        <InputField readOnly defaultValue={inviteLink} />

        <IconButton className="-mr-2" onClick={copyInviteLink}>
          <Copy className="size-5" />
        </IconButton>
      </InputRoot>

      <Tooltip tooltipClass={tooltipClass} />
    </div>
  )
}
