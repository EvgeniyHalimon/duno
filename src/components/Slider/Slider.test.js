/* eslint-disable testing-library/no-node-access */
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Slider } from './Slider'; 

describe('Slider component', () => {
  it('renders children and controls correctly', () => {
    const children = [
      <div key={1}>Child 1</div>,
      <div key={2}>Child 2</div>,
      <div key={3}>Child 3</div>,
    ];

    render(<Slider>{children}</Slider>);

    const sliderShow = screen.getByTestId('slider');
    expect(sliderShow).toBeInTheDocument();

    children.forEach((child) => {
      expect(screen.getByText(child.props.children)).toBeInTheDocument();
    });

    const dots = screen.getAllByTestId('slide-dot');
    expect(dots.length).toBe(children.length);

    fireEvent.click(dots[1]);
    expect(screen.getByText(children[1].props.children)).toBeInTheDocument();
  });

  it('automatically changes slides', async () => {
    jest.useFakeTimers();

    const children = [
      <div key={1}>Child 1</div>,
      <div key={2}>Child 2</div>,
      <div key={3}>Child 3</div>,
    ];

    render(<Slider>{children}</Slider>);

    expect(screen.getByText(children[0].props.children)).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(10000)
    })

    expect(screen.getByText(children[1].props.children)).toBeInTheDocument();

    jest.useRealTimers();
  });

  it('renders skeleton card info when children are not available', () => {
    render(<Slider>{[]}</Slider>);

    const skeletonPoster = screen.getByTestId('skeleton-card');
    const skeletonInfo = screen.getByTestId('skeleton-info');

    expect(skeletonPoster).toBeInTheDocument();
    expect(skeletonInfo).toBeInTheDocument();
  })
})