import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Breadcrumbs from '../Breadcrumbs';

describe('src/components/elements/Breadcrumbs', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Breadcrumbs />);
    expect(tree).toMatchSnapshot();
  });

  test('with items', () => {
    const items = [
      { name: 'a', url: '/a' },
      { name: 'b', url: '/b' }
    ];
    const result = Breadcrumbs({ items });
    expect(result.props.children[2].props.children[1]).toBe();
  });

  test('items with 1 data', () => {
    const items = [
      { name: 'a', url: '/a' }
    ];
    const result = Breadcrumbs({ items });
    expect(result.props.children[0]).toBe('');
  });
});
