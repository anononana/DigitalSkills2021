"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Receipts", [
      {
        sum: 200,
        userId: 1,
        printDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sum: 716,
        userId: 10,
        printDate: new Date("2019-07-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1519,
        userId: 3,
        printDate: new Date("2020-02-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 367,
        userId: 6,
        printDate: new Date("2020-11-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2946,
        userId: 10,
        printDate: new Date("2021-01-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1399,
        userId: 3,
        printDate: new Date("2020-11-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 839,
        userId: 7,
        printDate: new Date("2019-07-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1600,
        userId: 2,
        printDate: new Date("2019-06-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 324,
        userId: 3,
        printDate: new Date("2021-01-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2524,
        userId: 6,
        printDate: new Date("2019-05-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2439,
        userId: 1,
        printDate: new Date("2019-06-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1849,
        userId: 6,
        printDate: new Date("2020-06-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1684,
        userId: 5,
        printDate: new Date("2020-05-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 631,
        userId: 1,
        printDate: new Date("2019-08-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 368,
        userId: 1,
        printDate: new Date("2021-07-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2694,
        userId: 1,
        printDate: new Date("2019-10-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 970,
        userId: 1,
        printDate: new Date("2021-02-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2658,
        userId: 1,
        printDate: new Date("2019-08-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1527,
        userId: 1,
        printDate: new Date("2021-05-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 125,
        userId: 2,
        printDate: new Date("2020-11-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1418,
        userId: 7,
        printDate: new Date("2020-10-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 927,
        userId: 3,
        printDate: new Date("2020-06-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1622,
        userId: 4,
        printDate: new Date("2020-03-31T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 769,
        userId: 10,
        printDate: new Date("2021-01-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 673,
        userId: 1,
        printDate: new Date("2020-08-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2905,
        userId: 5,
        printDate: new Date("2019-05-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 794,
        userId: 2,
        printDate: new Date("2019-08-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1418,
        userId: 6,
        printDate: new Date("2020-07-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1163,
        userId: 10,
        printDate: new Date("2021-08-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2851,
        userId: 2,
        printDate: new Date("2020-05-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2004,
        userId: 6,
        printDate: new Date("2019-12-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2410,
        userId: 8,
        printDate: new Date("2020-02-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1719,
        userId: 9,
        printDate: new Date("2021-01-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1201,
        userId: 4,
        printDate: new Date("2020-10-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2522,
        userId: 1,
        printDate: new Date("2019-04-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 206,
        userId: 7,
        printDate: new Date("2021-09-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1918,
        userId: 6,
        printDate: new Date("2020-08-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2215,
        userId: 8,
        printDate: new Date("2021-08-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1466,
        userId: 10,
        printDate: new Date("2019-04-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 394,
        userId: 10,
        printDate: new Date("2019-12-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1731,
        userId: 6,
        printDate: new Date("2019-09-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2884,
        userId: 6,
        printDate: new Date("2019-12-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1214,
        userId: 5,
        printDate: new Date("2019-12-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 621,
        userId: 5,
        printDate: new Date("2020-09-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1234,
        userId: 9,
        printDate: new Date("2021-03-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1720,
        userId: 7,
        printDate: new Date("2020-04-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1444,
        userId: 4,
        printDate: new Date("2019-08-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2929,
        userId: 4,
        printDate: new Date("2020-08-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2692,
        userId: 10,
        printDate: new Date("2021-02-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1252,
        userId: 4,
        printDate: new Date("2020-12-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 970,
        userId: 5,
        printDate: new Date("2021-06-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1218,
        userId: 9,
        printDate: new Date("2021-02-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1258,
        userId: 9,
        printDate: new Date("2020-05-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2241,
        userId: 7,
        printDate: new Date("2019-10-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2002,
        userId: 5,
        printDate: new Date("2019-04-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2961,
        userId: 4,
        printDate: new Date("2021-06-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 505,
        userId: 10,
        printDate: new Date("2020-01-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1986,
        userId: 7,
        printDate: new Date("2020-08-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 449,
        userId: 6,
        printDate: new Date("2019-09-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2075,
        userId: 1,
        printDate: new Date("2020-10-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1829,
        userId: 10,
        printDate: new Date("2019-03-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1882,
        userId: 9,
        printDate: new Date("2021-08-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2212,
        userId: 1,
        printDate: new Date("2019-02-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 155,
        userId: 2,
        printDate: new Date("2021-01-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2918,
        userId: 8,
        printDate: new Date("2020-11-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2876,
        userId: 4,
        printDate: new Date("2021-05-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1464,
        userId: 10,
        printDate: new Date("2020-08-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2588,
        userId: 3,
        printDate: new Date("2020-02-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1108,
        userId: 7,
        printDate: new Date("2021-03-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 969,
        userId: 3,
        printDate: new Date("2019-08-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1663,
        userId: 8,
        printDate: new Date("2021-03-16T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2559,
        userId: 2,
        printDate: new Date("2020-10-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 700,
        userId: 1,
        printDate: new Date("2020-07-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 574,
        userId: 3,
        printDate: new Date("2019-11-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2616,
        userId: 2,
        printDate: new Date("2021-01-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1947,
        userId: 7,
        printDate: new Date("2021-06-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2742,
        userId: 2,
        printDate: new Date("2019-09-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1200,
        userId: 3,
        printDate: new Date("2019-06-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 266,
        userId: 8,
        printDate: new Date("2020-12-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2024,
        userId: 3,
        printDate: new Date("2019-08-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 486,
        userId: 5,
        printDate: new Date("2021-01-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2455,
        userId: 5,
        printDate: new Date("2020-03-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2809,
        userId: 2,
        printDate: new Date("2020-08-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 135,
        userId: 8,
        printDate: new Date("2019-10-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 992,
        userId: 4,
        printDate: new Date("2020-10-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 846,
        userId: 10,
        printDate: new Date("2019-05-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2011,
        userId: 8,
        printDate: new Date("2021-08-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2727,
        userId: 4,
        printDate: new Date("2019-04-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2891,
        userId: 2,
        printDate: new Date("2020-05-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1987,
        userId: 8,
        printDate: new Date("2020-02-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2814,
        userId: 6,
        printDate: new Date("2021-02-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1076,
        userId: 1,
        printDate: new Date("2021-04-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1815,
        userId: 1,
        printDate: new Date("2020-09-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1006,
        userId: 8,
        printDate: new Date("2020-07-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1056,
        userId: 9,
        printDate: new Date("2020-02-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2970,
        userId: 1,
        printDate: new Date("2021-06-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1576,
        userId: 9,
        printDate: new Date("2021-01-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1818,
        userId: 1,
        printDate: new Date("2020-07-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 851,
        userId: 3,
        printDate: new Date("2019-02-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1952,
        userId: 9,
        printDate: new Date("2019-11-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2805,
        userId: 3,
        printDate: new Date("2019-11-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 620,
        userId: 1,
        printDate: new Date("2019-07-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1558,
        userId: 10,
        printDate: new Date("2019-10-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2476,
        userId: 7,
        printDate: new Date("2021-07-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1538,
        userId: 4,
        printDate: new Date("2019-01-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1308,
        userId: 6,
        printDate: new Date("2020-05-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2098,
        userId: 10,
        printDate: new Date("2019-03-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1853,
        userId: 2,
        printDate: new Date("2021-09-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2001,
        userId: 4,
        printDate: new Date("2020-06-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 735,
        userId: 1,
        printDate: new Date("2021-03-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2391,
        userId: 10,
        printDate: new Date("2019-07-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1028,
        userId: 4,
        printDate: new Date("2020-02-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 741,
        userId: 2,
        printDate: new Date("2021-03-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 697,
        userId: 5,
        printDate: new Date("2019-04-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1916,
        userId: 7,
        printDate: new Date("2019-05-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2457,
        userId: 1,
        printDate: new Date("2020-10-16T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1687,
        userId: 9,
        printDate: new Date("2020-10-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1693,
        userId: 10,
        printDate: new Date("2021-05-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 773,
        userId: 4,
        printDate: new Date("2019-05-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1094,
        userId: 6,
        printDate: new Date("2020-12-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2036,
        userId: 3,
        printDate: new Date("2021-06-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1474,
        userId: 1,
        printDate: new Date("2020-12-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2214,
        userId: 2,
        printDate: new Date("2021-08-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1810,
        userId: 2,
        printDate: new Date("2020-02-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2036,
        userId: 5,
        printDate: new Date("2020-04-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2962,
        userId: 10,
        printDate: new Date("2020-03-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2582,
        userId: 9,
        printDate: new Date("2019-09-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2656,
        userId: 7,
        printDate: new Date("2019-08-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 539,
        userId: 3,
        printDate: new Date("2019-01-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1054,
        userId: 1,
        printDate: new Date("2019-02-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 902,
        userId: 9,
        printDate: new Date("2020-09-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 361,
        userId: 6,
        printDate: new Date("2019-07-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 701,
        userId: 2,
        printDate: new Date("2020-10-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1321,
        userId: 1,
        printDate: new Date("2021-07-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2102,
        userId: 10,
        printDate: new Date("2020-10-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 754,
        userId: 9,
        printDate: new Date("2020-04-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1233,
        userId: 3,
        printDate: new Date("2019-12-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2101,
        userId: 5,
        printDate: new Date("2020-11-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1506,
        userId: 8,
        printDate: new Date("2020-09-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2007,
        userId: 4,
        printDate: new Date("2021-02-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2159,
        userId: 4,
        printDate: new Date("2019-03-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2756,
        userId: 4,
        printDate: new Date("2019-11-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2418,
        userId: 6,
        printDate: new Date("2021-07-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 921,
        userId: 8,
        printDate: new Date("2021-04-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2395,
        userId: 5,
        printDate: new Date("2021-01-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1048,
        userId: 2,
        printDate: new Date("2020-12-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1808,
        userId: 10,
        printDate: new Date("2019-12-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1654,
        userId: 10,
        printDate: new Date("2021-04-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2133,
        userId: 6,
        printDate: new Date("2020-01-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2840,
        userId: 7,
        printDate: new Date("2021-01-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1812,
        userId: 6,
        printDate: new Date("2021-04-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2627,
        userId: 8,
        printDate: new Date("2020-11-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2514,
        userId: 8,
        printDate: new Date("2020-10-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1054,
        userId: 5,
        printDate: new Date("2019-10-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1614,
        userId: 2,
        printDate: new Date("2020-04-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1620,
        userId: 9,
        printDate: new Date("2019-02-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2774,
        userId: 2,
        printDate: new Date("2020-08-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2705,
        userId: 1,
        printDate: new Date("2020-01-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1346,
        userId: 2,
        printDate: new Date("2020-04-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 810,
        userId: 3,
        printDate: new Date("2020-12-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2784,
        userId: 9,
        printDate: new Date("2021-08-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 657,
        userId: 7,
        printDate: new Date("2019-08-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2987,
        userId: 10,
        printDate: new Date("2020-12-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 316,
        userId: 5,
        printDate: new Date("2020-02-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 301,
        userId: 3,
        printDate: new Date("2020-05-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 258,
        userId: 1,
        printDate: new Date("2021-04-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1194,
        userId: 2,
        printDate: new Date("2020-11-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1085,
        userId: 1,
        printDate: new Date("2020-03-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 555,
        userId: 7,
        printDate: new Date("2020-04-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1357,
        userId: 5,
        printDate: new Date("2020-06-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 746,
        userId: 6,
        printDate: new Date("2020-07-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2763,
        userId: 5,
        printDate: new Date("2020-07-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1061,
        userId: 4,
        printDate: new Date("2020-02-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 783,
        userId: 6,
        printDate: new Date("2021-08-31T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1049,
        userId: 9,
        printDate: new Date("2020-10-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 618,
        userId: 9,
        printDate: new Date("2021-03-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2700,
        userId: 4,
        printDate: new Date("2019-06-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1927,
        userId: 9,
        printDate: new Date("2019-02-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 210,
        userId: 6,
        printDate: new Date("2021-04-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1625,
        userId: 1,
        printDate: new Date("2019-01-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2271,
        userId: 6,
        printDate: new Date("2020-04-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 644,
        userId: 9,
        printDate: new Date("2021-06-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2584,
        userId: 2,
        printDate: new Date("2021-05-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2791,
        userId: 8,
        printDate: new Date("2020-11-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1307,
        userId: 2,
        printDate: new Date("2020-10-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2158,
        userId: 1,
        printDate: new Date("2019-06-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2370,
        userId: 10,
        printDate: new Date("2021-05-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2049,
        userId: 6,
        printDate: new Date("2019-03-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1189,
        userId: 6,
        printDate: new Date("2020-12-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1612,
        userId: 9,
        printDate: new Date("2021-03-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2246,
        userId: 9,
        printDate: new Date("2019-10-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1299,
        userId: 5,
        printDate: new Date("2021-08-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1550,
        userId: 2,
        printDate: new Date("2021-09-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2294,
        userId: 4,
        printDate: new Date("2020-11-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2861,
        userId: 10,
        printDate: new Date("2020-10-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1483,
        userId: 3,
        printDate: new Date("2020-12-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1231,
        userId: 4,
        printDate: new Date("2020-07-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2002,
        userId: 8,
        printDate: new Date("2019-02-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 499,
        userId: 1,
        printDate: new Date("2019-01-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1293,
        userId: 9,
        printDate: new Date("2019-09-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 643,
        userId: 4,
        printDate: new Date("2019-09-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 213,
        userId: 2,
        printDate: new Date("2021-07-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1227,
        userId: 1,
        printDate: new Date("2020-10-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2077,
        userId: 3,
        printDate: new Date("2021-05-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 621,
        userId: 1,
        printDate: new Date("2020-10-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 636,
        userId: 8,
        printDate: new Date("2020-07-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1304,
        userId: 9,
        printDate: new Date("2020-01-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2981,
        userId: 2,
        printDate: new Date("2020-07-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 808,
        userId: 1,
        printDate: new Date("2019-03-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 788,
        userId: 3,
        printDate: new Date("2020-02-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2828,
        userId: 1,
        printDate: new Date("2019-11-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2236,
        userId: 6,
        printDate: new Date("2021-09-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1280,
        userId: 10,
        printDate: new Date("2021-02-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2227,
        userId: 1,
        printDate: new Date("2019-07-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 307,
        userId: 8,
        printDate: new Date("2019-04-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2132,
        userId: 5,
        printDate: new Date("2020-12-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1262,
        userId: 10,
        printDate: new Date("2019-12-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1425,
        userId: 10,
        printDate: new Date("2021-06-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2652,
        userId: 2,
        printDate: new Date("2019-07-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2184,
        userId: 8,
        printDate: new Date("2019-04-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2581,
        userId: 2,
        printDate: new Date("2020-12-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 807,
        userId: 8,
        printDate: new Date("2019-05-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1678,
        userId: 5,
        printDate: new Date("2020-03-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2041,
        userId: 8,
        printDate: new Date("2021-03-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2384,
        userId: 7,
        printDate: new Date("2021-03-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 586,
        userId: 10,
        printDate: new Date("2020-02-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1356,
        userId: 6,
        printDate: new Date("2020-08-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1101,
        userId: 9,
        printDate: new Date("2019-11-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 257,
        userId: 5,
        printDate: new Date("2019-04-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1303,
        userId: 9,
        printDate: new Date("2020-01-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2369,
        userId: 7,
        printDate: new Date("2019-04-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2062,
        userId: 9,
        printDate: new Date("2021-07-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1503,
        userId: 9,
        printDate: new Date("2021-08-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2993,
        userId: 2,
        printDate: new Date("2019-02-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 854,
        userId: 8,
        printDate: new Date("2019-06-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1693,
        userId: 7,
        printDate: new Date("2019-11-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 398,
        userId: 8,
        printDate: new Date("2019-09-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2364,
        userId: 3,
        printDate: new Date("2019-09-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1538,
        userId: 6,
        printDate: new Date("2019-11-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1271,
        userId: 2,
        printDate: new Date("2019-09-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 182,
        userId: 2,
        printDate: new Date("2020-08-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 335,
        userId: 9,
        printDate: new Date("2019-03-31T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2096,
        userId: 2,
        printDate: new Date("2021-03-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2632,
        userId: 7,
        printDate: new Date("2019-04-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1421,
        userId: 5,
        printDate: new Date("2020-01-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1766,
        userId: 1,
        printDate: new Date("2019-04-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 528,
        userId: 6,
        printDate: new Date("2021-03-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2356,
        userId: 4,
        printDate: new Date("2019-05-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 400,
        userId: 1,
        printDate: new Date("2020-02-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2613,
        userId: 2,
        printDate: new Date("2020-01-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1903,
        userId: 1,
        printDate: new Date("2020-09-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2160,
        userId: 10,
        printDate: new Date("2019-01-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1394,
        userId: 2,
        printDate: new Date("2021-04-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 348,
        userId: 9,
        printDate: new Date("2020-07-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1581,
        userId: 3,
        printDate: new Date("2019-01-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 613,
        userId: 4,
        printDate: new Date("2021-04-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2607,
        userId: 10,
        printDate: new Date("2020-02-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 708,
        userId: 3,
        printDate: new Date("2020-11-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1383,
        userId: 3,
        printDate: new Date("2021-03-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1383,
        userId: 10,
        printDate: new Date("2021-05-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2092,
        userId: 9,
        printDate: new Date("2021-07-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1363,
        userId: 3,
        printDate: new Date("2020-08-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1425,
        userId: 8,
        printDate: new Date("2020-04-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1143,
        userId: 2,
        printDate: new Date("2021-06-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 854,
        userId: 1,
        printDate: new Date("2020-10-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 842,
        userId: 3,
        printDate: new Date("2019-03-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 435,
        userId: 10,
        printDate: new Date("2020-11-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1701,
        userId: 1,
        printDate: new Date("2019-09-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2835,
        userId: 5,
        printDate: new Date("2021-03-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2863,
        userId: 3,
        printDate: new Date("2020-12-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 706,
        userId: 1,
        printDate: new Date("2019-07-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2883,
        userId: 4,
        printDate: new Date("2019-02-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1921,
        userId: 1,
        printDate: new Date("2021-08-31T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1332,
        userId: 8,
        printDate: new Date("2020-07-31T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1213,
        userId: 6,
        printDate: new Date("2021-02-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1603,
        userId: 10,
        printDate: new Date("2019-07-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 218,
        userId: 2,
        printDate: new Date("2021-09-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2232,
        userId: 4,
        printDate: new Date("2019-02-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 704,
        userId: 2,
        printDate: new Date("2021-03-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2045,
        userId: 5,
        printDate: new Date("2021-04-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2361,
        userId: 6,
        printDate: new Date("2020-04-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2268,
        userId: 2,
        printDate: new Date("2019-05-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2145,
        userId: 4,
        printDate: new Date("2020-10-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1852,
        userId: 7,
        printDate: new Date("2019-07-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 402,
        userId: 7,
        printDate: new Date("2019-07-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 378,
        userId: 2,
        printDate: new Date("2020-05-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1451,
        userId: 5,
        printDate: new Date("2020-04-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1927,
        userId: 10,
        printDate: new Date("2019-03-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2231,
        userId: 5,
        printDate: new Date("2020-11-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 534,
        userId: 8,
        printDate: new Date("2019-09-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 737,
        userId: 10,
        printDate: new Date("2020-08-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 502,
        userId: 7,
        printDate: new Date("2019-08-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 398,
        userId: 7,
        printDate: new Date("2019-12-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2039,
        userId: 9,
        printDate: new Date("2020-10-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1637,
        userId: 5,
        printDate: new Date("2020-07-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2395,
        userId: 7,
        printDate: new Date("2020-09-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2550,
        userId: 2,
        printDate: new Date("2021-08-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1035,
        userId: 3,
        printDate: new Date("2019-03-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1193,
        userId: 2,
        printDate: new Date("2020-08-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1249,
        userId: 1,
        printDate: new Date("2020-11-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1398,
        userId: 6,
        printDate: new Date("2020-06-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1259,
        userId: 4,
        printDate: new Date("2020-10-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1866,
        userId: 10,
        printDate: new Date("2019-02-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2971,
        userId: 10,
        printDate: new Date("2020-06-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 513,
        userId: 8,
        printDate: new Date("2020-08-31T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2455,
        userId: 1,
        printDate: new Date("2020-04-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1613,
        userId: 10,
        printDate: new Date("2021-04-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 217,
        userId: 4,
        printDate: new Date("2020-09-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 962,
        userId: 9,
        printDate: new Date("2021-01-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1593,
        userId: 8,
        printDate: new Date("2020-05-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1911,
        userId: 8,
        printDate: new Date("2020-09-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2064,
        userId: 3,
        printDate: new Date("2019-09-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 393,
        userId: 2,
        printDate: new Date("2019-02-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2675,
        userId: 2,
        printDate: new Date("2020-10-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1812,
        userId: 9,
        printDate: new Date("2019-04-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1359,
        userId: 2,
        printDate: new Date("2020-02-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1422,
        userId: 6,
        printDate: new Date("2019-02-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 436,
        userId: 9,
        printDate: new Date("2019-03-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2517,
        userId: 5,
        printDate: new Date("2019-09-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2737,
        userId: 2,
        printDate: new Date("2020-04-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2764,
        userId: 1,
        printDate: new Date("2019-07-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1695,
        userId: 4,
        printDate: new Date("2019-10-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2736,
        userId: 5,
        printDate: new Date("2020-07-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1128,
        userId: 8,
        printDate: new Date("2021-08-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1330,
        userId: 7,
        printDate: new Date("2021-01-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 614,
        userId: 5,
        printDate: new Date("2020-03-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1607,
        userId: 9,
        printDate: new Date("2020-12-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1097,
        userId: 1,
        printDate: new Date("2019-07-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1391,
        userId: 6,
        printDate: new Date("2021-04-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1707,
        userId: 9,
        printDate: new Date("2021-03-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 118,
        userId: 2,
        printDate: new Date("2019-01-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1735,
        userId: 10,
        printDate: new Date("2019-03-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1439,
        userId: 1,
        printDate: new Date("2020-05-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2514,
        userId: 6,
        printDate: new Date("2020-12-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2512,
        userId: 2,
        printDate: new Date("2021-04-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 334,
        userId: 7,
        printDate: new Date("2019-08-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 992,
        userId: 7,
        printDate: new Date("2021-08-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2423,
        userId: 4,
        printDate: new Date("2019-08-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2334,
        userId: 6,
        printDate: new Date("2019-02-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 119,
        userId: 2,
        printDate: new Date("2021-05-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1418,
        userId: 4,
        printDate: new Date("2020-09-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2309,
        userId: 4,
        printDate: new Date("2020-05-31T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2829,
        userId: 9,
        printDate: new Date("2020-10-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2051,
        userId: 8,
        printDate: new Date("2020-02-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2884,
        userId: 7,
        printDate: new Date("2019-12-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 106,
        userId: 6,
        printDate: new Date("2021-08-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1094,
        userId: 4,
        printDate: new Date("2021-03-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1815,
        userId: 3,
        printDate: new Date("2019-07-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2584,
        userId: 3,
        printDate: new Date("2021-03-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2386,
        userId: 8,
        printDate: new Date("2020-01-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 254,
        userId: 5,
        printDate: new Date("2021-07-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1934,
        userId: 4,
        printDate: new Date("2019-06-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 370,
        userId: 1,
        printDate: new Date("2021-01-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1069,
        userId: 2,
        printDate: new Date("2021-04-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1771,
        userId: 7,
        printDate: new Date("2021-07-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1688,
        userId: 9,
        printDate: new Date("2020-11-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2714,
        userId: 8,
        printDate: new Date("2019-03-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 324,
        userId: 7,
        printDate: new Date("2021-01-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 215,
        userId: 9,
        printDate: new Date("2019-04-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1358,
        userId: 10,
        printDate: new Date("2019-05-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2180,
        userId: 2,
        printDate: new Date("2019-03-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 880,
        userId: 7,
        printDate: new Date("2019-09-16T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1473,
        userId: 4,
        printDate: new Date("2019-11-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 585,
        userId: 10,
        printDate: new Date("2020-03-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 693,
        userId: 1,
        printDate: new Date("2019-08-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2958,
        userId: 1,
        printDate: new Date("2020-08-31T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 813,
        userId: 4,
        printDate: new Date("2019-12-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 388,
        userId: 9,
        printDate: new Date("2019-01-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1064,
        userId: 10,
        printDate: new Date("2021-02-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 668,
        userId: 6,
        printDate: new Date("2020-05-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 279,
        userId: 7,
        printDate: new Date("2019-06-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1869,
        userId: 7,
        printDate: new Date("2021-09-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2318,
        userId: 4,
        printDate: new Date("2019-01-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2075,
        userId: 1,
        printDate: new Date("2020-05-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1238,
        userId: 8,
        printDate: new Date("2021-05-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1899,
        userId: 9,
        printDate: new Date("2020-10-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1591,
        userId: 1,
        printDate: new Date("2021-04-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1539,
        userId: 2,
        printDate: new Date("2020-08-16T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2357,
        userId: 7,
        printDate: new Date("2019-09-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 218,
        userId: 10,
        printDate: new Date("2020-10-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1459,
        userId: 3,
        printDate: new Date("2021-01-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2405,
        userId: 2,
        printDate: new Date("2019-09-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 903,
        userId: 6,
        printDate: new Date("2020-01-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 793,
        userId: 3,
        printDate: new Date("2020-12-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1831,
        userId: 6,
        printDate: new Date("2019-08-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2569,
        userId: 8,
        printDate: new Date("2019-06-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 583,
        userId: 8,
        printDate: new Date("2019-04-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 495,
        userId: 7,
        printDate: new Date("2020-06-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2032,
        userId: 6,
        printDate: new Date("2020-04-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1748,
        userId: 9,
        printDate: new Date("2021-09-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2189,
        userId: 8,
        printDate: new Date("2020-01-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1174,
        userId: 3,
        printDate: new Date("2021-03-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2355,
        userId: 6,
        printDate: new Date("2020-09-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1866,
        userId: 4,
        printDate: new Date("2019-10-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 863,
        userId: 3,
        printDate: new Date("2021-04-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 507,
        userId: 9,
        printDate: new Date("2020-09-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1149,
        userId: 10,
        printDate: new Date("2021-06-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 428,
        userId: 9,
        printDate: new Date("2019-08-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1668,
        userId: 4,
        printDate: new Date("2020-08-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 671,
        userId: 2,
        printDate: new Date("2020-06-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2357,
        userId: 8,
        printDate: new Date("2021-01-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1238,
        userId: 6,
        printDate: new Date("2020-05-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1076,
        userId: 3,
        printDate: new Date("2019-12-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1369,
        userId: 1,
        printDate: new Date("2019-04-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1620,
        userId: 6,
        printDate: new Date("2020-01-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2492,
        userId: 9,
        printDate: new Date("2020-02-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2142,
        userId: 6,
        printDate: new Date("2020-10-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2560,
        userId: 3,
        printDate: new Date("2021-06-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 354,
        userId: 7,
        printDate: new Date("2021-04-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 524,
        userId: 9,
        printDate: new Date("2021-05-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 682,
        userId: 6,
        printDate: new Date("2020-04-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 356,
        userId: 9,
        printDate: new Date("2020-09-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1594,
        userId: 9,
        printDate: new Date("2021-01-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1077,
        userId: 9,
        printDate: new Date("2020-10-31T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 884,
        userId: 10,
        printDate: new Date("2021-04-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2425,
        userId: 6,
        printDate: new Date("2019-11-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2583,
        userId: 8,
        printDate: new Date("2020-04-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 650,
        userId: 5,
        printDate: new Date("2020-08-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2634,
        userId: 10,
        printDate: new Date("2020-05-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2588,
        userId: 4,
        printDate: new Date("2021-06-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1976,
        userId: 2,
        printDate: new Date("2020-01-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1470,
        userId: 3,
        printDate: new Date("2020-05-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1955,
        userId: 5,
        printDate: new Date("2020-12-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2224,
        userId: 4,
        printDate: new Date("2019-01-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1984,
        userId: 4,
        printDate: new Date("2020-12-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2979,
        userId: 6,
        printDate: new Date("2019-10-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 248,
        userId: 3,
        printDate: new Date("2019-01-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1644,
        userId: 3,
        printDate: new Date("2019-04-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1319,
        userId: 1,
        printDate: new Date("2019-03-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2612,
        userId: 3,
        printDate: new Date("2021-06-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 487,
        userId: 7,
        printDate: new Date("2020-07-16T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2550,
        userId: 7,
        printDate: new Date("2020-09-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 902,
        userId: 8,
        printDate: new Date("2020-11-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1146,
        userId: 2,
        printDate: new Date("2019-06-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1812,
        userId: 2,
        printDate: new Date("2020-02-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1426,
        userId: 6,
        printDate: new Date("2019-05-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2655,
        userId: 9,
        printDate: new Date("2019-12-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 735,
        userId: 9,
        printDate: new Date("2019-01-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2689,
        userId: 2,
        printDate: new Date("2021-06-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 920,
        userId: 1,
        printDate: new Date("2019-08-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1271,
        userId: 8,
        printDate: new Date("2019-08-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2494,
        userId: 6,
        printDate: new Date("2020-10-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1365,
        userId: 9,
        printDate: new Date("2020-11-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 413,
        userId: 8,
        printDate: new Date("2021-02-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1826,
        userId: 7,
        printDate: new Date("2019-05-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2611,
        userId: 10,
        printDate: new Date("2019-06-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2151,
        userId: 10,
        printDate: new Date("2020-04-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2893,
        userId: 10,
        printDate: new Date("2019-11-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1691,
        userId: 10,
        printDate: new Date("2021-04-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1685,
        userId: 10,
        printDate: new Date("2020-07-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2168,
        userId: 10,
        printDate: new Date("2021-01-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1437,
        userId: 10,
        printDate: new Date("2020-01-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2800,
        userId: 8,
        printDate: new Date("2020-06-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2287,
        userId: 1,
        printDate: new Date("2021-01-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1398,
        userId: 8,
        printDate: new Date("2019-06-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1758,
        userId: 7,
        printDate: new Date("2019-04-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2696,
        userId: 1,
        printDate: new Date("2019-06-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2229,
        userId: 6,
        printDate: new Date("2019-03-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2288,
        userId: 5,
        printDate: new Date("2021-02-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2675,
        userId: 3,
        printDate: new Date("2020-11-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2424,
        userId: 9,
        printDate: new Date("2021-04-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 394,
        userId: 4,
        printDate: new Date("2020-12-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 200,
        userId: 2,
        printDate: new Date("2020-12-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2232,
        userId: 10,
        printDate: new Date("2019-06-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1960,
        userId: 10,
        printDate: new Date("2021-07-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2234,
        userId: 6,
        printDate: new Date("2019-07-31T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 588,
        userId: 10,
        printDate: new Date("2019-10-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2228,
        userId: 7,
        printDate: new Date("2021-07-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1271,
        userId: 10,
        printDate: new Date("2020-02-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2003,
        userId: 8,
        printDate: new Date("2020-05-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1839,
        userId: 1,
        printDate: new Date("2020-04-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2537,
        userId: 10,
        printDate: new Date("2019-05-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2659,
        userId: 4,
        printDate: new Date("2020-01-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1383,
        userId: 6,
        printDate: new Date("2020-05-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1212,
        userId: 2,
        printDate: new Date("2019-04-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2984,
        userId: 1,
        printDate: new Date("2020-09-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 524,
        userId: 1,
        printDate: new Date("2021-07-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1771,
        userId: 8,
        printDate: new Date("2019-10-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1241,
        userId: 1,
        printDate: new Date("2019-08-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2789,
        userId: 7,
        printDate: new Date("2020-02-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 981,
        userId: 4,
        printDate: new Date("2020-03-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 729,
        userId: 2,
        printDate: new Date("2021-06-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2100,
        userId: 9,
        printDate: new Date("2019-01-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2452,
        userId: 9,
        printDate: new Date("2019-06-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2519,
        userId: 8,
        printDate: new Date("2020-03-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2422,
        userId: 4,
        printDate: new Date("2020-05-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2514,
        userId: 5,
        printDate: new Date("2021-05-31T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2409,
        userId: 6,
        printDate: new Date("2020-11-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1813,
        userId: 1,
        printDate: new Date("2019-11-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 643,
        userId: 5,
        printDate: new Date("2021-05-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2688,
        userId: 10,
        printDate: new Date("2020-10-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2889,
        userId: 2,
        printDate: new Date("2019-06-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 281,
        userId: 2,
        printDate: new Date("2019-01-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 682,
        userId: 4,
        printDate: new Date("2019-10-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1902,
        userId: 4,
        printDate: new Date("2019-06-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2293,
        userId: 8,
        printDate: new Date("2021-09-16T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2595,
        userId: 6,
        printDate: new Date("2020-12-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2266,
        userId: 1,
        printDate: new Date("2019-10-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1636,
        userId: 6,
        printDate: new Date("2021-05-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2244,
        userId: 7,
        printDate: new Date("2019-04-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1747,
        userId: 6,
        printDate: new Date("2019-12-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 434,
        userId: 10,
        printDate: new Date("2021-06-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1608,
        userId: 9,
        printDate: new Date("2020-08-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 914,
        userId: 8,
        printDate: new Date("2019-07-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1454,
        userId: 7,
        printDate: new Date("2019-04-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1823,
        userId: 2,
        printDate: new Date("2019-06-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1614,
        userId: 9,
        printDate: new Date("2019-10-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1054,
        userId: 4,
        printDate: new Date("2021-04-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 587,
        userId: 2,
        printDate: new Date("2021-05-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1145,
        userId: 5,
        printDate: new Date("2020-09-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 942,
        userId: 4,
        printDate: new Date("2020-06-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2744,
        userId: 7,
        printDate: new Date("2021-03-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2819,
        userId: 6,
        printDate: new Date("2020-02-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 876,
        userId: 3,
        printDate: new Date("2021-05-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1280,
        userId: 6,
        printDate: new Date("2021-04-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1646,
        userId: 3,
        printDate: new Date("2020-04-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 633,
        userId: 10,
        printDate: new Date("2019-11-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2111,
        userId: 3,
        printDate: new Date("2021-02-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2510,
        userId: 3,
        printDate: new Date("2019-06-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1549,
        userId: 10,
        printDate: new Date("2021-02-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 208,
        userId: 2,
        printDate: new Date("2020-03-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2871,
        userId: 10,
        printDate: new Date("2020-02-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1966,
        userId: 6,
        printDate: new Date("2021-09-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 975,
        userId: 7,
        printDate: new Date("2020-10-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2298,
        userId: 3,
        printDate: new Date("2020-08-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1292,
        userId: 10,
        printDate: new Date("2021-01-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2999,
        userId: 7,
        printDate: new Date("2021-05-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1252,
        userId: 2,
        printDate: new Date("2020-05-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 965,
        userId: 6,
        printDate: new Date("2019-04-16T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2269,
        userId: 1,
        printDate: new Date("2020-01-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1919,
        userId: 5,
        printDate: new Date("2020-07-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1965,
        userId: 3,
        printDate: new Date("2019-03-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1346,
        userId: 5,
        printDate: new Date("2020-08-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1374,
        userId: 9,
        printDate: new Date("2020-12-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1446,
        userId: 9,
        printDate: new Date("2019-10-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2026,
        userId: 10,
        printDate: new Date("2021-08-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 663,
        userId: 5,
        printDate: new Date("2019-11-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1341,
        userId: 5,
        printDate: new Date("2019-11-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2733,
        userId: 7,
        printDate: new Date("2021-09-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2834,
        userId: 7,
        printDate: new Date("2020-01-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 995,
        userId: 9,
        printDate: new Date("2020-04-16T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1854,
        userId: 7,
        printDate: new Date("2019-08-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 415,
        userId: 2,
        printDate: new Date("2019-01-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1610,
        userId: 10,
        printDate: new Date("2020-04-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 558,
        userId: 6,
        printDate: new Date("2021-01-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 505,
        userId: 10,
        printDate: new Date("2019-10-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 733,
        userId: 7,
        printDate: new Date("2020-10-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 516,
        userId: 6,
        printDate: new Date("2020-10-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 323,
        userId: 2,
        printDate: new Date("2021-07-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 817,
        userId: 8,
        printDate: new Date("2020-08-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 371,
        userId: 5,
        printDate: new Date("2021-03-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 666,
        userId: 2,
        printDate: new Date("2021-09-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 829,
        userId: 9,
        printDate: new Date("2019-07-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 273,
        userId: 6,
        printDate: new Date("2021-03-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2821,
        userId: 7,
        printDate: new Date("2020-03-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2552,
        userId: 3,
        printDate: new Date("2021-07-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1742,
        userId: 8,
        printDate: new Date("2020-12-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2097,
        userId: 8,
        printDate: new Date("2019-01-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2223,
        userId: 2,
        printDate: new Date("2019-12-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2457,
        userId: 6,
        printDate: new Date("2020-04-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 913,
        userId: 9,
        printDate: new Date("2020-01-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1357,
        userId: 5,
        printDate: new Date("2020-05-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2062,
        userId: 10,
        printDate: new Date("2020-03-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2279,
        userId: 9,
        printDate: new Date("2019-03-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 350,
        userId: 2,
        printDate: new Date("2019-03-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2538,
        userId: 3,
        printDate: new Date("2021-05-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 745,
        userId: 3,
        printDate: new Date("2021-07-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2997,
        userId: 7,
        printDate: new Date("2021-08-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2662,
        userId: 5,
        printDate: new Date("2021-01-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2336,
        userId: 5,
        printDate: new Date("2021-08-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1991,
        userId: 5,
        printDate: new Date("2019-11-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2225,
        userId: 8,
        printDate: new Date("2020-11-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1379,
        userId: 6,
        printDate: new Date("2019-09-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2838,
        userId: 2,
        printDate: new Date("2019-11-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1577,
        userId: 9,
        printDate: new Date("2021-05-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1936,
        userId: 7,
        printDate: new Date("2020-07-16T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2838,
        userId: 9,
        printDate: new Date("2021-08-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1437,
        userId: 6,
        printDate: new Date("2019-10-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1682,
        userId: 3,
        printDate: new Date("2019-06-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1295,
        userId: 6,
        printDate: new Date("2019-01-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2221,
        userId: 10,
        printDate: new Date("2020-05-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1446,
        userId: 1,
        printDate: new Date("2020-03-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2252,
        userId: 4,
        printDate: new Date("2020-01-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1215,
        userId: 4,
        printDate: new Date("2020-11-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1938,
        userId: 3,
        printDate: new Date("2019-03-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1904,
        userId: 5,
        printDate: new Date("2021-05-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 353,
        userId: 3,
        printDate: new Date("2021-03-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 670,
        userId: 9,
        printDate: new Date("2020-07-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 115,
        userId: 2,
        printDate: new Date("2021-04-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 200,
        userId: 2,
        printDate: new Date("2020-05-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1589,
        userId: 1,
        printDate: new Date("2021-08-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 750,
        userId: 3,
        printDate: new Date("2019-09-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2442,
        userId: 1,
        printDate: new Date("2020-12-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1346,
        userId: 9,
        printDate: new Date("2019-09-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 640,
        userId: 6,
        printDate: new Date("2020-05-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 853,
        userId: 9,
        printDate: new Date("2019-11-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 779,
        userId: 10,
        printDate: new Date("2021-02-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1010,
        userId: 4,
        printDate: new Date("2019-10-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 736,
        userId: 6,
        printDate: new Date("2019-03-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2789,
        userId: 5,
        printDate: new Date("2021-06-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1846,
        userId: 8,
        printDate: new Date("2019-06-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2656,
        userId: 9,
        printDate: new Date("2020-01-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2261,
        userId: 5,
        printDate: new Date("2019-03-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2417,
        userId: 9,
        printDate: new Date("2020-03-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 538,
        userId: 7,
        printDate: new Date("2019-12-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1705,
        userId: 1,
        printDate: new Date("2019-09-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 332,
        userId: 8,
        printDate: new Date("2019-12-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1653,
        userId: 9,
        printDate: new Date("2019-09-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2148,
        userId: 2,
        printDate: new Date("2020-12-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1999,
        userId: 1,
        printDate: new Date("2020-11-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 634,
        userId: 9,
        printDate: new Date("2020-08-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2439,
        userId: 9,
        printDate: new Date("2019-07-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 338,
        userId: 4,
        printDate: new Date("2020-11-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 451,
        userId: 6,
        printDate: new Date("2020-02-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 815,
        userId: 5,
        printDate: new Date("2019-04-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1105,
        userId: 2,
        printDate: new Date("2020-10-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2825,
        userId: 7,
        printDate: new Date("2020-06-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2452,
        userId: 9,
        printDate: new Date("2020-12-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1681,
        userId: 1,
        printDate: new Date("2021-06-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2717,
        userId: 2,
        printDate: new Date("2020-10-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2032,
        userId: 1,
        printDate: new Date("2020-02-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1224,
        userId: 7,
        printDate: new Date("2021-07-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2591,
        userId: 4,
        printDate: new Date("2021-04-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 612,
        userId: 5,
        printDate: new Date("2020-12-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1779,
        userId: 10,
        printDate: new Date("2019-08-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2841,
        userId: 3,
        printDate: new Date("2019-12-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 548,
        userId: 4,
        printDate: new Date("2019-02-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 207,
        userId: 8,
        printDate: new Date("2019-12-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 545,
        userId: 4,
        printDate: new Date("2019-02-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2628,
        userId: 3,
        printDate: new Date("2021-01-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 900,
        userId: 2,
        printDate: new Date("2019-05-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 149,
        userId: 5,
        printDate: new Date("2020-02-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 139,
        userId: 9,
        printDate: new Date("2021-03-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 608,
        userId: 5,
        printDate: new Date("2021-03-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2528,
        userId: 8,
        printDate: new Date("2019-07-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2472,
        userId: 3,
        printDate: new Date("2021-06-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1501,
        userId: 7,
        printDate: new Date("2021-02-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1672,
        userId: 8,
        printDate: new Date("2021-03-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1940,
        userId: 7,
        printDate: new Date("2020-01-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 289,
        userId: 3,
        printDate: new Date("2019-08-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2712,
        userId: 10,
        printDate: new Date("2019-03-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 299,
        userId: 10,
        printDate: new Date("2019-10-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1772,
        userId: 6,
        printDate: new Date("2020-05-16T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2438,
        userId: 10,
        printDate: new Date("2020-03-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1678,
        userId: 10,
        printDate: new Date("2021-05-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 732,
        userId: 2,
        printDate: new Date("2021-08-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 519,
        userId: 4,
        printDate: new Date("2019-05-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 519,
        userId: 4,
        printDate: new Date("2020-10-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2951,
        userId: 8,
        printDate: new Date("2020-03-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1008,
        userId: 4,
        printDate: new Date("2021-04-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 242,
        userId: 10,
        printDate: new Date("2020-09-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1780,
        userId: 3,
        printDate: new Date("2020-05-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2232,
        userId: 8,
        printDate: new Date("2021-05-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2717,
        userId: 3,
        printDate: new Date("2020-10-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1214,
        userId: 7,
        printDate: new Date("2020-10-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1108,
        userId: 10,
        printDate: new Date("2021-02-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2838,
        userId: 5,
        printDate: new Date("2020-03-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1326,
        userId: 10,
        printDate: new Date("2021-06-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 390,
        userId: 8,
        printDate: new Date("2020-08-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1323,
        userId: 1,
        printDate: new Date("2019-06-16T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2594,
        userId: 3,
        printDate: new Date("2019-06-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2066,
        userId: 8,
        printDate: new Date("2021-09-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2435,
        userId: 10,
        printDate: new Date("2020-12-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1176,
        userId: 5,
        printDate: new Date("2020-03-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 359,
        userId: 3,
        printDate: new Date("2019-04-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1466,
        userId: 8,
        printDate: new Date("2020-12-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2979,
        userId: 7,
        printDate: new Date("2021-01-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2021,
        userId: 4,
        printDate: new Date("2021-08-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1249,
        userId: 7,
        printDate: new Date("2019-01-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2203,
        userId: 5,
        printDate: new Date("2020-05-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2716,
        userId: 4,
        printDate: new Date("2020-11-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2117,
        userId: 1,
        printDate: new Date("2021-08-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1522,
        userId: 8,
        printDate: new Date("2021-07-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2085,
        userId: 6,
        printDate: new Date("2019-02-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 286,
        userId: 6,
        printDate: new Date("2021-07-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2993,
        userId: 4,
        printDate: new Date("2020-11-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2434,
        userId: 7,
        printDate: new Date("2021-09-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2670,
        userId: 5,
        printDate: new Date("2020-03-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1350,
        userId: 2,
        printDate: new Date("2021-06-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 719,
        userId: 3,
        printDate: new Date("2019-05-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2873,
        userId: 1,
        printDate: new Date("2020-04-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 640,
        userId: 5,
        printDate: new Date("2019-06-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2271,
        userId: 4,
        printDate: new Date("2019-07-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 436,
        userId: 10,
        printDate: new Date("2019-02-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2399,
        userId: 4,
        printDate: new Date("2019-04-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2138,
        userId: 6,
        printDate: new Date("2021-03-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 193,
        userId: 4,
        printDate: new Date("2019-10-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1111,
        userId: 10,
        printDate: new Date("2021-04-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1615,
        userId: 1,
        printDate: new Date("2021-05-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 773,
        userId: 3,
        printDate: new Date("2021-04-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 340,
        userId: 3,
        printDate: new Date("2020-02-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2386,
        userId: 8,
        printDate: new Date("2020-04-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1687,
        userId: 9,
        printDate: new Date("2019-04-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2317,
        userId: 3,
        printDate: new Date("2021-07-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1488,
        userId: 7,
        printDate: new Date("2020-10-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2831,
        userId: 1,
        printDate: new Date("2019-05-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1136,
        userId: 8,
        printDate: new Date("2020-08-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 388,
        userId: 2,
        printDate: new Date("2021-05-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2530,
        userId: 7,
        printDate: new Date("2019-06-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1942,
        userId: 7,
        printDate: new Date("2020-03-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 924,
        userId: 6,
        printDate: new Date("2019-05-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1130,
        userId: 1,
        printDate: new Date("2020-12-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1924,
        userId: 1,
        printDate: new Date("2020-07-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1927,
        userId: 2,
        printDate: new Date("2020-12-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2103,
        userId: 3,
        printDate: new Date("2019-05-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1123,
        userId: 9,
        printDate: new Date("2019-08-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 686,
        userId: 6,
        printDate: new Date("2021-07-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2315,
        userId: 9,
        printDate: new Date("2020-06-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 810,
        userId: 10,
        printDate: new Date("2019-04-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1671,
        userId: 10,
        printDate: new Date("2019-05-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 978,
        userId: 10,
        printDate: new Date("2019-08-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1988,
        userId: 5,
        printDate: new Date("2020-12-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2450,
        userId: 2,
        printDate: new Date("2020-10-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2837,
        userId: 4,
        printDate: new Date("2019-03-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1669,
        userId: 8,
        printDate: new Date("2020-07-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2648,
        userId: 5,
        printDate: new Date("2021-06-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2226,
        userId: 5,
        printDate: new Date("2021-01-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2792,
        userId: 5,
        printDate: new Date("2019-03-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1639,
        userId: 6,
        printDate: new Date("2020-09-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1819,
        userId: 2,
        printDate: new Date("2019-02-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1866,
        userId: 1,
        printDate: new Date("2019-02-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1430,
        userId: 4,
        printDate: new Date("2019-08-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1569,
        userId: 1,
        printDate: new Date("2021-02-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1307,
        userId: 6,
        printDate: new Date("2021-01-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1769,
        userId: 3,
        printDate: new Date("2019-09-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2515,
        userId: 3,
        printDate: new Date("2019-05-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2893,
        userId: 4,
        printDate: new Date("2020-07-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 624,
        userId: 9,
        printDate: new Date("2020-04-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1210,
        userId: 4,
        printDate: new Date("2020-04-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 479,
        userId: 2,
        printDate: new Date("2021-08-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 365,
        userId: 3,
        printDate: new Date("2019-01-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1856,
        userId: 4,
        printDate: new Date("2019-08-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 201,
        userId: 1,
        printDate: new Date("2020-02-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1056,
        userId: 4,
        printDate: new Date("2020-01-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 468,
        userId: 4,
        printDate: new Date("2021-07-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2974,
        userId: 4,
        printDate: new Date("2019-06-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2465,
        userId: 7,
        printDate: new Date("2019-10-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1532,
        userId: 7,
        printDate: new Date("2021-01-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1478,
        userId: 5,
        printDate: new Date("2019-10-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1809,
        userId: 1,
        printDate: new Date("2021-08-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2315,
        userId: 4,
        printDate: new Date("2021-07-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2499,
        userId: 4,
        printDate: new Date("2019-11-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2226,
        userId: 10,
        printDate: new Date("2021-07-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 221,
        userId: 8,
        printDate: new Date("2019-05-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2268,
        userId: 7,
        printDate: new Date("2021-09-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 696,
        userId: 1,
        printDate: new Date("2020-05-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1613,
        userId: 4,
        printDate: new Date("2019-01-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 983,
        userId: 4,
        printDate: new Date("2020-02-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2019,
        userId: 6,
        printDate: new Date("2020-08-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 879,
        userId: 2,
        printDate: new Date("2021-06-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2847,
        userId: 5,
        printDate: new Date("2019-01-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1395,
        userId: 6,
        printDate: new Date("2021-09-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1403,
        userId: 3,
        printDate: new Date("2021-09-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1891,
        userId: 3,
        printDate: new Date("2020-01-16T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 829,
        userId: 8,
        printDate: new Date("2021-06-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 555,
        userId: 8,
        printDate: new Date("2021-09-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2276,
        userId: 3,
        printDate: new Date("2020-01-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2381,
        userId: 1,
        printDate: new Date("2020-11-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2801,
        userId: 5,
        printDate: new Date("2019-03-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1541,
        userId: 2,
        printDate: new Date("2020-12-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2238,
        userId: 5,
        printDate: new Date("2021-04-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 148,
        userId: 1,
        printDate: new Date("2019-12-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 489,
        userId: 4,
        printDate: new Date("2019-03-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2992,
        userId: 8,
        printDate: new Date("2021-01-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1548,
        userId: 10,
        printDate: new Date("2019-05-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1952,
        userId: 1,
        printDate: new Date("2020-06-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1615,
        userId: 6,
        printDate: new Date("2021-04-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1815,
        userId: 6,
        printDate: new Date("2021-05-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1642,
        userId: 2,
        printDate: new Date("2020-01-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1034,
        userId: 6,
        printDate: new Date("2019-04-16T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2814,
        userId: 10,
        printDate: new Date("2019-05-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 867,
        userId: 9,
        printDate: new Date("2021-02-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1674,
        userId: 3,
        printDate: new Date("2020-11-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1685,
        userId: 1,
        printDate: new Date("2020-03-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2791,
        userId: 8,
        printDate: new Date("2020-05-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1898,
        userId: 3,
        printDate: new Date("2019-06-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1696,
        userId: 3,
        printDate: new Date("2020-02-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1605,
        userId: 10,
        printDate: new Date("2020-10-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2639,
        userId: 2,
        printDate: new Date("2021-07-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2941,
        userId: 5,
        printDate: new Date("2021-07-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2927,
        userId: 9,
        printDate: new Date("2021-02-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2888,
        userId: 1,
        printDate: new Date("2021-03-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1899,
        userId: 3,
        printDate: new Date("2019-01-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1086,
        userId: 1,
        printDate: new Date("2021-03-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2599,
        userId: 10,
        printDate: new Date("2020-04-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1277,
        userId: 7,
        printDate: new Date("2021-01-31T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1103,
        userId: 10,
        printDate: new Date("2021-05-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 723,
        userId: 8,
        printDate: new Date("2019-08-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2129,
        userId: 5,
        printDate: new Date("2021-08-31T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1472,
        userId: 4,
        printDate: new Date("2020-12-31T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2557,
        userId: 6,
        printDate: new Date("2021-01-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2264,
        userId: 6,
        printDate: new Date("2019-07-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2013,
        userId: 10,
        printDate: new Date("2020-11-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2160,
        userId: 10,
        printDate: new Date("2019-02-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 503,
        userId: 3,
        printDate: new Date("2019-07-16T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1804,
        userId: 7,
        printDate: new Date("2021-09-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 617,
        userId: 5,
        printDate: new Date("2020-04-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 624,
        userId: 7,
        printDate: new Date("2020-07-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 273,
        userId: 8,
        printDate: new Date("2019-02-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1732,
        userId: 3,
        printDate: new Date("2020-10-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2493,
        userId: 2,
        printDate: new Date("2021-04-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 938,
        userId: 5,
        printDate: new Date("2020-06-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 299,
        userId: 2,
        printDate: new Date("2020-02-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 887,
        userId: 8,
        printDate: new Date("2020-11-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 313,
        userId: 7,
        printDate: new Date("2021-06-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2481,
        userId: 1,
        printDate: new Date("2020-07-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 173,
        userId: 2,
        printDate: new Date("2021-01-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2940,
        userId: 3,
        printDate: new Date("2021-07-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 832,
        userId: 7,
        printDate: new Date("2021-07-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 610,
        userId: 7,
        printDate: new Date("2021-03-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 593,
        userId: 1,
        printDate: new Date("2020-12-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 236,
        userId: 9,
        printDate: new Date("2021-04-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 698,
        userId: 9,
        printDate: new Date("2020-12-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2026,
        userId: 6,
        printDate: new Date("2020-06-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1823,
        userId: 10,
        printDate: new Date("2020-12-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2375,
        userId: 2,
        printDate: new Date("2021-09-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2019,
        userId: 3,
        printDate: new Date("2020-11-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1490,
        userId: 6,
        printDate: new Date("2019-05-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2667,
        userId: 9,
        printDate: new Date("2021-04-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2787,
        userId: 1,
        printDate: new Date("2021-04-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1849,
        userId: 9,
        printDate: new Date("2020-03-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1816,
        userId: 2,
        printDate: new Date("2020-10-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2978,
        userId: 1,
        printDate: new Date("2021-01-16T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 270,
        userId: 7,
        printDate: new Date("2019-08-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2545,
        userId: 4,
        printDate: new Date("2020-08-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 731,
        userId: 4,
        printDate: new Date("2020-01-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 668,
        userId: 5,
        printDate: new Date("2020-07-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2801,
        userId: 6,
        printDate: new Date("2020-03-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 471,
        userId: 7,
        printDate: new Date("2020-07-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1709,
        userId: 2,
        printDate: new Date("2019-02-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 100,
        userId: 3,
        printDate: new Date("2021-03-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2687,
        userId: 1,
        printDate: new Date("2020-09-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 426,
        userId: 1,
        printDate: new Date("2021-03-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 313,
        userId: 8,
        printDate: new Date("2019-03-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 816,
        userId: 7,
        printDate: new Date("2020-09-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1428,
        userId: 7,
        printDate: new Date("2019-06-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1714,
        userId: 7,
        printDate: new Date("2020-04-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1447,
        userId: 8,
        printDate: new Date("2020-07-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 871,
        userId: 7,
        printDate: new Date("2020-01-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2945,
        userId: 5,
        printDate: new Date("2020-02-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 362,
        userId: 5,
        printDate: new Date("2021-05-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2163,
        userId: 1,
        printDate: new Date("2019-11-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1297,
        userId: 10,
        printDate: new Date("2019-10-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2904,
        userId: 2,
        printDate: new Date("2020-01-16T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1787,
        userId: 2,
        printDate: new Date("2020-11-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1489,
        userId: 7,
        printDate: new Date("2021-06-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2491,
        userId: 7,
        printDate: new Date("2019-02-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1210,
        userId: 10,
        printDate: new Date("2020-05-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1778,
        userId: 6,
        printDate: new Date("2020-06-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 808,
        userId: 7,
        printDate: new Date("2020-01-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 816,
        userId: 2,
        printDate: new Date("2020-06-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1245,
        userId: 10,
        printDate: new Date("2019-12-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 726,
        userId: 6,
        printDate: new Date("2020-06-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 935,
        userId: 1,
        printDate: new Date("2020-11-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2641,
        userId: 6,
        printDate: new Date("2020-07-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 325,
        userId: 9,
        printDate: new Date("2020-08-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2689,
        userId: 8,
        printDate: new Date("2021-09-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1457,
        userId: 2,
        printDate: new Date("2021-03-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1132,
        userId: 8,
        printDate: new Date("2020-03-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1174,
        userId: 2,
        printDate: new Date("2020-06-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2380,
        userId: 2,
        printDate: new Date("2019-11-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2739,
        userId: 8,
        printDate: new Date("2021-08-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2549,
        userId: 2,
        printDate: new Date("2019-05-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1032,
        userId: 3,
        printDate: new Date("2019-05-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1162,
        userId: 6,
        printDate: new Date("2020-09-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1171,
        userId: 6,
        printDate: new Date("2020-02-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2801,
        userId: 6,
        printDate: new Date("2020-10-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2827,
        userId: 4,
        printDate: new Date("2021-04-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1267,
        userId: 8,
        printDate: new Date("2021-08-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2258,
        userId: 1,
        printDate: new Date("2019-10-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2753,
        userId: 9,
        printDate: new Date("2020-02-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 161,
        userId: 6,
        printDate: new Date("2021-05-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1146,
        userId: 10,
        printDate: new Date("2021-05-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1809,
        userId: 3,
        printDate: new Date("2020-11-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1461,
        userId: 6,
        printDate: new Date("2020-06-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2531,
        userId: 2,
        printDate: new Date("2020-09-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 591,
        userId: 10,
        printDate: new Date("2019-07-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 187,
        userId: 5,
        printDate: new Date("2020-09-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2624,
        userId: 9,
        printDate: new Date("2021-03-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1505,
        userId: 6,
        printDate: new Date("2021-07-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2995,
        userId: 2,
        printDate: new Date("2019-05-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2602,
        userId: 5,
        printDate: new Date("2020-02-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2262,
        userId: 4,
        printDate: new Date("2019-02-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2269,
        userId: 1,
        printDate: new Date("2020-06-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1665,
        userId: 4,
        printDate: new Date("2019-09-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2873,
        userId: 5,
        printDate: new Date("2021-02-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1016,
        userId: 6,
        printDate: new Date("2020-11-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1128,
        userId: 6,
        printDate: new Date("2019-02-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 317,
        userId: 9,
        printDate: new Date("2020-02-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2337,
        userId: 2,
        printDate: new Date("2020-10-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 273,
        userId: 9,
        printDate: new Date("2020-04-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2790,
        userId: 6,
        printDate: new Date("2019-05-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1690,
        userId: 7,
        printDate: new Date("2019-06-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 407,
        userId: 1,
        printDate: new Date("2021-01-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1798,
        userId: 5,
        printDate: new Date("2021-08-31T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2016,
        userId: 5,
        printDate: new Date("2019-04-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1153,
        userId: 10,
        printDate: new Date("2020-01-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 205,
        userId: 2,
        printDate: new Date("2021-07-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 866,
        userId: 7,
        printDate: new Date("2020-06-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 375,
        userId: 8,
        printDate: new Date("2020-06-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 133,
        userId: 10,
        printDate: new Date("2019-07-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1197,
        userId: 7,
        printDate: new Date("2019-05-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 336,
        userId: 7,
        printDate: new Date("2021-01-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 493,
        userId: 5,
        printDate: new Date("2021-05-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1884,
        userId: 3,
        printDate: new Date("2020-04-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2768,
        userId: 8,
        printDate: new Date("2019-06-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 315,
        userId: 5,
        printDate: new Date("2020-01-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 996,
        userId: 5,
        printDate: new Date("2019-08-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 914,
        userId: 1,
        printDate: new Date("2020-12-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1594,
        userId: 7,
        printDate: new Date("2021-07-31T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1859,
        userId: 5,
        printDate: new Date("2021-03-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1965,
        userId: 1,
        printDate: new Date("2019-04-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1731,
        userId: 3,
        printDate: new Date("2020-12-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2553,
        userId: 6,
        printDate: new Date("2021-05-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1103,
        userId: 3,
        printDate: new Date("2020-05-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1580,
        userId: 5,
        printDate: new Date("2021-08-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1467,
        userId: 4,
        printDate: new Date("2021-05-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1179,
        userId: 1,
        printDate: new Date("2020-01-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 468,
        userId: 8,
        printDate: new Date("2020-07-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2877,
        userId: 1,
        printDate: new Date("2020-10-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1332,
        userId: 6,
        printDate: new Date("2021-08-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2431,
        userId: 6,
        printDate: new Date("2021-08-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 233,
        userId: 10,
        printDate: new Date("2019-04-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1124,
        userId: 4,
        printDate: new Date("2020-07-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1317,
        userId: 3,
        printDate: new Date("2021-04-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1596,
        userId: 10,
        printDate: new Date("2019-06-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2218,
        userId: 8,
        printDate: new Date("2020-08-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2271,
        userId: 1,
        printDate: new Date("2019-11-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 309,
        userId: 3,
        printDate: new Date("2020-03-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1388,
        userId: 6,
        printDate: new Date("2020-01-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1701,
        userId: 7,
        printDate: new Date("2019-04-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 299,
        userId: 5,
        printDate: new Date("2019-01-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2795,
        userId: 6,
        printDate: new Date("2020-11-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1698,
        userId: 5,
        printDate: new Date("2020-03-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2544,
        userId: 2,
        printDate: new Date("2021-09-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1007,
        userId: 10,
        printDate: new Date("2021-02-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1663,
        userId: 7,
        printDate: new Date("2021-01-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1219,
        userId: 3,
        printDate: new Date("2019-11-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 280,
        userId: 7,
        printDate: new Date("2020-06-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1926,
        userId: 8,
        printDate: new Date("2019-10-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1615,
        userId: 7,
        printDate: new Date("2020-03-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2197,
        userId: 9,
        printDate: new Date("2021-01-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1411,
        userId: 4,
        printDate: new Date("2021-03-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2484,
        userId: 6,
        printDate: new Date("2020-02-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1495,
        userId: 2,
        printDate: new Date("2019-11-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 544,
        userId: 10,
        printDate: new Date("2021-07-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1064,
        userId: 8,
        printDate: new Date("2019-10-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1955,
        userId: 10,
        printDate: new Date("2021-06-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1993,
        userId: 2,
        printDate: new Date("2020-01-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2369,
        userId: 1,
        printDate: new Date("2021-01-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1521,
        userId: 3,
        printDate: new Date("2021-03-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1274,
        userId: 1,
        printDate: new Date("2021-05-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2979,
        userId: 2,
        printDate: new Date("2019-11-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 776,
        userId: 9,
        printDate: new Date("2020-08-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2956,
        userId: 8,
        printDate: new Date("2019-01-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1022,
        userId: 10,
        printDate: new Date("2019-02-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 161,
        userId: 10,
        printDate: new Date("2021-02-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1830,
        userId: 3,
        printDate: new Date("2021-08-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 135,
        userId: 9,
        printDate: new Date("2020-11-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1698,
        userId: 1,
        printDate: new Date("2020-09-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1188,
        userId: 7,
        printDate: new Date("2019-12-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 282,
        userId: 4,
        printDate: new Date("2019-10-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1870,
        userId: 1,
        printDate: new Date("2019-05-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1384,
        userId: 2,
        printDate: new Date("2021-02-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1865,
        userId: 1,
        printDate: new Date("2021-06-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2074,
        userId: 7,
        printDate: new Date("2019-07-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2653,
        userId: 4,
        printDate: new Date("2019-09-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1057,
        userId: 8,
        printDate: new Date("2019-04-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2925,
        userId: 9,
        printDate: new Date("2019-01-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2530,
        userId: 4,
        printDate: new Date("2019-05-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 582,
        userId: 5,
        printDate: new Date("2019-02-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2077,
        userId: 9,
        printDate: new Date("2019-07-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 844,
        userId: 10,
        printDate: new Date("2020-01-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2239,
        userId: 8,
        printDate: new Date("2021-04-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2701,
        userId: 6,
        printDate: new Date("2021-01-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2955,
        userId: 10,
        printDate: new Date("2019-07-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 314,
        userId: 4,
        printDate: new Date("2019-08-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1572,
        userId: 7,
        printDate: new Date("2021-01-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1183,
        userId: 1,
        printDate: new Date("2021-06-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 815,
        userId: 1,
        printDate: new Date("2020-03-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 925,
        userId: 8,
        printDate: new Date("2020-11-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 112,
        userId: 3,
        printDate: new Date("2020-12-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2236,
        userId: 10,
        printDate: new Date("2019-08-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2149,
        userId: 5,
        printDate: new Date("2020-12-30T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2431,
        userId: 2,
        printDate: new Date("2020-09-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1354,
        userId: 5,
        printDate: new Date("2019-07-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1112,
        userId: 10,
        printDate: new Date("2021-06-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2432,
        userId: 8,
        printDate: new Date("2019-03-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2764,
        userId: 7,
        printDate: new Date("2021-02-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1010,
        userId: 4,
        printDate: new Date("2021-03-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 921,
        userId: 1,
        printDate: new Date("2021-04-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2842,
        userId: 5,
        printDate: new Date("2021-07-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 521,
        userId: 9,
        printDate: new Date("2019-10-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 188,
        userId: 3,
        printDate: new Date("2019-03-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2875,
        userId: 4,
        printDate: new Date("2021-06-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1534,
        userId: 8,
        printDate: new Date("2020-06-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 415,
        userId: 10,
        printDate: new Date("2020-08-31T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2202,
        userId: 9,
        printDate: new Date("2019-04-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1647,
        userId: 5,
        printDate: new Date("2019-01-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1903,
        userId: 1,
        printDate: new Date("2020-09-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2845,
        userId: 5,
        printDate: new Date("2020-09-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1455,
        userId: 7,
        printDate: new Date("2021-09-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1964,
        userId: 4,
        printDate: new Date("2021-09-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2499,
        userId: 3,
        printDate: new Date("2021-07-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2637,
        userId: 2,
        printDate: new Date("2021-09-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1485,
        userId: 4,
        printDate: new Date("2021-08-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2296,
        userId: 4,
        printDate: new Date("2021-09-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1252,
        userId: 9,
        printDate: new Date("2021-09-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1030,
        userId: 4,
        printDate: new Date("2021-08-12T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2942,
        userId: 10,
        printDate: new Date("2021-08-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1210,
        userId: 6,
        printDate: new Date("2021-08-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2826,
        userId: 8,
        printDate: new Date("2021-09-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2717,
        userId: 10,
        printDate: new Date("2021-07-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1134,
        userId: 9,
        printDate: new Date("2021-08-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2260,
        userId: 10,
        printDate: new Date("2021-09-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1116,
        userId: 4,
        printDate: new Date("2021-07-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1239,
        userId: 2,
        printDate: new Date("2021-07-29T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 513,
        userId: 7,
        printDate: new Date("2021-07-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 557,
        userId: 8,
        printDate: new Date("2021-08-24T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2695,
        userId: 2,
        printDate: new Date("2021-07-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 925,
        userId: 7,
        printDate: new Date("2021-08-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 381,
        userId: 5,
        printDate: new Date("2021-09-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1382,
        userId: 10,
        printDate: new Date("2021-08-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2468,
        userId: 6,
        printDate: new Date("2021-08-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1686,
        userId: 5,
        printDate: new Date("2021-08-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 999,
        userId: 7,
        printDate: new Date("2021-09-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 226,
        userId: 10,
        printDate: new Date("2021-07-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 832,
        userId: 6,
        printDate: new Date("2021-09-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1165,
        userId: 3,
        printDate: new Date("2021-09-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1605,
        userId: 8,
        printDate: new Date("2021-09-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 919,
        userId: 1,
        printDate: new Date("2021-09-05T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2317,
        userId: 1,
        printDate: new Date("2021-07-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 700,
        userId: 7,
        printDate: new Date("2021-08-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 147,
        userId: 10,
        printDate: new Date("2021-08-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2453,
        userId: 6,
        printDate: new Date("2021-08-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2851,
        userId: 6,
        printDate: new Date("2021-07-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1797,
        userId: 9,
        printDate: new Date("2021-07-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2289,
        userId: 9,
        printDate: new Date("2021-07-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 960,
        userId: 1,
        printDate: new Date("2021-07-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1863,
        userId: 8,
        printDate: new Date("2021-07-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2568,
        userId: 10,
        printDate: new Date("2021-07-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1507,
        userId: 6,
        printDate: new Date("2021-08-17T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1826,
        userId: 8,
        printDate: new Date("2021-07-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 921,
        userId: 2,
        printDate: new Date("2021-07-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1202,
        userId: 1,
        printDate: new Date("2021-07-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1957,
        userId: 5,
        printDate: new Date("2021-07-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 975,
        userId: 5,
        printDate: new Date("2021-08-23T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2125,
        userId: 10,
        printDate: new Date("2021-09-16T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2594,
        userId: 6,
        printDate: new Date("2021-07-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1902,
        userId: 5,
        printDate: new Date("2021-07-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 478,
        userId: 6,
        printDate: new Date("2021-09-15T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1027,
        userId: 2,
        printDate: new Date("2021-09-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 758,
        userId: 4,
        printDate: new Date("2021-07-04T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2907,
        userId: 4,
        printDate: new Date("2021-09-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2651,
        userId: 4,
        printDate: new Date("2021-08-31T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 388,
        userId: 4,
        printDate: new Date("2021-09-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 429,
        userId: 7,
        printDate: new Date("2021-08-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 287,
        userId: 4,
        printDate: new Date("2021-07-26T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1724,
        userId: 2,
        printDate: new Date("2021-09-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 729,
        userId: 7,
        printDate: new Date("2021-07-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1292,
        userId: 10,
        printDate: new Date("2021-07-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 935,
        userId: 2,
        printDate: new Date("2021-08-11T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 348,
        userId: 1,
        printDate: new Date("2021-09-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 323,
        userId: 5,
        printDate: new Date("2021-07-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2909,
        userId: 4,
        printDate: new Date("2021-07-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2509,
        userId: 9,
        printDate: new Date("2021-08-22T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 651,
        userId: 8,
        printDate: new Date("2021-07-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1062,
        userId: 6,
        printDate: new Date("2021-09-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1403,
        userId: 1,
        printDate: new Date("2021-07-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1861,
        userId: 8,
        printDate: new Date("2021-07-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2987,
        userId: 1,
        printDate: new Date("2021-08-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 203,
        userId: 6,
        printDate: new Date("2021-08-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1547,
        userId: 6,
        printDate: new Date("2021-07-13T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 797,
        userId: 1,
        printDate: new Date("2021-07-27T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2888,
        userId: 1,
        printDate: new Date("2021-07-21T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1479,
        userId: 1,
        printDate: new Date("2021-09-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 812,
        userId: 8,
        printDate: new Date("2021-07-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1137,
        userId: 1,
        printDate: new Date("2021-09-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2574,
        userId: 1,
        printDate: new Date("2021-08-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1556,
        userId: 9,
        printDate: new Date("2021-07-08T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 713,
        userId: 5,
        printDate: new Date("2021-07-25T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2565,
        userId: 1,
        printDate: new Date("2021-08-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1300,
        userId: 10,
        printDate: new Date("2021-09-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2086,
        userId: 4,
        printDate: new Date("2021-07-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1499,
        userId: 10,
        printDate: new Date("2021-09-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2533,
        userId: 4,
        printDate: new Date("2021-08-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1751,
        userId: 10,
        printDate: new Date("2021-09-19T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1028,
        userId: 4,
        printDate: new Date("2021-07-03T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2066,
        userId: 7,
        printDate: new Date("2021-09-20T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2526,
        userId: 2,
        printDate: new Date("2021-08-09T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2751,
        userId: 10,
        printDate: new Date("2021-09-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 280,
        userId: 1,
        printDate: new Date("2021-08-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 138,
        userId: 2,
        printDate: new Date("2021-09-18T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2533,
        userId: 1,
        printDate: new Date("2021-07-14T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 665,
        userId: 6,
        printDate: new Date("2021-08-02T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 410,
        userId: 9,
        printDate: new Date("2021-07-07T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 439,
        userId: 1,
        printDate: new Date("2021-08-28T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 2983,
        userId: 10,
        printDate: new Date("2021-09-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 439,
        userId: 9,
        cashierId: 1,
        printDate: new Date("2021-07-10T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 885,
        userId: 2,
        printDate: new Date("2021-08-06T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        sum: 1318,
        userId: 6,
        printDate: new Date("2021-09-01T00:00:00"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Receipts", null, {});
    };
  },
};
