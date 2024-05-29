import { screen, fireEvent, render, act } from "@testing-library/react";
import Todo from "./Todo";
import userEvent from "@testing-library/user-event";


describe("Todo Test", () => {
    let btn, input;
    beforeEach(() => {
        render(<Todo />);
        btn = screen.getByText("Add");
        input = screen.getByPlaceholderText("todoInput");
    })
    test("default verilen 3 nesne render edilmeli", () => {
        const items = screen.getAllByPlaceholderText("todoItem");
        expect(items.length).toEqual(3);
    })
    test("input ve buton dokumanda bulunmali", () => {
        expect(btn).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    })
    test("inputa bir sey girilip butona basilinca listeye eklenmeli", () => {
        //inputu doldur
        const name = "Elif";
        userEvent.type(input, name);
        //butona tikla
        fireEvent.click(btn);
        //assertion
        expect(screen.getByText(name)).toBeInTheDocument();

    })
})