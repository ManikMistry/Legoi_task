/* eslint-disable react/prop-types */
const Theme= ({ theme, toggleTheme }) => {
  return (
    <button
      className="px-4 py-2 mb-4 text-white bg-gray-500 rounded hover:gray-blue-700"
      onClick={toggleTheme}
    >
    {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

export default Theme;