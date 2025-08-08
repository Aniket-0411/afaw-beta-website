import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import {teams} from "../data/teamData";
import TeamCard from "../components/TeamCard";

function Team() {
  return (
    <Layout title="Our Team - Africa Access Water">
      <Header title="Our Team" current="team" />
      <div className="container-xxl py-5 mt-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
            <h1 className="mb-3">Meet Our Team</h1>
            <p>We are a group of passionate individuals committed to creating sustainable impact.</p>
          </div>
         <div className="row g-4">
            {teams.map((member) => (
              <TeamCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Team;
