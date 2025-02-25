'use client'

import { twMerge } from 'tailwind-merge'

interface TooltipProps {
  tooltipClass: string
}

export function Tooltip({ tooltipClass }: TooltipProps) {
  return (
    <div
      className={twMerge(
        'z-10 fixed -bottom-40 left-5 right-5 rounded-xl bg-gray-500 border border-gray-600 p-6 md:right-auto invisible animate-bounce transition-all duration-500',
        tooltipClass
      )}
    >
      <h2 className="font-heading text-gray-300 font-semibold">
        Texto copiado com sucesso!
      </h2>
    </div>
  )
}
