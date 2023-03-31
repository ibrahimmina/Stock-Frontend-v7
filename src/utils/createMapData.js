export default function creatMapData(json_data) {
  var data = [["Country", "Number of Analyzed Stocks", "Average Rating"]];
  var subData = [];
  for (var i in json_data) {
    subData[0] = json_data[i]["_id"];
    subData[1] = json_data[i]["avgRating"];
    subData[2] = json_data[i]["count"];
    data.push(subData);
    subData = [];
  }

  return data;
}
