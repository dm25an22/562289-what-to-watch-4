// import React from 'react';
// import withSmallVideoPlayer from './with-small-video-player';
// import {shallow} from 'enzyme';
// import {mockFilms} from '../../mocks/mock-for-tests';

// const MockComponent = () => <div />;
// const MockComponentWrapped = withSmallVideoPlayer(MockComponent);

// it(`return default state isPlaing: false`, () => {
//   const tree = shallow(
//       <MockComponentWrapped film={mockFilms[0]}/>
//   );

//   expect(tree.props().isPlaing).toEqual(false);
// });

// it(`startPlayHandler starts playing video `, () => {
//   const tree = shallow(
//       <MockComponentWrapped film={mockFilms[0]}/>
//   );

//   tree.props().startPlayHandler();
//   expect(tree.props().isPlaing).toEqual(true);
// });
