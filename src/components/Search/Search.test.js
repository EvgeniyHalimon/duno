import { render, screen, fireEvent } from "@testing-library/react";
import { Search } from "./Search";
import { useNavigate } from "react-router";
import { setToStorage } from "../../utils/storage";

jest.mock("react-router")
jest.mock("../../utils/storage");

describe("Search component", () => {
  it("renders input field", () => {
    render(<Search />);
    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();
  });

  it("updates state and storage on input change", () => {
    render(<Search />);
    const searchInput = screen.getByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "example" } });

    expect(searchInput.value).toBe("example");
    expect(setToStorage).toHaveBeenCalledWith("searchTerm", "example");
  });

  it("navigates on Enter key press", () => {
    const navigate = jest.fn(); 
    useNavigate.mockReturnValue(navigate); 

    render(<Search />);
    const searchInput = screen.getByTestId("search-input");

    fireEvent.keyDown(searchInput, { key: "Enter" });

    expect(navigate).toHaveBeenCalledWith({
      pathname: "/search-result-list",
      search: "?search=",
    });
  });
});
