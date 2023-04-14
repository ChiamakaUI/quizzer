import { QuizContextProvider } from "./context/quiz";
import { GameContextProvider } from "./context/game";
import { QueryClient, QueryClientProvider } from "react-query";
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

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <GameContextProvider>
          <RouterProvider router={router} />
        </GameContextProvider>
      </QueryClientProvider>
    </QuizContextProvider>
  );
}

export default App;
