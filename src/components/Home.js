import React from 'react';

const Home = () => {
  return (
    <section id="home">
      <div className="container-fluid">
        <div className="row" style={{ backgroundColor:"rgb(200, 200, 200)"}} >
          <div className="col-md-6 d-flex flex-column align-items-start mt-4">
            <h1 style={{ color: "teal" }}><b>Hey! I am</b></h1>
            <h1 style={{color:"brown"}}><b>Medha Narayan</b></h1><br></br>
            <p style={{ textAlign: "left", color:"darkcyan" }}>CSE student from VIT.</p><br></br>
            <button className="btn btn-outline-dark">Contact Me</button>
          </div>
          <div className="col-md-6">
            <img 
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1931674c-b4c7-4333-b2b7-7b4c4399ec48/dg2zdtq-88c6cc82-615a-455a-8618-1acc1800c083.png/v1/fill/w_894,h_894,q_70,strp/beautiful_avatar_profilepicture_by_ventulart_dg2zdtq-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE5MzE2NzRjLWI0YzctNDMzMy1iMmI3LTdiNGM0Mzk5ZWM0OFwvZGcyemR0cS04OGM2Y2M4Mi02MTVhLTQ1NWEtODYxOC0xYWNjMTgwMGMwODMucG5nIiwiaGVpZ2h0IjoiPD05MDAiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzE5MzE2NzRjLWI0YzctNDMzMy1iMmI3LTdiNGM0Mzk5ZWM0OFwvdmVudHVsYXJ0LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.QwWKi5PcoNk_fDjaQIl0qsih2fp2ohWekPs6LZ__kyY"
              alt="Hero"
              className="img-fluid rounded-circle w-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
