import "./home.css";
import Pomodoro from "./components/Pomodoro";
import Todo from "./components/Todo";
import Music from "./components/Music";
function Home(){
    return (
        <div className="flex">
        <Pomodoro/>
        <Todo/>
        <Music/>

        </div>
    )
}
export default Home;