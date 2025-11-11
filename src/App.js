import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Plus, Trash2, Play, X, Code, Database } from 'lucide-react';

// Default rules for the app
const DEFAULT_RULES = [
  {
    name: 'banking_bto',
    conditions: {
      "lower": [
        {
          "id": 1,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 50000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "FOODTECH",
                  "ECOM_DIRECT"
                ],
                "operator": "in"
              }
            ]
          }
        }
      ],
      "upper": [
        {
          "id": 193,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 2000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT",
                  "SMFG_DIRECT",
                  "POS",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "DIRECT_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "POS_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL",
                  "ABFL_DIRECT",
                  "SLICEBANK_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "address_ownership_status",
                    "value": "Owned",
                    "operator": "equal"
                  },
                  {
                    "fact": "business_address_ownership_status",
                    "value": "Owned",
                    "operator": "equal"
                  }
                ]
              },
              {
                "fact": "business_vintage_by_month",
                "value": 36,
                "operator": "greaterThanInclusive"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B"
                ],
                "operator": "in"
              },
              {
                "fact": "partner_code",
                "value": [
                  "f94336o060ebe",
                  "f84386a060ebc",
                  "f0ca0b47d2c66",
                  "ed7f0bf451cd9",
                  "eaa2b51e05739",
                  "e5515bd0e1df1",
                  "e0ace7a48fa1c",
                  "daa20fed80a2a",
                  "d4d0cab57aeee",
                  "d259d7bb5b3cb",
                  "d143fbdce76d9",
                  "c950a7893bb18",
                  "c8ea708ecf978",
                  "c4ceb2712bc2f",
                  "beb5a29979479",
                  "bbf8896772949",
                  "bb9aa3efc6fdd",
                  "b9981c1d30c90",
                  "b7ca096181b1a",
                  "af55a5bde03d6",
                  "a76d762df7d4b",
                  "a63a3769f93f4",
                  "a44c0b515c051",
                  "a343091a9cc13",
                  "9c7bfcd45af46",
                  "9a5af98795361",
                  "8ce45a8c335e1",
                  "86d23b9c0f358",
                  "84d4824d43a25",
                  "83084b28f0d70",
                  "82144ae74949c",
                  "80ea0af18e382",
                  "7fc1c164b0a20",
                  "791db3fba7bf8",
                  "77b0651c1ea17",
                  "6b55d0904e56c",
                  "67be540889b9e",
                  "64f1be98nfwae",
                  "649abdf3web99",
                  "64997e0933n01",
                  "64770f9dsgbok",
                  "6476f865cesfx",
                  "647466941cesx",
                  "647451f38q9j9",
                  "647447277wdt3",
                  "646f1dfb5a5vf",
                  "645dd7f0ib590",
                  "64510f0d9cysu",
                  "642e3fcbvu9g6",
                  "642bd6cduqvc3",
                  "641d61182hx99",
                  "6401e67f8uswh",
                  "6400a5d09hxc9",
                  "63e614090skj6",
                  "63e5e945jhdzg",
                  "63da2d0csvwrt",
                  "63da2cfcmhh8m",
                  "63d4db57xlbc0",
                  "63ce6d70wk0xf",
                  "63bfb4085la0n",
                  "639311f9dnnc7",
                  "638f9f9b6800z",
                  "638f9f89daauy",
                  "638879ea6ikdf",
                  "63809e2e42vzo",
                  "637f3f75l1ce6",
                  "636a43fc56fr6",
                  "63640c56k3iey",
                  "63640be74unne",
                  "63638744oaqjn",
                  "6360f859wykgj",
                  "635a817eserp0",
                  "635a8158yfbw8",
                  "632d8f29rkvfg",
                  "63109a83c1esl",
                  "62fb5ac0hj5z7",
                  "62f5e7ab8d3qj",
                  "62ecd0103ks2i",
                  "62e93423y992m",
                  "62e0c81b1oc74",
                  "62dfec6c57s2c",
                  "62d6b9c4eafkk",
                  "62d66c76vc8it",
                  "62cfe4fbpb2uh",
                  "62cfc67d6hbe5",
                  "62cbd03bq7doh",
                  "62c53a35t01qg",
                  "62c539d4iw91w",
                  "62c4240c7rv7k",
                  "62c42362iar2w",
                  "62b2deffyy9wc",
                  "62ac70edvbiby",
                  "629f33aa2eect",
                  "629f0ec0y6an6",
                  "62972be6vgws6",
                  "6283520ew8xrz",
                  "620c9aa2yqyku",
                  "61975594nb5zf",
                  "6194d601p6t78",
                  "618d601b63rop",
                  "617d1c63xc1ce",
                  "61781eb2pa527",
                  "616dbe29ctmu3",
                  "6155a1538b60g",
                  "6110ebf88rhlm",
                  "6108f2105hdc1",
                  "60ed83de59gil",
                  "60ed4010l2cxo",
                  "60c0f2c4a6b67",
                  "6040c5a15x57y",
                  "6040b5c123p23",
                  "6040b5c100p1s",
                  "601aad782s7m9",
                  "600c32152wnm3",
                  "6008391fpn6e7",
                  "5fe429a0sj16d",
                  "5f7da77e0v7ol",
                  "5f7da764u1o8b",
                  "5f7da743iypp4",
                  "5f21366c79jw2",
                  "5ef6150f1npfm",
                  "5ef49baej7phd",
                  "5ea3ec1frlxjg",
                  "5e983437g3qvb",
                  "5e7f1ffc95usk",
                  "5e5fa9787xkws",
                  "5e58f868xj4i2",
                  "5e53ce9bqoqnb",
                  "5e4bde40bd556",
                  "5e2fd567dt1y9",
                  "5e2ec522ey2ya",
                  "5e217472x2wb1",
                  "5df3304bxcbdw",
                  "5de4cdec3e208",
                  "5dc54c81hvslq",
                  "5d4935dacf8a8",
                  "5d442d861f142",
                  "5d2db2785juev",
                  "5d19e219uxbso",
                  "5c8a61022v3ll",
                  "5c80cc86e8ywx",
                  "5c80cc56wtarb",
                  "5c80cc402q1dg",
                  "5c80cc132ptaa",
                  "5c1774d8uupw8",
                  "5b83d0cek1n10",
                  "5b7d1394370c0",
                  "5b0645c0e8c19",
                  "5a7aab0fdb506",
                  "5a38a2c20c799",
                  "5a00394c54830",
                  "599eda7243c79",
                  "5969727576129",
                  "5942a6fa3f67e",
                  "5911b4882685a",
                  "5911b47caa701",
                  "590055756bd2a",
                  "59002aaed7a40",
                  "58d22270b44fb",
                  "58ca84caaba24",
                  "58ca8477b2b6b",
                  "58ca83d1a2095",
                  "578a91e921fe0",
                  "5557d94275052",
                  "504147b7ed54c",
                  "4fbdf8ffe9526",
                  "4dbc46a5f9a43",
                  "49a39e8a9f963",
                  "4756920a70969",
                  "4624c33b84465",
                  "41f36abaaa500",
                  "4136266b5fc32",
                  "3a4ffc81d00f3",
                  "33ad41047c53c",
                  "2a97fd1196b09",
                  "22012b5bc9d71",
                  "20dd51d6ecd40",
                  "1ce8a51be34cd",
                  "187d158af0947",
                  "1565c27455004",
                  "0b16a2206f607",
                  "0539d7ee8cfe2"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 192,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 2500000
            }
          },
          "conditions": {
            "all": [
              {
                "any": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "contains"
                  }
                ]
              },
              {
                "fact": "business_vintage_by_month",
                "value": 36,
                "operator": "greaterThan"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B"
                ],
                "operator": "in"
              },
              {
                "fact": "partner_type",
                "value": [
                  "Digital Alliance",
                  "None",
                  "Other partners",
                  "POS"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "address_ownership_status",
                    "value": "Owned",
                    "operator": "equal"
                  },
                  {
                    "fact": "business_address_ownership_status",
                    "value": "Owned",
                    "operator": "equal"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 191,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 2000000
            }
          },
          "conditions": {
            "all": [
              {
                "any": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "contains"
                  }
                ]
              },
              {
                "fact": "business_vintage_by_month",
                "value": 36,
                "operator": "lessThanInclusive"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B"
                ],
                "operator": "in"
              },
              {
                "fact": "partner_type",
                "value": [
                  "DSA",
                  "Digital Alliance",
                  "None",
                  "Other partners",
                  "POS"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 190,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 2000000
            }
          },
          "conditions": {
            "all": [
              {
                "any": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "contains"
                  }
                ]
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION_ECOM",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      74
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 189,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1500000
            }
          },
          "conditions": {
            "all": [
              {
                "any": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "contains"
                  }
                ]
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "Credit-Experiment-V1",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      107
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 188,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1200000
            }
          },
          "conditions": {
            "all": [
              {
                "any": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "contains"
                  }
                ]
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "Credit-Experiment-V1",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      107
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "B"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 187,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 2000000
            }
          },
          "conditions": {
            "all": [
              {
                "any": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "contains"
                  }
                ]
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_PROFILE",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      50
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 186,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1200000
            }
          },
          "conditions": {
            "all": [
              {
                "any": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "contains"
                  }
                ]
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_PROFILE",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      50
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C",
                  "D",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 185,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1200000
            }
          },
          "conditions": {
            "all": [
              {
                "any": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "contains"
                  }
                ]
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 184,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "any": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "contains"
                  }
                ]
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "B"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 183,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 800000
            }
          },
          "conditions": {
            "all": [
              {
                "any": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "contains"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "contains"
                  }
                ]
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 182,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "soft_reach",
                "value": 1,
                "operator": "equal"
              },
              {
                "fact": "partner_type",
                "value": [
                  "SCF"
                ],
                "operator": "notIn"
              }
            ]
          }
        },
        {
          "id": 181,
          "event": {
            "type": "MUDRA_CAPPING",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "all": [
                  {
                    "fact": "is_topup",
                    "value": 1,
                    "message": "Case is Topup",
                    "operator": "notEqual"
                  },
                  {
                    "fact": "is_renewal",
                    "value": 1,
                    "message": "Case is Renewal",
                    "operator": "notEqual"
                  }
                ]
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - Toxic Profile + Cat D",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - D+Experiments",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - ABB below norms",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - Toxic Profile & Cautious Location",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - BTO below norms",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - Both Rented Vintage",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - Both Rented BTO",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - other",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - E + Experiments",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - Unsecured BL and PL",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - Business vintage",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CREDIT_REJECTION_TOXIC_PROFILE_RISK_GRADE_D",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CREDIT_REJECTION_CAUTIOUS_PROFILE_RISK_GRADE_D",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CREDIT_REJECT_BTO_DECLINE",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CREDIT_REJECTION_CREDIT_INSTANCES",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CREDIT_REJCTION_CREDIT_INSTANCE_FRESH",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CREDIT_REJECTION_NTC_THIN",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      111,
                      112,
                      113,
                      114,
                      115,
                      116,
                      117,
                      118,
                      119,
                      120,
                      121,
                      126,
                      127,
                      132,
                      146,
                      147,
                      148
                    ],
                    "operator": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 180,
          "event": {
            "type": "MUDRA_CAPPING",
            "params": {
              "message": 2000000
            }
          },
          "conditions": {
            "all": [
              {
                "all": [
                  {
                    "any": [
                      {
                        "fact": "is_topup",
                        "value": 1,
                        "message": "Case is Topup",
                        "operator": "equal"
                      },
                      {
                        "fact": "is_renewal",
                        "value": 1,
                        "message": "Case is Topup",
                        "operator": "equal"
                      }
                    ]
                  }
                ]
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - Toxic Profile + Cat D",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - D+Experiments",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - ABB below norms",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - Toxic Profile & Cautious Location",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - BTO below norms",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - Both Rented Vintage",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - Both Rented BTO",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - other",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - E + Experiments",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - Unsecured BL and PL",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - Business vintage",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CREDIT_REJECTION_TOXIC_PROFILE_RISK_GRADE_D",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CREDIT_REJECTION_CAUTIOUS_PROFILE_RISK_GRADE_D",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CREDIT_REJECT_BTO_DECLINE",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CREDIT_REJECTION_CREDIT_INSTANCES",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CREDIT_REJECTION_NTC_THIN",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CREDIT_REJCTION_CREDIT_INSTANCE_FRESH",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      111,
                      112,
                      113,
                      114,
                      115,
                      116,
                      117,
                      118,
                      119,
                      120,
                      121,
                      126,
                      127,
                      132,
                      146,
                      147,
                      148
                    ],
                    "operator": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 179,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 10000000000
            }
          },
          "conditions": {
            "all": [
              {
                "any": [
                  {
                    "fact": "is_gst_present",
                    "value": false,
                    "message": "GST Is Not present",
                    "operator": "equal"
                  },
                  {
                    "fact": "is_gst_active",
                    "value": false,
                    "message": "GST Is Not Active",
                    "operator": "equal"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 178,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CREDIT_REJECTION_TOXIC_PROFILE_RISK_GRADE_D",
                    "message": "Experiement is CREDIT_REJECTION_TOXIC_PROFILE_RISK_GRADE_D ",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CREDIT_REJECTION_CAUTIOUS_PROFILE_RISK_GRADE_D",
                    "message": "Experiement is CREDIT_REJECTION_CAUTIOUS_PROFILE_RISK_GRADE_D ",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      126,
                      127
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "any": [
                  {
                    "fact": "is_topup",
                    "value": [
                      1
                    ],
                    "message": "Case is Topup",
                    "operator": "in"
                  },
                  {
                    "fact": "is_renewal",
                    "value": [
                      1
                    ],
                    "message": "Case is Renewal",
                    "operator": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 177,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 2000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "partner_type",
                "value": [
                  "SCF",
                  "Dealer Finance"
                ],
                "operator": "notIn"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      74
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "A",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 176,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiment_id",
                    "value": [
                      50,
                      74,
                      107
                    ],
                    "message": "Experiment is from the list",
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "E",
                  "D"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 175,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiment_id",
                    "value": [
                      50,
                      74,
                      107
                    ],
                    "message": "Experiment is from the list",
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "E",
                  "D"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 174,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 600000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiment_id",
                    "value": [
                      52
                    ],
                    "message": "Experiment is from the list",
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "D",
                  "E"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 173,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiment_id",
                    "value": [
                      52
                    ],
                    "message": "Experiment is from the list",
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "D",
                  "E"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 172,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DELINQUENT_PINCODE",
                  "DIRECT",
                  "ECOM",
                  "ECOM_DIRECT",
                  "FOODTECH",
                  "SMFG_DELINQUENT_PINCODE",
                  "SMFG_DIRECT",
                  "SMFG_ECOM",
                  "POS",
                  "VIVRITI_DELINQUENT_PINCODE",
                  "VIVRITI_DIRECT",
                  "VIVRITI_ECOM",
                  "VIVRITI_POS",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - Toxic Profile + Cat D",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - D+Experiments",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - ABB below norms",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - Toxic Profile & Cautious Location",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - BTO below norms",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      111,
                      112,
                      113,
                      114,
                      115
                    ],
                    "operator": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 171,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT_TOPUP",
                  "ECOM_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "SMFG_ECOM_TOPUP",
                  "POS_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - ABB below norms",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - BTO below norms",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      113,
                      115
                    ],
                    "operator": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 170,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DELINQUENT_PINCODE",
                  "DIRECT",
                  "ECOM",
                  "ECOM_DIRECT",
                  "FOODTECH",
                  "SMFG_DELINQUENT_PINCODE",
                  "SMFG_DIRECT",
                  "SMFG_ECOM",
                  "POS",
                  "VIVRITI_DELINQUENT_PINCODE",
                  "VIVRITI_DIRECT",
                  "VIVRITI_ECOM",
                  "VIVRITI_POS",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - D+Experiments",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - Toxic Profile + Cat D",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      111,
                      112
                    ],
                    "operator": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 169,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DELINQUENT_PINCODE",
                  "DIRECT",
                  "ECOM",
                  "ECOM_DIRECT",
                  "FOODTECH",
                  "SMFG_DELINQUENT_PINCODE",
                  "SMFG_DIRECT",
                  "SMFG_ECOM",
                  "POS",
                  "VIVRITI_DELINQUENT_PINCODE",
                  "VIVRITI_DIRECT",
                  "VIVRITI_ECOM",
                  "VIVRITI_POS",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - Toxic Profile & Cautious Location",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      114
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "B"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 168,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DELINQUENT_PINCODE",
                  "DIRECT",
                  "ECOM",
                  "ECOM_DIRECT",
                  "FOODTECH",
                  "SMFG_DELINQUENT_PINCODE",
                  "SMFG_DIRECT",
                  "SMFG_ECOM",
                  "POS",
                  "VIVRITI_DELINQUENT_PINCODE",
                  "VIVRITI_DIRECT",
                  "VIVRITI_ECOM",
                  "VIVRITI_POS",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - Toxic Profile & Cautious Location",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      114
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C",
                  "D"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 167,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DELINQUENT_PINCODE",
                  "DIRECT",
                  "ECOM",
                  "ECOM_DIRECT",
                  "FOODTECH",
                  "SMFG_DELINQUENT_PINCODE",
                  "SMFG_DIRECT",
                  "SMFG_ECOM",
                  "POS",
                  "VIVRITI_DELINQUENT_PINCODE",
                  "VIVRITI_DIRECT",
                  "VIVRITI_ECOM",
                  "VIVRITI_POS",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "Credit Rejection - Toxic Profile & Cautious Location",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      114
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "E",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 166,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "FOODTECH",
                  "FOODTECH_AUTO_LENDING",
                  "SMFG_ECOM_AUTO_LENDING",
                  "VIVRITI_ECOM_AUTO_LENDING",
                  "DIRECT",
                  "SMFG_DIRECT",
                  "VIVIRITI_DIRECT",
                  "POS",
                  "VIVRITI_POS",
                  "ECOM",
                  "ECOM_DIRECT",
                  "VIVRITI_ECOM",
                  "SMFG_ECOM",
                  "DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiment_id",
                    "value": [
                      50,
                      51,
                      52,
                      74,
                      84,
                      85,
                      107,
                      110
                    ],
                    "message": "Experiment is from the list",
                    "operator": "in"
                  },
                  {
                    "fact": "experiments",
                    "value": [
                      "CAUTIOUS_LOCATION",
                      "CAUTIOUS_LOCATION_DIRECT_POS",
                      "CAUTIOUS_LOCATION_ECOM",
                      "CAUTIOUS_ PROFILE"
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 165,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 600000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT_TOPUP",
                  "ECOM_TOPUP",
                  "POS_TOPUP",
                  "ECOM_TOPUP_AUTO_LENDING",
                  "SMFG_ECOM_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiment_id",
                    "value": [
                      84
                    ],
                    "message": "Experiment is from the list",
                    "operator": "in"
                  },
                  {
                    "fact": "experiments",
                    "value": [
                      "Salaried applicant"
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 164,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ECOM_TOPUP",
                  "ECOM_TOPUP_AUTO_LENDING",
                  "SMFG_ECOM_TOPUP"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiment_id",
                    "value": [
                      51
                    ],
                    "message": "Experiment is Rented Direct",
                    "operator": "in"
                  },
                  {
                    "fact": "experiments",
                    "value": [
                      "RENTED_RCO_V2.0"
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 163,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 600000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT_TOPUP",
                  "POS_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiment_id",
                    "value": [
                      52
                    ],
                    "message": "Experiment is Rented Direct",
                    "operator": "in"
                  },
                  {
                    "fact": "experiments",
                    "value": [
                      "RENTED_DIRECT_V2.0"
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "NA"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 162,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT_TOPUP",
                  "POS_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiment_id",
                    "value": [
                      107
                    ],
                    "message": "Experiment is Toxic Profile",
                    "operator": "in"
                  },
                  {
                    "fact": "experiments",
                    "value": [
                      "Credit-Experiment-V1"
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "NA"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 161,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT_TOPUP",
                  "ECOM_TOPUP",
                  "POS_TOPUP",
                  "ECOM_TOPUP_AUTO_LENDING",
                  "SMFG_ECOM_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiment_id",
                    "value": [
                      85
                    ],
                    "message": "Experiment is Saving Account",
                    "operator": "in"
                  },
                  {
                    "fact": "experiments",
                    "value": [
                      "Saving account"
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 160,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 2500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ECOM_TOPUP",
                  "ECOM_TOPUP_AUTO_LENDING",
                  "SMFG_ECOM_TOPUP"
                ],
                "operator": "in"
              },
              {
                "fact": "experiments",
                "value": [
                  "CAUTIOUS_LOCATION_ECOM"
                ],
                "message": "Experiment is CAUTIOUS LOCATION ECOM",
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 159,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT_TOPUP",
                  "POS_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiment_id",
                    "value": [
                      50,
                      74
                    ],
                    "message": "Experiment is from the list",
                    "operator": "in"
                  },
                  {
                    "fact": "experiments",
                    "value": [
                      "CAUTIOUS_LOCATION",
                      "CAUTIOUS_LOCATION_DIRECT_POS",
                      "CAUTIOUS_PROFILE"
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "NA"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 158,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DELINQUENT_PINCODE",
                  "DIRECT",
                  "DIRECT_TOPUP",
                  "FOODTECH",
                  "SMFG_DELINQUENT_PINCODE",
                  "SMFG_DIRECT",
                  "SMFG_DIRECT_TOPUP",
                  "POS",
                  "POS_TOPUP",
                  "VIVRITI_DELINQUENT_PINCODE",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT",
                  "ABFL_DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  46
                ],
                "message": "Experiment is Personal Loans",
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B",
                  "C"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 157,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DELINQUENT_PINCODE",
                  "DIRECT",
                  "FOODTECH",
                  "SMFG_DELINQUENT_PINCODE",
                  "SMFG_DIRECT",
                  "POS",
                  "VIVRITI_DELINQUENT_PINCODE",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  46
                ],
                "message": "Experiment is Personal Loans",
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "B"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 156,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DELINQUENT_PINCODE",
                  "DIRECT",
                  "FOODTECH",
                  "SMFG_DELINQUENT_PINCODE",
                  "SMFG_DIRECT",
                  "POS",
                  "VIVRITI_DELINQUENT_PINCODE",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  46
                ],
                "message": "Experiment is Personal Loans",
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 155,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DELINQUENT_PINCODE",
                  "DIRECT",
                  "DIRECT_TOPUP",
                  "FOODTECH",
                  "SMFG_DELINQUENT_PINCODE",
                  "SMFG_DIRECT",
                  "SMFG_DIRECT_TOPUP",
                  "POS",
                  "POS_TOPUP",
                  "VIVRITI_DELINQUENT_PINCODE",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT",
                  "ABFL_DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  46
                ],
                "message": "Experiment is Personal Loans",
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "D",
                  "E",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 154,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT_TOPUP",
                  "POS_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "SCUF_DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 153,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 800000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT_TOPUP",
                  "POS_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "SCUF_DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "B"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 152,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 600000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT_TOPUP",
                  "POS_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "SCUF_DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 151,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 600000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT_TOPUP",
                  "POS_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "SCUF_DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "D",
                  "E",
                  "NA"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 150,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT_TOPUP",
                  "POS_TOPUP",
                  "ECOM_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "SCUF_DIRECT_TOPUP",
                  "VIVRITI_ECOM_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SALARIED_APPLICANT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      84
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 149,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 800000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT_TOPUP",
                  "POS_TOPUP",
                  "ECOM_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "SCUF_DIRECT_TOPUP",
                  "VIVRITI_ECOM_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SALARIED_APPLICANT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      84
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "B"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 148,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 600000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT_TOPUP",
                  "POS_TOPUP",
                  "ECOM_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "SCUF_DIRECT_TOPUP",
                  "VIVRITI_ECOM_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SALARIED_APPLICANT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      84
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 147,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 600000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT_TOPUP",
                  "POS_TOPUP",
                  "ECOM_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "SCUF_DIRECT_TOPUP",
                  "VIVRITI_ECOM_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SALARIED_APPLICANT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      84
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "D",
                  "E",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 146,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ECOM_TOPUP",
                  "SMFG_ECOM_TOPUP",
                  "SCUF_ECOM_TOPUP",
                  "VIVRITI_ECOM_TOPUP"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_RCO",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      51
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B",
                  "C"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 145,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ECOM_TOPUP",
                  "SMFG_ECOM_TOPUP",
                  "SCUF_ECOM_TOPUP",
                  "VIVRITI_ECOM_TOPUP"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_RCO",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      51
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "D",
                  "E",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 144,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ECOM_TOPUP",
                  "SMFG_ECOM_TOPUP",
                  "SCUF_ECOM_TOPUP",
                  "DIRECT_TOPUP",
                  "POS_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "VIVRITI_ECOM_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SAVING_ACCOUNT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      85
                    ],
                    "message": "Saving account",
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 143,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "FOODTECH"
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 142,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "FOODTECH"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SALARIED_APPLICANT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52,
                      84
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "A",
                "operator": "equal"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 141,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 800000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "FOODTECH"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SALARIED_APPLICANT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52,
                      84
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "B",
                "operator": "equal"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 140,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 600000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "FOODTECH"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SALARIED_APPLICANT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52,
                      84
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "C",
                "operator": "equal"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 139,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "FOODTECH"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SAVING_ACCOUNT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      85,
                      46
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B",
                  "C"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 138,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "FOODTECH"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SALARIED_APPLICANT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_PROFILE",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      50,
                      52,
                      74,
                      84,
                      46
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "B",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 137,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "FOODTECH"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SALARIED_APPLICANT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_PROFILE",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      50,
                      52,
                      74,
                      84,
                      46
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "C",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 136,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "FOODTECH"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SALARIED_APPLICANT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "SAVING_ACCOUNT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52,
                      84,
                      85,
                      46
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "D",
                  "E",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 135,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "FOODTECH"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_PROFILE",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      74,
                      50
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "E",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 134,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "POS",
                  "DIRECT",
                  "ECOM",
                  "FOODTECH",
                  "SMFG_DIRECT",
                  "SMFG_ECOM",
                  "SCUF_DIRECT",
                  "SCUF_ECOM",
                  "SCUF_POS",
                  "VIVRITI_DIRECT",
                  "VIVRITI_ECOM",
                  "VIVRITI_POS",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  50,
                  74
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "D"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 133,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "POS",
                  "DIRECT",
                  "ECOM",
                  "FOODTECH",
                  "SMFG_DIRECT",
                  "SMFG_ECOM",
                  "SCUF_DIRECT",
                  "SCUF_ECOM",
                  "SCUF_POS",
                  "VIVRITI_DIRECT",
                  "VIVRITI_ECOM",
                  "VIVRITI_POS",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  50,
                  74
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "D"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 132,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "partner_type",
                "value": [
                  "SCF",
                  "Dealer Finance"
                ],
                "operator": "notIn"
              },
              {
                "any": [
                  {
                    "fact": "experiment_id",
                    "value": [
                      107
                    ],
                    "message": "Credit Experiment V1",
                    "operator": "in"
                  },
                  {
                    "fact": "experiments",
                    "value": [
                      "Credit-Experiment-V1"
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 131,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "any": [
                  {
                    "fact": "experiment_id",
                    "value": [
                      107
                    ],
                    "message": "Credit Experiment V1",
                    "operator": "in"
                  },
                  {
                    "fact": "experiments",
                    "value": [
                      "Credit-Experiment-V1"
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "B"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 130,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "experiment_id",
                "value": [
                  107
                ],
                "message": "Credit Experiment V1",
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "E",
                  "D",
                  "NA"
                ],
                "operator": "in"
              },
              {
                "fact": "policy",
                "value": [
                  "POS_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "SCUF_DIRECT_TOPUP",
                  "DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL",
                  "DIRECT",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "notIn"
              }
            ]
          }
        },
        {
          "id": 129,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "experiment_id",
                "value": [
                  107
                ],
                "message": "Credit Experiment V1",
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "NA"
                ],
                "operator": "in"
              },
              {
                "fact": "policy",
                "value": [
                  "DIRECT",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 128,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "experiment_id",
                "value": [
                  107
                ],
                "message": "Credit Experiment V1",
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": "B",
                "operator": "equal"
              },
              {
                "fact": "policy",
                "value": [
                  "POS_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "SCUF_DIRECT_TOPUP",
                  "DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL"
                ],
                "operator": "notIn"
              }
            ]
          }
        },
        {
          "id": 127,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "experiment_id",
                "value": [
                  107
                ],
                "message": "Credit Experiment V1",
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C"
                ],
                "operator": "in"
              },
              {
                "fact": "policy",
                "value": [
                  "POS_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "SCUF_DIRECT_TOPUP",
                  "DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL"
                ],
                "operator": "notIn"
              }
            ]
          }
        },
        {
          "id": 126,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "loan_product_profile",
                "value": "TOXIC",
                "operator": "equal"
              },
              {
                "fact": "partner_code",
                "value": [
                  "5e70d0f77rpgm",
                  "5f8027a1l2zzd"
                ],
                "operator": "notIn"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A"
                ],
                "operator": "notIn"
              }
            ]
          }
        },
        {
          "id": 125,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "partner_type",
                "value": [
                  "SCF",
                  "Dealer Finance"
                ],
                "operator": "notIn"
              },
              {
                "any": [
                  {
                    "fact": "experiment_id",
                    "value": [
                      107
                    ],
                    "message": "Credit Experiment V1",
                    "operator": "in"
                  },
                  {
                    "fact": "experiments",
                    "value": [
                      "Credit-Experiment-V1"
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 124,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "any": [
                  {
                    "fact": "experiment_id",
                    "value": [
                      107
                    ],
                    "message": "Credit Experiment V1",
                    "operator": "in"
                  },
                  {
                    "fact": "experiments",
                    "value": [
                      "Credit-Experiment-V1"
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 123,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "loan_product_profile",
                "value": "TOXIC",
                "operator": "equal"
              },
              {
                "fact": "experiment_id",
                "value": [
                  107
                ],
                "message": "Credit Experiment V1",
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "E",
                  "D",
                  "NA"
                ],
                "operator": "in"
              },
              {
                "fact": "policy",
                "value": [
                  "POS_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "SCUF_DIRECT_TOPUP",
                  "DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL",
                  "DIRECT",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "notIn"
              }
            ]
          }
        },
        {
          "id": 122,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "loan_product_profile",
                "value": "TOXIC",
                "operator": "equal"
              },
              {
                "fact": "experiment_id",
                "value": [
                  107
                ],
                "message": "Credit Experiment V1",
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "NA"
                ],
                "operator": "in"
              },
              {
                "fact": "policy",
                "value": [
                  "DIRECT",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 121,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "loan_product_profile",
                "value": "TOXIC",
                "operator": "equal"
              },
              {
                "fact": "experiment_id",
                "value": [
                  107
                ],
                "message": "Credit Experiment V1",
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": "B",
                "operator": "equal"
              },
              {
                "fact": "policy",
                "value": [
                  "POS_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "SCUF_DIRECT_TOPUP",
                  "DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL"
                ],
                "operator": "notIn"
              }
            ]
          }
        },
        {
          "id": 120,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "loan_product_profile",
                "value": "TOXIC",
                "operator": "equal"
              },
              {
                "fact": "experiment_id",
                "value": [
                  107
                ],
                "message": "Credit Experiment V1",
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C"
                ],
                "operator": "in"
              },
              {
                "fact": "policy",
                "value": [
                  "POS_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "SCUF_DIRECT_TOPUP",
                  "DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL"
                ],
                "operator": "notIn"
              }
            ]
          }
        },
        {
          "id": 119,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "experiment_id",
                "value": [
                  107
                ],
                "message": "Credit Experiment V1",
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "B",
                  "C",
                  "E",
                  "D",
                  "NA"
                ],
                "operator": "in"
              },
              {
                "fact": "policy",
                "value": [
                  "POS_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "SCUF_DIRECT_TOPUP",
                  "DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL"
                ],
                "message": "policy should  be from list",
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 118,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "partner_type",
                "value": [
                  "SCF",
                  "Dealer Finance"
                ],
                "operator": "notIn"
              },
              {
                "any": [
                  {
                    "fact": "experiment_id",
                    "value": [
                      107
                    ],
                    "message": "Credit Experiment V1",
                    "operator": "in"
                  },
                  {
                    "fact": "experiments",
                    "value": [
                      "Credit-Experiment-V1"
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A"
                ],
                "operator": "in"
              },
              {
                "fact": "policy",
                "value": [
                  "POS_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "SCUF_DIRECT_TOPUP",
                  "DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL"
                ],
                "message": "policy should  be from list",
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 117,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "loan_product_profile",
                "value": "TOXIC",
                "operator": "equal"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "B",
                  "C"
                ],
                "operator": "in"
              },
              {
                "fact": "partner_code",
                "value": [
                  "5e70d0f77rpgm",
                  "5f8027a1l2zzd"
                ],
                "operator": "notIn"
              }
            ]
          }
        },
        {
          "id": 116,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "loan_product_profile",
                "value": "TOXIC",
                "operator": "equal"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "E",
                  "D",
                  "NA"
                ],
                "operator": "in"
              },
              {
                "fact": "partner_code",
                "value": [
                  "5e70d0f77rpgm",
                  "5f8027a1l2zzd"
                ],
                "operator": "notIn"
              },
              {
                "fact": "policy",
                "value": [
                  "DIRECT",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "message": "policy should  be from list",
                "operator": "notIn"
              }
            ]
          }
        },
        {
          "id": 115,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "loan_product_profile",
                "value": "TOXIC",
                "operator": "equal"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "NA"
                ],
                "operator": "in"
              },
              {
                "fact": "partner_code",
                "value": [
                  "5e70d0f77rpgm",
                  "5f8027a1l2zzd"
                ],
                "operator": "notIn"
              }
            ]
          }
        },
        {
          "id": 114,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "loan_product_profile",
                "value": "TOXIC",
                "operator": "equal"
              },
              {
                "fact": "risk_grade",
                "value": "B",
                "operator": "equal"
              },
              {
                "fact": "partner_code",
                "value": [
                  "5e70d0f77rpgm",
                  "5f8027a1l2zzd"
                ],
                "operator": "notIn"
              }
            ]
          }
        },
        {
          "id": 113,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "loan_product_profile",
                "value": "TOXIC",
                "operator": "equal"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C"
                ],
                "operator": "in"
              },
              {
                "fact": "partner_code",
                "value": [
                  "5e70d0f77rpgm",
                  "5f8027a1l2zzd"
                ],
                "operator": "notIn"
              }
            ]
          }
        },
        {
          "id": 112,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT",
                  "SMFG_DIRECT",
                  "POS",
                  "RBL",
                  "SCUF_DIRECT",
                  "SCUF_POS",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "FOODTECH",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_PROFILE",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION_DIRECT_POS",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      74,
                      50
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "any": [
                  {
                    "all": [
                      {
                        "fact": "risk_grade",
                        "value": [
                          "A"
                        ],
                        "operator": "in"
                      },
                      {
                        "fact": "experiment_id",
                        "value": [
                          74
                        ],
                        "operator": "notIn"
                      }
                    ]
                  },
                  {
                    "fact": "risk_grade",
                    "value": [
                      "B"
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 111,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "FOODTECH"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_PROFILE",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      74,
                      50
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C",
                  "D"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 110,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiment_id",
                    "value": [
                      110
                    ],
                    "message": "Delinquent Pincode Experiment",
                    "operator": "in"
                  },
                  {
                    "fact": "experiments",
                    "value": "DELINQUENT PINCODE",
                    "operator": "contains"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 109,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiment_id",
                    "value": [
                      110
                    ],
                    "message": "Delinquent Pincode Experiment",
                    "operator": "in"
                  },
                  {
                    "fact": "experiments",
                    "value": "DELINQUENT PINCODE",
                    "operator": "contains"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "E",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 108,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "SALARIED_APPLICANT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT_V2.0",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52,
                      84,
                      85
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "NA",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 107,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiment_id",
                    "value": [
                      110
                    ],
                    "message": "Delinquent Pincode Experiment",
                    "operator": "in"
                  },
                  {
                    "fact": "experiments",
                    "value": "DELINQUENT PINCODE",
                    "operator": "contains"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C",
                  "D"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 106,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiment_id",
                    "value": [
                      110
                    ],
                    "message": "Delinquent Pincode Experiment",
                    "operator": "in"
                  },
                  {
                    "fact": "experiments",
                    "value": "DELINQUENT PINCODE",
                    "operator": "contains"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "B"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 105,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT",
                  "SMFG_DIRECT",
                  "POS",
                  "RBL",
                  "SCUF_DIRECT",
                  "SCUF_POS",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_PROFILE",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION_DIRECT_POS",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      74,
                      50
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 104,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ECOM",
                  "ECOM_DIRECT",
                  "SMFG_ECOM",
                  "SCUF_ECOM",
                  "VIVRITI_ECOM"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION_ECOM",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      74
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "all": [
                  {
                    "fact": "risk_grade",
                    "value": [
                      "A"
                    ],
                    "operator": "in"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      74
                    ],
                    "operator": "notIn"
                  }
                ]
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 103,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ECOM",
                  "ECOM_DIRECT",
                  "SMFG_ECOM",
                  "SCUF_ECOM",
                  "VIVRITI_ECOM"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION_ECOM",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      74
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "B"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 102,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ECOM",
                  "ECOM_DIRECT",
                  "SMFG_ECOM",
                  "SCUF_ECOM",
                  "VIVRITI_ECOM"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION_ECOM",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      74
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 101,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "is_thick_cibil",
                "value": 0,
                "operator": "equal"
              },
              {
                "fact": "partner_code",
                "value": [
                  "5f8027a1l2zzd",
                  "5e70d0f77rpgm",
                  "5a3a46fce316e",
                  "1c41176794537",
                  "6012a62b30dgq",
                  "f2b0e8972c476"
                ],
                "operator": "notIn"
              },
              {
                "any": [
                  {
                    "fact": "address_ownership_status",
                    "value": "Owned",
                    "operator": "equal"
                  },
                  {
                    "fact": "business_address_ownership_status",
                    "value": "Owned",
                    "operator": "equal"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 100,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_ECOM",
                  "VIVRITI_ECOM",
                  "ECOM",
                  "SCUF_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "business_vintage_by_month",
                "value": 6,
                "operator": "greaterThanInclusive"
              },
              {
                "fact": "business_vintage_by_month",
                "value": 12,
                "operator": "lessThanInclusive"
              }
            ]
          }
        },
        {
          "id": 99,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT_TOPUP",
                  "DIRECT",
                  "POS_TOPUP",
                  "POS",
                  "RBL",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "ECOM_DIRECT",
                  "SCUF_DIRECT",
                  "SCUF_POS",
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "A",
                "operator": "equal"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 98,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 2
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "FOODTECH"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 97,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 800000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT_TOPUP",
                  "DIRECT",
                  "POS_TOPUP",
                  "POS",
                  "RBL",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "ECOM_DIRECT",
                  "SCUF_DIRECT",
                  "SCUF_POS",
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "B",
                "operator": "equal"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 96,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT",
                  "POS",
                  "RBL",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "ECOM_DIRECT",
                  "SCUF_DIRECT",
                  "SCUF_POS",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_PROFILE",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52,
                      50
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "B",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 95,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 600000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT_TOPUP",
                  "DIRECT",
                  "POS_TOPUP",
                  "POS",
                  "RBL",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "ECOM_DIRECT",
                  "SCUF_DIRECT",
                  "SCUF_POS",
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "C",
                "operator": "equal"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 94,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT",
                  "POS",
                  "RBL",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "ECOM_DIRECT",
                  "SCUF_DIRECT",
                  "SCUF_POS",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_PROFILE",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52,
                      50
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "C",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 93,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "POS",
                  "RBL",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "ECOM_DIRECT",
                  "SCUF_DIRECT",
                  "SCUF_POS"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "D",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 92,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "POS",
                  "RBL",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "ECOM_DIRECT",
                  "SCUF_DIRECT",
                  "SCUF_POS"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_PROFILE",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52,
                      50
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "E",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 91,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT",
                  "POS",
                  "SMFG_DIRECT",
                  "RBL",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "ECOM_DIRECT",
                  "SCUF_DIRECT",
                  "SCUF_POS",
                  "SCUF_ECOM",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": "B",
                "operator": "equal"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION_DIRECT_POS",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION_ECOM",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      74
                    ],
                    "operator": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 90,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "POS",
                  "SMFG_DIRECT",
                  "RBL",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "ECOM_DIRECT",
                  "SCUF_DIRECT",
                  "SCUF_POS",
                  "SCUF_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": "E",
                "operator": "equal"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION_DIRECT_POS",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION_ECOM",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      74
                    ],
                    "operator": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 89,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ECOM",
                  "SMFG_ECOM",
                  "RBL",
                  "VIVRITI_ECOM",
                  "ECOM_DIRECT",
                  "SCUF_DIRECT",
                  "SCUF_POS",
                  "SCUF_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": "B",
                "operator": "equal"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION_DIRECT_POS",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION_ECOM",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      74
                    ],
                    "operator": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 88,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ECOM",
                  "SMFG_ECOM",
                  "RBL",
                  "VIVRITI_ECOM",
                  "ECOM_DIRECT",
                  "SCUF_DIRECT",
                  "SCUF_POS",
                  "SCUF_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": "E",
                "operator": "equal"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION_DIRECT_POS",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION_ECOM",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      74
                    ],
                    "operator": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 87,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ECOM_TOPUP",
                  "ECOM",
                  "SMFG_ECOM",
                  "RBL",
                  "VIVRITI_ECOM",
                  "SCUF_ECOM",
                  "VIVRITI_ECOM_TOPUP"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_RCO",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      51
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "A",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 86,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ECOM_TOPUP",
                  "ECOM",
                  "SMFG_ECOM",
                  "RBL",
                  "VIVRITI_ECOM",
                  "SCUF_ECOM",
                  "VIVRITI_ECOM_TOPUP"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_RCO",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      51
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "B",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 85,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ECOM",
                  "SMFG_ECOM",
                  "RBL",
                  "VIVRITI_ECOM",
                  "SCUF_ECOM"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_RCO",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      51
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "B",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 84,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ECOM_TOPUP",
                  "ECOM",
                  "SMFG_ECOM",
                  "RBL",
                  "VIVRITI_ECOM",
                  "SCUF_ECOM",
                  "VIVRITI_ECOM_TOPUP"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_RCO",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      51
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "C",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 83,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ECOM",
                  "SMFG_ECOM",
                  "RBL",
                  "VIVRITI_ECOM",
                  "SCUF_ECOM"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_RCO",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      51
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "C",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 82,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ECOM",
                  "SMFG_ECOM",
                  "RBL",
                  "VIVRITI_ECOM",
                  "SCUF_ECOM"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_RCO",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      51
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "D",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 81,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ECOM",
                  "SMFG_ECOM",
                  "RBL",
                  "VIVRITI_ECOM",
                  "SCUF_ECOM"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_RCO",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      51
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "E",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 80,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SCUF_DIRECT_TOPUP",
                  "RBL"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 79,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT",
                  "SMFG_DIRECT",
                  "POS",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "DIRECT_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "POS_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "all": [
                      {
                        "fact": "address_ownership_status",
                        "value": "Owned",
                        "operator": "notEqual"
                      },
                      {
                        "fact": "business_address_ownership_status",
                        "value": "Owned",
                        "operator": "notEqual"
                      }
                    ]
                  },
                  {
                    "fact": "business_vintage_by_month",
                    "value": 36,
                    "operator": "lessThan"
                  },
                  {
                    "fact": "risk_grade",
                    "value": [
                      "NA"
                    ],
                    "operator": "in"
                  },
                  {
                    "fact": "partner_code",
                    "value": [
                      "f94336o060ebe",
                      "f84386a060ebc",
                      "f0ca0b47d2c66",
                      "ed7f0bf451cd9",
                      "eaa2b51e05739",
                      "e5515bd0e1df1",
                      "e0ace7a48fa1c",
                      "daa20fed80a2a",
                      "d4d0cab57aeee",
                      "d259d7bb5b3cb",
                      "d143fbdce76d9",
                      "c950a7893bb18",
                      "c8ea708ecf978",
                      "c4ceb2712bc2f",
                      "beb5a29979479",
                      "bbf8896772949",
                      "bb9aa3efc6fdd",
                      "b9981c1d30c90",
                      "b7ca096181b1a",
                      "af55a5bde03d6",
                      "a76d762df7d4b",
                      "a63a3769f93f4",
                      "a44c0b515c051",
                      "a343091a9cc13",
                      "9c7bfcd45af46",
                      "9a5af98795361",
                      "8ce45a8c335e1",
                      "86d23b9c0f358",
                      "84d4824d43a25",
                      "83084b28f0d70",
                      "82144ae74949c",
                      "80ea0af18e382",
                      "7fc1c164b0a20",
                      "791db3fba7bf8",
                      "77b0651c1ea17",
                      "6b55d0904e56c",
                      "67be540889b9e",
                      "64f1be98nfwae",
                      "649abdf3web99",
                      "64997e0933n01",
                      "64770f9dsgbok",
                      "6476f865cesfx",
                      "647466941cesx",
                      "647451f38q9j9",
                      "647447277wdt3",
                      "646f1dfb5a5vf",
                      "645dd7f0ib590",
                      "64510f0d9cysu",
                      "642e3fcbvu9g6",
                      "642bd6cduqvc3",
                      "641d61182hx99",
                      "6401e67f8uswh",
                      "6400a5d09hxc9",
                      "63e614090skj6",
                      "63e5e945jhdzg",
                      "63da2d0csvwrt",
                      "63da2cfcmhh8m",
                      "63d4db57xlbc0",
                      "63ce6d70wk0xf",
                      "63bfb4085la0n",
                      "639311f9dnnc7",
                      "638f9f9b6800z",
                      "638f9f89daauy",
                      "638879ea6ikdf",
                      "63809e2e42vzo",
                      "637f3f75l1ce6",
                      "636a43fc56fr6",
                      "63640c56k3iey",
                      "63640be74unne",
                      "63638744oaqjn",
                      "6360f859wykgj",
                      "635a817eserp0",
                      "635a8158yfbw8",
                      "632d8f29rkvfg",
                      "63109a83c1esl",
                      "62fb5ac0hj5z7",
                      "62f5e7ab8d3qj",
                      "62ecd0103ks2i",
                      "62e93423y992m",
                      "62e0c81b1oc74",
                      "62dfec6c57s2c",
                      "62d6b9c4eafkk",
                      "62d66c76vc8it",
                      "62cfe4fbpb2uh",
                      "62cfc67d6hbe5",
                      "62cbd03bq7doh",
                      "62c53a35t01qg",
                      "62c539d4iw91w",
                      "62c4240c7rv7k",
                      "62c42362iar2w",
                      "62b2deffyy9wc",
                      "62ac70edvbiby",
                      "629f33aa2eect",
                      "629f0ec0y6an6",
                      "62972be6vgws6",
                      "6283520ew8xrz",
                      "620c9aa2yqyku",
                      "61975594nb5zf",
                      "6194d601p6t78",
                      "618d601b63rop",
                      "617d1c63xc1ce",
                      "61781eb2pa527",
                      "616dbe29ctmu3",
                      "6155a1538b60g",
                      "6110ebf88rhlm",
                      "6108f2105hdc1",
                      "60ed83de59gil",
                      "60ed4010l2cxo",
                      "60c0f2c4a6b67",
                      "6040c5a15x57y",
                      "6040b5c123p23",
                      "6040b5c100p1s",
                      "601aad782s7m9",
                      "600c32152wnm3",
                      "6008391fpn6e7",
                      "5fe429a0sj16d",
                      "5f7da77e0v7ol",
                      "5f7da764u1o8b",
                      "5f7da743iypp4",
                      "5f21366c79jw2",
                      "5ef6150f1npfm",
                      "5ef49baej7phd",
                      "5ea3ec1frlxjg",
                      "5e983437g3qvb",
                      "5e7f1ffc95usk",
                      "5e5fa9787xkws",
                      "5e58f868xj4i2",
                      "5e53ce9bqoqnb",
                      "5e4bde40bd556",
                      "5e2fd567dt1y9",
                      "5e2ec522ey2ya",
                      "5e217472x2wb1",
                      "5df3304bxcbdw",
                      "5de4cdec3e208",
                      "5dc54c81hvslq",
                      "5d4935dacf8a8",
                      "5d442d861f142",
                      "5d2db2785juev",
                      "5d19e219uxbso",
                      "5c8a61022v3ll",
                      "5c80cc86e8ywx",
                      "5c80cc56wtarb",
                      "5c80cc402q1dg",
                      "5c80cc132ptaa",
                      "5c1774d8uupw8",
                      "5b83d0cek1n10",
                      "5b7d1394370c0",
                      "5b0645c0e8c19",
                      "5a7aab0fdb506",
                      "5a38a2c20c799",
                      "5a00394c54830",
                      "599eda7243c79",
                      "5969727576129",
                      "5942a6fa3f67e",
                      "5911b4882685a",
                      "5911b47caa701",
                      "590055756bd2a",
                      "59002aaed7a40",
                      "58d22270b44fb",
                      "58ca84caaba24",
                      "58ca8477b2b6b",
                      "58ca83d1a2095",
                      "578a91e921fe0",
                      "5557d94275052",
                      "504147b7ed54c",
                      "4fbdf8ffe9526",
                      "4dbc46a5f9a43",
                      "49a39e8a9f963",
                      "4756920a70969",
                      "4624c33b84465",
                      "41f36abaaa500",
                      "4136266b5fc32",
                      "3a4ffc81d00f3",
                      "33ad41047c53c",
                      "2a97fd1196b09",
                      "22012b5bc9d71",
                      "20dd51d6ecd40",
                      "1ce8a51be34cd",
                      "187d158af0947",
                      "1565c27455004",
                      "0b16a2206f607",
                      "0539d7ee8cfe2"
                    ],
                    "operator": "notIn"
                  }
                ]
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 78,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 2000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT",
                  "SMFG_DIRECT",
                  "POS",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "DIRECT_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "POS_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "address_ownership_status",
                    "value": "Owned",
                    "operator": "equal"
                  },
                  {
                    "fact": "business_address_ownership_status",
                    "value": "Owned",
                    "operator": "equal"
                  }
                ]
              },
              {
                "fact": "business_vintage_by_month",
                "value": 36,
                "operator": "greaterThanInclusive"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C",
                  "D"
                ],
                "operator": "in"
              },
              {
                "fact": "partner_code",
                "value": [
                  "f94336o060ebe",
                  "f84386a060ebc",
                  "f0ca0b47d2c66",
                  "ed7f0bf451cd9",
                  "eaa2b51e05739",
                  "e5515bd0e1df1",
                  "e0ace7a48fa1c",
                  "daa20fed80a2a",
                  "d4d0cab57aeee",
                  "d259d7bb5b3cb",
                  "d143fbdce76d9",
                  "c950a7893bb18",
                  "c8ea708ecf978",
                  "c4ceb2712bc2f",
                  "beb5a29979479",
                  "bbf8896772949",
                  "bb9aa3efc6fdd",
                  "b9981c1d30c90",
                  "b7ca096181b1a",
                  "af55a5bde03d6",
                  "a76d762df7d4b",
                  "a63a3769f93f4",
                  "a44c0b515c051",
                  "a343091a9cc13",
                  "9c7bfcd45af46",
                  "9a5af98795361",
                  "8ce45a8c335e1",
                  "86d23b9c0f358",
                  "84d4824d43a25",
                  "83084b28f0d70",
                  "82144ae74949c",
                  "80ea0af18e382",
                  "7fc1c164b0a20",
                  "791db3fba7bf8",
                  "77b0651c1ea17",
                  "6b55d0904e56c",
                  "67be540889b9e",
                  "64f1be98nfwae",
                  "649abdf3web99",
                  "64997e0933n01",
                  "64770f9dsgbok",
                  "6476f865cesfx",
                  "647466941cesx",
                  "647451f38q9j9",
                  "647447277wdt3",
                  "646f1dfb5a5vf",
                  "645dd7f0ib590",
                  "64510f0d9cysu",
                  "642e3fcbvu9g6",
                  "642bd6cduqvc3",
                  "641d61182hx99",
                  "6401e67f8uswh",
                  "6400a5d09hxc9",
                  "63e614090skj6",
                  "63e5e945jhdzg",
                  "63da2d0csvwrt",
                  "63da2cfcmhh8m",
                  "63d4db57xlbc0",
                  "63ce6d70wk0xf",
                  "63bfb4085la0n",
                  "639311f9dnnc7",
                  "638f9f9b6800z",
                  "638f9f89daauy",
                  "638879ea6ikdf",
                  "63809e2e42vzo",
                  "637f3f75l1ce6",
                  "636a43fc56fr6",
                  "63640c56k3iey",
                  "63640be74unne",
                  "63638744oaqjn",
                  "6360f859wykgj",
                  "635a817eserp0",
                  "635a8158yfbw8",
                  "632d8f29rkvfg",
                  "63109a83c1esl",
                  "62fb5ac0hj5z7",
                  "62f5e7ab8d3qj",
                  "62ecd0103ks2i",
                  "62e93423y992m",
                  "62e0c81b1oc74",
                  "62dfec6c57s2c",
                  "62d6b9c4eafkk",
                  "62d66c76vc8it",
                  "62cfe4fbpb2uh",
                  "62cfc67d6hbe5",
                  "62cbd03bq7doh",
                  "62c53a35t01qg",
                  "62c539d4iw91w",
                  "62c4240c7rv7k",
                  "62c42362iar2w",
                  "62b2deffyy9wc",
                  "62ac70edvbiby",
                  "629f33aa2eect",
                  "629f0ec0y6an6",
                  "62972be6vgws6",
                  "6283520ew8xrz",
                  "620c9aa2yqyku",
                  "61975594nb5zf",
                  "6194d601p6t78",
                  "618d601b63rop",
                  "617d1c63xc1ce",
                  "61781eb2pa527",
                  "616dbe29ctmu3",
                  "6155a1538b60g",
                  "6110ebf88rhlm",
                  "6108f2105hdc1",
                  "60ed83de59gil",
                  "60ed4010l2cxo",
                  "60c0f2c4a6b67",
                  "6040c5a15x57y",
                  "6040b5c123p23",
                  "6040b5c100p1s",
                  "601aad782s7m9",
                  "600c32152wnm3",
                  "6008391fpn6e7",
                  "5fe429a0sj16d",
                  "5f7da77e0v7ol",
                  "5f7da764u1o8b",
                  "5f7da743iypp4",
                  "5f21366c79jw2",
                  "5ef6150f1npfm",
                  "5ef49baej7phd",
                  "5ea3ec1frlxjg",
                  "5e983437g3qvb",
                  "5e7f1ffc95usk",
                  "5e5fa9787xkws",
                  "5e58f868xj4i2",
                  "5e53ce9bqoqnb",
                  "5e4bde40bd556",
                  "5e2fd567dt1y9",
                  "5e2ec522ey2ya",
                  "5e217472x2wb1",
                  "5df3304bxcbdw",
                  "5de4cdec3e208",
                  "5dc54c81hvslq",
                  "5d4935dacf8a8",
                  "5d442d861f142",
                  "5d2db2785juev",
                  "5d19e219uxbso",
                  "5c8a61022v3ll",
                  "5c80cc86e8ywx",
                  "5c80cc56wtarb",
                  "5c80cc402q1dg",
                  "5c80cc132ptaa",
                  "5c1774d8uupw8",
                  "5b83d0cek1n10",
                  "5b7d1394370c0",
                  "5b0645c0e8c19",
                  "5a7aab0fdb506",
                  "5a38a2c20c799",
                  "5a00394c54830",
                  "599eda7243c79",
                  "5969727576129",
                  "5942a6fa3f67e",
                  "5911b4882685a",
                  "5911b47caa701",
                  "590055756bd2a",
                  "59002aaed7a40",
                  "58d22270b44fb",
                  "58ca84caaba24",
                  "58ca8477b2b6b",
                  "58ca83d1a2095",
                  "578a91e921fe0",
                  "5557d94275052",
                  "504147b7ed54c",
                  "4fbdf8ffe9526",
                  "4dbc46a5f9a43",
                  "49a39e8a9f963",
                  "4756920a70969",
                  "4624c33b84465",
                  "41f36abaaa500",
                  "4136266b5fc32",
                  "3a4ffc81d00f3",
                  "33ad41047c53c",
                  "2a97fd1196b09",
                  "22012b5bc9d71",
                  "20dd51d6ecd40",
                  "1ce8a51be34cd",
                  "187d158af0947",
                  "1565c27455004",
                  "0b16a2206f607",
                  "0539d7ee8cfe2"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 77,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT",
                  "SMFG_DIRECT",
                  "POS",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "DIRECT_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "POS_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "partner_code",
                "value": [
                  "f94336o060ebe",
                  "f84386a060ebc",
                  "f0ca0b47d2c66",
                  "ed7f0bf451cd9",
                  "eaa2b51e05739",
                  "e5515bd0e1df1",
                  "e0ace7a48fa1c",
                  "daa20fed80a2a",
                  "d4d0cab57aeee",
                  "d259d7bb5b3cb",
                  "d143fbdce76d9",
                  "c950a7893bb18",
                  "c8ea708ecf978",
                  "c4ceb2712bc2f",
                  "beb5a29979479",
                  "bbf8896772949",
                  "bb9aa3efc6fdd",
                  "b9981c1d30c90",
                  "b7ca096181b1a",
                  "af55a5bde03d6",
                  "a76d762df7d4b",
                  "a63a3769f93f4",
                  "a44c0b515c051",
                  "a343091a9cc13",
                  "9c7bfcd45af46",
                  "9a5af98795361",
                  "8ce45a8c335e1",
                  "86d23b9c0f358",
                  "84d4824d43a25",
                  "83084b28f0d70",
                  "82144ae74949c",
                  "80ea0af18e382",
                  "7fc1c164b0a20",
                  "791db3fba7bf8",
                  "77b0651c1ea17",
                  "6b55d0904e56c",
                  "67be540889b9e",
                  "64f1be98nfwae",
                  "649abdf3web99",
                  "64997e0933n01",
                  "64770f9dsgbok",
                  "6476f865cesfx",
                  "647466941cesx",
                  "647451f38q9j9",
                  "647447277wdt3",
                  "646f1dfb5a5vf",
                  "645dd7f0ib590",
                  "64510f0d9cysu",
                  "642e3fcbvu9g6",
                  "642bd6cduqvc3",
                  "641d61182hx99",
                  "6401e67f8uswh",
                  "6400a5d09hxc9",
                  "63e614090skj6",
                  "63e5e945jhdzg",
                  "63da2d0csvwrt",
                  "63da2cfcmhh8m",
                  "63d4db57xlbc0",
                  "63ce6d70wk0xf",
                  "63bfb4085la0n",
                  "639311f9dnnc7",
                  "638f9f9b6800z",
                  "638f9f89daauy",
                  "638879ea6ikdf",
                  "63809e2e42vzo",
                  "637f3f75l1ce6",
                  "636a43fc56fr6",
                  "63640c56k3iey",
                  "63640be74unne",
                  "63638744oaqjn",
                  "6360f859wykgj",
                  "635a817eserp0",
                  "635a8158yfbw8",
                  "632d8f29rkvfg",
                  "63109a83c1esl",
                  "62fb5ac0hj5z7",
                  "62f5e7ab8d3qj",
                  "62ecd0103ks2i",
                  "62e93423y992m",
                  "62e0c81b1oc74",
                  "62dfec6c57s2c",
                  "62d6b9c4eafkk",
                  "62d66c76vc8it",
                  "62cfe4fbpb2uh",
                  "62cfc67d6hbe5",
                  "62cbd03bq7doh",
                  "62c53a35t01qg",
                  "62c539d4iw91w",
                  "62c4240c7rv7k",
                  "62c42362iar2w",
                  "62b2deffyy9wc",
                  "62ac70edvbiby",
                  "629f33aa2eect",
                  "629f0ec0y6an6",
                  "62972be6vgws6",
                  "6283520ew8xrz",
                  "620c9aa2yqyku",
                  "61975594nb5zf",
                  "6194d601p6t78",
                  "618d601b63rop",
                  "617d1c63xc1ce",
                  "61781eb2pa527",
                  "616dbe29ctmu3",
                  "6155a1538b60g",
                  "6110ebf88rhlm",
                  "6108f2105hdc1",
                  "60ed83de59gil",
                  "60ed4010l2cxo",
                  "60c0f2c4a6b67",
                  "6040c5a15x57y",
                  "6040b5c123p23",
                  "6040b5c100p1s",
                  "601aad782s7m9",
                  "600c32152wnm3",
                  "6008391fpn6e7",
                  "5fe429a0sj16d",
                  "5f7da77e0v7ol",
                  "5f7da764u1o8b",
                  "5f7da743iypp4",
                  "5f21366c79jw2",
                  "5ef6150f1npfm",
                  "5ef49baej7phd",
                  "5ea3ec1frlxjg",
                  "5e983437g3qvb",
                  "5e7f1ffc95usk",
                  "5e5fa9787xkws",
                  "5e58f868xj4i2",
                  "5e53ce9bqoqnb",
                  "5e4bde40bd556",
                  "5e2fd567dt1y9",
                  "5e2ec522ey2ya",
                  "5e217472x2wb1",
                  "5df3304bxcbdw",
                  "5de4cdec3e208",
                  "5dc54c81hvslq",
                  "5d4935dacf8a8",
                  "5d442d861f142",
                  "5d2db2785juev",
                  "5d19e219uxbso",
                  "5c8a61022v3ll",
                  "5c80cc86e8ywx",
                  "5c80cc56wtarb",
                  "5c80cc402q1dg",
                  "5c80cc132ptaa",
                  "5c1774d8uupw8",
                  "5b83d0cek1n10",
                  "5b7d1394370c0",
                  "5b0645c0e8c19",
                  "5a7aab0fdb506",
                  "5a38a2c20c799",
                  "5a00394c54830",
                  "599eda7243c79",
                  "5969727576129",
                  "5942a6fa3f67e",
                  "5911b4882685a",
                  "5911b47caa701",
                  "590055756bd2a",
                  "59002aaed7a40",
                  "58d22270b44fb",
                  "58ca84caaba24",
                  "58ca8477b2b6b",
                  "58ca83d1a2095",
                  "578a91e921fe0",
                  "5557d94275052",
                  "504147b7ed54c",
                  "4fbdf8ffe9526",
                  "4dbc46a5f9a43",
                  "49a39e8a9f963",
                  "4756920a70969",
                  "4624c33b84465",
                  "41f36abaaa500",
                  "4136266b5fc32",
                  "3a4ffc81d00f3",
                  "33ad41047c53c",
                  "2a97fd1196b09",
                  "22012b5bc9d71",
                  "20dd51d6ecd40",
                  "1ce8a51be34cd",
                  "187d158af0947",
                  "1565c27455004",
                  "0b16a2206f607",
                  "0539d7ee8cfe2"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "address_ownership_status",
                    "value": "Owned",
                    "operator": "equal"
                  },
                  {
                    "fact": "business_address_ownership_status",
                    "value": "Owned",
                    "operator": "equal"
                  }
                ]
              },
              {
                "fact": "business_vintage_by_month",
                "value": 36,
                "operator": "greaterThanInclusive"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "E"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 76,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT",
                  "SMFG_DIRECT",
                  "POS",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "partner_code",
                "value": [
                  "00e338e21e1e1",
                  "0539d7ee8cfe2",
                  "0b16a2206f607",
                  "1565c27455004",
                  "187d158af0947",
                  "1ce8a51be34cd",
                  "20dd51d6ecd40",
                  "22012b5bc9d71",
                  "224e2b1b7f751",
                  "26d9735c927cb",
                  "275cd64a30240",
                  "2a97fd1196b09",
                  "2c57047c34d53",
                  "2dc1d43ecc119",
                  "33ad41047c53c",
                  "3a4ffc81d00f3",
                  "3a66d31bda4a8",
                  "40b7723083749",
                  "4136266b5fc32",
                  "41f36abaaa500",
                  "43dbaeef0199f",
                  "4624c33b84465",
                  "4756920a70969",
                  "49a39e8a9f963",
                  "4a33bb1794f40",
                  "4b1d9866d600c",
                  "4dbc46a5f9a43",
                  "4fbdf8ffe9526",
                  "504147b7ed54c",
                  "5557d94275052",
                  "578a91e921fe0",
                  "58ca83d1a2095",
                  "58ca8477b2b6b",
                  "58ca84caaba24",
                  "58d22270b44fb",
                  "58d4f2e72fc97",
                  "59002aaed7a40",
                  "59002b2ba6c24",
                  "590055756bd2a",
                  "5911b47caa701",
                  "5911b4882685a",
                  "591bf70db6a3b",
                  "591bf74873971",
                  "5937af648ccd0",
                  "593f683701aa5",
                  "5942a6fa3f67e",
                  "5942b5278013d",
                  "5942b597418c6",
                  "594d111277094",
                  "595b87f6b36e9",
                  "596894149fdf1",
                  "5969727576129",
                  "596de8120459f",
                  "596de8e36bd31",
                  "596de98522de0",
                  "59706afac9a0c",
                  "597f2c72c90dc",
                  "599eda7243c79",
                  "59b6770583b5e",
                  "59b67769785b5",
                  "59b6779504a33",
                  "59b677a4f2b25",
                  "59b677b18e8d7",
                  "59b677d90d17f",
                  "59b677ea9b2fe",
                  "59ba2f9402da9",
                  "59bf6fc1d80d3",
                  "59bf74d0194dd",
                  "59c7aed22ed7b",
                  "59f6d63a93150",
                  "5a00394c54830",
                  "5a196337e9a11",
                  "5a2b8d222f032",
                  "5a324be81e0d1",
                  "5a379b322a117",
                  "5a379b4aadde3",
                  "5a38a2c20c799",
                  "5a5c8a3a83a43",
                  "5a68864971aaf",
                  "5a74101735a8d",
                  "5a7aab0fdb506",
                  "5a86d6638d5fd",
                  "5a8af6bd8d32e",
                  "5ab63b8716748",
                  "5ab63bbc87a9f",
                  "5ab63c0831a7c",
                  "5adda0d6dfd91",
                  "5ae32ca459b4b",
                  "5ae32ca824600",
                  "5ae4605246cd1",
                  "5b03de105f7b6",
                  "5b0511be7dd04",
                  "5b051280058aa",
                  "5b0512e2138c4",
                  "5b053508a95cc",
                  "5b056c5f017f9",
                  "5b0645c0e8c19",
                  "5b06514ee9b39",
                  "5b0be711e3fa0",
                  "5b1fa718e2a77",
                  "5b1fa8c9bfb09",
                  "5b2b523d29598F",
                  "5b2c99fc7c636",
                  "5b4f2cedrt9lb",
                  "5b5878a9bdbaa",
                  "5b598a8718fc7",
                  "5b62e373de67f",
                  "5b727178e8fd6",
                  "5b766ac8e4607",
                  "5b7bb160v19xy",
                  "5b7d1394370c0",
                  "5b803f36cg4y5",
                  "5b80eed9fm51v",
                  "5b814ce4lfvwb",
                  "5b83d0cek1n10",
                  "5b83eb48krt2k",
                  "5b85054dntdno",
                  "5b8d059136bk4",
                  "5b8e8e7858dxc",
                  "5b9c75cbfbbae",
                  "5ba642c85tbvv",
                  "5ba64e0595ab7",
                  "5bbafbdaw4k9s",
                  "5bbafc169cqpu",
                  "5c1774d8uupw8",
                  "5c80cc132ptaa",
                  "5c80cc402q1dg",
                  "5c80cc56wtarb",
                  "5c80cc86e8ywx",
                  "5c8a61022v3ll",
                  "5d19e219uxbso",
                  "5d2db2785juev",
                  "5d442d861f142",
                  "5d4935dacf8a8",
                  "5dc54c81hvslq",
                  "5de4cdec3e208",
                  "5df3304bxcbdw",
                  "5e217472x2wb1",
                  "5e2ec522ey2ya",
                  "5e2fd567dt1y9",
                  "5e32dfe88isfg",
                  "5e4bde40bd556",
                  "5e53ce9bqoqnb",
                  "5e58f868xj4i2",
                  "5e5fa9787xkws",
                  "5e70d0f77rpgm",
                  "5e7f1ffc95usk",
                  "5e983437g3qvb",
                  "5ea3ec1frlxjg",
                  "5ef49baej7phd",
                  "5ef6150f1npfm",
                  "5f21366c79jw2",
                  "5f684d4e58ec7",
                  "5f7da743iypp4",
                  "5f7da764u1o8b",
                  "5f7da77e0v7ol",
                  "5f8027a1l2zzd",
                  "5fe429a0sj16d",
                  "6008391fpn6e7",
                  "600c32152wnm3",
                  "601aad782s7m9",
                  "602b7d3beqpw7",
                  "6040b5c100p1s",
                  "6040b5c123p23",
                  "6040c5a15x57y",
                  "60c0f2c4a6b67",
                  "60ed4010l2cxo",
                  "60ed83de59gil",
                  "6108f2105hdc1",
                  "6110ebf88rhlm",
                  "6138c8bcinlm3",
                  "6155a1538b60g",
                  "616dbe29ctmu3",
                  "61781eb2pa527",
                  "617d1c63xc1ce",
                  "618d601b63rop",
                  "6194d601p6t78",
                  "61975594nb5zf",
                  "620c9aa2yqyku",
                  "6225cc976umca",
                  "622740564xu95",
                  "6283520ew8xrz",
                  "62972be6vgws6",
                  "629f0ec0y6an6",
                  "629f33aa2eect",
                  "62ac70edvbiby",
                  "62b2deffyy9wc",
                  "62c2a1dai8a6n",
                  "62c42362iar2w",
                  "62c4240c7rv7k",
                  "62c539d4iw91w",
                  "62c53a35t01qg",
                  "62c53a48xupu1",
                  "62cbd03bq7doh",
                  "62cfc67d6hbe5",
                  "62cfe4fbpb2uh",
                  "62d66c76vc8it",
                  "62d6b9c4eafkk",
                  "62dfec6c57s2c",
                  "62e0c81b1oc74",
                  "62e8c68175kmw",
                  "62e8c6dcn4d93",
                  "62e933efc1jlr",
                  "62e93423y992m",
                  "62ecc50eq52n1",
                  "62ecd0103ks2i",
                  "62f3af37hxh4b",
                  "62f5e7ab8d3qj",
                  "62fb5ac0hj5z7",
                  "6303d2dczxkka",
                  "63109a83c1esl",
                  "631ef5b5af9i0",
                  "632d8f29rkvfg",
                  "6336bfff0tx10",
                  "634d372b521jq",
                  "635a8158yfbw8",
                  "635a817eserp0",
                  "6360f859wykgj",
                  "63638744oaqjn",
                  "63640be74unne",
                  "63640c56k3iey",
                  "636a43fc56fr6",
                  "637f3f75l1ce6",
                  "63809e2e42vzo",
                  "638879ea6ikdf",
                  "638f1722xxzcs",
                  "638f9f89daauy",
                  "638f9f9b6800z",
                  "639311f9dnnc7",
                  "63b67e3bb3zkf",
                  "63bfb4085la0n",
                  "63ce6d70wk0xf",
                  "63d4db57xlbc0",
                  "63da2cfcmhh8m",
                  "63da2d0csvwrt",
                  "63e5e945jhdzg",
                  "63e614090skj6",
                  "63fcd0f2727o9",
                  "6400a5d09hxc9",
                  "6401e67f8uswh",
                  "64119303en4tu",
                  "641d61182hx99",
                  "642bd6cduqvc3",
                  "642bd6f6hf3rn",
                  "642e3fcbvu9g6",
                  "64510f0d9cysu",
                  "645dd7f0ib590",
                  "646f1dfb5a5vf",
                  "647447277wdt3",
                  "64744797ayg5z",
                  "647451f38q9j9",
                  "647466941cesx",
                  "6476f865cesfx",
                  "64770f9dsgbok",
                  "64997e0933n01",
                  "649abdf3web99",
                  "64f1be98nfwae",
                  "67be540889b9e",
                  "682d221315c9a",
                  "6ac8a1f270942",
                  "6b55d0904e56c",
                  "77b0651c1ea17",
                  "791db3fba7bf8",
                  "7fc1c164b0a20",
                  "80ea0af18e382",
                  "82144ae74949c",
                  "83084b28f0d70",
                  "84d4824d43a25",
                  "86d23b9c0f358",
                  "8ce45a8c335e1",
                  "8e720bdcf49c2",
                  "9a14c267f9a8a",
                  "9a5af98795361",
                  "9c7bfcd45af46",
                  "a343091a9cc13",
                  "a44c0b515c051",
                  "a63a3769f93f4",
                  "a76d762df7d4b",
                  "acb3e4a26ef1f",
                  "aecf7da816aac",
                  "af55a5bde03d6",
                  "b1607d2dd8d95",
                  "b5ad52326d014",
                  "b7ca096181b1a",
                  "b906863552e14",
                  "b9981c1d30c90",
                  "ba0706a8f67df",
                  "bb9aa3efc6fdd",
                  "bbf8896772949",
                  "beb5a29979479",
                  "c198f7f3f62ea",
                  "c4ceb2712bc2f",
                  "c8ea708ecf978",
                  "c950a7893bb18",
                  "d143fbdce76d9",
                  "d259d7bb5b3cb",
                  "d4d0cab57aeee",
                  "d60f705861ec4",
                  "daa20fed80a2a",
                  "e04c935f76b42",
                  "e0ace7a48fa1c",
                  "e25dd6b7c87db",
                  "e5515bd0e1df1",
                  "eaa2b51e05739",
                  "eb6b9551c175a",
                  "ebd00f157fc79",
                  "ed7f0bf451cd9",
                  "f0ca0b47d2c66",
                  "f84386a060ebc",
                  "f94336o060ebe",
                  "fa10f38782d62"
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "E"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 75,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 2500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SCUF_ECOM_TOPUP",
                  "SMFG_ECOM",
                  "VIVRITI_ECOM",
                  "SCUF_ECOM"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 74,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 2500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "risk_grade",
                    "value": [
                      "A",
                      "B",
                      "C",
                      "D"
                    ],
                    "operator": "notIn"
                  },
                  {
                    "fact": "partner_type",
                    "value": [
                      "DSA"
                    ],
                    "operator": "in"
                  },
                  {
                    "fact": "business_vintage_by_month",
                    "value": 36,
                    "operator": "lessThan"
                  },
                  {
                    "all": [
                      {
                        "fact": "address_ownership_status",
                        "value": "Owned",
                        "operator": "notEqual"
                      },
                      {
                        "fact": "business_address_ownership_status",
                        "value": "Owned",
                        "operator": "notEqual"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 73,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 2500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ECOM",
                  "ECOM_DIRECT",
                  "ECOM_TOPUP",
                  "SMFG_ECOM_TOPUP",
                  "VIVRITI_ECOM_TOPUP"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "all": [
                      {
                        "fact": "address_ownership_status",
                        "value": "Owned",
                        "operator": "notEqual"
                      },
                      {
                        "fact": "business_address_ownership_status",
                        "value": "Owned",
                        "operator": "notEqual"
                      }
                    ]
                  },
                  {
                    "fact": "risk_grade",
                    "value": [
                      "E",
                      "NA"
                    ],
                    "operator": "in"
                  },
                  {
                    "fact": "business_vintage_by_month",
                    "value": 36,
                    "operator": "lessThan"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 72,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 3000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ECOM",
                  "ECOM_DIRECT",
                  "ECOM_TOPUP",
                  "SMFG_ECOM_TOPUP",
                  "VIVRITI_ECOM_TOPUP"
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "address_ownership_status",
                    "value": "Owned",
                    "operator": "equal"
                  },
                  {
                    "fact": "business_address_ownership_status",
                    "value": "Owned",
                    "operator": "equal"
                  }
                ]
              },
              {
                "fact": "business_vintage_by_month",
                "value": 36,
                "operator": "greaterThanInclusive"
              }
            ]
          }
        },
        {
          "id": 71,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_DIRECT",
                  "SMFG_ECOM",
                  "VIVRITI_DIRECT",
                  "VIVRITI_ECOM",
                  "ABFL_DIRECT",
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "ntc_flag",
                "value": 1,
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 70,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT",
                  "ECOM",
                  "POS",
                  "ECOM_DIRECT",
                  "RBL",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "ntc_flag",
                "value": 1,
                "operator": "equal"
              },
              {
                "fact": "cibil_score",
                "value": [
                  "-1",
                  "000-1"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 69,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_DIRECT",
                  "RBL",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "DIRECT",
                  "POS",
                  "ECOM",
                  "ECOM_DIRECT",
                  "SCUF_DIRECT",
                  "SCUF_POS",
                  "SCUF_ECOM",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION_DIRECT_POS",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION_ECOM",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      74
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "C",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 68,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_PROFILE",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      50
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "B",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 67,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_PROFILE",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      50
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "C",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 66,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_PROFILE",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      50
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "E",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 65,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_ECOM",
                  "RBL",
                  "VIVRITI_ECOM",
                  "ECOM",
                  "ECOM_DIRECT",
                  "SCUF_DIRECT",
                  "SCUF_POS",
                  "SCUF_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": "C",
                "operator": "equal"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION_DIRECT_POS",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION_ECOM",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      74
                    ],
                    "operator": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 64,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_DIRECT",
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "A",
                "operator": "equal"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 63,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 800000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_DIRECT",
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "B",
                "operator": "equal"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 62,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_DIRECT",
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "B",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 61,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 600000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_DIRECT",
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "C",
                "operator": "equal"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 60,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_DIRECT",
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "C",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 59,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_DIRECT",
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "D",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 58,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_DIRECT",
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "RENTED_DIRECT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      52
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "E",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 57,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_DIRECT",
                  "SMFG_ECOM",
                  "VIVRITI_DIRECT",
                  "VIVRITI_ECOM",
                  "VIVRITI_POS",
                  "DIRECT_TOPUP",
                  "DIRECT",
                  "POS_TOPUP",
                  "POS",
                  "ECOM_TOPUP",
                  "ECOM",
                  "ECOM_DIRECT",
                  "SCUF_DIRECT",
                  "SCUF_POS",
                  "SCUF_ECOM",
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL",
                  "VIVRITI_ECOM_TOPUP",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SALARIED_APPLICANT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      84
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "A",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 56,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 800000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_DIRECT",
                  "SMFG_ECOM",
                  "VIVRITI_DIRECT",
                  "VIVRITI_ECOM",
                  "VIVRITI_POS",
                  "DIRECT_TOPUP",
                  "DIRECT",
                  "POS_TOPUP",
                  "POS",
                  "ECOM_TOPUP",
                  "ECOM",
                  "ECOM_DIRECT",
                  "SCUF_DIRECT",
                  "SCUF_POS",
                  "SCUF_ECOM",
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL",
                  "VIVRITI_ECOM_TOPUP",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SALARIED_APPLICANT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      84
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "B",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 55,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_DIRECT",
                  "SMFG_ECOM",
                  "VIVRITI_DIRECT",
                  "VIVRITI_ECOM",
                  "VIVRITI_POS",
                  "DIRECT",
                  "POS",
                  "ECOM",
                  "ECOM_DIRECT",
                  "SCUF_DIRECT",
                  "SCUF_POS",
                  "SCUF_ECOM",
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SALARIED_APPLICANT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      84
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "B",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 54,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 600000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_DIRECT",
                  "SMFG_ECOM",
                  "VIVRITI_DIRECT",
                  "VIVRITI_ECOM",
                  "VIVRITI_POS",
                  "DIRECT_TOPUP",
                  "DIRECT",
                  "POS_TOPUP",
                  "POS",
                  "ECOM_TOPUP",
                  "ECOM",
                  "ECOM_DIRECT",
                  "SCUF_DIRECT",
                  "SCUF_POS",
                  "SCUF_ECOM",
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL",
                  "VIVRITI_ECOM_TOPUP",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SALARIED_APPLICANT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      84
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "C",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 53,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_DIRECT",
                  "SMFG_ECOM",
                  "VIVRITI_DIRECT",
                  "VIVRITI_ECOM",
                  "VIVRITI_POS",
                  "DIRECT",
                  "POS",
                  "ECOM",
                  "ECOM_DIRECT",
                  "SCUF_DIRECT",
                  "SCUF_POS",
                  "SCUF_ECOM",
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SALARIED_APPLICANT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      84
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "C",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 52,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_DIRECT",
                  "SMFG_ECOM",
                  "VIVRITI_DIRECT",
                  "VIVRITI_ECOM",
                  "VIVRITI_POS",
                  "DIRECT",
                  "POS",
                  "ECOM",
                  "ECOM_DIRECT",
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SALARIED_APPLICANT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      84
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "D",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 51,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_DIRECT",
                  "SMFG_ECOM",
                  "VIVRITI_DIRECT",
                  "VIVRITI_ECOM",
                  "VIVRITI_POS",
                  "DIRECT",
                  "POS",
                  "ECOM",
                  "ECOM_DIRECT",
                  "SCUF_DIRECT",
                  "SCUF_POS",
                  "SCUF_ECOM",
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SALARIED_APPLICANT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      84
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": "E",
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 50,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SAVING_ACCOUNT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      85
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B",
                  "C"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 49,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SAVING_ACCOUNT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      85
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "D",
                  "E"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 48,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SAVING_ACCOUNT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      85
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "B"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 47,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DELINQUENT_PINCODE",
                  "SMFG_DELINQUENT_PINCODE",
                  "SCUF_DELINQUENT_PINCODE",
                  "VIVRITI_DELINQUENT_PINCODE"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SAVING_ACCOUNT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      85
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 46,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_DIRECT",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "DIRECT_TOPUP",
                  "DIRECT",
                  "POS_TOPUP",
                  "POS",
                  "ECOM_DIRECT",
                  "SCUF_DIRECT",
                  "SCUF_POS",
                  "SCUF_ECOM",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT",
                  "ABFL_DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SAVING_ACCOUNT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      85
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B",
                  "C",
                  "D",
                  "E"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 45,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.7
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "SMFG_DIRECT",
                  "VIVRITI_DIRECT",
                  "VIVRITI_POS",
                  "DIRECT",
                  "POS",
                  "ECOM_DIRECT",
                  "SCUF_DIRECT",
                  "SCUF_POS",
                  "SCUF_ECOM",
                  "SLICEBANK_DIRECT",
                  "ABFL_DIRECT",
                  "VIVRITI_DIRECT"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "SAVING_ACCOUNT",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      85
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B",
                  "C",
                  "D",
                  "E"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 44,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "experiment_id",
                "value": [
                  85
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 43,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.7
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "experiment_id",
                "value": [
                  85
                ],
                "operator": "in"
              },
              {
                "fact": "policy",
                "value": [
                  "DIRECT_TOPUP",
                  "POS_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "ECOM_TOPUP",
                  "SCUF_ECOM_TOPUP",
                  "SMFG_ECOM_TOPUP",
                  "VIVRITI_ECOM_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP"
                ],
                "operator": "notIn"
              }
            ]
          }
        },
        {
          "id": 42,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT_TOPUP",
                  "POS_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL"
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "E"
                ],
                "operator": "in"
              },
              {
                "fact": "partner_code",
                "value": [
                  "fa10f38782d62",
                  "f94336o060ebe",
                  "f84386a060ebc",
                  "f0ca0b47d2c66",
                  "ed7f0bf451cd9",
                  "ebd00f157fc79",
                  "eb6b9551c175a",
                  "eaa2b51e05739",
                  "e5515bd0e1df1",
                  "e25dd6b7c87db",
                  "e0ace7a48fa1c",
                  "e04c935f76b42",
                  "daa20fed80a2a",
                  "d60f705861ec4",
                  "d4d0cab57aeee",
                  "d259d7bb5b3cb",
                  "d143fbdce76d9",
                  "c950a7893bb18",
                  "c8ea708ecf978",
                  "c4ceb2712bc2f",
                  "c198f7f3f62ea",
                  "beb5a29979479",
                  "bbf8896772949",
                  "bb9aa3efc6fdd",
                  "ba0706a8f67df",
                  "b9981c1d30c90",
                  "b906863552e14",
                  "b7ca096181b1a",
                  "b5ad52326d014",
                  "b1607d2dd8d95",
                  "af55a5bde03d6",
                  "aecf7da816aac",
                  "acb3e4a26ef1f",
                  "a76d762df7d4b",
                  "a63a3769f93f4",
                  "a44c0b515c051",
                  "a343091a9cc13",
                  "9c7bfcd45af46",
                  "9a5af98795361",
                  "9a14c267f9a8a",
                  "8e720bdcf49c2",
                  "8ce45a8c335e1",
                  "86d23b9c0f358",
                  "84d4824d43a25",
                  "83084b28f0d70",
                  "82144ae74949c",
                  "80ea0af18e382",
                  "7fc1c164b0a20",
                  "791db3fba7bf8",
                  "77b0651c1ea17",
                  "6b55d0904e56c",
                  "6ac8a1f270942",
                  "682d221315c9a",
                  "67be540889b9e",
                  "64f1be98nfwae",
                  "649abdf3web99",
                  "64997e0933n01",
                  "64770f9dsgbok",
                  "6476f865cesfx",
                  "647466941cesx",
                  "647451f38q9j9",
                  "64744797ayg5z",
                  "647447277wdt3",
                  "646f1dfb5a5vf",
                  "645dd7f0ib590",
                  "64510f0d9cysu",
                  "642e3fcbvu9g6",
                  "642bd6f6hf3rn",
                  "642bd6cduqvc3",
                  "641d61182hx99",
                  "64119303en4tu",
                  "6401e67f8uswh",
                  "6400a5d09hxc9",
                  "63fcd0f2727o9",
                  "63e614090skj6",
                  "63e5e945jhdzg",
                  "63da2d0csvwrt",
                  "63da2cfcmhh8m",
                  "63d4db57xlbc0",
                  "63ce6d70wk0xf",
                  "63bfb4085la0n",
                  "63b67e3bb3zkf",
                  "639311f9dnnc7",
                  "638f9f9b6800z",
                  "638f9f89daauy",
                  "638f1722xxzcs",
                  "638879ea6ikdf",
                  "63809e2e42vzo",
                  "637f3f75l1ce6",
                  "636a43fc56fr6",
                  "63640c56k3iey",
                  "63640be74unne",
                  "63638744oaqjn",
                  "6360f859wykgj",
                  "635a817eserp0",
                  "635a8158yfbw8",
                  "634d372b521jq",
                  "6336bfff0tx10",
                  "632d8f29rkvfg",
                  "631ef5b5af9i0",
                  "63109a83c1esl",
                  "6303d2dczxkka",
                  "62fb5ac0hj5z7",
                  "62f5e7ab8d3qj",
                  "62f3af37hxh4b",
                  "62ecd0103ks2i",
                  "62ecc50eq52n1",
                  "62e93423y992m",
                  "62e933efc1jlr",
                  "62e8c6dcn4d93",
                  "62e8c68175kmw",
                  "62e0c81b1oc74",
                  "62dfec6c57s2c",
                  "62d6b9c4eafkk",
                  "62d66c76vc8it",
                  "62cfe4fbpb2uh",
                  "62cfc67d6hbe5",
                  "62cbd03bq7doh",
                  "62c53a48xupu1",
                  "62c53a35t01qg",
                  "62c539d4iw91w",
                  "62c4240c7rv7k",
                  "62c42362iar2w",
                  "62c2a1dai8a6n",
                  "62b2deffyy9wc",
                  "62ac70edvbiby",
                  "629f33aa2eect",
                  "629f0ec0y6an6",
                  "62972be6vgws6",
                  "6283520ew8xrz",
                  "622740564xu95",
                  "6225cc976umca",
                  "620c9aa2yqyku",
                  "61975594nb5zf",
                  "6194d601p6t78",
                  "618d601b63rop",
                  "617d1c63xc1ce",
                  "61781eb2pa527",
                  "616dbe29ctmu3",
                  "6155a1538b60g",
                  "6138c8bcinlm3",
                  "6110ebf88rhlm",
                  "6108f2105hdc1",
                  "60ed83de59gil",
                  "60ed4010l2cxo",
                  "60c0f2c4a6b67",
                  "6040c5a15x57y",
                  "6040b5c123p23",
                  "6040b5c100p1s",
                  "602b7d3beqpw7",
                  "601aad782s7m9",
                  "600c32152wnm3",
                  "6008391fpn6e7",
                  "5fe429a0sj16d",
                  "5f8027a1l2zzd",
                  "5f7da77e0v7ol",
                  "5f7da764u1o8b",
                  "5f7da743iypp4",
                  "5f684d4e58ec7",
                  "5f21366c79jw2",
                  "5ef6150f1npfm",
                  "5ef49baej7phd",
                  "5ea3ec1frlxjg",
                  "5e983437g3qvb",
                  "5e7f1ffc95usk",
                  "5e70d0f77rpgm",
                  "5e5fa9787xkws",
                  "5e58f868xj4i2",
                  "5e53ce9bqoqnb",
                  "5e4bde40bd556",
                  "5e32dfe88isfg",
                  "5e2fd567dt1y9",
                  "5e2ec522ey2ya",
                  "5e217472x2wb1",
                  "5df3304bxcbdw",
                  "5de4cdec3e208",
                  "5dc54c81hvslq",
                  "5d4935dacf8a8",
                  "5d442d861f142",
                  "5d2db2785juev",
                  "5d19e219uxbso",
                  "5c8a61022v3ll",
                  "5c80cc86e8ywx",
                  "5c80cc56wtarb",
                  "5c80cc402q1dg",
                  "5c80cc132ptaa",
                  "5c1774d8uupw8",
                  "5bbafc169cqpu",
                  "5bbafbdaw4k9s",
                  "5ba64e0595ab7",
                  "5ba642c85tbvv",
                  "5b9c75cbfbbae",
                  "5b8e8e7858dxc",
                  "5b8d059136bk4",
                  "5b85054dntdno",
                  "5b83eb48krt2k",
                  "5b83d0cek1n10",
                  "5b814ce4lfvwb",
                  "5b80eed9fm51v",
                  "5b803f36cg4y5",
                  "5b7d1394370c0",
                  "5b7bb160v19xy",
                  "5b766ac8e4607",
                  "5b727178e8fd6",
                  "5b62e373de67f",
                  "5b598a8718fc7",
                  "5b5878a9bdbaa",
                  "5b4f2cedrt9lb",
                  "5b2c99fc7c636",
                  "5b2b523d29598F",
                  "5b1fa8c9bfb09",
                  "5b1fa718e2a77",
                  "5b0be711e3fa0",
                  "5b06514ee9b39",
                  "5b0645c0e8c19",
                  "5b056c5f017f9",
                  "5b053508a95cc",
                  "5b0512e2138c4",
                  "5b051280058aa",
                  "5b0511be7dd04",
                  "5b03de105f7b6",
                  "5ae4605246cd1",
                  "5ae32ca824600",
                  "5ae32ca459b4b",
                  "5adda0d6dfd91",
                  "5ab63c0831a7c",
                  "5ab63bbc87a9f",
                  "5ab63b8716748",
                  "5a8af6bd8d32e",
                  "5a86d6638d5fd",
                  "5a7aab0fdb506",
                  "5a74101735a8d",
                  "5a68864971aaf",
                  "5a5c8a3a83a43",
                  "5a38a2c20c799",
                  "5a379b4aadde3",
                  "5a379b322a117",
                  "5a324be81e0d1",
                  "5a2b8d222f032",
                  "5a196337e9a11",
                  "5a00394c54830",
                  "59f6d63a93150",
                  "59c7aed22ed7b",
                  "59bf74d0194dd",
                  "59bf6fc1d80d3",
                  "59ba2f9402da9",
                  "59b677ea9b2fe",
                  "59b677d90d17f",
                  "59b677b18e8d7",
                  "59b677a4f2b25",
                  "59b6779504a33",
                  "59b67769785b5",
                  "59b6770583b5e",
                  "599eda7243c79",
                  "597f2c72c90dc",
                  "59706afac9a0c",
                  "596de98522de0",
                  "596de8e36bd31",
                  "596de8120459f",
                  "5969727576129",
                  "596894149fdf1",
                  "595b87f6b36e9",
                  "594d111277094",
                  "5942b597418c6",
                  "5942b5278013d",
                  "5942a6fa3f67e",
                  "593f683701aa5",
                  "5937af648ccd0",
                  "591bf74873971",
                  "591bf70db6a3b",
                  "5911b4882685a",
                  "5911b47caa701",
                  "590055756bd2a",
                  "59002b2ba6c24",
                  "59002aaed7a40",
                  "58d4f2e72fc97",
                  "58d22270b44fb",
                  "58ca84caaba24",
                  "58ca8477b2b6b",
                  "58ca83d1a2095",
                  "578a91e921fe0",
                  "5557d94275052",
                  "504147b7ed54c",
                  "4fbdf8ffe9526",
                  "4dbc46a5f9a43",
                  "4b1d9866d600c",
                  "4a33bb1794f40",
                  "49a39e8a9f963",
                  "4756920a70969",
                  "4624c33b84465",
                  "43dbaeef0199f",
                  "41f36abaaa500",
                  "4136266b5fc32",
                  "40b7723083749",
                  "3a66d31bda4a8",
                  "3a4ffc81d00f3",
                  "33ad41047c53c",
                  "2dc1d43ecc119",
                  "2c57047c34d53",
                  "2a97fd1196b09",
                  "275cd64a30240",
                  "26d9735c927cb",
                  "224e2b1b7f751",
                  "22012b5bc9d71",
                  "20dd51d6ecd40",
                  "1ce8a51be34cd",
                  "187d158af0947",
                  "1565c27455004",
                  "0b16a2206f607",
                  "0539d7ee8cfe2",
                  "00e338e21e1e1"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 41,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "DIRECT_TOPUP",
                  "POS_TOPUP",
                  "SMFG_DIRECT_TOPUP",
                  "VIVRITI_DIRECT_TOPUP",
                  "ABFL_DIRECT_TOPUP",
                  "ABFL_DIRECT_PARALLEL"
                ],
                "operator": "in"
              },
              {
                "any": [
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_PROFILE",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiments",
                    "value": "CAUTIOUS_LOCATION",
                    "operator": "contains"
                  },
                  {
                    "fact": "experiment_id",
                    "value": [
                      74,
                      50
                    ],
                    "operator": "in"
                  }
                ]
              },
              {
                "fact": "partner_code",
                "value": [
                  "fa10f38782d62",
                  "f94336o060ebe",
                  "f84386a060ebc",
                  "f0ca0b47d2c66",
                  "ed7f0bf451cd9",
                  "ebd00f157fc79",
                  "eb6b9551c175a",
                  "eaa2b51e05739",
                  "e5515bd0e1df1",
                  "e25dd6b7c87db",
                  "e0ace7a48fa1c",
                  "e04c935f76b42",
                  "daa20fed80a2a",
                  "d60f705861ec4",
                  "d4d0cab57aeee",
                  "d259d7bb5b3cb",
                  "d143fbdce76d9",
                  "c950a7893bb18",
                  "c8ea708ecf978",
                  "c4ceb2712bc2f",
                  "c198f7f3f62ea",
                  "beb5a29979479",
                  "bbf8896772949",
                  "bb9aa3efc6fdd",
                  "ba0706a8f67df",
                  "b9981c1d30c90",
                  "b906863552e14",
                  "b7ca096181b1a",
                  "b5ad52326d014",
                  "b1607d2dd8d95",
                  "af55a5bde03d6",
                  "aecf7da816aac",
                  "acb3e4a26ef1f",
                  "a76d762df7d4b",
                  "a63a3769f93f4",
                  "a44c0b515c051",
                  "a343091a9cc13",
                  "9c7bfcd45af46",
                  "9a5af98795361",
                  "9a14c267f9a8a",
                  "8e720bdcf49c2",
                  "8ce45a8c335e1",
                  "86d23b9c0f358",
                  "84d4824d43a25",
                  "83084b28f0d70",
                  "82144ae74949c",
                  "80ea0af18e382",
                  "7fc1c164b0a20",
                  "791db3fba7bf8",
                  "77b0651c1ea17",
                  "6b55d0904e56c",
                  "6ac8a1f270942",
                  "682d221315c9a",
                  "67be540889b9e",
                  "64f1be98nfwae",
                  "649abdf3web99",
                  "64997e0933n01",
                  "64770f9dsgbok",
                  "6476f865cesfx",
                  "647466941cesx",
                  "647451f38q9j9",
                  "64744797ayg5z",
                  "647447277wdt3",
                  "646f1dfb5a5vf",
                  "645dd7f0ib590",
                  "64510f0d9cysu",
                  "642e3fcbvu9g6",
                  "642bd6f6hf3rn",
                  "642bd6cduqvc3",
                  "641d61182hx99",
                  "64119303en4tu",
                  "6401e67f8uswh",
                  "6400a5d09hxc9",
                  "63fcd0f2727o9",
                  "63e614090skj6",
                  "63e5e945jhdzg",
                  "63da2d0csvwrt",
                  "63da2cfcmhh8m",
                  "63d4db57xlbc0",
                  "63ce6d70wk0xf",
                  "63bfb4085la0n",
                  "63b67e3bb3zkf",
                  "639311f9dnnc7",
                  "638f9f9b6800z",
                  "638f9f89daauy",
                  "638f1722xxzcs",
                  "638879ea6ikdf",
                  "63809e2e42vzo",
                  "637f3f75l1ce6",
                  "636a43fc56fr6",
                  "63640c56k3iey",
                  "63640be74unne",
                  "63638744oaqjn",
                  "6360f859wykgj",
                  "635a817eserp0",
                  "635a8158yfbw8",
                  "634d372b521jq",
                  "6336bfff0tx10",
                  "632d8f29rkvfg",
                  "631ef5b5af9i0",
                  "63109a83c1esl",
                  "6303d2dczxkka",
                  "62fb5ac0hj5z7",
                  "62f5e7ab8d3qj",
                  "62f3af37hxh4b",
                  "62ecd0103ks2i",
                  "62ecc50eq52n1",
                  "62e93423y992m",
                  "62e933efc1jlr",
                  "62e8c6dcn4d93",
                  "62e8c68175kmw",
                  "62e0c81b1oc74",
                  "62dfec6c57s2c",
                  "62d6b9c4eafkk",
                  "62d66c76vc8it",
                  "62cfe4fbpb2uh",
                  "62cfc67d6hbe5",
                  "62cbd03bq7doh",
                  "62c53a48xupu1",
                  "62c53a35t01qg",
                  "62c539d4iw91w",
                  "62c4240c7rv7k",
                  "62c42362iar2w",
                  "62c2a1dai8a6n",
                  "62b2deffyy9wc",
                  "62ac70edvbiby",
                  "629f33aa2eect",
                  "629f0ec0y6an6",
                  "62972be6vgws6",
                  "6283520ew8xrz",
                  "622740564xu95",
                  "6225cc976umca",
                  "620c9aa2yqyku",
                  "61975594nb5zf",
                  "6194d601p6t78",
                  "618d601b63rop",
                  "617d1c63xc1ce",
                  "61781eb2pa527",
                  "616dbe29ctmu3",
                  "6155a1538b60g",
                  "6138c8bcinlm3",
                  "6110ebf88rhlm",
                  "6108f2105hdc1",
                  "60ed83de59gil",
                  "60ed4010l2cxo",
                  "60c0f2c4a6b67",
                  "6040c5a15x57y",
                  "6040b5c123p23",
                  "6040b5c100p1s",
                  "602b7d3beqpw7",
                  "601aad782s7m9",
                  "600c32152wnm3",
                  "6008391fpn6e7",
                  "5fe429a0sj16d",
                  "5f8027a1l2zzd",
                  "5f7da77e0v7ol",
                  "5f7da764u1o8b",
                  "5f7da743iypp4",
                  "5f684d4e58ec7",
                  "5f21366c79jw2",
                  "5ef6150f1npfm",
                  "5ef49baej7phd",
                  "5ea3ec1frlxjg",
                  "5e983437g3qvb",
                  "5e7f1ffc95usk",
                  "5e70d0f77rpgm",
                  "5e5fa9787xkws",
                  "5e58f868xj4i2",
                  "5e53ce9bqoqnb",
                  "5e4bde40bd556",
                  "5e32dfe88isfg",
                  "5e2fd567dt1y9",
                  "5e2ec522ey2ya",
                  "5e217472x2wb1",
                  "5df3304bxcbdw",
                  "5de4cdec3e208",
                  "5dc54c81hvslq",
                  "5d4935dacf8a8",
                  "5d442d861f142",
                  "5d2db2785juev",
                  "5d19e219uxbso",
                  "5c8a61022v3ll",
                  "5c80cc86e8ywx",
                  "5c80cc56wtarb",
                  "5c80cc402q1dg",
                  "5c80cc132ptaa",
                  "5c1774d8uupw8",
                  "5bbafc169cqpu",
                  "5bbafbdaw4k9s",
                  "5ba64e0595ab7",
                  "5ba642c85tbvv",
                  "5b9c75cbfbbae",
                  "5b8e8e7858dxc",
                  "5b8d059136bk4",
                  "5b85054dntdno",
                  "5b83eb48krt2k",
                  "5b83d0cek1n10",
                  "5b814ce4lfvwb",
                  "5b80eed9fm51v",
                  "5b803f36cg4y5",
                  "5b7d1394370c0",
                  "5b7bb160v19xy",
                  "5b766ac8e4607",
                  "5b727178e8fd6",
                  "5b62e373de67f",
                  "5b598a8718fc7",
                  "5b5878a9bdbaa",
                  "5b4f2cedrt9lb",
                  "5b2c99fc7c636",
                  "5b2b523d29598F",
                  "5b1fa8c9bfb09",
                  "5b1fa718e2a77",
                  "5b0be711e3fa0",
                  "5b06514ee9b39",
                  "5b0645c0e8c19",
                  "5b056c5f017f9",
                  "5b053508a95cc",
                  "5b0512e2138c4",
                  "5b051280058aa",
                  "5b0511be7dd04",
                  "5b03de105f7b6",
                  "5ae4605246cd1",
                  "5ae32ca824600",
                  "5ae32ca459b4b",
                  "5adda0d6dfd91",
                  "5ab63c0831a7c",
                  "5ab63bbc87a9f",
                  "5ab63b8716748",
                  "5a8af6bd8d32e",
                  "5a86d6638d5fd",
                  "5a7aab0fdb506",
                  "5a74101735a8d",
                  "5a68864971aaf",
                  "5a5c8a3a83a43",
                  "5a38a2c20c799",
                  "5a379b4aadde3",
                  "5a379b322a117",
                  "5a324be81e0d1",
                  "5a2b8d222f032",
                  "5a196337e9a11",
                  "5a00394c54830",
                  "59f6d63a93150",
                  "59c7aed22ed7b",
                  "59bf74d0194dd",
                  "59bf6fc1d80d3",
                  "59ba2f9402da9",
                  "59b677ea9b2fe",
                  "59b677d90d17f",
                  "59b677b18e8d7",
                  "59b677a4f2b25",
                  "59b6779504a33",
                  "59b67769785b5",
                  "59b6770583b5e",
                  "599eda7243c79",
                  "597f2c72c90dc",
                  "59706afac9a0c",
                  "596de98522de0",
                  "596de8e36bd31",
                  "596de8120459f",
                  "5969727576129",
                  "596894149fdf1",
                  "595b87f6b36e9",
                  "594d111277094",
                  "5942b597418c6",
                  "5942b5278013d",
                  "5942a6fa3f67e",
                  "593f683701aa5",
                  "5937af648ccd0",
                  "591bf74873971",
                  "591bf70db6a3b",
                  "5911b4882685a",
                  "5911b47caa701",
                  "590055756bd2a",
                  "59002b2ba6c24",
                  "59002aaed7a40",
                  "58d4f2e72fc97",
                  "58d22270b44fb",
                  "58ca84caaba24",
                  "58ca8477b2b6b",
                  "58ca83d1a2095",
                  "578a91e921fe0",
                  "5557d94275052",
                  "504147b7ed54c",
                  "4fbdf8ffe9526",
                  "4dbc46a5f9a43",
                  "4b1d9866d600c",
                  "4a33bb1794f40",
                  "49a39e8a9f963",
                  "4756920a70969",
                  "4624c33b84465",
                  "43dbaeef0199f",
                  "41f36abaaa500",
                  "4136266b5fc32",
                  "40b7723083749",
                  "3a66d31bda4a8",
                  "3a4ffc81d00f3",
                  "33ad41047c53c",
                  "2dc1d43ecc119",
                  "2c57047c34d53",
                  "2a97fd1196b09",
                  "275cd64a30240",
                  "26d9735c927cb",
                  "224e2b1b7f751",
                  "22012b5bc9d71",
                  "20dd51d6ecd40",
                  "1ce8a51be34cd",
                  "187d158af0947",
                  "1565c27455004",
                  "0b16a2206f607",
                  "0539d7ee8cfe2",
                  "00e338e21e1e1"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 40,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "E"
                ],
                "operator": "notIn"
              },
              {
                "any": [
                  {
                    "fact": "risk_grade",
                    "value": [
                      "A",
                      "B",
                      "C",
                      "D"
                    ],
                    "operator": "notIn"
                  },
                  {
                    "fact": "partner_type",
                    "value": [
                      "DSA"
                    ],
                    "operator": "in"
                  },
                  {
                    "fact": "business_vintage_by_month",
                    "value": 36,
                    "operator": "lessThan"
                  },
                  {
                    "all": [
                      {
                        "fact": "address_ownership_status",
                        "value": "Owned",
                        "operator": "notEqual"
                      },
                      {
                        "fact": "business_address_ownership_status",
                        "value": "Owned",
                        "operator": "notEqual"
                      }
                    ]
                  }
                ]
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 39,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "E"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 38,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 2000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "operator": "in"
              },
              {
                "fact": "partner_type",
                "value": [
                  "DSA"
                ],
                "operator": "notIn"
              },
              {
                "fact": "business_vintage_by_month",
                "value": 36,
                "operator": "greaterThanInclusive"
              },
              {
                "any": [
                  {
                    "fact": "address_ownership_status",
                    "value": "Owned",
                    "operator": "equal"
                  },
                  {
                    "fact": "business_address_ownership_status",
                    "value": "Owned",
                    "operator": "equal"
                  }
                ]
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 37,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 3000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B",
                  "C",
                  "D"
                ],
                "operator": "in"
              },
              {
                "fact": "partner_type",
                "value": [
                  "DSA"
                ],
                "operator": "notIn"
              },
              {
                "fact": "business_vintage_by_month",
                "value": 36,
                "operator": "greaterThanInclusive"
              },
              {
                "any": [
                  {
                    "fact": "address_ownership_status",
                    "value": "Owned",
                    "operator": "equal"
                  },
                  {
                    "fact": "business_address_ownership_status",
                    "value": "Owned",
                    "operator": "equal"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 36,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT",
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "is_thick_cibil",
                "value": 0,
                "operator": "equal"
              }
            ]
          }
        },
        {
          "id": 35,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT",
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "business_vintage_by_month",
                "value": 18,
                "operator": "lessThanInclusive"
              }
            ]
          }
        },
        {
          "id": 34,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 700000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT",
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "address_ownership_status",
                    "value": "Owned",
                    "operator": "notEqual"
                  },
                  {
                    "fact": "business_address_ownership_status",
                    "value": "Owned",
                    "operator": "notEqual"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 33,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  52
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 32,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 800000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  52
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "B"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 31,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  52
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "B"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 30,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 600000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  52
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C",
                  "D",
                  "E",
                  "NA"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 29,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  52
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C",
                  "D",
                  "E",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 28,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  50
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 27,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  50
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "B"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 26,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  50
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C",
                  "D",
                  "E",
                  "NA"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 25,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  50
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C",
                  "D",
                  "E",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 24,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT",
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  74
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 23,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT",
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  74
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "B"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 22,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT",
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  74
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C",
                  "D",
                  "E",
                  "NA"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 21,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT",
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  74
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C",
                  "D",
                  "E",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 20,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT",
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  84
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 19,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 800000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT",
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  84
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "B"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 18,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT",
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  84
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "B"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 17,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 600000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT",
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  84
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 16,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT",
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  84
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 15,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT",
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  84
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "D",
                  "E"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 14,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  51
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B",
                  "C",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 13,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  51
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "D",
                  "E"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 12,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  51
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "B"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 11,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  51
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 10,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  46
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B",
                  "C",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 9,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  46
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "D",
                  "E"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 8,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  46
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "B"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 7,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  46
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 6,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 500000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT",
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  85
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B",
                  "C",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 5,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 0
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT",
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  85
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "D",
                  "E"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 4,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.7
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT",
                  "ABFL_ECOM"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  85
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 3,
          "event": {
            "type": "FIXED",
            "params": {
              "message": 1000000
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  107
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "NA"
                ],
                "operator": "in"
              },
              {
                "all": [
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_ONE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_TWO",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_THREE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG_FOUR",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_FIVE",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_SIX",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN__RAG__SEVEN",
                    "operator": "doesNotContain"
                  },
                  {
                    "fact": "tags",
                    "value": "GREEN_RAG_EIGHT",
                    "operator": "doesNotContain"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 2,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.85
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  107
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "B"
                ],
                "operator": "in"
              }
            ]
          }
        },
        {
          "id": 1,
          "event": {
            "type": "MULTIPLIER",
            "params": {
              "message": 0.75
            }
          },
          "conditions": {
            "all": [
              {
                "fact": "policy",
                "value": [
                  "ABFL_DIRECT"
                ],
                "operator": "in"
              },
              {
                "fact": "experiment_id",
                "value": [
                  107
                ],
                "operator": "in"
              },
              {
                "fact": "risk_grade",
                "value": [
                  "C",
                  "D",
                  "E",
                  "NA"
                ],
                "operator": "in"
              }
            ]
          }
        }
      ]
    }
  }
];

