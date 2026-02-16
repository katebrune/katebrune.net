import React, { FunctionComponent, ReactNode } from 'react'
import { ScrollArea } from '@katebrune/ui/scroll-area'
import cx from 'classnames'

interface CodeProperties {
  children?: ReactNode
  className?: string
}

export const Code: FunctionComponent<CodeProperties> = ({
  children,
  className,
}) => {
  function toCodeText(node: ReactNode): string {
    if (typeof node === 'string') return node
    if (typeof node === 'number') return String(node)
    if (Array.isArray(node)) return node.map(toCodeText).join('')
    if (React.isValidElement(node)) return toCodeText(node.props.children)
    return ''
  }

  const value = toCodeText(children).trim()

  return (
    <pre
      className={cx(
        'my-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 p-5 text-slate-100 shadow-sm dark:border-zinc-700 dark:bg-zinc-950',
        className,
      )}
    >
      <ScrollArea>
        <code className="block w-max min-w-full whitespace-pre font-mono text-base leading-7">
          {value}
        </code>
      </ScrollArea>
    </pre>
  )
}
