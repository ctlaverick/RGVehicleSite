const MainButton = ({ text }) => {
    return (
      <button className="bg-success text-admin-text py-2 px-4 rounded-lg hover:bg-green-600 hover:text-secondary cursor-pointer mt-2">
            {text}
      </button>
    )
  }

export default MainButton;