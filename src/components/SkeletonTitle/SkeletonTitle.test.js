import { render, screen } from "@testing-library/react";
import SkeletonTitle from "./SkeletonTitle";

describe('Loading SkeletonTitle', () => {
    it('rendering', () => {
        render(<SkeletonTitle/>)

        const skeleton = screen.getByTestId('skeleton-title')
        expect(skeleton).toBeInTheDocument()
    });
});
