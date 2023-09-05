import { render, screen } from "@testing-library/react";
import { SkeletonCardInfo } from "./SkeletonCardInfo";

describe('SkeletonCardInfo component', () => {
    it('renders', () => {
        render(<SkeletonCardInfo/>)

        const skeleton = screen.getByTestId('skeleton-card')
        expect(skeleton).toBeInTheDocument()
    })
});
