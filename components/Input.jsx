
function MyInput({inputValue, setInputValue}) {

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const clearSearch = () => {
    setInputValue("");
  };

  return (
    <div className="space-y-3">
      <label
        htmlFor="company-search"
        className="block text-sm font-bold mb-3"
        style={{
          color: "#00ff00",
          textShadow: "0 0 10px #00ff00",
          fontFamily: "monospace",
        }}
      >
        [SEARCH MODULE ACTIVATED]
      </label>

      <div className="relative">
        {/* Terminal Prompt */}
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span
            className="text-lg"
            style={{
              color: "#00ff00",
              textShadow: "0 0 10px #00ff00",
              fontFamily: "monospace",
            }}
          >
            &gt;
          </span>
        </div>

        {/* Input Field */}
        <input
          type="text"
          id="company-search"
          value={inputValue}
          onChange={handleChange}
          className="w-full pl-8 pr-8 py-3 bg-black border-2 focus:outline-none transition-all duration-200"
          style={{
            borderColor: "#00ff00",
            color: "#00ff00",
            textShadow: "0 0 10px #00ff00",
            fontFamily: "monospace",
            backgroundColor: "rgba(0,255,0,0.05)",
            boxShadow: "inset 0 0 10px rgba(0,255,0,0.2)",
          }}
          placeholder="ENTER QUERY PARAMETERS..."
        />

        {/* Cursor effect */}
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <div
            className="w-2 h-5 bg-green-500 opacity-75 animate-pulse"
            style={{
              backgroundColor: "#00ff00",
              boxShadow: "0 0 8px #00ff00",
            }}
          ></div>
        </div>
      </div>

      {/* System Messages */}
      <div className="space-y-1">
        <div
          className="text-xs"
          style={{
            color: "#00cc00",
            textShadow: "0 0 8px #00cc00",
            fontFamily: "monospace",
          }}
        >
          &gt; SYNTAX: [COMPANY] [CITY] [STATE] [ADDRESS]
        </div>
        <div
          className="text-xs"
          style={{
            color: "#009900",
            textShadow: "0 0 6px #009900",
            fontFamily: "monospace",
          }}
        >
          &gt; WILDCARDS SUPPORTED • PARTIAL MATCH ENABLED
        </div>
        {inputValue && (
          <div
            className="text-xs"
            style={{
              color: "#ffff00",
              textShadow: "0 0 8px #ffff00",
              fontFamily: "monospace",
            }}
          >
            &gt; SEARCH ACTIVE: "{inputValue.toUpperCase()}"
          </div>
        )}
      </div>
    </div>
  );
}

export default MyInput;
