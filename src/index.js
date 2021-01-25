import ReactDOM from "react-dom";
import "./styles.css";
import moment from "moment";
import React from "react";

//database
const dataBase = [
  {
    Comment: 200
  },
  {
    id: 1,
    title: "Why I'm Suing The Us Government",
    url: "bunniestudios.com",
    points: 1346,
    author: "ivank",
    time: "2021-07-11 21:24:00",
    comment: 257
  },
  {
    id: 2,
    title: "zenizenzen",
    url: "wikipedia.org",
    points: 140,
    author: "avinchuko",
    time: "2021-07-11 21:24:00",
    comment: 40
  },
  {
    id: 3,
    title: "A practical Security Guide For web Developers",
    url: "github.com",
    points: 140,
    author: "vinchuko",
    time: "2021-07-11 21:24:00",
    comment: 6
  },
  {
    id: 4,
    title: "i got arrested in kazakhstan and bailed my self",
    url: "medium.com",
    points: 1370,
    author: "momoh",
    time: "2025-07-11 21:24:00",
    comment: 76
  },
  {
    id: 5,
    title: "The practical  Guide For machine Developers",
    url: "facebook.com",
    points: 1540,
    author: "beckham",
    time: "2021-07-11 21:24:00",
    comment: 6
  },
  {
    id: 6,
    title: "Security Guide For web Developers",
    url: "apple.com",
    points: 4140,
    author: "alomo",
    time: "2021-07-11 21:24:00",
    comment: 6
  },
  {
    id: 7,
    title: "A practical Security Guide For web Developers",
    url: "gmail.com",
    points: 1840,
    author: "chuko",
    time: "2021-07-11 21:24:00",
    comment: 6
  },
  {
    id: 8,
    title: "A practical  Developers Guide to React web development",
    url: "github.com",
    points: 2140,
    author: "Ahmed",
    time: "2020-07-11 21:24:00",
    comment: 6
  },
  {
    id: 9,
    title: " web Developers",
    url: "github.com",
    points: 190,
    author: "crespo",
    time: "2021-07-11  11:24:00",
    comment: 69
  },
  {
    id: 10,
    title: "Creating an all important step in marketting",
    url: "bitbucket.com",
    points: 24,
    author: "khalifa",
    time: "2021-07-11 21:24:00",
    comment: 1
  }
];
//navbar component
const Navbar = () => (
  <header className="navbar">
    <div className="navbar__title ">Y</div>
    <div className="navbar_header navbar__item">Hacker News</div>
    <div className="navbar__item">new</div>|
    <div className="navbar__item">threads</div>|
    <div className="navbar__item">comments</div>|
    <div className="navbar__item">show</div>|
    <div className="navbar__item">ask</div>|
    <div className="navbar__item">jobs</div>|
    <div className="navbar__item">submit</div>|
  </header>
);
//body component with data
const Body = ({ app }) => (
  <div className="data">
    <p>
      <b>
        {app.id}. {app.title} ({app.url})
      </b>
    </p>
    <span className="para">
      {app.points} points by {app.author} <Time />
    </span>

    <NavUnder />
  </div>
);
//time component
const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

//under Link component
const NavUnder = () => (
  <header className="navbar2">
    <div className="navbar__item">flag</div>|
    <div className="navbar__item">hide</div>|
    <div className="navbar__item">Comment</div>|
    <div className="navbar__item">instapaper</div>|
    <div className="navbar__item">save to pocket</div>|
  </header>
);

//my main component
const App = ({ apps }) => (
  <div>
    <Navbar />
    {apps.map((app) => (
      <Body key={app.id} app={app} />
    ))}
    <NavUnder />
  </div>
);

ReactDOM.render(<App apps={dataBase} />, document.querySelector("#root"));
