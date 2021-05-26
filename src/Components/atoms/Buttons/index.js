import classnames from 'classnames';

export const Button = ({children, theme, ...props}) => {
  return (
    <button className={classnames({
      [`btn btn-${theme}`] : theme
    })} {...props} >
      {children}
    </button>
  );
}

Button.defaultProps = {
  theme: "warning"
}
