import StockSearch from "../../pages/stocksearch";
import income from '../../pages/api/income'
import { useState } from "react";
 
let GLOBAL_MAP = 
    {
        "cashflowStatementHistory": {
          "cashflowStatements": [
            {
              "changeToLiabilities": {
                "raw": 39258000,
                "fmt": "39.26M",
                "longFmt": "39,258,000"
              },
              "totalCashflowsFromInvestingActivities": {
                "raw": -58000,
                "fmt": "-58k",
                "longFmt": "-58,000"
              },
              "netBorrowings": {
                "raw": -14690000,
                "fmt": "-14.69M",
                "longFmt": "-14,690,000"
              },
              "totalCashFromFinancingActivities": {
                "raw": 271251000,
                "fmt": "271.25M",
                "longFmt": "271,251,000"
              },
              "changeToOperatingActivities": {
                "raw": 9573000,
                "fmt": "9.57M",
                "longFmt": "9,573,000"
              },
              "issuanceOfStock": {
                "raw": 292285000,
                "fmt": "292.29M",
                "longFmt": "292,285,000"
              },
              "netIncome": {
                "raw": -116445000,
                "fmt": "-116.44M",
                "longFmt": "-116,445,000"
              },
              "changeInCash": {
                "raw": 176490000,
                "fmt": "176.49M",
                "longFmt": "176,490,000"
              },
              "endDate": {
                "raw": 1546214400,
                "fmt": "2018-12-31"
              },
              "repurchaseOfStock": {
                "raw": -6184000,
                "fmt": "-6.18M",
                "longFmt": "-6,184,000"
              },
              "totalCashFromOperatingActivities": {
                "raw": -94703000,
                "fmt": "-94.7M",
                "longFmt": "-94,703,000"
              },
              "depreciation": {
                "raw": 669000,
                "fmt": "669k",
                "longFmt": "669,000"
              },
              "changeToInventory": {
                "raw": -27542000,
                "fmt": "-27.54M",
                "longFmt": "-27,542,000"
              },
              "changeToAccountReceivables": {
                "raw": -21205000,
                "fmt": "-21.2M",
                "longFmt": "-21,205,000"
              },
              "otherCashflowsFromFinancingActivities": {
                "raw": -160000,
                "fmt": "-160k",
                "longFmt": "-160,000"
              },
              "maxAge": 1,
              "changeToNetincome": {
                "raw": 18806000,
                "fmt": "18.81M",
                "longFmt": "18,806,000"
              },
              "capitalExpenditures": {
                "raw": -58000,
                "fmt": "-58k",
                "longFmt": "-58,000"
              }
            },
            {
              "changeToLiabilities": {
                "raw": 41488000,
                "fmt": "41.49M",
                "longFmt": "41,488,000"
              },
              "totalCashflowsFromInvestingActivities": {
                "raw": -12000,
                "fmt": "-12k",
                "longFmt": "-12,000"
              },
              "netBorrowings": {
                "raw": 11571000,
                "fmt": "11.57M",
                "longFmt": "11,571,000"
              },
              "totalCashFromFinancingActivities": {
                "raw": 8235000,
                "fmt": "8.23M",
                "longFmt": "8,235,000"
              },
              "changeToOperatingActivities": {
                "raw": 544000,
                "fmt": "544k",
                "longFmt": "544,000"
              },
              "issuanceOfStock": {
                "raw": 638000,
                "fmt": "638k",
                "longFmt": "638,000"
              },
              "netIncome": {
                "raw": -67865000,
                "fmt": "-67.86M",
                "longFmt": "-67,865,000"
              },
              "changeInCash": {
                "raw": -24614000,
                "fmt": "-24.61M",
                "longFmt": "-24,614,000"
              },
              "endDate": {
                "raw": 1514678400,
                "fmt": "2017-12-31"
              },
              "repurchaseOfStock": {
                "raw": -2767000,
                "fmt": "-2.77M",
                "longFmt": "-2,767,000"
              },
              "totalCashFromOperatingActivities": {
                "raw": -32837000,
                "fmt": "-32.84M",
                "longFmt": "-32,837,000"
              },
              "depreciation": {
                "raw": 708000,
                "fmt": "708k",
                "longFmt": "708,000"
              },
              "changeToInventory": {
                "raw": -9753000,
                "fmt": "-9.75M",
                "longFmt": "-9,753,000"
              },
              "changeToAccountReceivables": {
                "raw": -25333000,
                "fmt": "-25.33M",
                "longFmt": "-25,333,000"
              },
              "otherCashflowsFromFinancingActivities": {
                "raw": -1207000,
                "fmt": "-1.21M",
                "longFmt": "-1,207,000"
              },
              "maxAge": 1,
              "changeToNetincome": {
                "raw": 25042000,
                "fmt": "25.04M",
                "longFmt": "25,042,000"
              },
              "capitalExpenditures": {
                "raw": -12000,
                "fmt": "-12k",
                "longFmt": "-12,000"
              }
            },
            {
              "changeToLiabilities": {
                "raw": 9589000,
                "fmt": "9.59M",
                "longFmt": "9,589,000"
              },
              "totalCashflowsFromInvestingActivities": {
                "raw": -21000,
                "fmt": "-21k",
                "longFmt": "-21,000"
              },
              "netBorrowings": {
                "raw": 11571000,
                "fmt": "11.57M",
                "longFmt": "11,571,000"
              },
              "totalCashFromFinancingActivities": {
                "raw": 63126000,
                "fmt": "63.13M",
                "longFmt": "63,126,000"
              },
              "changeToOperatingActivities": {
                "raw": -10228000,
                "fmt": "-10.23M",
                "longFmt": "-10,228,000"
              },
              "issuanceOfStock": {
                "raw": 64900000,
                "fmt": "64.9M",
                "longFmt": "64,900,000"
              },
              "netIncome": {
                "raw": -86350000,
                "fmt": "-86.35M",
                "longFmt": "-86,350,000"
              },
              "changeInCash": {
                "raw": -8710000,
                "fmt": "-8.71M",
                "longFmt": "-8,710,000"
              },
              "endDate": {
                "raw": 1483142400,
                "fmt": "2016-12-31"
              },
              "repurchaseOfStock": {
                "raw": -1094000,
                "fmt": "-1.09M",
                "longFmt": "-1,094,000"
              },
              "totalCashFromOperatingActivities": {
                "raw": -71815000,
                "fmt": "-71.81M",
                "longFmt": "-71,815,000"
              },
              "depreciation": {
                "raw": 783000,
                "fmt": "783k",
                "longFmt": "783,000"
              },
              "changeToInventory": {
                "raw": -1522000,
                "fmt": "-1.52M",
                "longFmt": "-1,522,000"
              },
              "changeToAccountReceivables": {
                "raw": -6171000,
                "fmt": "-6.17M",
                "longFmt": "-6,171,000"
              },
              "otherCashflowsFromFinancingActivities": {
                "raw": -680000,
                "fmt": "-680k",
                "longFmt": "-680,000"
              },
              "maxAge": 1,
              "changeToNetincome": {
                "raw": 14301000,
                "fmt": "14.3M",
                "longFmt": "14,301,000"
              },
              "capitalExpenditures": {
                "raw": -21000,
                "fmt": "-21k",
                "longFmt": "-21,000"
              }
            },
            {
              "changeToLiabilities": {
                "raw": 24720000,
                "fmt": "24.72M",
                "longFmt": "24,720,000"
              },
              "totalCashflowsFromInvestingActivities": {
                "raw": -28000,
                "fmt": "-28k",
                "longFmt": "-28,000"
              },
              "netBorrowings": {
                "raw": 11364000,
                "fmt": "11.36M",
                "longFmt": "11,364,000"
              },
              "totalCashFromFinancingActivities": {
                "raw": 71471000,
                "fmt": "71.47M",
                "longFmt": "71,471,000"
              },
              "changeToOperatingActivities": {
                "raw": -791000,
                "fmt": "-791k",
                "longFmt": "-791,000"
              },
              "issuanceOfStock": {
                "raw": 2744000,
                "fmt": "2.74M",
                "longFmt": "2,744,000"
              },
              "netIncome": {
                "raw": -115204000,
                "fmt": "-115.2M",
                "longFmt": "-115,204,000"
              },
              "changeInCash": {
                "raw": -12578000,
                "fmt": "-12.58M",
                "longFmt": "-12,578,000"
              },
              "endDate": {
                "raw": 1451520000,
                "fmt": "2015-12-31"
              },
              "repurchaseOfStock": {
                "raw": -194000,
                "fmt": "-194k",
                "longFmt": "-194,000"
              },
              "totalCashFromOperatingActivities": {
                "raw": -84021000,
                "fmt": "-84.02M",
                "longFmt": "-84,021,000"
              },
              "depreciation": {
                "raw": 812000,
                "fmt": "812k",
                "longFmt": "812,000"
              },
              "changeToInventory": {
                "raw": -5252000,
                "fmt": "-5.25M",
                "longFmt": "-5,252,000"
              },
              "changeToAccountReceivables": {
                "raw": -5984000,
                "fmt": "-5.98M",
                "longFmt": "-5,984,000"
              },
              "otherCashflowsFromFinancingActivities": {
                "raw": -109000,
                "fmt": "-109k",
                "longFmt": "-109,000"
              },
              "maxAge": 1,
              "changeToNetincome": {
                "raw": 9420000,
                "fmt": "9.42M",
                "longFmt": "9,420,000"
              },
              "capitalExpenditures": {
                "raw": -28000,
                "fmt": "-28k",
                "longFmt": "-28,000"
              }
            }
          ],
          "maxAge": 86400
        },
        "incomeStatementHistory": {
          "incomeStatementHistory": [
            {
              "researchDevelopment": {
                "raw": 55900000,
                "fmt": "55.9M",
                "longFmt": "55,900,000"
              },
              "effectOfAccountingCharges": {},
              "incomeBeforeTax": {
                "raw": -116349000,
                "fmt": "-116.35M",
                "longFmt": "-116,349,000"
              },
              "minorityInterest": {},
              "netIncome": {
                "raw": -116445000,
                "fmt": "-116.44M",
                "longFmt": "-116,445,000"
              },
              "sellingGeneralAdministrative": {
                "raw": 226996000,
                "fmt": "227M",
                "longFmt": "226,996,000"
              },
              "grossProfit": {
                "raw": 174671000,
                "fmt": "174.67M",
                "longFmt": "174,671,000"
              },
              "ebit": {
                "raw": -108225000,
                "fmt": "-108.22M",
                "longFmt": "-108,225,000"
              },
              "endDate": {
                "raw": 1546214400,
                "fmt": "2018-12-31"
              },
              "operatingIncome": {
                "raw": -108225000,
                "fmt": "-108.22M",
                "longFmt": "-108,225,000"
              },
              "otherOperatingExpenses": {},
              "interestExpense": {
                "raw": -8872000,
                "fmt": "-8.87M",
                "longFmt": "-8,872,000"
              },
              "extraordinaryItems": {},
              "nonRecurring": {},
              "otherItems": {},
              "incomeTaxExpense": {
                "raw": 96000,
                "fmt": "96k",
                "longFmt": "96,000"
              },
              "totalRevenue": {
                "raw": 229214000,
                "fmt": "229.21M",
                "longFmt": "229,214,000"
              },
              "totalOperatingExpenses": {
                "raw": 337439000,
                "fmt": "337.44M",
                "longFmt": "337,439,000"
              },
              "costOfRevenue": {
                "raw": 54543000,
                "fmt": "54.54M",
                "longFmt": "54,543,000"
              },
              "totalOtherIncomeExpenseNet": {
                "raw": -8124000,
                "fmt": "-8.12M",
                "longFmt": "-8,124,000"
              },
              "maxAge": 1,
              "discontinuedOperations": {},
              "netIncomeFromContinuingOps": {
                "raw": -116445000,
                "fmt": "-116.44M",
                "longFmt": "-116,445,000"
              },
              "netIncomeApplicableToCommonShares": {
                "raw": -116445000,
                "fmt": "-116.44M",
                "longFmt": "-116,445,000"
              }
            },
            {
              "researchDevelopment": {
                "raw": 47158000,
                "fmt": "47.16M",
                "longFmt": "47,158,000"
              },
              "effectOfAccountingCharges": {},
              "incomeBeforeTax": {
                "raw": -54818000,
                "fmt": "-54.82M",
                "longFmt": "-54,818,000"
              },
              "minorityInterest": {},
              "netIncome": {
                "raw": -67865000,
                "fmt": "-67.86M",
                "longFmt": "-67,865,000"
              },
              "sellingGeneralAdministrative": {
                "raw": 134549000,
                "fmt": "134.55M",
                "longFmt": "134,549,000"
              },
              "grossProfit": {
                "raw": 136152000,
                "fmt": "136.15M",
                "longFmt": "136,152,000"
              },
              "ebit": {
                "raw": -45555000,
                "fmt": "-45.55M",
                "longFmt": "-45,555,000"
              },
              "endDate": {
                "raw": 1514678400,
                "fmt": "2017-12-31"
              },
              "operatingIncome": {
                "raw": -45555000,
                "fmt": "-45.55M",
                "longFmt": "-45,555,000"
              },
              "otherOperatingExpenses": {},
              "interestExpense": {
                "raw": -9766000,
                "fmt": "-9.77M",
                "longFmt": "-9,766,000"
              },
              "extraordinaryItems": {},
              "nonRecurring": {},
              "otherItems": {},
              "incomeTaxExpense": {
                "raw": 13047000,
                "fmt": "13.05M",
                "longFmt": "13,047,000"
              },
              "totalRevenue": {
                "raw": 181104000,
                "fmt": "181.1M",
                "longFmt": "181,104,000"
              },
              "totalOperatingExpenses": {
                "raw": 226659000,
                "fmt": "226.66M",
                "longFmt": "226,659,000"
              },
              "costOfRevenue": {
                "raw": 44952000,
                "fmt": "44.95M",
                "longFmt": "44,952,000"
              },
              "totalOtherIncomeExpenseNet": {
                "raw": -9263000,
                "fmt": "-9.26M",
                "longFmt": "-9,263,000"
              },
              "maxAge": 1,
              "discontinuedOperations": {},
              "netIncomeFromContinuingOps": {
                "raw": -67865000,
                "fmt": "-67.86M",
                "longFmt": "-67,865,000"
              },
              "netIncomeApplicableToCommonShares": {
                "raw": -67865000,
                "fmt": "-67.86M",
                "longFmt": "-67,865,000"
              }
            },
            {
              "researchDevelopment": {
                "raw": 49975000,
                "fmt": "49.98M",
                "longFmt": "49,975,000"
              },
              "effectOfAccountingCharges": {},
              "incomeBeforeTax": {
                "raw": -76381000,
                "fmt": "-76.38M",
                "longFmt": "-76,381,000"
              },
              "minorityInterest": {},
              "netIncome": {
                "raw": -86350000,
                "fmt": "-86.35M",
                "longFmt": "-86,350,000"
              },
              "sellingGeneralAdministrative": {
                "raw": 111372000,
                "fmt": "111.37M",
                "longFmt": "111,372,000"
              },
              "grossProfit": {
                "raw": 95721000,
                "fmt": "95.72M",
                "longFmt": "95,721,000"
              },
              "ebit": {
                "raw": -65626000,
                "fmt": "-65.63M",
                "longFmt": "-65,626,000"
              },
              "endDate": {
                "raw": 1483142400,
                "fmt": "2016-12-31"
              },
              "operatingIncome": {
                "raw": -65626000,
                "fmt": "-65.63M",
                "longFmt": "-65,626,000"
              },
              "otherOperatingExpenses": {},
              "interestExpense": {
                "raw": -18677000,
                "fmt": "-18.68M",
                "longFmt": "-18,677,000"
              },
              "extraordinaryItems": {},
              "nonRecurring": {},
              "otherItems": {},
              "incomeTaxExpense": {
                "raw": 9969000,
                "fmt": "9.97M",
                "longFmt": "9,969,000"
              },
              "totalRevenue": {
                "raw": 130084000,
                "fmt": "130.08M",
                "longFmt": "130,084,000"
              },
              "totalOperatingExpenses": {
                "raw": 195710000,
                "fmt": "195.71M",
                "longFmt": "195,710,000"
              },
              "costOfRevenue": {
                "raw": 34363000,
                "fmt": "34.36M",
                "longFmt": "34,363,000"
              },
              "totalOtherIncomeExpenseNet": {
                "raw": -10755000,
                "fmt": "-10.76M",
                "longFmt": "-10,755,000"
              },
              "maxAge": 1,
              "discontinuedOperations": {},
              "netIncomeFromContinuingOps": {
                "raw": -86350000,
                "fmt": "-86.35M",
                "longFmt": "-86,350,000"
              },
              "netIncomeApplicableToCommonShares": {
                "raw": -86350000,
                "fmt": "-86.35M",
                "longFmt": "-86,350,000"
              }
            },
            {
              "researchDevelopment": {
                "raw": 51062000,
                "fmt": "51.06M",
                "longFmt": "51,062,000"
              },
              "effectOfAccountingCharges": {},
              "incomeBeforeTax": {
                "raw": -118290000,
                "fmt": "-118.29M",
                "longFmt": "-118,290,000"
              },
              "minorityInterest": {},
              "netIncome": {
                "raw": -115204000,
                "fmt": "-115.2M",
                "longFmt": "-115,204,000"
              },
              "sellingGeneralAdministrative": {
                "raw": 101041000,
                "fmt": "101.04M",
                "longFmt": "101,041,000"
              },
              "grossProfit": {
                "raw": 53881000,
                "fmt": "53.88M",
                "longFmt": "53,881,000"
              },
              "ebit": {
                "raw": -98222000,
                "fmt": "-98.22M",
                "longFmt": "-98,222,000"
              },
              "endDate": {
                "raw": 1451520000,
                "fmt": "2015-12-31"
              },
              "operatingIncome": {
                "raw": -98222000,
                "fmt": "-98.22M",
                "longFmt": "-98,222,000"
              },
              "otherOperatingExpenses": {},
              "interestExpense": {
                "raw": -20180000,
                "fmt": "-20.18M",
                "longFmt": "-20,180,000"
              },
              "extraordinaryItems": {},
              "nonRecurring": {},
              "otherItems": {},
              "incomeTaxExpense": {
                "raw": -3086000,
                "fmt": "-3.09M",
                "longFmt": "-3,086,000"
              },
              "totalRevenue": {
                "raw": 81756000,
                "fmt": "81.76M",
                "longFmt": "81,756,000"
              },
              "totalOperatingExpenses": {
                "raw": 179978000,
                "fmt": "179.98M",
                "longFmt": "179,978,000"
              },
              "costOfRevenue": {
                "raw": 27875000,
                "fmt": "27.88M",
                "longFmt": "27,875,000"
              },
              "totalOtherIncomeExpenseNet": {
                "raw": -20068000,
                "fmt": "-20.07M",
                "longFmt": "-20,068,000"
              },
              "maxAge": 1,
              "discontinuedOperations": {},
              "netIncomeFromContinuingOps": {
                "raw": -115204000,
                "fmt": "-115.2M",
                "longFmt": "-115,204,000"
              },
              "netIncomeApplicableToCommonShares": {
                "raw": -149059000,
                "fmt": "-149.06M",
                "longFmt": "-149,059,000"
              }
            }
          ],
          "maxAge": 86400
        },
        "balanceSheetHistory": {
          "balanceSheetStatements": [
            {
              "intangibleAssets": {
                "raw": 7480000,
                "fmt": "7.48M",
                "longFmt": "7,480,000"
              },
              "capitalSurplus": {
                "raw": 1282762000,
                "fmt": "1.28B",
                "longFmt": "1,282,762,000"
              },
              "totalLiab": {
                "raw": 233384000,
                "fmt": "233.38M",
                "longFmt": "233,384,000"
              },
              "totalStockholderEquity": {
                "raw": 130480000,
                "fmt": "130.48M",
                "longFmt": "130,480,000"
              },
              "otherCurrentLiab": {
                "raw": 8932000,
                "fmt": "8.93M",
                "longFmt": "8,932,000"
              },
              "totalAssets": {
                "raw": 385714000,
                "fmt": "385.71M",
                "longFmt": "385,714,000"
              },
              "endDate": {
                "raw": 1546214400,
                "fmt": "2018-12-31"
              },
              "commonStock": {
                "raw": 246663000,
                "fmt": "246.66M",
                "longFmt": "246,663,000"
              },
              "otherCurrentAssets": {
                "raw": 1500000,
                "fmt": "1.5M",
                "longFmt": "1,500,000"
              },
              "retainedEarnings": {
                "raw": -1388532000,
                "fmt": "-1.39B",
                "longFmt": "-1,388,532,000"
              },
              "otherLiab": {
                "raw": 30013000,
                "fmt": "30.01M",
                "longFmt": "30,013,000"
              },
              "treasuryStock": {
                "raw": -10413000,
                "fmt": "-10.41M",
                "longFmt": "-10,413,000"
              },
              "otherAssets": {
                "raw": 174000,
                "fmt": "174k",
                "longFmt": "174,000"
              },
              "cash": {
                "raw": 249227000,
                "fmt": "249.23M",
                "longFmt": "249,227,000"
              },
              "totalCurrentLiabilities": {
                "raw": 157263000,
                "fmt": "157.26M",
                "longFmt": "157,263,000"
              },
              "shortLongTermDebt": {
                "raw": 34240000,
                "fmt": "34.24M",
                "longFmt": "34,240,000"
              },
              "propertyPlantEquipment": {
                "raw": 63000,
                "fmt": "63k",
                "longFmt": "63,000"
              },
              "totalCurrentAssets": {
                "raw": 377997000,
                "fmt": "378M",
                "longFmt": "377,997,000"
              },
              "netTangibleAssets": {
                "raw": 123000000,
                "fmt": "123M",
                "longFmt": "123,000,000"
              },
              "netReceivables": {
                "raw": 66523000,
                "fmt": "66.52M",
                "longFmt": "66,523,000"
              },
              "maxAge": 1,
              "longTermDebt": {
                "raw": 46108000,
                "fmt": "46.11M",
                "longFmt": "46,108,000"
              },
              "inventory": {
                "raw": 57802000,
                "fmt": "57.8M",
                "longFmt": "57,802,000"
              },
              "accountsPayable": {
                "raw": 37632000,
                "fmt": "37.63M",
                "longFmt": "37,632,000"
              }
            },
            {
              "intangibleAssets": {
                "raw": 8126000,
                "fmt": "8.13M",
                "longFmt": "8,126,000"
              },
              "capitalSurplus": {
                "raw": 977866000,
                "fmt": "977.87M",
                "longFmt": "977,866,000"
              },
              "totalLiab": {
                "raw": 226698000,
                "fmt": "226.7M",
                "longFmt": "226,698,000"
              },
              "totalStockholderEquity": {
                "raw": -89464000,
                "fmt": "-89.46M",
                "longFmt": "-89,464,000"
              },
              "otherCurrentLiab": {
                "raw": 6801000,
                "fmt": "6.8M",
                "longFmt": "6,801,000"
              },
              "totalAssets": {
                "raw": 161598000,
                "fmt": "161.6M",
                "longFmt": "161,598,000"
              },
              "endDate": {
                "raw": 1514678400,
                "fmt": "2017-12-31"
              },
              "commonStock": {
                "raw": 208768000,
                "fmt": "208.77M",
                "longFmt": "208,768,000"
              },
              "otherCurrentAssets": {
                "raw": 600000,
                "fmt": "600k",
                "longFmt": "600,000"
              },
              "retainedEarnings": {
                "raw": -1271869000,
                "fmt": "-1.27B",
                "longFmt": "-1,271,869,000"
              },
              "otherLiab": {
                "raw": 18342000,
                "fmt": "18.34M",
                "longFmt": "18,342,000"
              },
              "treasuryStock": {
                "raw": -4229000,
                "fmt": "-4.23M",
                "longFmt": "-4,229,000"
              },
              "otherAssets": {
                "raw": 174000,
                "fmt": "174k",
                "longFmt": "174,000"
              },
              "cash": {
                "raw": 73637000,
                "fmt": "73.64M",
                "longFmt": "73,637,000"
              },
              "totalCurrentLiabilities": {
                "raw": 108530000,
                "fmt": "108.53M",
                "longFmt": "108,530,000"
              },
              "shortLongTermDebt": {
                "raw": 22829000,
                "fmt": "22.83M",
                "longFmt": "22,829,000"
              },
              "propertyPlantEquipment": {
                "raw": 28000,
                "fmt": "28k",
                "longFmt": "28,000"
              },
              "totalCurrentAssets": {
                "raw": 153270000,
                "fmt": "153.27M",
                "longFmt": "153,270,000"
              },
              "netTangibleAssets": {
                "raw": -97590000,
                "fmt": "-97.59M",
                "longFmt": "-97,590,000"
              },
              "netReceivables": {
                "raw": 45318000,
                "fmt": "45.32M",
                "longFmt": "45,318,000"
              },
              "maxAge": 1,
              "longTermDebt": {
                "raw": 99826000,
                "fmt": "99.83M",
                "longFmt": "99,826,000"
              },
              "inventory": {
                "raw": 30260000,
                "fmt": "30.26M",
                "longFmt": "30,260,000"
              },
              "accountsPayable": {
                "raw": 25155000,
                "fmt": "25.16M",
                "longFmt": "25,155,000"
              }
            },
            {
              "intangibleAssets": {
                "raw": 8772000,
                "fmt": "8.77M",
                "longFmt": "8,772,000"
              },
              "capitalSurplus": {
                "raw": 964914000,
                "fmt": "964.91M",
                "longFmt": "964,914,000"
              },
              "totalLiab": {
                "raw": 176057000,
                "fmt": "176.06M",
                "longFmt": "176,057,000"
              },
              "totalStockholderEquity": {
                "raw": -33422000,
                "fmt": "-33.42M",
                "longFmt": "-33,422,000"
              },
              "otherCurrentLiab": {
                "raw": 6972000,
                "fmt": "6.97M",
                "longFmt": "6,972,000"
              },
              "totalAssets": {
                "raw": 166999000,
                "fmt": "167M",
                "longFmt": "166,999,000"
              },
              "endDate": {
                "raw": 1483142400,
                "fmt": "2016-12-31"
              },
              "commonStock": {
                "raw": 207166000,
                "fmt": "207.17M",
                "longFmt": "207,166,000"
              },
              "otherCurrentAssets": {
                "raw": 600000,
                "fmt": "600k",
                "longFmt": "600,000"
              },
              "retainedEarnings": {
                "raw": -1204004000,
                "fmt": "-1.2B",
                "longFmt": "-1,204,004,000"
              },
              "otherLiab": {
                "raw": 14653000,
                "fmt": "14.65M",
                "longFmt": "14,653,000"
              },
              "treasuryStock": {
                "raw": -1498000,
                "fmt": "-1.5M",
                "longFmt": "-1,498,000"
              },
              "otherAssets": {
                "raw": 11823000,
                "fmt": "11.82M",
                "longFmt": "11,823,000"
              },
              "cash": {
                "raw": 98251000,
                "fmt": "98.25M",
                "longFmt": "98,251,000"
              },
              "totalCurrentLiabilities": {
                "raw": 76249000,
                "fmt": "76.25M",
                "longFmt": "76,249,000"
              },
              "deferredLongTermAssetCharges": {
                "raw": 11082000,
                "fmt": "11.08M",
                "longFmt": "11,082,000"
              },
              "shortLongTermDebt": {
                "raw": 31295000,
                "fmt": "31.3M",
                "longFmt": "31,295,000"
              },
              "propertyPlantEquipment": {
                "raw": 78000,
                "fmt": "78k",
                "longFmt": "78,000"
              },
              "totalCurrentAssets": {
                "raw": 146326000,
                "fmt": "146.33M",
                "longFmt": "146,326,000"
              },
              "netTangibleAssets": {
                "raw": -42194000,
                "fmt": "-42.19M",
                "longFmt": "-42,194,000"
              },
              "netReceivables": {
                "raw": 19985000,
                "fmt": "19.98M",
                "longFmt": "19,985,000"
              },
              "maxAge": 1,
              "longTermDebt": {
                "raw": 85155000,
                "fmt": "85.16M",
                "longFmt": "85,155,000"
              },
              "inventory": {
                "raw": 20507000,
                "fmt": "20.51M",
                "longFmt": "20,507,000"
              },
              "accountsPayable": {
                "raw": 6062000,
                "fmt": "6.06M",
                "longFmt": "6,062,000"
              }
            },
            {
              "intangibleAssets": {
                "raw": 9417000,
                "fmt": "9.42M",
                "longFmt": "9,417,000"
              },
              "capitalSurplus": {
                "raw": 816171000,
                "fmt": "816.17M",
                "longFmt": "816,171,000"
              },
              "totalLiab": {
                "raw": 300782000,
                "fmt": "300.78M",
                "longFmt": "300,782,000"
              },
              "totalStockholderEquity": {
                "raw": -151916000,
                "fmt": "-151.92M",
                "longFmt": "-151,916,000"
              },
              "otherCurrentLiab": {
                "raw": 5207000,
                "fmt": "5.21M",
                "longFmt": "5,207,000"
              },
              "totalAssets": {
                "raw": 173230000,
                "fmt": "173.23M",
                "longFmt": "173,230,000"
              },
              "endDate": {
                "raw": 1451520000,
                "fmt": "2015-12-31"
              },
              "commonStock": {
                "raw": 149978000,
                "fmt": "149.98M",
                "longFmt": "149,978,000"
              },
              "otherCurrentAssets": {
                "raw": 600000,
                "fmt": "600k",
                "longFmt": "600,000"
              },
              "retainedEarnings": {
                "raw": -1117654000,
                "fmt": "-1.12B",
                "longFmt": "-1,117,654,000"
              },
              "otherLiab": {
                "raw": 21813000,
                "fmt": "21.81M",
                "longFmt": "21,813,000"
              },
              "treasuryStock": {
                "raw": -411000,
                "fmt": "-411k",
                "longFmt": "-411,000"
              },
              "otherAssets": {
                "raw": 20046000,
                "fmt": "20.05M",
                "longFmt": "20,046,000"
              },
              "cash": {
                "raw": 106961000,
                "fmt": "106.96M",
                "longFmt": "106,961,000"
              },
              "totalCurrentLiabilities": {
                "raw": 50723000,
                "fmt": "50.72M",
                "longFmt": "50,723,000"
              },
              "deferredLongTermAssetCharges": {
                "raw": 19872000,
                "fmt": "19.87M",
                "longFmt": "19,872,000"
              },
              "shortLongTermDebt": {
                "raw": 14742000,
                "fmt": "14.74M",
                "longFmt": "14,742,000"
              },
              "propertyPlantEquipment": {
                "raw": 243000,
                "fmt": "243k",
                "longFmt": "243,000"
              },
              "totalCurrentAssets": {
                "raw": 143524000,
                "fmt": "143.52M",
                "longFmt": "143,524,000"
              },
              "netTangibleAssets": {
                "raw": -161333000,
                "fmt": "-161.33M",
                "longFmt": "-161,333,000"
              },
              "netReceivables": {
                "raw": 13826000,
                "fmt": "13.83M",
                "longFmt": "13,826,000"
              },
              "maxAge": 1,
              "longTermDebt": {
                "raw": 228246000,
                "fmt": "228.25M",
                "longFmt": "228,246,000"
              },
              "inventory": {
                "raw": 18985000,
                "fmt": "18.98M",
                "longFmt": "18,985,000"
              },
              "accountsPayable": {
                "raw": 10832000,
                "fmt": "10.83M",
                "longFmt": "10,832,000"
              }
            }
          ],
          "maxAge": 86400
        },
        
      
}


