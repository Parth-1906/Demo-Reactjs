import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// useEffect(() => {
//   async function fetchUserData() {
//       try {
//           const response = await axios.post('https://dev.elred.io/noSessionProfileDetails?userCode=66961e8dcc9a8155d09b8c9b');
//           setUser(response.data);
//       } catch (error) {
//           console.error('Error fetching user data:', error);
//       }
//   }

//   fetchUserData();
// }, []);
