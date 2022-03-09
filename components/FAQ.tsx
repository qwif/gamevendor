import { FAQItem } from 'components/FAQItem'

const data = [
  {
    question: 'How does work?',
    answer:
      'Consectetur, adipisicing elit. Commodi magni quis eius reprehenderit modi ullam beatae architecto sed. In accusamus vel porro laborum deserunt quia ex delectus eaque alias veniam, quaerat, quibusdam ad. Neque commodi mollitia magnam quod amet delectus doloremque pariatur libero veniam nihil, nostrum fugiat atque sunt debitis aliquid distinctio? Possimus unde adipisci odio mollitia doloribus ea quidem impedit iste inventore corrupti, fugiat odit accusantium at totam cumque ipsam fugit architecto expedita optio, quam laudantium! Doloremque at ab ad excepturi eum impedit fugiat inventore, nulla nemo aut expedita, tenetur alias? Quis amet officiis cupiditate fuga ut nesciunt ad.',
  },
  {
    question: 'What is a game?',
    answer:
      'A video game or computer game is an electronic game that involves interaction with a user interface or input device – such as a joystick, controller, keyboard, or motion sensing device – to generate visual feedback. This feedback is shown on a video display device, such as a TV set, monitor, touchscreen, or virtual reality headset. A video game or computer game is an electronic game that involves interaction with a user interface or input device – such as a joystick, controller, keyboard, or motion sensing device – to generate visual feedback. This feedback is shown on a video display device, such as a TV set, monitor, touchscreen, or virtual reality headset.',
  },
  {
    question: 'Is there a free trial available?',
    answer:
      'Consectetur, adipisicing elit. Commodi magni quis eius reprehenderit modi ullam beatae architecto sed. In accusamus vel porro laborum deserunt quia ex delectus eaque alias veniam, quaerat, quibusdam ad. Neque commodi mollitia magnam quod amet delectus doloremque pariatur libero veniam nihil, nostrum fugiat atque sunt debitis aliquid distinctio? Possimus unde adipisci odio mollitia doloribus ea quidem impedit iste inventore corrupti, fugiat odit accusantium at totam cumque ipsam fugit architecto expedita optio, quam laudantium! Doloremque at ab ad excepturi eum impedit fugiat inventore, nulla nemo aut expedita, tenetur alias? Quis amet officiis cupiditate fuga ut nesciunt ad.',
  },
  {
    question: 'How does billing work?',
    answer:
      'Consectetur, adipisicing elit. Commodi magni quis eius reprehenderit modi ullam beatae architecto sed. In accusamus vel porro laborum deserunt quia ex delectus eaque alias veniam, quaerat, quibusdam ad. Neque commodi mollitia magnam quod amet delectus doloremque pariatur libero veniam nihil, nostrum fugiat atque sunt debitis aliquid distinctio? Possimus unde adipisci odio mollitia doloribus ea quidem impedit iste inventore corrupti, fugiat odit accusantium at totam cumque ipsam fugit architecto expedita optio, quam laudantium! Doloremque at ab ad excepturi eum impedit fugiat inventore, nulla nemo aut expedita, tenetur alias? Quis amet officiis cupiditate fuga ut nesciunt ad.',
  },
]

export const FAQ = () => {
  return (
    <div className="faq">
      <div className="faq__header">
        <div className="faq__title">Frequently asked questions</div>
        <div className="faq__description">Everything you need to know about the games.</div>
      </div>
      <div className="faq__items">
        {data.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  )
}
