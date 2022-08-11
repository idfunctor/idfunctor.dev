module Components.Tags (tsxTags, Props_tags) where

import React.Basic (ReactComponent)

-- | Must agree with the TypeScript `interface Props_tags`.
type Props_tags
  = { tags :: Array String
    }

foreign import tsxTags :: ReactComponent Props_tags
