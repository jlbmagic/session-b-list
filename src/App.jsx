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
    <div
      className="min-h-screen bg-black flex items-center justify-center p-8"
      style={{
        fontFamily: "monospace",
        background:
          "radial-gradient(ellipse at center, #1a1a1a 0%, #000000 100%)",
      }}
    >
      {/* CRT Monitor Frame */}
      <div
        className="relative max-w-6xl w-full"
        style={{
          background: "linear-gradient(145deg, #2d2d2d, #1a1a1a)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow:
            "inset 0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,255,0,0.1)",
        }}
      >
        {/* CRT Screen */}
        <div
          className="relative bg-black rounded-lg overflow-hidden"
          style={{
            padding: "20px",
            background:
              "radial-gradient(ellipse at center, #001100 0%, #000000 100%)",
            boxShadow: "inset 0 0 30px rgba(0,0,0,0.9)",
            border: "2px solid #333",
          }}
        >
          {/* Scanlines overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.03) 2px, rgba(0,255,0,0.03) 4px)",
              zIndex: 1000,
            }}
          ></div>

          {/* Screen content */}
          <div
            className="relative z-10"
            style={{ color: "#00ff00", textShadow: "0 0 10px #00ff00" }}
          >
            {/* Header Section */}
            <div className="text-center mb-8">
              <div
                className="text-2xl font-bold tracking-widest mb-2"
                style={{
                  color: "#00ff00",
                  textShadow: "0 0 20px #00ff00, 0 0 30px #00ff00",
                  fontFamily: "monospace",
                  letterSpacing: "0.2em",
                }}
              >
                ╔═══════════════════════════════════════╗
              </div>
              <h1
                className="text-3xl font-bold tracking-wide mb-2"
                style={{
                  color: "#00ff00",
                  textShadow: "0 0 15px #00ff00",
                  fontFamily: "monospace",
                }}
              >
                COMPANY DIRECTORY v2.1
              </h1>
              <div
                className="text-2xl font-bold tracking-widest"
                style={{
                  color: "#00ff00",
                  textShadow: "0 0 20px #00ff00, 0 0 30px #00ff00",
                  fontFamily: "monospace",
                  letterSpacing: "0.2em",
                }}
              >
                ╚═══════════════════════════════════════╝
              </div>
              <p
                className="mt-4 text-sm"
                style={{
                  color: "#00cc00",
                  textShadow: "0 0 8px #00cc00",
                  fontFamily: "monospace",
                }}
              >
                &gt; SYSTEM: DATABANK ACCESS MODULE LOADED
              </p>
              <p
                className="text-sm"
                style={{
                  color: "#00cc00",
                  textShadow: "0 0 8px #00cc00",
                  fontFamily: "monospace",
                }}
              >
                &gt; STATUS: READY FOR QUERY INPUT
              </p>
            </div>

            {/* Search Section */}
            <div className="mb-8">
              <div
                className="border-2 p-4"
                style={{
                  borderColor: "#00ff00",
                  backgroundColor: "rgba(0,255,0,0.05)",
                  boxShadow: "0 0 20px rgba(0,255,0,0.3)",
                }}
              >
                <MyInput
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                />
              </div>
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div
                  className="text-lg"
                  style={{
                    color: "#00ff00",
                    textShadow: "0 0 10px #00ff00",
                    fontFamily: "monospace",
                  }}
                >
                  ►
                </div>
                <h2
                  className="text-xl font-bold"
                  style={{
                    color: "#00ff00",
                    textShadow: "0 0 10px #00ff00",
                    fontFamily: "monospace",
                  }}
                >
                  DATABASE RECORDS
                </h2>
                <span
                  className="px-2 py-1 border"
                  style={{
                    borderColor: "#00ff00",
                    color: "#00ff00",
                    textShadow: "0 0 8px #00ff00",
                    fontFamily: "monospace",
                    fontSize: "0.875rem",
                  }}
                >
                  [{filteredData.length}] ENTRIES
                </span>
              </div>
              {inputValue && (
                <button
                  onClick={() => setInputValue("")}
                  className="px-3 py-1 border hover:bg-green-900/20"
                  style={{
                    borderColor: "#00ff00",
                    color: "#00ff00",
                    textShadow: "0 0 8px #00ff00",
                    fontFamily: "monospace",
                    fontSize: "0.875rem",
                  }}
                >
                  [ESC] CLEAR
                </button>
              )}
            </div>

            {/* Companies Grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filteredData.length > 0 ? (
                filteredData.map((company, index) => (
                  <div
                    key={company.fieldData[fieldMap.pk]}
                    className="group border-2 p-4 hover:bg-green-900/20 transition-all duration-200 cursor-pointer"
                    style={{
                      borderColor: "#00ff00",
                      backgroundColor: "rgba(0,255,0,0.05)",
                      fontFamily: "monospace",
                    }}
                  >
                    <div className="space-y-2">
                      {/* Entry Number */}
                      <div
                        className="text-xs"
                        style={{
                          color: "#00cc00",
                          textShadow: "0 0 8px #00cc00",
                        }}
                      >
                        [{String(index + 1).padStart(3, "0")}]
                      </div>

                      {/* Company Name */}
                      <h3
                        className="font-bold text-sm leading-5"
                        style={{
                          color: "#00ff00",
                          textShadow: "0 0 10px #00ff00",
                        }}
                      >
                        &gt; {company.fieldData.CompanyName.toUpperCase()}
                      </h3>

                      {/* Location */}
                      <div
                        className="text-xs"
                        style={{
                          color: "#00cc00",
                          textShadow: "0 0 8px #00cc00",
                        }}
                      >
                        LOC:{" "}
                        {company.fieldData[fieldMap.fieldOne].toUpperCase()},{" "}
                        {company.fieldData[fieldMap.fieldTwo]}
                      </div>

                      {/* Address */}
                      <div
                        className="text-xs"
                        style={{
                          color: "#009900",
                          textShadow: "0 0 6px #009900",
                        }}
                      >
                        ADR: {company.fieldData.StreetAddress}
                      </div>

                      {/* Sales */}
                      {company.fieldData.Sales && (
                        <div
                          className="flex items-center justify-between pt-1 border-t"
                          style={{
                            borderColor: "#00ff00",
                            fontSize: "0.75rem",
                          }}
                        >
                          <span
                            style={{
                              color: "#00cc00",
                              textShadow: "0 0 8px #00cc00",
                            }}
                          >
                            REV:
                          </span>
                          <span
                            style={{
                              color: "#00ff00",
                              textShadow: "0 0 10px #00ff00",
                            }}
                          >
                            $
                            {parseFloat(
                              company.fieldData.Sales
                            ).toLocaleString()}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div
                    className="text-6xl mb-4"
                    style={{
                      color: "#00ff00",
                      textShadow: "0 0 20px #00ff00",
                      fontFamily: "monospace",
                    }}
                  >
                    ◆
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{
                      color: "#00ff00",
                      textShadow: "0 0 15px #00ff00",
                      fontFamily: "monospace",
                    }}
                  >
                    NO RECORDS FOUND
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      color: "#00cc00",
                      textShadow: "0 0 8px #00cc00",
                      fontFamily: "monospace",
                    }}
                  >
                    &gt; MODIFY SEARCH PARAMETERS
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
