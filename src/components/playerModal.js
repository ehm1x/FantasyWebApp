import React from "react";

const BasicModal = ({ isOpen, setIsOpen, player }) => {
  if (!player) {
    return null;
  }

  const handleClose = (event) => {
    event.stopPropagation();
    setIsOpen(false);
  };

  function findPtsColor(pts) {
    let color = "";
    if (pts >= 25) {
      color = "bg-yellow-500";
    } else if (pts >= 18 && pts < 25) {
      color = "bg-purple-500";
    } else if (pts >= 13 && pts < 18) {
      color = "bg-blue-500";
    } else if (pts >= 10 && pts < 13) {
      color = "bg-green-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }

  function findTargetsColor(pts) {
    let color = "";
    if (pts >= 13) {
      color = "bg-yellow-500";
    } else if (pts >= 9 && pts < 13) {
      color = "bg-purple-500";
    } else if (pts >= 6 && pts < 9) {
      color = "bg-blue-500";
    } else if (pts >= 5 && pts < 6) {
      color = "bg-green-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }

  function findRecColor(pts) {
    let color = "";
    if (pts >= 13) {
      color = "bg-yellow-500";
    } else if (pts >= 10 && pts < 13) {
      color = "bg-purple-500";
    } else if (pts >= 6 && pts < 10) {
      color = "bg-blue-500";
    } else if (pts >= 4 && pts < 6) {
      color = "bg-green-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }

  function findTdColor(pts) {
    let color = "";
    if (pts >= 2) {
      color = "bg-yellow-500";
    } else if (pts === 1) {
      color = "bg-green-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }

  const StatsTable = ({ player }) => {
    return (
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="w-1/5 px-4 py-2">Week</th>
            <th className="w-1/5 px-4 py-2">Targets</th>
            <th className="w-1/5 px-4 py-2">Rec</th>
            <th className="w-1/5 px-4 py-2">TD's</th>
            <th className="w-1/5 px-4 py-2">PPR Pts</th>
            {/* add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {Object.entries(player.weeklyStats).map(([week, weekData], index) => {
            // If weekData or weekData.stats is null or undefined, return null
            if (!weekData || !weekData.stats) {
              return null;
            }

            const ptsColor = findPtsColor(weekData.stats.pts_ppr);
            const targetsColor = findTargetsColor(weekData.stats.rec_tgt);
            const recColor = findRecColor(weekData.stats.rec);
            const tdColor = findTdColor(weekData.stats.rec_td);

            return (
              <tr key={index}>
                <td className="border px-4 py-2">{week}</td>
                <td
                  className={`border px-4 py-2 ${targetsColor} bg-opacity-50`}
                >
                  {weekData.stats.rec_tgt || 0}
                </td>
                <td className={`border px-4 py-2 ${recColor} bg-opacity-50`}>
                  {weekData.stats.rec || 0}
                </td>
                <td className={`border px-4 py-2 ${tdColor} bg-opacity-50`}>
                  {weekData.stats.rec_td || 0}
                </td>
                <td className={`border px-4 py-2 ${ptsColor} bg-opacity-50`}>
                  {weekData.stats.pts_ppr || 0}
                </td>
                {/* add more data cells as needed */}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {player.name}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Position: {player.position}
                  </p>
                  <p className="text-sm text-gray-500">Team: {player.team}</p>
                  <p className="text-sm text-gray-500">
                    Projected Total Points: {player.projTotalPts}
                  </p>
                  <p className="text-sm text-gray-500">
                    Rest of Season Projected Total:{" "}
                    {player.rosProjTotal.toFixed(2)}
                  </p>
                  <StatsTable player={player} />
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={(event) => {
                    handleClose(event);
                    setIsOpen(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BasicModal;
