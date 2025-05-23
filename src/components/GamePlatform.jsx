import React from "react";
import {
  FaPlaystation,
  FaSteam,
  FaXbox,
  FaWindows,
  FaApple,
} from "react-icons/fa";

const GamePlatform = ({ platforms }) => {
  const renderPlatforms = (platforms) => {
    const unique = new Set();
    const result = [];

    platforms.forEach((p) => {
      const name = p.platform.name.toLowerCase();

      if (name.includes("playstation") && !unique.has("playstation")) {
        unique.add("playstation");
        result.push(
          <div
            key="playstation"
            className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md"
          >
            <FaPlaystation className="text-blue-500" />
            <span className="text-sm">PlayStation</span>
          </div>
        );
      }

      if (name.includes("steam") && !unique.has("steam")) {
        unique.add("steam");
        result.push(
          <div
            key="steam"
            className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md"
          >
            <FaSteam className="text-gray-300" />
            <span className="text-sm">Steam</span>
          </div>
        );
      }

      if (name.includes("xbox") && !unique.has("xbox")) {
        unique.add("xbox");
        result.push(
          <div
            key="xbox"
            className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md"
          >
            <FaXbox className="text-green-500" />
            <span className="text-sm">Xbox</span>
          </div>
        );
      }

      if (name.includes("windows") && !unique.has("windows")) {
        unique.add("windows");
        result.push(
          <div
            key="windows"
            className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md"
          >
            <FaWindows className="text-blue-300" />
            <span className="text-sm">Windows</span>
          </div>
        );
      }

      if (name.includes("mac") && !unique.has("mac")) {
        unique.add("mac");
        result.push(
          <div
            key="mac"
            className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md"
          >
            <FaApple className="text-white" />
            <span className="text-sm">Mac</span>
          </div>
        );
      }
    });

    return result;
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg h-fit">
      <h2 className="text-xl font-semibold mb-3">Available Platforms</h2>
      <div className="flex flex-col gap-2">{renderPlatforms(platforms)}</div>
    </div>
  );
};

export default GamePlatform;
