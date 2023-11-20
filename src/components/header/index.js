import "./style.css"

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://www.terriblytinytales.com/img/home/ttt.svg" alt="logo"></img>
        <p>stories</p>
      </div>
      <button className="courses">Courses</button>
    </div>
  );
}
