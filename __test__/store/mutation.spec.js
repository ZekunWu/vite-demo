import mutations from '../../src/store/mutations';

describe('test Store Mutation', () => {
  test('increment add 1 equal 1', () => {
    const state = {
      count: 0,
    };
    mutations.increment(state);
    expect(state.count).toBe(1);
  });
});
