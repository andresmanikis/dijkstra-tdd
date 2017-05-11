const PathFinder = require('../src/path-finder');

const assertMinPath = (graph, expectedMinLength, expectedMinPath) => {
  const pf = new PathFinder(graph);
  expect(pf.minLength('A', 'Z')).toBe(expectedMinLength);
  expect(pf.minPath('A', 'Z')).toBe(expectedMinPath);
};

describe('Dijkstra\'s algorithm', () => {
  it('should be true', () => {
    expect(true).toBe(true);
  });

  it('should return zero length and empty path for degenerate cases', () => {
    assertMinPath('', 0, '{}'); // empty graph
    assertMinPath('A', 0, '{}'); // one node
    assertMinPath("B1C", 0, "{}"); // no start or end
    assertMinPath("A1C", 0, "{}"); // no end
    assertMinPath("B1Z", 0, "{}"); // no start
  });
});