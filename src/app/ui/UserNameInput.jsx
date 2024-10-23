const UserNameInput = ({ onInputChange }) => {

  const handleChange = (e) => {
    onInputChange(e.target.value); // Enviar el valor al padre
  };

  return (
    <div className='w-full max-w-lg mx-auto bg-white rounded-lg shadow-xl'>
      <div
        className="flex items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-gray-300 focus-within:!ring-2 ring-inset focus-within:!ring-teal-500 rounded-md">
        <input
          className="block w-full appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
          placeholder="Opcional: Ingresa tu nombre"
          aria-label="Search components"
          id="headlessui-combobox-input-:r5n:"
          role="combobox"
          type="text"
          aria-expanded="false"
          aria-autocomplete="list"
          onChange={handleChange}
          // value={inputValue}
          style={{ caretColor: "rgb(107, 114, 128)" }}
        />
      </div>
    </div>
  )
}

export default UserNameInput


