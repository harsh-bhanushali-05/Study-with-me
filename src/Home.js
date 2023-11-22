import "./home.css";
import Pomodoro from "./components/Pomodoro";
import Todo from "./components/Todo";
import Music from "./components/Music";
function Home() {
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="flex">
      <Pomodoro className="pomodoro" />
      {isMobile == false ? (
          <Todo className="TODO" />
      ) : (
          <Music className="music" />  
      )}
      {isMobile==false?<Music className="music" />:<Todo className="TODO" />}
    </div>
  );
}
export default Home;
