const { render, screen } = require('@testing-library/react');
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />);
    expect(screen.getByRole('img', { name: /title 1/i })).toHaveAttribute('src', props.cover);
    expect(screen.getByRole('heading', { name: 'Title 1' })).toBeInTheDocument();
    expect(screen.getByText('Body 1')).toBeInTheDocument();
  });

  it('should match snapshot', async () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
