export function CustomPostLink({href, children}) {
  const isExternal = href.match('elrincondevictor') === null;
  
  return (
    <a
      className="link"
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
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