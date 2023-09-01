/* eslint-disable testing-library/no-unnecessary-act */
import { renderHook, act } from "@testing-library/react-hooks";
import useDebounce from "./useDebounce";

describe("useDebounce hook", () => {
  it("should return the initial value", () => {
    const { result } = renderHook(() => useDebounce("initialValue", 300));
    expect(result.current).toBe("initialValue");
  });

  it("should return the updated value after the delay", async () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 300),
      {
        initialProps: { value: "initialValue" },
      }
    );

    act(() => {
      rerender({ value: "updatedValue" });
    });

    await new Promise((resolve) => setTimeout(resolve, 350));

    expect(result.current).toBe("updatedValue");
  });

  it("should cancel the previous debounce when the value changes rapidly", async () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 300),
      {
        initialProps: { value: "initialValue" },
      }
    );

    act(() => {
      rerender({ value: "updatedValue1" });
    });

    act(() => {
      rerender({ value: "updatedValue2" });
    });

    await new Promise((resolve) => setTimeout(resolve, 350));

    expect(result.current).toBe("updatedValue2");
  });

  it("should clear the debounce timer on unmount", async () => {
    const { result, unmount } = renderHook(() => useDebounce("initialValue", 300));

    unmount();

    await new Promise((resolve) => setTimeout(resolve, 350));

    expect(result.current).toBe("initialValue");
  });
});
