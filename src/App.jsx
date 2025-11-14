import React, { useState } from "react";
import MyInput from "../components/Input";

const App = ({data}) => {
  const [inputValue, setInputValue] = useState("")
  
  const fieldMap = { pk:"PrimaryKey",fieldOne: "City", fieldTwo: "State"};

  const filteredData = inputValue ? data.filter((one) => {
    const fieldData = { ...one.fieldData };
    delete fieldData[fieldMap.pk]; // Exclude the primary key from search
    const input = inputValue.toLowerCase();

    // Check if any property value includes the input
    return Object.values(fieldData).some(value => 
      value && value.toString().toLowerCase().includes(input)
    );
  }) : data;


  return (
    <div className="bg-gray-50 border border-gray-300 rounded-lg mt-3 h-screen flex flex-col overflow-hidden mx-auto max-w-4xl px-6 py-3 sm:pt-6 lg:px-8 lg:py-4">
      <div className="mb-3">
        {" "}
        <h1 className="text-4xl   text-fuchsia-700 uppercase text-center">
          Companies
        </h1>
      </div>
      <div className="p-10  rounded-md bg-gray-100 border border-gray-300">
        <MyInput inputValue={inputValue} setInputValue={setInputValue} />
      </div>
    
      <div className="flex-1 border-t border-t-gray-300 m-5 overflow-auto px-6  ">
        <div className="pt-10 grid grid-cols-2 divide-y divide-purple-200  lg:grid-cols-2 gap-4">
          {filteredData.map((one) => (
            <div className="" key={one.fieldData[fieldMap.pk]}>
              {one.fieldData[fieldMap.fieldOne]}{" "}
              {one.fieldData[fieldMap.fieldTwo]}
            </div>
          ))}
        </div>
      </div>
      <div className="text-purple-700 text-sm italic">
        {filteredData.length} records found
      </div>
    </div>
  );
};

export default App;
