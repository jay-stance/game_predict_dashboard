import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Table from "../../components/Table/Table";
import { match_Table_Column, formatDate } from "../../utils/table_columuns";
import AppButton from "../../components/AppButton/AppButton";
import { getAllMatchesService } from "../../services/matchService";
import "./Games.css";

const Games = () => {
  const [matches, setmatches] = useState([])
  const [clearTable, setClearTable] = useState(true);

  // pagination
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(50);

  const handlePageChange = (page) => {};

  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
  };

  const handleSelection = ({ allSelected, selectedCount, selectedRows }) => {
    const ids = selectedRows.map((row) => {
      return row._id;
    });
    // setSelectedIds(ids);
  };
  
  const getMatches = async() => {
    const res = await getAllMatchesService()
    if(!res) return

    const _games = res.map(game => {
      return {
        homeTeam: game.homeTeam.name,
        homeScore: game.homeScore,
        awayTeam: game.awayTeam.name,
        awayScore: game.awayScore,
        matchTime: game.matchTime,
        matchDate: (game.matchDate).slice(0, 10),
        isvip: game.isvip,
      }
    })

    console.log("games length is \b\b", res.length)

    setmatches(_games)
  }

  useEffect(() => {
    getMatches()
  }, [])
  
  return (
    <div>
      <div className="section">
        <Link to={"/games/new"} className="flex items-end justify-end">
          <AppButton label={"New Match"} />
        </Link>
      </div>

      <div>
      <Table
        title="All Matches"
        columns={match_Table_Column}
        data={matches}
        handleSelection={handleSelection}
        toggledClearRows={clearTable}
        // handleRowClicked={(row) => navigate(`/userProfile/${row._id}`)}
        // pagination
        totalRows={totalRows}
        handlePageChange={handlePageChange}
        handlePerRowsChange={handlePerRowsChange}
      />

      </div>
    </div>
  );
};

export default Games;