const RulesEngineApp = () => {
  const [rules, setRules] = useState([]);
  const [selectedRule, setSelectedRule] = useState(null); // Changed to single selection
  const [showAddRuleForm, setShowAddRuleForm] = useState(false);
  const [newRuleName, setNewRuleName] = useState('');
  const [facts, setFacts] = useState([
    { key: 'risk_grade', value: undefined },
    { key: 'business_vintage_by_month', value: undefined },
    { key: 'business_address_ownership_status', value: undefined },
    { key: 'address_ownership_status', value: undefined },
    { key: 'policy', value: undefined },
    { key: 'partner_code', value: undefined },
    { key: 'partner_type', value: undefined }
  ]);
  const [newRuleJson, setNewRuleJson] = useState([]);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    loadRules();
  }, []);

  const loadRules = () => {
    try {
      const keys = Object.keys(localStorage).filter(key => key.startsWith('rule:'));
      if (keys.length > 0) {
        const loadedRules = [];
        for (const key of keys) {
          const ruleData = localStorage.getItem(key);
          if (ruleData) {
            loadedRules.push(JSON.parse(ruleData));
          }
        }
        setRules(loadedRules);
        // Select first rule by default
        setSelectedRule(loadedRules.length > 0 ? loadedRules[0].name : null);
      } else {
        // Initialize with default rules if no rules exist
        for (const rule of DEFAULT_RULES) {
          localStorage.setItem(`rule:${rule.name}`, JSON.stringify(rule));
        }
        setRules(DEFAULT_RULES);
        setSelectedRule(DEFAULT_RULES[0].name);
      }
    } catch (err) {
      console.log('Error loading rules, initializing with defaults');
      // Initialize with default rules if there's an error
      try {
        for (const rule of DEFAULT_RULES) {
          localStorage.setItem(`rule:${rule.name}`, JSON.stringify(rule));
        }
      } catch (saveErr) {
        console.log('Could not save default rules');
      }
      setRules(DEFAULT_RULES);
      setSelectedRule(DEFAULT_RULES[0].name);
    }
  };

  const saveRule = () => {
    try {
      if (!newRuleName || !newRuleName.trim()) {
        setError('Rule name is required');
        return;
      }

      const conditions = JSON.parse(newRuleJson);

      const rule = {
        name: newRuleName.trim(),
        conditions: conditions
      };

      localStorage.setItem(`rule:${rule.name}`, JSON.stringify(rule));
      
      setRules([...rules, rule]);
      // Automatically select the newly added rule
      setSelectedRule(rule.name);
      // Reset form and hide it
      setNewRuleName('');
      setNewRuleJson([]);
      setShowAddRuleForm(false);
      setError('');
    } catch (err) {
      setError('Invalid JSON format: ' + err.message);
    }
  };

  const deleteRule = (ruleName) => {
    try {
      localStorage.removeItem(`rule:${ruleName}`);
      const remainingRules = rules.filter(r => r.name !== ruleName);
      setRules(remainingRules);
      // If deleted rule was selected, select first remaining rule
      if (selectedRule === ruleName) {
        setSelectedRule(remainingRules.length > 0 ? remainingRules[0].name : null);
      }
    } catch (err) {
      setError('Error deleting rule: ' + err.message);
    }
  };

  const selectRule = (ruleName) => {
    setSelectedRule(ruleName);
  };

  const addFact = () => {
    setFacts([...facts, { key: '', value: '' }]);
  };

  const removeFact = (index) => {
    setFacts(facts.filter((_, i) => i !== index));
  };

  const updateFact = (index, field, value) => {
    const updatedFacts = [...facts];
    updatedFacts[index][field] = value;
    setFacts(updatedFacts);
  };

  const convertFactsToObject = () => {
    const factObj = {};
    facts.forEach(fact => {
      if (fact.key.trim()) {
        let value = fact.value;
        
        if (!isNaN(value) && value !== '') {
          value = parseFloat(value);
        } 
        else if (value === 'true') {
          value = true;
        } else if (value === 'false') {
          value = false;
        }
        
        factObj[fact.key] = value;
      }
    });
    return factObj;
  };

  const evaluateRules = async () => {
    try {
      if (!selectedRule) {
        setError('Please select a rule to evaluate');
        return;
      }

      const fact = convertFactsToObject();
      setError('');

      const { Engine } = await import('https://cdn.skypack.dev/json-rules-engine@6.5.0');
      
      const engine = new Engine([], { allowUndefinedFacts: true });
      
      engine.addOperator('inArray', (factValue, jsonValue) => {
        if (!factValue || !factValue.length) return false;
        return factValue.some(item => jsonValue.includes(item));
      });

      engine.addOperator('notInArray', (factValue, jsonValue) => {
        if (!factValue || !factValue.length) return false;
        return !factValue.some(item => jsonValue.includes(item));
      });

      // Only add selected rule to the engine
      const ruleToEvaluate = rules.find(rule => rule.name === selectedRule);
      if (ruleToEvaluate) {
        // Convert array format to json-rules-engine format
        for( const condition of ruleToEvaluate.conditions.upper) {
          console.log(condition);
          engine.addRule(condition);
        }
      }

      const successRules = [];
      const failedRules = [];

      engine.on('success', (event, almanac, ruleResult) => {
        successRules.push(ruleResult);
      });

      engine.on('failure', (event, almanac, ruleResult) => {
        failedRules.push(ruleResult);
      });
      
      console.log(fact);
      await engine.run(fact);
      console.log(successRules);
      setResults({
        success: successRules,
        failed: failedRules,
        total: 1
      });
    } catch (err) {
      setError('Evaluation error: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-red-600 rounded-xl shadow-lg">
              <Code className="text-white" size={32} />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">
              Rules Engine
            </h1>
          </div>
          <p className="text-gray-600 text-lg">Create, manage, and evaluate business rules</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-500 rounded-xl p-4 mb-6 flex items-start gap-3 shadow-lg">
            <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Add New Rule Button */}
        {!showAddRuleForm && (
          <div className="mb-6">
            <button
              onClick={() => setShowAddRuleForm(true)}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl flex items-center gap-2 transition shadow-lg hover:shadow-red-500/50"
            >
              <Plus size={20} />
              Add New Rule
            </button>
          </div>
        )}

        {/* Create Rule Form (shown when button is clicked) */}
        {showAddRuleForm && (
          <div className="mb-6 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Plus className="text-red-600" size={20} />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">Create New Rule</h2>
              </div>
              <button
                onClick={() => {
                  setShowAddRuleForm(false);
                  setNewRuleName('');
                  setError('');
                }}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rule Name
                </label>
                <input
                  type="text"
                  value={newRuleName}
                  onChange={(e) => setNewRuleName(e.target.value)}
                  placeholder="e.g., banking_bto_old"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Conditions (Array of Objects)
                </label>
                <p className="text-xs text-gray-500 mb-2">
                  Enter an array of condition objects. Each object can contain rule logic and events.
                </p>
                <textarea
                  value={newRuleJson}
                  onChange={(e) => setNewRuleJson(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 font-mono text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  rows={18}
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={saveRule}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition shadow-lg hover:shadow-red-500/50"
                >
                  <Plus size={20} />
                  Save Rule
                </button>
                <button
                  onClick={() => {
                    setShowAddRuleForm(false);
                    setNewRuleName('');
                    setError('');
                  }}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition"
                >
                  <X size={20} />
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Stored Rules Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-red-100 rounded-lg">
                <Database className="text-red-600" size={20} />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Select Rule
              </h2>
              <span className="ml-auto px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                {rules.length}
              </span>
            </div>
            
            {selectedRule && (
              <div className="mb-4">
                <span className="px-3 py-1.5 bg-red-100 text-red-700 rounded-lg text-sm font-medium">
                  Selected: {selectedRule}
                </span>
              </div>
            )}
            
            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
              {rules.length === 0 ? (
                <div className="text-center py-12">
                  <Database className="mx-auto mb-4 text-gray-400" size={48} />
                  <p className="text-gray-500">No rules stored yet</p>
                </div>
              ) : (
                rules.map((rule, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => selectRule(rule.name)}
                    className={`bg-gray-50 border rounded-xl p-4 hover:border-red-400 transition cursor-pointer group ${
                      selectedRule === rule.name ? 'border-red-600 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3 flex-1">
                        <input
                          type="radio"
                          checked={selectedRule === rule.name}
                          onChange={() => selectRule(rule.name)}
                          className="w-5 h-5 bg-white border-red-500 text-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-0 cursor-pointer"
                        />
                        <h3 className="font-semibold text-gray-900 text-lg">{rule.name}</h3>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteRule(rule.name);
                        }}
                        className="text-red-600 hover:text-red-700 transition opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Evaluation Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Evaluate Facts</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="block text-lg font-medium text-gray-700">
                  Facts
                </label>
                <button
                  onClick={addFact}
                  className="bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg flex items-center gap-2 transition border border-red-300"
                >
                  <Plus size={16} />
                  Add Fact
                </button>
              </div>
              
              <div className="space-y-3 max-h-[400px] overflow-y-auto mb-6 pr-2">
                {facts.map((fact, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-300 rounded-xl p-4 hover:border-red-400 transition group">
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={fact.key}
                        onChange={(e) => updateFact(index, 'key', e.target.value)}
                        placeholder="Key"
                        className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                      />
                      <input
                        type="text"
                        value={fact.value}
                        onChange={(e) => updateFact(index, 'value', e.target.value)}
                        placeholder="Value"
                        className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                      />
                      <button
                        onClick={() => removeFact(index)}
                        className="text-red-600 hover:text-red-700 transition opacity-0 group-hover:opacity-100"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={evaluateRules}
                disabled={!selectedRule}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-300 disabled:text-gray-500 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition shadow-lg hover:shadow-red-500/50 disabled:shadow-none disabled:cursor-not-allowed"
              >
                <Play size={20} />
                Run Evaluation {selectedRule && `(${selectedRule})`}
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Results</h3>
              {results ? (
                <div className="space-y-4">
                  {results.success.length > 0 ? (
                    <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-green-500 rounded-xl">
                          <CheckCircle className="text-white" size={28} />
                        </div>
                        <div>
                          <h4 className="font-bold text-green-800 text-2xl">
                            ✓ Rule Matched!
                          </h4>
                          <p className="text-green-600 text-sm">Evaluation successful</p>
                        </div>
                      </div>
                      {results.success.map((rule, idx) => {
                        const fullRule = rules.find(r => r.name === rule.name);
                        return (
                          <div key={idx} className="bg-white p-5 rounded-xl border border-green-300 mt-3">
                            <div className="mb-4">
                              <span className="text-gray-500 text-xs uppercase tracking-wider">Matched Rule</span>
                              <p className="font-bold text-gray-900 text-2xl mt-1">{rule.name}</p>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <span className="text-gray-500 text-xs uppercase tracking-wider">Event Type:</span>
                                <p className="text-green-700 font-semibold">{rule.event.type}</p>
                              </div>
                              {rule.event.params && (
                                <div>
                                  <span className="text-gray-500 text-xs uppercase tracking-wider">Message:</span>
                                  <p className="text-green-600 font-medium">{rule.event.params.message}</p>
                                </div>
                              )}
                              <div>
                                <span className="text-gray-500 text-xs uppercase tracking-wider mb-2 block">Full Rule Object:</span>
                                <pre className="text-xs bg-gray-50 p-4 rounded-lg overflow-x-auto text-green-800 border border-green-200 font-mono">
                                  {JSON.stringify({
                                    name: rule.name,
                                    conditions: fullRule?.conditions || rule.conditions
                                  }, null, 2)}
                                </pre>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-red-600 rounded-xl">
                          <AlertCircle className="text-white" size={28} />
                        </div>
                        <div>
                          <h4 className="font-bold text-red-800 text-2xl">
                            ✗ Rule Did Not Match
                          </h4>
                          <p className="text-red-600 text-sm">Evaluation failed</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-gray-50 border border-gray-300 rounded-xl p-12 text-center">
                  <Play className="mx-auto mb-4 text-gray-400" size={48} />
                  <p className="text-gray-500">Run evaluation to see results</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesEngineApp;