const LinkButton = ({ text, link, className }) => {
    return (
      <a 
      className={`${className} ? ${className} : bg-success text-admin-text py-2 px-4 rounded-lg hover:bg-green-600 hover:text-secondary cursor-pointer mt-2`}
      href={link}>
        {text}
      </a>
    )
  }

export default LinkButton;