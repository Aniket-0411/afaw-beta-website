import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import TeamCard from "../components/TeamCard";
import {teamMembers} from "../data/teamData";

const Team = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } catch (err) {
        console.error('Error fetching teams:', err);
        // Intentionally do not set error; fallback to local JSON after loading ends
        setTeams([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  const displayTeams = teams && teams.length > 0 ? teams : teamMembers;

  return (
    <Layout title="Our Team - Africa Access Water">
      <Header title="Our Team" current="team" />
      <div className="container-xxl py-5 mt-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
            <h1 className="mb-3">Meet Our Team</h1>
            <p>We are a group of passionate individuals committed to creating sustainable impact.</p>
          </div>
          
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading team members...</p>
            </div>
          ) : (
            <div className="row g-4 mx-2 mx-md-3 mx-lg-5">
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
