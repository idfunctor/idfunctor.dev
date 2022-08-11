module Components.Head (nextHead, Props_head) where

import React.Basic (ReactComponent, JSX)

-- | Must agree with the TypeScript `interface Props_tags`.
type Props_head
  = { children :: Array JSX
    }

foreign import nextHead :: ReactComponent Props_head
