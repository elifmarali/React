import userEvent from "@testing-library/user-event";
import Counter from "./Counter";
import { render, screen, fireEvent } from "@testing-library/react";


//describe icinde birden cok test yazilabilir
//ilk testi calsiitrmadan once beforeEach kismi calistirilir
//incrementBtn decrementBtn ve count degerini doldur  sonra
// ilk testi calistir 
// ilk test bittikten sonra tekrar beforeEach kismini calistir ve sonra ikinci testi calistir
//ucuncu bir test olsa ucuncu testi calistirmadan once yine beforeEach bir kez calisacakti
//beforeAll ise tum testlerden once sadece bir kez calisir ve sonra calismaz
//afterAll ise en son bir kere calisir ve sonra calismaz
//afterEach ise  her testten sonra her test icin calisir
describe("Counter Test", () => {
    let count, increaseBtn, decreaseBtn;
    beforeEach(() => {
        console.log("Her testten once birer kez calisacagim");
        render(<Counter />);
        count = screen.getByText("0");
        increaseBtn = screen.getByText("Increase");
        decreaseBtn = screen.getByText("Decrease");
    })
    beforeAll(() => {
        console.log("Bir kere en basta calisacagim");
    })
    afterAll(() => {
        console.log("Bir kere en son calisacagim");
    })
    afterEach(() => {
        console.log("Her testten sonra bir kere calisacagim");

    })
    test("increase btn", () => {
        fireEvent.click(increaseBtn);
        expect(count).toHaveTextContent("1");
    })
    test("decrease btn", () => {
        fireEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("-1");
    })
})




