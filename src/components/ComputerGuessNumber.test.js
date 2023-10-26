import { render, fireEvent, screen } from '@testing-library/react';
import ComputerGuessNumber from './ComputerGuessNumber';
import useGuessNumberComputer from '../framework/hooks/useGuessNumberComputer';

// Mock the useGuessNumberComputer hook
jest.mock('../framework/hooks/useGuessNumberComputer');

describe('ComputerGuessNumber', () => {
  it('renders computer guess and buttons when the game is not completed', () => {
    // Mock the useGuessNumberComputer hook return values
    useGuessNumberComputer.mockReturnValue({
      isGameCompleted: false,
      guess: 5000, // Mock a guess value
      handleUserResponse: jest.fn(), // Mock the function
      userNumber: 2500, // Mock a user number
    });

    render(<ComputerGuessNumber />)

    // Check if the computer's guess is displayed
    expect(screen.getByText(/Computer's guess:/i)).toBeInTheDocument();
    expect(screen.getByText(/5000/i)).toBeInTheDocument();

    // Check if the buttons are displayed
    expect(screen.getByText(/Too Low/i)).toBeInTheDocument();
    expect(screen.getByText(/Too High/i)).toBeInTheDocument();
    expect(screen.getByText(/Correct/i)).toBeInTheDocument();

    // Optionally, you can also simulate button clicks and test that handleUserResponse is called correctly
    const tooLowButton = screen.getByText(/Too Low/i);
    const tooHighButton = screen.getByText(/Too High/i);
    const correctButton = screen.getByText(/Correct/i);

    fireEvent.click(tooLowButton);
    expect(useGuessNumberComputer().handleUserResponse).toHaveBeenCalledWith('tooLow');

    fireEvent.click(tooHighButton);
    expect(useGuessNumberComputer().handleUserResponse).toHaveBeenCalledWith('tooHigh');

    fireEvent.click(correctButton);
    expect(useGuessNumberComputer().handleUserResponse).toHaveBeenCalledWith('correct');
  });

  it('renders final guess and restart button when the game is completed', () => {
    // Mock the useGuessNumberComputer hook return values
    useGuessNumberComputer.mockReturnValue({
      isGameCompleted: true,
      guess: 5000, // Mock a guess value
      handleUserResponse: jest.fn(), // Mock the function
      userNumber: 2500, // Mock a user number
    });

    render(<ComputerGuessNumber />);

    // Check if the final guess is displayed
    expect(screen.getByText(/Final Guessed Number:/i)).toBeInTheDocument();
    expect(screen.getByText(/5000/i)).toBeInTheDocument();

    // Check if the restart button is displayed
    expect(screen.getByText(/Restart/i)).toBeInTheDocument();

    // Optionally, you can also simulate the restart button click and test that handleUserResponse is called correctly
    const restartButton = screen.getByText(/Restart/i);

    fireEvent.click(restartButton);
    expect(useGuessNumberComputer().handleUserResponse).toHaveBeenCalledWith('restart');
  });
});
