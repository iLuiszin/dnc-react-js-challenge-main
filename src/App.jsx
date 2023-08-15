import Header from "./components/Header/Header"
import Scheduler from "./components/Scheduler/Scheduler"
import { TASKS_MOCK } from "./mock/tasks.mock"

function App() {

  return (
    <>
      <Header />
      <Scheduler tasks={TASKS_MOCK} />
    </>
  )
}

export default App
