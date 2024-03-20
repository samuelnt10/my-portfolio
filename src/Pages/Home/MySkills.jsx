import React from "react";
import data from "../../data/index.json";

export default function MySkills() {
  // Get the first two elements from the data array
  const limitedData = data?.skills?.slice(0, 2);

  // Update the titles and descriptions of the first two items
  if (limitedData.length >= 2) {
    limitedData[0].title = "École Seondaire Catholique Sainte Trinité (Sept 2015 - June 2021)";
    limitedData[0].description = "Fully French high school spanning from grade 7-12";
    
    limitedData[1].title = "George Brown College (Sept 2021 - April 2024)";
    limitedData[1].description = (
      <>
        Full Stack Development<br />
        Data Science<br />
        Mobile Application Development<br />
        Capstone Project<br />
        Data Structures and Algorithms<br />
        Advanced Database Development
      </>
    );
  }

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <div className="center-heading">
          <h1 className="skills--section--heading">Academic Credentials</h1>
        </div>
      </div>
      <div className="skills--section--container">
        {limitedData?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
