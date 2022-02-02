import React, { useEffect, useState } from 'react'

//! Apollo Client GraphQL
//? We used a custom component to ensure we only request the countries from the
//? client to avoid sending duplicate requests during page rendering.

const ClientOnly = ({ children, ...props }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted ? <div {...props}>{children}</div> : null
}

export default ClientOnly
