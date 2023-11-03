import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AppButton from "../../components/AppButton/AppButton";
import AppText from "../../components/AppText/AppText";
import { getAllTeamsService } from "../../services/teamService";

export default function Teams() {
  const [teams, setTeams] = useState([]);

  const getAllTeams = async () => {
    const res = await getAllTeamsService();

    if (!res) return;
    console.log("all teams are \n\n", res);
    setTeams(res);
  }

  useEffect(() => {
    getAllTeams();
  }, []);

  return (
    <div>
      <Link to="/teams/new" className="flex items-end justify-end">
        <AppButton label={"New Team"} />
      </Link>

      <div className="mt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {teams.map((team, index) => (
            <div key={index} className="team-container bg-white p-7 flex flex-col justify-center items-center rounded-md">
              <img
                src={`${team.logo.secure_url}?w=100&h=100&c=fill`}
                className="team-image w-[100px] h-[100px] rounded-full mb-4"
                alt={team.name}
              />
              <AppText medium content={team.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
