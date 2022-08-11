module Next.Helmet where

import Prim.Row (class Union)
import React.Basic.DOM (Props_body, Props_html, Props_link, Props_meta)
import React.Basic.Hooks (JSX, ReactComponent, element)

foreign import _helmet :: forall attrs. ReactComponent attrs

type Props_helmet
  = ( async :: Boolean
    , bodyAttributes :: Record Props_body
    , defaultTitle :: String
    , defer :: Boolean
    , encodeSpecialCharacters :: Boolean
    , htmlAttributes :: Record Props_html
    , link :: Array (Record Props_link)
    , meta :: Array (Record Props_meta)
    -- , noscript :: Array
    -- , script :: Array
    -- , style :: Array
    , title :: String
    , titleTemplate :: String
    , children :: Array JSX
    )

helmet ::
  forall attrs attrs_.
  Union attrs attrs_ (Props_helmet) =>
  Record attrs ->
  JSX
helmet attrs = element _helmet attrs

-- type Props_helmet
--   = ( title :: String
--     )
