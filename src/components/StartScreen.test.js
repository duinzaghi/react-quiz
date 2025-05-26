import { render, screen } from "@testing-library/react";
import StartScreen from "./StartScreen";
import { QuizProvider } from "../contexts/QuizContext";
import questions from "../../public/questions.json";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(questions),
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test("renders start screen with question count", async () => {
  render(
    <QuizProvider>
      <StartScreen />
    </QuizProvider>
  );

  const text = await screen.findByText(
    new RegExp(`${questions.length} questions to test your React mastery`)
  );
  expect(text).toBeInTheDocument();
});
