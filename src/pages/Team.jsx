import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import TeamCard from "../components/TeamCard";
import {teamMembers} from "../data/teamData";
import {boardmembers} from "../data/boardmembersData";

const Team = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState([]);
  const [boardLoading, setBoardLoading] = useState(true);

  useEffect(() => {
    document.title = "Our Team - AfAW";
    
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://afaw-beta-api.onrender.com/api/teams');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setTeams(Array.isArray(data) ? data : []);
        console.log("team details fetched successfully");
      } catch (err) {
        console.error('Error fetching teams:', err);
        // Intentionally do not set error; fallback to local JSON after loading ends
        setTeams([]);
      } finally {
        setLoading(false);
      }
    };

    const fetchBoardMembers = async () => {
      try {
        setBoardLoading(true);
        const response = await fetch('https://xyz.com');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setBoard(Array.isArray(data) ? data : []);
        console.log("board members fetched successfully");
      } catch (err) {
        console.error('Error fetching board members:', err);
        setBoard([]);
      } finally {
        setBoardLoading(false);
      }
    };

    fetchTeamMembers();
    fetchBoardMembers();
  }, []);

  const displayTeams = teams && teams.length > 0 ? teams : teamMembers;
  const displayBoardMembers = board && board.length > 0 ? board : boardmembers;

  return (
    <Layout title="Our Team - Africa Access Water">
      <Header title="Our Team" current="team" />

      {/* Our Board Members */}
      <div className="container-xxl mt-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
            <h1 className="mb-3">Our Board Members</h1>
          </div>

          {boardLoading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading board members...</p>
            </div>
          ) : (
            <div className="row g-4 mx-2 mx-md-0 mx-lg-1">
              {displayBoardMembers.map((member, index) => {
                return (
                  <TeamCard 
                    key={member.id || index} 
                    full_name={member.full_name}
                    image_url={member.image_url}
                    position={member.position}
                    role={member.role}
                    alt={member.full_name}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
      {/* Our Team */}
      <div className="container-xxl mt-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
            <h1 className="mb-3">Meet Our Team</h1>
            <p>The team members battling rural poverty</p>
          </div>

          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading team members...</p>
            </div>
          ) : (
            <div className="row g-4 text-center mx-2 mx-md-0 mx-lg-1">
              {displayTeams.map((member, index) => (
                <TeamCard 
                  key={member.id || index} 
                  {...member} 
                  alt={member.full_name}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Team;
