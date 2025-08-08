import React from "react";

const TeamCard = ({ delay, full_name, title, bio, image_url, alt, socials }) => {
  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={delay}>
      <div className="team-item rounded shadow-sm overflow-hidden h-100 bg-white">
        <img
          className="img-fluid w-100"
          src={image_url}
          alt={alt}
          style={{
            height: "250px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="team-text text-center p-4">
          <h5 className="mb-1">{full_name}</h5>
          <small className="text-primary d-block mb-2">{title}</small>
          <p className="mb-2">{bio}</p>
          <div className="d-flex justify-content-center">
            {socials?.facebook && (
              <a
                className="btn btn-square btn-outline-primary mx-1"
                href={socials.facebook}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            )}
            {socials?.twitter && (
              <a
                className="btn btn-square btn-outline-primary mx-1"
                href={socials.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            )}
            {socials?.linkedin && (
              <a
                className="btn btn-square btn-outline-primary mx-1"
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
