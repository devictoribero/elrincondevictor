export function CustomPostLink({href, children}) {
  const isExternal = href.match('elrincondevictor') === null;
  
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'nofollow noopener noreferrer' : undefined}
    >
      {children}
    </a>
  )
}

export function CustomPostImg({src, alt}) {
  return(
    <img
      src={src}
      alt={alt}
      role={!alt ? 'presentation' : undefined}
    />
  )
}