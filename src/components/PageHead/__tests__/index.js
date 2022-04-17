import React from 'react';
import { useHistory } from 'react-router-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import PageHead from '../PageHead';

describe('src/components/elements/PageHead', () => {
  test('render', () => {
    const data = { isFilter: true, isButton: true, profile: { name: 'test' } };
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<PageHead {...data} />);
    PageHead.defaultProps.onClick();
    expect(tree).toMatchSnapshot();
  });

  test('without custom icon and items === 2', () => {
    const items = [
      { name: 'Dashboard', url: '/' },
      { name: 'Pendaftaran', url: '/new-user' }
    ];
    const result = PageHead({ ...PageHead.defaultProps, items, icon: '' });
    expect(result.props.children[1].props.children[0]).toBe(null);
  });

  test('without custom icon and items !== 2', () => {
    const items = [
      { name: 'Dashboard', url: '/' },
      { name: 'Pendaftaran', url: '/new-user' },
      { name: 'Tahap Pendaftaran Pelanggan' }
    ];
    const history = { push: jest.fn() };
    useHistory.mockImplementationOnce(() => history);
    const result = PageHead({ ...PageHead.defaultProps, items, icon: '' });
    result.props.children[1].props.children[0].props.onClick();
    expect(history.push).toHaveBeenCalledWith('/new-user');
  });

  test('with custom icon', () => {
    const items = [
      { name: 'Dashboard', url: '/' },
      { name: 'Pendaftaran', url: '/new-user' },
      { name: 'Tahap Pendaftaran Pelanggan' }
    ];
    const result = PageHead({ ...PageHead.defaultProps, items, icon: 'ic-back' });
    expect(result.props.children[1].props.children[0].props.src).toBe('ic-back');
  });
});
