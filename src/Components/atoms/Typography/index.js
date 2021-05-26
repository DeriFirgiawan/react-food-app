import classnames from 'classnames';

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  p: "p",
  span: "span"
}

export const Typography = ({variant, children, className, ...props}) => {
  const Component = variant ? variantsMapping[variant] : "p";
  return (
    <Component className={classnames({
      [`variant-${variant}`]: variant,
      [`${className}`] : className
      })} {...props}>
      {children}
    </Component>
  );
}
