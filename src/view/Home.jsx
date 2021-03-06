import React from 'react'

import { Accordion } from 'semantic-ui-react/src/modules/Accordion/Accordion.js'

export default function Home() {

  const activeIndex = 0

  return (
    <Accordion>       
      <Accordion.Title>
        Banaa  
      </Accordion.Title>

      <Accordion.Content active={activeIndex === 0}>
        <p>
          Three common ways for a prospective owner to acquire a dog is from
          pet shops, private owners, or shelters.
        </p>
        <p>
          A pet shop may be the most convenient way to buy a dog. Buying a dog
          from a private owner allows you to assess the pedigree and
          upbringing of your dog before choosing to take it home. Lastly,
          finding your dog from a shelter, helps give a good home to a dog who
          may not find one so readily.
        </p>
      </Accordion.Content>
    </Accordion>
  )
}