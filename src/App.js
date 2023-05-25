import './App.css'

const App = () => (
  <div className="background">
    <div className="main">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="currentColor"
          className="bi bi-person-circle icon"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        </svg>
        <h1 className="profile">PROFILE</h1>
      </div>
      <div>
        <h1 className="head">
          CAROLINE <br />
          THOMPSON
        </h1>
        <p className="para"> ART DIRECTOR</p>
      </div>
      <hr className="line" />
      <p className="paragraph">
        Advatising campaigns are my forte.
        <br />
        I have been in the industry for 6 years.
        <br />
        <br />
        Address: Los Angeles, California
        <br />
        Phone:+(87) 834 2934 2344
        <br />
        Website: carolinethompson.com
      </p>
    </div>
    <hr className="line1" />
    <div className="main">
      <div>
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-briefcase color"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
          </svg>
        </div>
        <h1 className="profile profile2"> WORK</h1>
      </div>
      <div>
        <h1 className="head1">
          2022-2023
          <br />
          <br />
          <br />
          <br /> 2021-2022
          <br />
          <br />
          <br />
          <br />
          2020-2021
        </h1>
      </div>
      <div>
        <h1 className="para1">
          Create Minds Graphics Design Studio California * Senior Art Direstor
        </h1>
        <p className="para2">
          Generating and developing ideas to present to the client
        </p>
        <h1 className="para1">
          Mega Giants Publishing and Studio * Junior Art Direstor
        </h1>
        <p className="para2">
          Working on designs to produce an effective advertising campaign
        </p>
        <h1 className="para1">Big Ideas Inc * Assistant Art Director</h1>
        <p className="para2">
          Commissioning specialists, such as artists, to work on projects
        </p>
      </div>
    </div>
    <hr className="line1" />
    <div className="bg-container">
      <div className="award-container">
        <div className="clip-contrainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-clipboard2-check clipboard-icon fa-xg"
            viewBox="0 0 16 18"
          >
            <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z" />
            <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z" />
            <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z" />
          </svg>
          <p className="clip-text">SKILLS & AWARDS</p>
        </div>
        <div className="right-container">
          <div className="final-container">
            <div className="rating-container">
              <div className="rating-each-container">
                <p className="rating-text">UI/UX</p>
                <div className="dots-container1">
                  <p className="dot-icon">i</p>
                  <p className="dot-icon">i</p>
                  <p className="dot-icon">i</p>
                </div>
              </div>

              <div className="rating-each-container">
                <p className="rating-text">Growth Marketing</p>
                <div className="dots-container2">
                  <p className="dot-icon">i</p>
                  <p className="dot-icon">i</p>
                  <p className="dot-icon">i</p>
                  <p className="dot-icon">i</p>
                  <p className="dot-icon">i</p>
                </div>
              </div>

              <div className="rating-each-container">
                <p className="rating-text">Typography</p>
                <div className="dots-container3">
                  <p className="dot-icon">i</p>
                  <p className="dot-icon">i</p>
                </div>
              </div>

              <div className="rating-each-container">
                <p className="rating-text">Video Production</p>
                <div className="dots-container4">
                  <p className="dot-icon">i</p>
                  <p className="dot-icon">i</p>
                  <p className="dot-icon">i</p>
                  <p className="dot-icon">i</p>
                  <p className="dot-icon">i</p>
                </div>
              </div>

              <div className="rating-each-container">
                <p className="rating-text">Print Design</p>
                <div className="dots-container5">
                  <p className="dot-icon">i</p>
                  <p className="dot-icon">i</p>
                  <p className="dot-icon">i</p>
                </div>
              </div>
            </div>
            <div className="line-container">
              <hr className="hr-line" />
            </div>
            <div className="award-text-container">
              <div className="skills-text-container">
                <p className="year">2019</p>
                <div>
                  <p className="award-heading">Suiton Design Awards</p>
                  <p className="award-type">10 Graphic Designer</p>
                </div>
              </div>

              <div className="skills-text-container">
                <p className="year">2019</p>
                <div>
                  <p className="award-heading">Suiton Design Awards</p>
                  <p className="award-type">10 Graphic Designer</p>
                </div>
              </div>

              <div className="skills-text-container">
                <p className="year">2019</p>
                <div>
                  <p className="award-heading">Suiton Design Awards</p>
                  <p className="award-type">10 Graphic Designer</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr className="hr-line2" />
          </div>
        </div>
      </div>

      <div className="icons-container">
        <div className="inner-container">
          <div className="clip-contrainers">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-lightbulb  clipboard-icon fa-xg"
              viewBox="0 0 16 16"
            >
              <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
            </svg>
            <p className="clip-text">INTERSECTS</p>
          </div>

          <div className="icon-inner-container">
            <div className="final-icons-container">
              <div className="icons-inner-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  fill="currentColor"
                  className="icons bi bi-laptop"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                </svg>
                <p className="icon-text">INTERNET</p>
              </div>

              <div className="icons-inner-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  fill="currentColor"
                  className="bi bi-pencil icons"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
                <p className="icon-text">SKETCHING</p>
              </div>

              <div className="icons-inner-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  fill="currentColor"
                  className="icons bi bi-laptop"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                </svg>
                <p className="icon-text">MOVIES</p>
              </div>

              <div className="icons-inner-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  fill="currentColor"
                  className="bi bi-mic-fill icons"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                </svg>
                <p className="icon-text">MUSIC</p>
              </div>
            </div>
            <div className="line-container2">
              <hr className="hr-line2" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="main">
      <div>
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-journals color"
            viewBox="0 0 16 16"
          >
            <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
            <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
          </svg>
        </div>
        <h1 className="profile profile1"> EDUCATION</h1>
      </div>

      <div>
        <h1 className="head1">
          2016-2020
          <br />
          <br />
          <br />
          <br /> 2013-2016
        </h1>
      </div>
      <div>
        <h1 className="para1">
          Alabam College of Design and Technology * Cum Laude
        </h1>
        <p className="para2">Bachelor of Fine Arts Major in Advertising</p>
        <h1 className="para1">
          Helena All Girls Senior High School * Valedictorian
        </h1>
        <p className="para2">President of Art and Design Club</p>
      </div>
    </div>
  </div>
)

export default App
