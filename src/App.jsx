import { QuizContextProvider } from "./context/quiz";
import { GameContextProvider } from "./context/game";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Root from "./routes/Root";
import Quiz from "./pages/Quiz";
import EditQuiz from "./pages/EditQuiz";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="quiz/:quizId" element={<Quiz />} />
        <Route path="editquiz/:quizId" element={<EditQuiz />} />
      </Route>
    )
  );
  return (
    <QuizContextProvider>
      <GameContextProvider>
        <RouterProvider router={router} />
      </GameContextProvider>
    </QuizContextProvider>
  );
}

export default App;
