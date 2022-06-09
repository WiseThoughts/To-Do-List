import { render, screen } from '@testing-library/react';
import App from "../App"


it("have a to-do-list", ()=>{
  render(<App/>);
  const toDoListElement = screen.getByTestId("to-do-list",{name:"To-Do-List"});
  expect(toDoListElement).toBeInTheDocument();
})


