const revenues = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const totalRevenue = Object.values(revenues).reduce(
  (acc, value) => acc + value,
  0
);

const percentageRepresentation = {};
for (const [state, revenue] of Object.entries(revenues)) {
  percentageRepresentation[state] = ((revenue / totalRevenue) * 100).toFixed(2);
}

for (const [state, percentage] of Object.entries(percentageRepresentation)) {
  console.log(`${state}: ${percentage}%`);
}
