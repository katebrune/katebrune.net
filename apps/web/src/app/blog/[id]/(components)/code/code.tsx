import React, { FunctionComponent, ReactNode } from 'react'
import { ScrollArea } from '@katebrune/ui/scroll-area'

interface CodeProperties {
  children?: ReactNode
}

export const Code: FunctionComponent<CodeProperties> = ({ children }) => {
  const value = typeof children === 'string' ? children.trim() : ''

  return (
    <pre className="my-4 rounded-xl bg-slate-900 p-4 text-slate-100">
      <ScrollArea>
        <code className="block whitespace-pre">{value}</code>
      </ScrollArea>
    </pre>
  )
}
