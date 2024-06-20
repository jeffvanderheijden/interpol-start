const N = 10000;
// endLat, endLng, startLat, startLng
const arcsData = [
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 46.227638,
    startLng: 2.213749,
    color: ["red", "red"],
    stroke: 0.35,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 56.130366,
    startLng: -106.34677099999999,
    color: ["red", "red"],
    stroke: 0.39,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 40.463667,
    startLng: -3.7492199999999998,
    color: ["red", "red"],
    stroke: 0.28,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 4.210483999999999,
    startLng: 101.97576600000001,
    color: ["red", "red"],
    stroke: 0.13,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 51.165690999999995,
    startLng: 10.451526,
    color: ["red", "red"],
    stroke: 0.32,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 23.634501,
    startLng: -102.552784,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.15,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 23.885942,
    startLng: 45.079162,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.19,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 50.503887,
    startLng: 4.469936,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.16,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 60.128161,
    startLng: 18.643501,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.23,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: -14.235004,
    startLng: -51.92528,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.16,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 46.818188,
    startLng: 8.227511999999999,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.16,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: -40.900557,
    startLng: 174.88597099999998,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.12,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 51.919438,
    startLng: 19.145135999999997,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.18,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 26.820553000000004,
    startLng: 30.802497999999996,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.24,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 9.145,
    startLng: 40.489672999999996,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.13,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 33.886917,
    startLng: 9.537499,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.22,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 21.512583,
    startLng: 55.923255000000005,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: -30.559482,
    startLng: 22.937506,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.11,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 20.593684,
    startLng: 78.96288,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.16,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 15.552726999999999,
    startLng: 48.516388,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: -0.023559,
    startLng: 37.906193,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.12,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 28.033886,
    startLng: 1.6596259999999998,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.12,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 4.570868,
    startLng: -74.297333,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.15,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 31.046051000000002,
    startLng: 34.851612,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 29.311659999999996,
    startLng: 47.481766,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.15,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 36.204824,
    startLng: 138.252924,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.14,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 41.87194,
    startLng: 12.56738,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.16,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 39.074208,
    startLng: 21.824312,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.13,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: -25.274398,
    startLng: 133.775136,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.14,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 56.879635,
    startLng: 24.603189,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.11,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 1.352083,
    startLng: 103.819836,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 39.399871999999995,
    startLng: -8.224454,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.13,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 47.162494,
    startLng: 19.503304,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.12,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 32.427908,
    startLng: 53.68804599999999,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.12,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 45.1,
    startLng: 15.2,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 28.394857000000002,
    startLng: 84.12400799999999,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: -0.789275,
    startLng: 113.921327,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.11,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: -1.8312389999999998,
    startLng: -78.183406,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: -35.675146999999996,
    startLng: -71.542969,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: -6.369028,
    startLng: 34.888822,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 1.373333,
    startLng: 32.290275,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 30.375321000000003,
    startLng: 69.345116,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.11,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 38.963745,
    startLng: 35.243322,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.12,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 42.733883,
    startLng: 25.48583,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 49.817492,
    startLng: 15.472961999999999,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.11,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 45.943160999999996,
    startLng: 24.96676,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.13,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 48.379433,
    startLng: 31.16558,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.12,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 41.153332,
    startLng: 20.168331,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 33.854721000000005,
    startLng: 35.862285,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.11,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 9.081999,
    startLng: 8.675277000000001,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.11,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 14.058323999999999,
    startLng: 108.277199,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.13,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 61.92411,
    startLng: 25.748151,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.12,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 60.472024,
    startLng: 8.468946,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.11,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 56.26392,
    startLng: 9.501785,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.11,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 35.907757000000004,
    startLng: 127.766922,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.11,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: -9.189967,
    startLng: -75.015152,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.11,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 12.879721,
    startLng: 121.77401699999999,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 40.143105,
    startLng: 47.576927000000005,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 41.377491,
    startLng: 64.585262,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 7.946527000000001,
    startLng: -1.0231940000000002,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 58.595271999999994,
    startLng: 25.013607,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.11,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 48.019573,
    startLng: 66.923684,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: -38.416097,
    startLng: -63.616671999999994,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.11,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 43.750298,
    startLng: 7.412841,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.11,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 46.151241,
    startLng: 14.995463,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.11,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 61.52401,
    startLng: 105.31875600000001,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.12,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 12.862807,
    startLng: 30.217636,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 33.223191,
    startLng: 43.679291,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: -1.940278,
    startLng: 29.873888,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 25.354826,
    startLng: 51.183884,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
  {
    endLat: 52.591702,
    endLng: 4.40262,
    startLat: 9.748917,
    startLng: -83.753428,
    color: ["#ADFF2F", "#00FF00"],
    stroke: 0.1,
  },
];
const data = arcsData.slice(0, N);
export default data;
