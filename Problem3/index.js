const data = {
  monthlyRevenue: [
    1200.5,
    null,
    850.75,
    1000.0,
    null,
    0,
    1230.4,
    1120.6,
    null,
    1325.0,
    980.5,
    null,
    1100.75,
    null,
    1000.25,
    null,
    1235.4,
    null,
    0,
    1250.75,
    1180.65,
    null,
    1200.85,
    1020.4,
    null,
    1290.0,
    970.5,
    null,
    1350.25,
    0,
  ],
};

if (data.monthlyRevenue.length === 0) {
  console.log("No revenue data available.");
} else {
  let sum = 0;
  let qt_days = 0;
  let smallest = Infinity;
  let biggest = -Infinity;
  let low_average = 0;

  for (const revenue of data.monthlyRevenue) {
    if (revenue === null) continue;

    qt_days++;
    sum += revenue;
    if (revenue < smallest) smallest = revenue;
    if (revenue > biggest) biggest = revenue;
  }

  const average = sum / qt_days;

  low_average = data.monthlyRevenue.filter(
    (revenue) => revenue !== null && revenue < average
  ).length;

  console.log("O menor valor de faturamento ocorrido: " + smallest);
  console.log("O maior valor de faturamento ocorrido: " + biggest);
  console.log("Média de faturamento do mês: ", average.toFixed(2));
  console.log(
    "Quantidade de dias cujo faturamento ficou abaixo da média: ",
    low_average
  );
}
