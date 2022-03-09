import cn from 'classnames'
import { Icon } from 'components/Icon'
import React from 'react'

interface FAQItemProps extends React.ComponentProps<'div'> {
  question: string
  answer: string
}

export const FAQItem = ({ question, answer, ...props }: FAQItemProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return (
    <div className="faq-item" {...props}>
      <div className="faq-item__header">
        <button
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-controls="faq-item__content"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="faq-item__title">{question}</div>
          <div className="faq-item__icon">
            <Icon name={isOpen ? 'minus-circle' : 'plus-circle'} />
          </div>
        </button>
      </div>
      <div
        className={cn('faq-item__content', {
          ['faq-item__content--opened']: isOpen,
        })}
      >
        {answer}
      </div>
    </div>
  )
}