export default function IncomeStatement_table({currentTicker}){

async function getData()  {
    const ticker = (currentTicker.current.toUpperCase())
    console.log(ticker)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5ce3259baamsh927e932246a4b9bp13b280jsne1e7b7bc0238',
            'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
    };
    
  
    const res = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials?symbol=${ticker}&region=US`,options)
    const data = await res.json();
    
 

};
getData()
    
    return(
        <div class=" container w-30 p-3 top-50border border-warning">
            <script src="../../pages/stocksearch"></script>
        <h1 style={{fontSize:"28.5px"}}class="fw-bold bg-light text-black text-center card" > Financial Data   ticker:  {currentTicker.current} </h1>
        <div>
       
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">2022</th>
                    <th  scope="col">Q1</th>
                    <th scope="col">Q2</th>
                    <th scope="col">Q3</th>
                    <th scope="col">Q4</th>
                    </tr>
                </thead>
                
                <tbody>
                 
                    <tr>
                     
                    <th scope="row">Revenue</th>
                    <td>
                        <span class="text-danger">
                        <i class="d-flex justify content-between fas fa-caret-down mr-1"></i><span>-48.8%%</span>
                        </span>
                    </td>
                    <td>
                        <span class="text-success">
                        <i class="d-flex justify content-between fas fa-caret-up me-1"></i><span>14.0%</span>
                        </span>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">Operating Expenses</th>
                    <td>
                        <span class="text-danger">
                        <i class="d-flex justify content-between fas fa-caret-down me-1"></i><span>-48.8%%</span>
                        </span>
                    </td>
                    <td>
                        <span class="text-success">
                        <i class="d-flex justify content-between fas fa-caret-up me-1"></i><span>14.0%</span>
                        </span>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">Net Income </th>
                    <td>
                        <span class="text-danger">
                        <i class="d-flex justify content-between fas fa-caret-down me-1"></i><span>-48.8%%</span>
                        </span>
                    </td>
                    <td>
                        <span class="text-success">
                        <i class="d-flex justify content-between fas fa-caret-up me-1"></i><span>14.0%</span>
                        </span>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">Net Profit Margin </th>
                    <td>
                        <span class="text-success">
                        <i class="d-flex justify content-between fas fa-caret-up me-1"></i><span>$1,092.72</span>
                        </span>
                    </td>
                    <td>
                        <span class="mx-auto text-danger">
                        <i class="d-flex justify content-between fas fa-caret-down me-1"></i><span>$-1.78</span>
                        </span>  
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">Dividens</th>
                    <td>
                        <span class="text-success">
                        <i class="d-flex justify content-between fas fa-caret-up me-1"></i><span>$1,092.72</span>
                        </span>
                    </td>
                    <td>
                        <span class="text-danger">
                        <i class="d-flex justify content-between fas fa-caret-down me-1"></i><span>$-1.78</span>
                        </span>  
                    </td>
                    </tr>
                    </tbody>
                </table>
        </div>
    </div>
    )
}


 