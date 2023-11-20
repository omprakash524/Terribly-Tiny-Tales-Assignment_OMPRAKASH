import "./style.css";

export default function Profile({profile}) {
  return (
    <div className="profile">
      <div className="cover-img">
        <img
          src={profile.coverImg}
          alt="coverImage"
        ></img>
      </div>

      <div className="outer-container">
        <div className="profile-info-container">
          <img
            className="profile-img"
            src={profile.profileImg}
            alt="profileImg"
          ></img>
          <div className="profile-details-container">
            <div className="profile-name">
              <p>{profile.name}</p>
              <div className="achievementIcons">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/666/666620.png"
                  alt="coverImage"
                ></img>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg"
                  alt="coverImage"
                ></img>
              </div>
            </div>
            <div className="btns-container">
              <div className="followers btn">
                <p>{profile.followers}</p>
              </div>
              <div className="following btn">
                <p>{profile.following}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="description">
          <p className="text">{profile.description}</p>
          <a href={profile.link}>
            {profile.link}
          </a>

          <div className="icons-container">
            <div className="icons">
              <img
                src="https://cdn2.iconfinder.com/data/icons/greenline/512/star-512.png"
                alt="coverImage"
              ></img>
              <p>{profile.star}</p>
            </div>
            <div className="icons">
              <img
                src="https://cdn-icons-png.flaticon.com/512/783/783343.png"
                alt="coverImage"
              ></img>
              <p>{profile.like}</p>
            </div>
            <div className="icons">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4264/4264841.png"
                alt="coverImage"
              ></img>
              <p>{profile.impressions}</p>
            </div>
            <div className="icons">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/768px-Heart_coraz%C3%B3n.svg.png"
                alt="coverImage"
              ></img>
              <p>{profile.hearts}</p>
            </div>
          </div>
        </div>
      </div>
      <button className="ombtn">134 Post</button>
    </div>
  );
}
