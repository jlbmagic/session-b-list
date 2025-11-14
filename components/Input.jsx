
function MyInput({inputValue, setInputValue}) {

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className=" ">
      {/* <label
        htmlFor="my-text-input"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Search by State:
      </label> */}
      <input
        type="text"
        id="my-text-input"
        value={inputValue}
        onChange={handleChange}
        className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
        placeholder="Search by State"
      />
      {/* {inputValue && (
        <p className="mt-3 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-md">
          <span className="font-medium text-gray-700">Current input:</span>{" "}
          {inputValue}
        </p>
      )} */}
    </div>
  );
}

export default MyInput;
