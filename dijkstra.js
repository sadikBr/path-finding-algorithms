const graphSize = 10;
const startPoint = [5, 5];

const graph = initializeGraph(graphSize, startPoint);

dijkstra(graph);

function dijkstra(graph) {
  console.table(graph);
}

// Pseudocode
// function Dijkstra(Graph, startPoint):
//     dist[startPoint] ← 0                       // Initialization
//     create vertex priority queue Q
//     for each vertex v in Graph:
//         if v ≠ startPoint
//             dist[v] ← INFINITY                 // Unknown distance from startPoint to v
//             prev[v] ← UNDEFINED                // Predecessor of v

//         Q.add_with_priority(v, dist[v])

//     while Q is not empty:                      // The main loop
//         u ← Q.extract_min()                   // Remove and return best vertex
//         for each neighbor v of u:              // Only v that are still in Q
//             alt ← dist[u] + length(u, v)
//             if alt < dist[v]
//                 dist[v] ← alt
//                 prev[v] ← u
//                 Q.decrease_priority(v, alt)

//     return dist, prev

// Utility functions
function initializeGraph(size, startPoint) {
  const [row, col] = startPoint;
  const graph = [];
  for (let i = 0; i < size; i++) {
    const graphRow = [];
    for (let j = 0; j < size; j++) {
      if (row === i && col === j) {
        graphRow.push(0);
      } else {
        graphRow.push(Infinity);
      }
    }
    graph.push(graphRow);
  }

  return graph;
}
