import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import { SignInContainer } from '../components/Sign/SignIn';

// ...

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      
      const onSubmit = jest.fn();

      render(<SignInContainer onSubmit={onSubmit}/>);

      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kirillos');
      fireEvent.changeText(screen.getByPlaceholderText('Password'), 'kirillos1');

      fireEvent.press(screen.getByText("Sign in"));




      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);

        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'kirillos',
          password: 'kirillos1',
        });
      });
    });
  });
});