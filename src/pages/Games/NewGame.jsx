import React, { useState, useEffect } from 'react';
import Select from "react-select";
import { toast } from "react-toastify";

import AppText from '../../components/AppText/AppText';
import AppButton from '../../components/AppButton/AppButton';
import AppInput from '../../components/AppInput/AppInput';
import { getAllTeamsService } from '../../services/teamService';
import { createMatchService } from '../../services/matchService';


function NewGame() {
  const [homeTeam, setHomeTeam] = useState('');
  const [homeTeamScore, setHomeTeamScore] = useState(0);
  const [awayTeam, setAwayTeam] = useState('');
  const [awayTeamScore, setAwayTeamScore] = useState(0);
  const [matchTime, setMatchTime] = useState('');
  const [matchDate, setMatchDate] = useState('');
  const [isvip, setisvip] = useState(false)

  const [teams, setteams] = useState([])

  const handleReset = () => {
    setHomeTeam("")
    setHomeTeamScore("")
    setAwayTeam("")
    setAwayTeamScore("")
    setMatchTime("")
    setMatchDate("")
    setisvip(false)
  }

  // Function to handle form submission
  const handleSubmit = async() => {

    // You can perform validation and submit the form data to your backend here
    // For example, you can send a POST request to your API with the form data

    if(!homeTeam || !homeTeamScore || !awayTeam || !awayTeamScore || !matchTime || !matchDate) {
      toast.error("please fill in the details properly")
      return
    }

    const formData = {
      homeTeam: homeTeam.value,
      homeScore: homeTeamScore,
      awayTeam: awayTeam.value,
      awayScore: awayTeamScore,
      matchTime,
      matchDate,
      isvip
    };

    const res = await createMatchService(formData)

    if(!res) return
    handleReset()

  };

  const getTeams = async() => {
    const res = await getAllTeamsService()

    const _teams = res.map(team => {
      return {
        value: team._id,
        label: team.name,
      }
    })

    setteams(_teams)
  }

  useEffect(() => {
    getTeams()
  }, [])


  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <div className='bg-white w-[500px] p-10 translate-y-[-50px]'>
        <div className='mt-3 '>
          <AppText bold medium content={'Add Match'} />
          <AppText content={'Enter match details ...'} />
        </div>

        <div>
          <div className='w-auto mt-10 space-y-5'>
            <div className='space-y-3'>
              <AppText content={"Home Team"} />
              <Select
                width="100%"
                value={homeTeam}
                onChange={(value) => {
                  setHomeTeam(value);
                }}
                options={teams}
                placeholder={homeTeam ? homeTeam.label : "-- Select --"}
              />
            </div>

            <AppInput
              label={'Home Team Score*'}
              value={homeTeamScore}
              onChange={setHomeTeamScore}
              placeholder={"0"}
              />

            <div className='space-y-3'>
              <AppText content={"Away Team"} />
              <Select
                width="100%"
                value={awayTeam}
                onChange={(value) => {
                  setAwayTeam(value);
                }}
                options={teams}
                placeholder={homeTeam ? homeTeam.label : "-- Select --"}
                />
            </div>

            <AppInput
              label={'Away Team Score*'}
              value={awayTeamScore}
              onChange={setAwayTeamScore}
              placeholder={"0"}
            />

            <AppInput
              label={'Match Time*'}
              value={matchTime}
              onChange={setMatchTime}
              placeholder={"HH:MM"}
            />

            <AppInput
              label={'Match Date*'}
              value={matchDate}
              onChange={setMatchDate}
              type='date' // Use type 'date' for date input
            />

            {/* <AppInput
              label={'Is VIP Match'}
              value={isvip}
              onChange={setisvip}
              type='checkbox' // Use type 'date' for date input
            /> */}

          <div className='flex justify-start items-center'>
            <AppText content={"is VIP match?"} />
            <input
              type="checkbox"
              checked={isvip}
              onChange={(e) => setisvip(e.target.checked)}
              className='h-[20px] w-[20px] ml-5'
            />
          </div>

            <AppButton style={"!mt-[50px]"} label={'Add Match'} invert={true} onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewGame;
