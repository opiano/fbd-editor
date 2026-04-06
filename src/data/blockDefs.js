export const BlockDefinitions =
{
    "ABS_F": {
        "type": "ABS_F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "ABS_I": {
        "type": "ABS_I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "ACCUM_F": {
        "type": "ACCUM_F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            },
            {
                "name": "RESET",
                "dataType": "BOOL"
            },
            {
                "name": "HOLD",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "PREV OUT",
                "dataType": "REAL"
            },
            {
                "name": "YEAR",
                "dataType": "INT"
            },
            {
                "name": "MONTH",
                "dataType": "INT"
            },
            {
                "name": "DAY",
                "dataType": "INT"
            },
            {
                "name": "HOUR",
                "dataType": "INT"
            },
            {
                "name": "MIN",
                "dataType": "INT"
            },
            {
                "name": "SEC",
                "dataType": "INT"
            }
        ],
        "parameters": [
            {
                "name": "RESET VAL",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "PERIOD",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "ACCUM_FE": {
        "type": "ACCUM_FE",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            },
            {
                "name": "RESET",
                "dataType": "BOOL"
            },
            {
                "name": "HOLD",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "INT"
            },
            {
                "name": "PREV OUT",
                "dataType": "INT"
            },
            {
                "name": "YEAR",
                "dataType": "INT"
            },
            {
                "name": "MONTH",
                "dataType": "INT"
            },
            {
                "name": "DAY",
                "dataType": "INT"
            },
            {
                "name": "HOUR",
                "dataType": "INT"
            },
            {
                "name": "MIN",
                "dataType": "INT"
            },
            {
                "name": "SEC",
                "dataType": "INT"
            }
        ],
        "parameters": [
            {
                "name": "RESET VAL",
                "dataType": "INT",
                "value": 0.0
            },
            {
                "name": "PERIOD",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "ACCUM_I": {
        "type": "ACCUM_I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            },
            {
                "name": "RESET",
                "dataType": "BOOL"
            },
            {
                "name": "HOLD",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "INT"
            },
            {
                "name": "PREV OUT",
                "dataType": "INT"
            },
            {
                "name": "YEAR",
                "dataType": "INT"
            },
            {
                "name": "MONTH",
                "dataType": "INT"
            },
            {
                "name": "DAY",
                "dataType": "INT"
            },
            {
                "name": "HOUR",
                "dataType": "INT"
            },
            {
                "name": "MIN",
                "dataType": "INT"
            },
            {
                "name": "SEC",
                "dataType": "INT"
            }
        ],
        "parameters": [
            {
                "name": "RESET VAL",
                "dataType": "INT",
                "value": 0.0
            },
            {
                "name": "PERIOD",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "ACCUM_OFF": {
        "type": "ACCUM_OFF",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            },
            {
                "name": "RESET",
                "dataType": "BOOL"
            },
            {
                "name": "HOLD",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "TIME",
                "dataType": "INT"
            },
            {
                "name": "PREV OUT",
                "dataType": "INT"
            },
            {
                "name": "YEAR",
                "dataType": "INT"
            },
            {
                "name": "MONTH",
                "dataType": "INT"
            },
            {
                "name": "DAY",
                "dataType": "INT"
            },
            {
                "name": "HOUR",
                "dataType": "INT"
            },
            {
                "name": "MIN",
                "dataType": "INT"
            },
            {
                "name": "SEC",
                "dataType": "INT"
            }
        ],
        "parameters": [
            {
                "name": "RESET VAL",
                "dataType": "INT",
                "value": 0.0
            },
            {
                "name": "PERIOD",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "ACCUM_ON": {
        "type": "ACCUM_ON",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            },
            {
                "name": "RESET",
                "dataType": "BOOL"
            },
            {
                "name": "HOLD",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "TIME",
                "dataType": "INT"
            },
            {
                "name": "PREV OUT",
                "dataType": "INT"
            },
            {
                "name": "YEAR",
                "dataType": "INT"
            },
            {
                "name": "MONTH",
                "dataType": "INT"
            },
            {
                "name": "DAY",
                "dataType": "INT"
            },
            {
                "name": "HOUR",
                "dataType": "INT"
            },
            {
                "name": "MIN",
                "dataType": "INT"
            },
            {
                "name": "SEC",
                "dataType": "INT"
            }
        ],
        "parameters": [
            {
                "name": "RESET VAL",
                "dataType": "INT",
                "value": 0.0
            },
            {
                "name": "PERIOD",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "ACCUM_RE": {
        "type": "ACCUM_RE",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            },
            {
                "name": "RESET",
                "dataType": "BOOL"
            },
            {
                "name": "HOLD",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "INT"
            },
            {
                "name": "PREV OUT",
                "dataType": "INT"
            },
            {
                "name": "YEAR",
                "dataType": "INT"
            },
            {
                "name": "MONTH",
                "dataType": "INT"
            },
            {
                "name": "DAY",
                "dataType": "INT"
            },
            {
                "name": "HOUR",
                "dataType": "INT"
            },
            {
                "name": "MIN",
                "dataType": "INT"
            },
            {
                "name": "SEC",
                "dataType": "INT"
            }
        ],
        "parameters": [
            {
                "name": "RESET VAL",
                "dataType": "INT",
                "value": 0.0
            },
            {
                "name": "PERIOD",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "ACOSINE_F": {
        "type": "ACOSINE_F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "ACOSINE_I": {
        "type": "ACOSINE_I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "ADD_F": {
        "type": "ADD_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "ADD_I": {
        "type": "ADD_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "AHU_DIR": {
        "type": "AHU_DIR",
        "inputs": [
            {
                "name": "MV",
                "dataType": "REAL"
            },
            {
                "name": "WS",
                "dataType": "BOOL"
            },
            {
                "name": "STS",
                "dataType": "BOOL"
            },
            {
                "name": "MIN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "CVALVE",
                "dataType": "REAL"
            },
            {
                "name": "HVALVE",
                "dataType": "REAL"
            },
            {
                "name": "DAMPER",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "OFFSET",
                "dataType": "REAL",
                "value": 50.0
            }
        ]
    },
    "AHU_REV": {
        "type": "AHU_REV",
        "inputs": [
            {
                "name": "MV",
                "dataType": "REAL"
            },
            {
                "name": "WS",
                "dataType": "BOOL"
            },
            {
                "name": "STS",
                "dataType": "BOOL"
            },
            {
                "name": "MIN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "CVALVE",
                "dataType": "REAL"
            },
            {
                "name": "HVALVE",
                "dataType": "REAL"
            },
            {
                "name": "DAMPER",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "OFFSET",
                "dataType": "REAL",
                "value": 50.0
            }
        ]
    },
    "AIRFLOW": {
        "type": "AIRFLOW",
        "inputs": [
            {
                "name": "DELTAP",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "AIRFLOW",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "AREA",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "FLOW MULT",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "AND2": {
        "type": "AND2",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "AND3": {
        "type": "AND3",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "AND4": {
        "type": "AND4",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "AND5": {
        "type": "AND5",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            },
            {
                "name": "IN5",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "AND6": {
        "type": "AND6",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            },
            {
                "name": "IN5",
                "dataType": "BOOL"
            },
            {
                "name": "IN6",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "AND7": {
        "type": "AND7",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            },
            {
                "name": "IN5",
                "dataType": "BOOL"
            },
            {
                "name": "IN6",
                "dataType": "BOOL"
            },
            {
                "name": "IN7",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "AND8": {
        "type": "AND8",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            },
            {
                "name": "IN5",
                "dataType": "BOOL"
            },
            {
                "name": "IN6",
                "dataType": "BOOL"
            },
            {
                "name": "IN7",
                "dataType": "BOOL"
            },
            {
                "name": "IN8",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "AOUT": {
        "type": "AOUT",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            },
            {
                "name": "EN",
                "dataType": "BOOL"
            },
            {
                "name": "PRI",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "DEVICE",
                "dataType": "HEX",
                "value": 0.0
            },
            {
                "name": "OBJECT",
                "dataType": "HEX",
                "value": 0.0
            }
        ]
    },
    "AOUT_REL": {
        "type": "AOUT_REL",
        "inputs": [
            {
                "name": "EN",
                "dataType": "BOOL"
            },
            {
                "name": "PRI",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "DEVICE",
                "dataType": "HEX",
                "value": 0.0
            },
            {
                "name": "OBJECT",
                "dataType": "HEX",
                "value": 0.0
            }
        ]
    },
    "ASINE_F": {
        "type": "ASINE_F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "ASINE_I": {
        "type": "ASINE_I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "ATANGENT_F": {
        "type": "ATANGENT_F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "ATANGENT_I": {
        "type": "ATANGENT_I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "AVG": {
        "type": "AVG",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "AVGX": {
        "type": "AVGX",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            },
            {
                "name": "IN4",
                "dataType": "REAL"
            },
            {
                "name": "IN5",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "H LIMIT",
                "dataType": "REAL",
                "value": 10000000.0
            },
            {
                "name": "L LIMIT",
                "dataType": "REAL",
                "value": -100000000.0
            }
        ]
    },
    "B2F": {
        "type": "B2F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "B2I": {
        "type": "B2I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "INT"
            }
        ],
        "parameters": []
    },
    "BIN2DEC": {
        "type": "BIN2DEC",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "INT"
            }
        ],
        "parameters": []
    },
    "BIT_INFO1": {
        "type": "BIT_INFO1",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "BIT0",
                "dataType": "BOOL"
            },
            {
                "name": "BIT1",
                "dataType": "BOOL"
            },
            {
                "name": "BIT2",
                "dataType": "BOOL"
            },
            {
                "name": "BIT3",
                "dataType": "BOOL"
            },
            {
                "name": "BIT4",
                "dataType": "BOOL"
            },
            {
                "name": "BIT5",
                "dataType": "BOOL"
            },
            {
                "name": "BIT6",
                "dataType": "BOOL"
            },
            {
                "name": "BIT7",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "BIT_INFO2": {
        "type": "BIT_INFO2",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "BIT8",
                "dataType": "BOOL"
            },
            {
                "name": "BIT9",
                "dataType": "BOOL"
            },
            {
                "name": "BIT10",
                "dataType": "BOOL"
            },
            {
                "name": "BIT11",
                "dataType": "BOOL"
            },
            {
                "name": "BIT12",
                "dataType": "BOOL"
            },
            {
                "name": "BIT13",
                "dataType": "BOOL"
            },
            {
                "name": "BIT14",
                "dataType": "BOOL"
            },
            {
                "name": "BIT15",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "BIT_INFO3": {
        "type": "BIT_INFO3",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "BIT16",
                "dataType": "BOOL"
            },
            {
                "name": "BIT17",
                "dataType": "BOOL"
            },
            {
                "name": "BIT18",
                "dataType": "BOOL"
            },
            {
                "name": "BIT19",
                "dataType": "BOOL"
            },
            {
                "name": "BIT20",
                "dataType": "BOOL"
            },
            {
                "name": "BIT21",
                "dataType": "BOOL"
            },
            {
                "name": "BIT22",
                "dataType": "BOOL"
            },
            {
                "name": "BIT23",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "BLINK": {
        "type": "BLINK",
        "inputs": [
            {
                "name": "EN",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": [
            {
                "name": "TIME",
                "dataType": "INT",
                "value": 1.0
            }
        ]
    },
    "CLK": {
        "type": "CLK",
        "inputs": [],
        "outputs": [
            {
                "name": "YEAR",
                "dataType": "INT"
            },
            {
                "name": "MONTH",
                "dataType": "INT"
            },
            {
                "name": "DAY",
                "dataType": "INT"
            },
            {
                "name": "DW",
                "dataType": "INT"
            },
            {
                "name": "HOUR",
                "dataType": "INT"
            },
            {
                "name": "MIN",
                "dataType": "INT"
            },
            {
                "name": "SEC",
                "dataType": "INT"
            },
            {
                "name": "ALARM",
                "dataType": "INT"
            }
        ],
        "parameters": [
            {
                "name": "YEAR",
                "dataType": "INT",
                "value": 2025.0
            },
            {
                "name": "MONTH",
                "dataType": "INT",
                "value": 12.0
            },
            {
                "name": "DAY",
                "dataType": "INT",
                "value": 31.0
            },
            {
                "name": "HOUR",
                "dataType": "INT",
                "value": 23.0
            },
            {
                "name": "MIN",
                "dataType": "INT",
                "value": 59.0
            },
            {
                "name": "SEC",
                "dataType": "INT",
                "value": 59.0
            }
        ]
    },
    "CONSTANT": {
        "type": "CONSTANT",
        "inputs": [],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "COSINE_F": {
        "type": "COSINE_F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "SCALE",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "SCALE",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "COSINE_I": {
        "type": "COSINE_I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "SCALE",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "SCALE",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "COV": {
        "type": "COV",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "COV LIMIT",
                "dataType": "REAL",
                "value": 0.0
            }
        ]
    },
    "DEC2BIN": {
        "type": "DEC2BIN",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "BOOL"
            },
            {
                "name": "OUT2",
                "dataType": "BOOL"
            },
            {
                "name": "OUT3",
                "dataType": "BOOL"
            },
            {
                "name": "OUT4",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "DELAY": {
        "type": "DELAY",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "DT",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "DERIV": {
        "type": "DERIV",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "DIVIDE_F": {
        "type": "DIVIDE_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "DIVIDE_I": {
        "type": "DIVIDE_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "DOUT": {
        "type": "DOUT",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            },
            {
                "name": "EN",
                "dataType": "BOOL"
            },
            {
                "name": "PRI",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            }
        ],
        "parameters": [
            {
                "name": "DEVICE",
                "dataType": "HEX",
                "value": 0.0
            },
            {
                "name": "OBJECT",
                "dataType": "HEX",
                "value": 0.0
            }
        ]
    },
    "DOUT_REL": {
        "type": "DOUT_REL",
        "inputs": [
            {
                "name": "EN",
                "dataType": "BOOL"
            },
            {
                "name": "PRI",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            }
        ],
        "parameters": [
            {
                "name": "DEVICE",
                "dataType": "HEX",
                "value": 0.0
            },
            {
                "name": "OBJECT",
                "dataType": "HEX",
                "value": 0.0
            }
        ]
    },
    "ENT_CTRL": {
        "type": "ENT_CTRL",
        "inputs": [
            {
                "name": "OAT",
                "dataType": "REAL"
            },
            {
                "name": "ORH",
                "dataType": "REAL"
            },
            {
                "name": "RAT",
                "dataType": "REAL"
            },
            {
                "name": "RRH",
                "dataType": "REAL"
            },
            {
                "name": "EN",
                "dataType": "BOOL"
            },
            {
                "name": "WS",
                "dataType": "BOOL"
            },
            {
                "name": "SET",
                "dataType": "REAL"
            },
            {
                "name": "MIN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "ENT_OA",
                "dataType": "REAL"
            },
            {
                "name": "ENT_RA",
                "dataType": "REAL"
            },
            {
                "name": "STATE",
                "dataType": "BOOL"
            },
            {
                "name": "DAMP",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "OAT_HL",
                "dataType": "REAL",
                "value": 20.0
            },
            {
                "name": "OAT_LL",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "OARH_HL",
                "dataType": "REAL",
                "value": 50.0
            },
            {
                "name": "OARH_LL",
                "dataType": "REAL",
                "value": 0.0
            }
        ]
    },
    "EQ_B": {
        "type": "EQ_B",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "EQ_F": {
        "type": "EQ_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "EQ_I": {
        "type": "EQ_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "EXPO_F": {
        "type": "EXPO_F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "SCALE",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "SCALE",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "EXPO_I": {
        "type": "EXPO_I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "OUT",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "F2B": {
        "type": "F2B",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "F2I": {
        "type": "F2I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "INT"
            }
        ],
        "parameters": []
    },
    "FB_ERR1": {
        "type": "FB_ERR1",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "DBZ",
                "dataType": "BOOL"
            },
            {
                "name": "IN ERR",
                "dataType": "BOOL"
            },
            {
                "name": "PARA ERR",
                "dataType": "BOOL"
            },
            {
                "name": "LOG ERR",
                "dataType": "BOOL"
            },
            {
                "name": "OBJ ERR",
                "dataType": "BOOL"
            },
            {
                "name": "DEV ERR",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "FB_ERR2": {
        "type": "FB_ERR2",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "IN1 ERR",
                "dataType": "BOOL"
            },
            {
                "name": "IN2 ERR",
                "dataType": "BOOL"
            },
            {
                "name": "IN3 ERR",
                "dataType": "BOOL"
            },
            {
                "name": "IN4 ERR",
                "dataType": "BOOL"
            },
            {
                "name": "IN5 ERR",
                "dataType": "BOOL"
            },
            {
                "name": "IN6 ERR",
                "dataType": "BOOL"
            },
            {
                "name": "IN7 ERR",
                "dataType": "BOOL"
            },
            {
                "name": "IN8 ERR",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "F_TRIG": {
        "type": "F_TRIG",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "GE_B": {
        "type": "GE_B",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "GE_F": {
        "type": "GE_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "GE_I": {
        "type": "GE_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "GT_B": {
        "type": "GT_B",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "GT_F": {
        "type": "GT_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "GT_I": {
        "type": "GT_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "HL_LIMIT": {
        "type": "HL_LIMIT",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "H LMT",
                "dataType": "REAL",
                "value": 100.0
            },
            {
                "name": "L LMT",
                "dataType": "REAL",
                "value": 0.0
            }
        ]
    },
    "I2B": {
        "type": "I2B",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "I2F": {
        "type": "I2F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "INPUT": {
        "type": "INPUT",
        "inputs": [],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "INTEG": {
        "type": "INTEG",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            },
            {
                "name": "RESET",
                "dataType": "BOOL"
            },
            {
                "name": "HOLD",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "RESET VAL",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "HIGH LMT ENB",
                "dataType": "BOOL",
                "value": 0.0
            },
            {
                "name": "HIGH LMT",
                "dataType": "REAL",
                "value": 100000000.0
            },
            {
                "name": "LOW LMT ENB",
                "dataType": "BOOL",
                "value": 0.0
            },
            {
                "name": "LOW LMT",
                "dataType": "REAL",
                "value": -100000000.0
            }
        ]
    },
    "LAG": {
        "type": "LAG",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "LAG TIME",
                "dataType": "REAL",
                "value": 10.0
            }
        ]
    },
    "LAGRANGE": {
        "type": "LAGRANGE",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "X0",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "Y0",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "X1",
                "dataType": "REAL",
                "value": 20.0
            },
            {
                "name": "Y1",
                "dataType": "REAL",
                "value": 20.0
            },
            {
                "name": "X2",
                "dataType": "REAL",
                "value": 40.0
            },
            {
                "name": "Y2",
                "dataType": "REAL",
                "value": 40.0
            },
            {
                "name": "X3",
                "dataType": "REAL",
                "value": 60.0
            },
            {
                "name": "Y3",
                "dataType": "REAL",
                "value": 60.0
            },
            {
                "name": "X4",
                "dataType": "REAL",
                "value": 80.0
            },
            {
                "name": "Y4",
                "dataType": "REAL",
                "value": 80.0
            },
            {
                "name": "X5",
                "dataType": "REAL",
                "value": 100.0
            },
            {
                "name": "Y5",
                "dataType": "REAL",
                "value": 100.0
            }
        ]
    },
    "LDLG": {
        "type": "LDLG",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "LEAD TIME",
                "dataType": "REAL",
                "value": 10.0
            },
            {
                "name": "LAG TIME",
                "dataType": "REAL",
                "value": 10.0
            }
        ]
    },
    "LEAD": {
        "type": "LEAD",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "LEAD TIME",
                "dataType": "REAL",
                "value": 10.0
            }
        ]
    },
    "LE_B": {
        "type": "LE_B",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "LE_F": {
        "type": "LE_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "LE_I": {
        "type": "LE_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "LINEAR": {
        "type": "LINEAR",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "X0",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "Y0",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "X1",
                "dataType": "REAL",
                "value": 20.0
            },
            {
                "name": "Y1",
                "dataType": "REAL",
                "value": 20.0
            },
            {
                "name": "X2",
                "dataType": "REAL",
                "value": 40.0
            },
            {
                "name": "Y2",
                "dataType": "REAL",
                "value": 40.0
            },
            {
                "name": "X3",
                "dataType": "REAL",
                "value": 60.0
            },
            {
                "name": "Y3",
                "dataType": "REAL",
                "value": 60.0
            },
            {
                "name": "X4",
                "dataType": "REAL",
                "value": 80.0
            },
            {
                "name": "Y4",
                "dataType": "REAL",
                "value": 80.0
            },
            {
                "name": "X5",
                "dataType": "REAL",
                "value": 100.0
            },
            {
                "name": "Y5",
                "dataType": "REAL",
                "value": 100.0
            }
        ]
    },
    "LOG10_F": {
        "type": "LOG10_F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "SCALE",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "SCALE",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "LOG10_I": {
        "type": "LOG10_I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "SCALE",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "SCALE",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "LOGE_F": {
        "type": "LOGE_F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "SCALE",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "SCALE",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "LOGE_I": {
        "type": "LOGE_I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "SCALE",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "SCALE",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "LT_B": {
        "type": "LT_B",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "LT_F": {
        "type": "LT_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "LT_I": {
        "type": "LT_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "MAX2_F": {
        "type": "MAX2_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "MAX",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "MAX2_I": {
        "type": "MAX2_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "MAX",
                "dataType": "INT"
            }
        ],
        "parameters": []
    },
    "MAX3_F": {
        "type": "MAX3_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "MAX",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "MAX3_I": {
        "type": "MAX3_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "MAX",
                "dataType": "INT"
            }
        ],
        "parameters": []
    },
    "MAX4_F": {
        "type": "MAX4_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            },
            {
                "name": "IN4",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "MAX",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "MAX4_I": {
        "type": "MAX4_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            },
            {
                "name": "IN4",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "MAX",
                "dataType": "INT"
            }
        ],
        "parameters": []
    },
    "MAX5_F": {
        "type": "MAX5_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            },
            {
                "name": "IN4",
                "dataType": "REAL"
            },
            {
                "name": "IN5",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "MAX",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "MAX5_I": {
        "type": "MAX5_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            },
            {
                "name": "IN4",
                "dataType": "INT"
            },
            {
                "name": "IN5",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "MAX",
                "dataType": "INT"
            }
        ],
        "parameters": []
    },
    "MAX6_F": {
        "type": "MAX6_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            },
            {
                "name": "IN4",
                "dataType": "REAL"
            },
            {
                "name": "IN5",
                "dataType": "REAL"
            },
            {
                "name": "IN6",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "MAX",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "MAX6_I": {
        "type": "MAX6_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            },
            {
                "name": "IN4",
                "dataType": "INT"
            },
            {
                "name": "IN5",
                "dataType": "INT"
            },
            {
                "name": "IN6",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "MAX",
                "dataType": "INT"
            }
        ],
        "parameters": []
    },
    "MAX7_F": {
        "type": "MAX7_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            },
            {
                "name": "IN4",
                "dataType": "REAL"
            },
            {
                "name": "IN5",
                "dataType": "REAL"
            },
            {
                "name": "IN6",
                "dataType": "REAL"
            },
            {
                "name": "IN7",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "MAX",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "MAX7_I": {
        "type": "MAX7_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            },
            {
                "name": "IN4",
                "dataType": "INT"
            },
            {
                "name": "IN5",
                "dataType": "INT"
            },
            {
                "name": "IN6",
                "dataType": "INT"
            },
            {
                "name": "IN7",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "MAX",
                "dataType": "INT"
            }
        ],
        "parameters": []
    },
    "MAX8_F": {
        "type": "MAX8_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            },
            {
                "name": "IN4",
                "dataType": "REAL"
            },
            {
                "name": "IN5",
                "dataType": "REAL"
            },
            {
                "name": "IN6",
                "dataType": "REAL"
            },
            {
                "name": "IN7",
                "dataType": "REAL"
            },
            {
                "name": "IN8",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "MAX",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "MAX8_I": {
        "type": "MAX8_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            },
            {
                "name": "IN4",
                "dataType": "INT"
            },
            {
                "name": "IN5",
                "dataType": "INT"
            },
            {
                "name": "IN6",
                "dataType": "INT"
            },
            {
                "name": "IN7",
                "dataType": "INT"
            },
            {
                "name": "IN8",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "MAX",
                "dataType": "INT"
            }
        ],
        "parameters": []
    },
    "MIN2_F": {
        "type": "MIN2_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "MIN",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "MIN2_I": {
        "type": "MIN2_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "MIN",
                "dataType": "INT"
            }
        ],
        "parameters": []
    },
    "MIN3_F": {
        "type": "MIN3_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "MIN",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "MIN3_I": {
        "type": "MIN3_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "MIN",
                "dataType": "INT"
            }
        ],
        "parameters": []
    },
    "MIN4_F": {
        "type": "MIN4_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            },
            {
                "name": "IN4",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "MIN",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "MIN4_I": {
        "type": "MIN4_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            },
            {
                "name": "IN4",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "MIN",
                "dataType": "INT"
            }
        ],
        "parameters": []
    },
    "MIN5_F": {
        "type": "MIN5_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            },
            {
                "name": "IN4",
                "dataType": "REAL"
            },
            {
                "name": "IN5",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "MIN",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "MIN5_I": {
        "type": "MIN5_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            },
            {
                "name": "IN4",
                "dataType": "INT"
            },
            {
                "name": "IN5",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "MIN",
                "dataType": "INT"
            }
        ],
        "parameters": []
    },
    "MIN6_F": {
        "type": "MIN6_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            },
            {
                "name": "IN4",
                "dataType": "REAL"
            },
            {
                "name": "IN5",
                "dataType": "REAL"
            },
            {
                "name": "IN6",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "MIN",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "MIN6_I": {
        "type": "MIN6_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            },
            {
                "name": "IN4",
                "dataType": "INT"
            },
            {
                "name": "IN5",
                "dataType": "INT"
            },
            {
                "name": "IN6",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "MIN",
                "dataType": "INT"
            }
        ],
        "parameters": []
    },
    "MIN7_F": {
        "type": "MIN7_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            },
            {
                "name": "IN4",
                "dataType": "REAL"
            },
            {
                "name": "IN5",
                "dataType": "REAL"
            },
            {
                "name": "IN6",
                "dataType": "REAL"
            },
            {
                "name": "IN7",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "MIN",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "MIN7_I": {
        "type": "MIN7_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            },
            {
                "name": "IN4",
                "dataType": "INT"
            },
            {
                "name": "IN5",
                "dataType": "INT"
            },
            {
                "name": "IN6",
                "dataType": "INT"
            },
            {
                "name": "IN7",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "MIN",
                "dataType": "INT"
            }
        ],
        "parameters": []
    },
    "MIN8_F": {
        "type": "MIN8_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            },
            {
                "name": "IN4",
                "dataType": "REAL"
            },
            {
                "name": "IN5",
                "dataType": "REAL"
            },
            {
                "name": "IN6",
                "dataType": "REAL"
            },
            {
                "name": "IN7",
                "dataType": "REAL"
            },
            {
                "name": "IN8",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "MIN",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "MIN8_I": {
        "type": "MIN8_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            },
            {
                "name": "IN4",
                "dataType": "INT"
            },
            {
                "name": "IN5",
                "dataType": "INT"
            },
            {
                "name": "IN6",
                "dataType": "INT"
            },
            {
                "name": "IN7",
                "dataType": "INT"
            },
            {
                "name": "IN8",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "MIN",
                "dataType": "INT"
            }
        ],
        "parameters": []
    },
    "MOD_I": {
        "type": "MOD_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "INT"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "MOUT": {
        "type": "MOUT",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            },
            {
                "name": "EN",
                "dataType": "BOOL"
            },
            {
                "name": "PRI",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "INT"
            }
        ],
        "parameters": [
            {
                "name": "DEVICE",
                "dataType": "HEX",
                "value": 0.0
            },
            {
                "name": "OBJECT",
                "dataType": "HEX",
                "value": 0.0
            }
        ]
    },
    "MOUT_REL": {
        "type": "MOUT_REL",
        "inputs": [
            {
                "name": "EN",
                "dataType": "BOOL"
            },
            {
                "name": "PRI",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "INT"
            }
        ],
        "parameters": [
            {
                "name": "DEVICE",
                "dataType": "HEX",
                "value": 0.0
            },
            {
                "name": "OBJECT",
                "dataType": "HEX",
                "value": 0.0
            }
        ]
    },
    "MOVAVG": {
        "type": "MOVAVG",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "NUM",
                "dataType": "INT",
                "value": 5.0
            }
        ]
    },
    "MSR_TIMER": {
        "type": "MSR_TIMER",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            },
            {
                "name": "ET",
                "dataType": "INT"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "TIME",
                "dataType": "INT",
                "value": 1.0
            }
        ]
    },
    "MSV_COMP": {
        "type": "MSV_COMP",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            },
            {
                "name": "IN4",
                "dataType": "INT"
            },
            {
                "name": "IN5",
                "dataType": "INT"
            },
            {
                "name": "IN6",
                "dataType": "INT"
            },
            {
                "name": "IN7",
                "dataType": "INT"
            },
            {
                "name": "COMP",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "MS_TIMER": {
        "type": "MS_TIMER",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            },
            {
                "name": "ET",
                "dataType": "INT"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "TIME",
                "dataType": "INT",
                "value": 1.0
            }
        ]
    },
    "MUL_F": {
        "type": "MUL_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "MUL_I": {
        "type": "MUL_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "NEQ_B": {
        "type": "NEQ_B",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "NEQ_F": {
        "type": "NEQ_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "NEQ_I": {
        "type": "NEQ_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "NOT1": {
        "type": "NOT1",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "NOT2": {
        "type": "NOT2",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "BOOL"
            },
            {
                "name": "OUT2",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "NOT3": {
        "type": "NOT3",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "BOOL"
            },
            {
                "name": "OUT2",
                "dataType": "BOOL"
            },
            {
                "name": "OUT3",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "NOT4": {
        "type": "NOT4",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "BOOL"
            },
            {
                "name": "OUT2",
                "dataType": "BOOL"
            },
            {
                "name": "OUT3",
                "dataType": "BOOL"
            },
            {
                "name": "OUT4",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "NOT5": {
        "type": "NOT5",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            },
            {
                "name": "IN5",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "BOOL"
            },
            {
                "name": "OUT2",
                "dataType": "BOOL"
            },
            {
                "name": "OUT3",
                "dataType": "BOOL"
            },
            {
                "name": "OUT4",
                "dataType": "BOOL"
            },
            {
                "name": "OUT5",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "NOT6": {
        "type": "NOT6",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            },
            {
                "name": "IN5",
                "dataType": "BOOL"
            },
            {
                "name": "IN6",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "BOOL"
            },
            {
                "name": "OUT2",
                "dataType": "BOOL"
            },
            {
                "name": "OUT3",
                "dataType": "BOOL"
            },
            {
                "name": "OUT4",
                "dataType": "BOOL"
            },
            {
                "name": "OUT5",
                "dataType": "BOOL"
            },
            {
                "name": "OUT6",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "NOT7": {
        "type": "NOT7",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            },
            {
                "name": "IN5",
                "dataType": "BOOL"
            },
            {
                "name": "IN6",
                "dataType": "BOOL"
            },
            {
                "name": "IN7",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "BOOL"
            },
            {
                "name": "OUT2",
                "dataType": "BOOL"
            },
            {
                "name": "OUT3",
                "dataType": "BOOL"
            },
            {
                "name": "OUT4",
                "dataType": "BOOL"
            },
            {
                "name": "OUT5",
                "dataType": "BOOL"
            },
            {
                "name": "OUT6",
                "dataType": "BOOL"
            },
            {
                "name": "OUT7",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "NOT8": {
        "type": "NOT8",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            },
            {
                "name": "IN5",
                "dataType": "BOOL"
            },
            {
                "name": "IN6",
                "dataType": "BOOL"
            },
            {
                "name": "IN7",
                "dataType": "BOOL"
            },
            {
                "name": "IN8",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "BOOL"
            },
            {
                "name": "OUT2",
                "dataType": "BOOL"
            },
            {
                "name": "OUT3",
                "dataType": "BOOL"
            },
            {
                "name": "OUT4",
                "dataType": "BOOL"
            },
            {
                "name": "OUT5",
                "dataType": "BOOL"
            },
            {
                "name": "OUT6",
                "dataType": "BOOL"
            },
            {
                "name": "OUT7",
                "dataType": "BOOL"
            },
            {
                "name": "OUT8",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "OFF_DELAY": {
        "type": "OFF_DELAY",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            },
            {
                "name": "ET",
                "dataType": "INT"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "TIME",
                "dataType": "INT",
                "value": 1.0
            }
        ]
    },
    "ONOFF1": {
        "type": "ONOFF1",
        "inputs": [
            {
                "name": "PV",
                "dataType": "REAL"
            },
            {
                "name": "SP",
                "dataType": "REAL"
            },
            {
                "name": "DIR/REV",
                "dataType": "BOOL"
            },
            {
                "name": "HYST",
                "dataType": "REAL"
            },
            {
                "name": "HOLD",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "MV",
                "dataType": "BOOL"
            },
            {
                "name": "ERR",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "MODE",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "ONOFF2": {
        "type": "ONOFF2",
        "inputs": [
            {
                "name": "PV",
                "dataType": "REAL"
            },
            {
                "name": "SP1",
                "dataType": "REAL"
            },
            {
                "name": "SP2",
                "dataType": "REAL"
            },
            {
                "name": "DIR/REV",
                "dataType": "BOOL"
            },
            {
                "name": "HYST",
                "dataType": "REAL"
            },
            {
                "name": "HOLD",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "MV1",
                "dataType": "BOOL"
            },
            {
                "name": "ERR1",
                "dataType": "REAL"
            },
            {
                "name": "MV2",
                "dataType": "BOOL"
            },
            {
                "name": "ERR2",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "MODE",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "ON_DELAY": {
        "type": "ON_DELAY",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            },
            {
                "name": "ET",
                "dataType": "INT"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "TIME",
                "dataType": "INT",
                "value": 1.0
            }
        ]
    },
    "OR2": {
        "type": "OR2",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "OR3": {
        "type": "OR3",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "OR4": {
        "type": "OR4",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "OR5": {
        "type": "OR5",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            },
            {
                "name": "IN5",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "OR6": {
        "type": "OR6",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            },
            {
                "name": "IN5",
                "dataType": "BOOL"
            },
            {
                "name": "IN6",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "OR7": {
        "type": "OR7",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            },
            {
                "name": "IN5",
                "dataType": "BOOL"
            },
            {
                "name": "IN6",
                "dataType": "BOOL"
            },
            {
                "name": "IN7",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "OR8": {
        "type": "OR8",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            },
            {
                "name": "IN5",
                "dataType": "BOOL"
            },
            {
                "name": "IN6",
                "dataType": "BOOL"
            },
            {
                "name": "IN7",
                "dataType": "BOOL"
            },
            {
                "name": "IN8",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "OSEL2_B": {
        "type": "OSEL2_B",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            },
            {
                "name": "SEL",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "BOOL"
            },
            {
                "name": "OUT2",
                "dataType": "BOOL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "OPTION",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "OSEL2_F": {
        "type": "OSEL2_F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            },
            {
                "name": "SEL",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "REAL"
            },
            {
                "name": "OUT2",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "OPTION",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "OSEL2_I": {
        "type": "OSEL2_I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            },
            {
                "name": "SEL",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "INT"
            },
            {
                "name": "OUT2",
                "dataType": "INT"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "OPTION",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "OSEL3_B": {
        "type": "OSEL3_B",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "BOOL"
            },
            {
                "name": "OUT2",
                "dataType": "BOOL"
            },
            {
                "name": "OUT3",
                "dataType": "BOOL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "OPTION",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "OSEL3_F": {
        "type": "OSEL3_F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "REAL"
            },
            {
                "name": "OUT2",
                "dataType": "REAL"
            },
            {
                "name": "OUT3",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "OPTION",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "OSEL3_I": {
        "type": "OSEL3_I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "INT"
            },
            {
                "name": "OUT2",
                "dataType": "INT"
            },
            {
                "name": "OUT3",
                "dataType": "INT"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "OPTION",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "OSEL4_B": {
        "type": "OSEL4_B",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "BOOL"
            },
            {
                "name": "OUT2",
                "dataType": "BOOL"
            },
            {
                "name": "OUT3",
                "dataType": "BOOL"
            },
            {
                "name": "OUT4",
                "dataType": "BOOL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "OPTION",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "OSEL4_F": {
        "type": "OSEL4_F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "REAL"
            },
            {
                "name": "OUT2",
                "dataType": "REAL"
            },
            {
                "name": "OUT3",
                "dataType": "REAL"
            },
            {
                "name": "OUT4",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "OPTION",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "OSEL4_I": {
        "type": "OSEL4_I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "INT"
            },
            {
                "name": "OUT2",
                "dataType": "INT"
            },
            {
                "name": "OUT3",
                "dataType": "INT"
            },
            {
                "name": "OUT4",
                "dataType": "INT"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "OPTION",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "OSEL5_B": {
        "type": "OSEL5_B",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "BOOL"
            },
            {
                "name": "OUT2",
                "dataType": "BOOL"
            },
            {
                "name": "OUT3",
                "dataType": "BOOL"
            },
            {
                "name": "OUT4",
                "dataType": "BOOL"
            },
            {
                "name": "OUT5",
                "dataType": "BOOL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "OPTION",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "OSEL5_F": {
        "type": "OSEL5_F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "REAL"
            },
            {
                "name": "OUT2",
                "dataType": "REAL"
            },
            {
                "name": "OUT3",
                "dataType": "REAL"
            },
            {
                "name": "OUT4",
                "dataType": "REAL"
            },
            {
                "name": "OUT5",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "OPTION",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "OSEL5_I": {
        "type": "OSEL5_I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "INT"
            },
            {
                "name": "OUT2",
                "dataType": "INT"
            },
            {
                "name": "OUT3",
                "dataType": "INT"
            },
            {
                "name": "OUT4",
                "dataType": "INT"
            },
            {
                "name": "OUT5",
                "dataType": "INT"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "OPTION",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "OSEL6_B": {
        "type": "OSEL6_B",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "BOOL"
            },
            {
                "name": "OUT2",
                "dataType": "BOOL"
            },
            {
                "name": "OUT3",
                "dataType": "BOOL"
            },
            {
                "name": "OUT4",
                "dataType": "BOOL"
            },
            {
                "name": "OUT5",
                "dataType": "BOOL"
            },
            {
                "name": "OUT6",
                "dataType": "BOOL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "OPTION",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "OSEL6_F": {
        "type": "OSEL6_F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "REAL"
            },
            {
                "name": "OUT2",
                "dataType": "REAL"
            },
            {
                "name": "OUT3",
                "dataType": "REAL"
            },
            {
                "name": "OUT4",
                "dataType": "REAL"
            },
            {
                "name": "OUT5",
                "dataType": "REAL"
            },
            {
                "name": "OUT6",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "OPTION",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "OSEL6_I": {
        "type": "OSEL6_I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "INT"
            },
            {
                "name": "OUT2",
                "dataType": "INT"
            },
            {
                "name": "OUT3",
                "dataType": "INT"
            },
            {
                "name": "OUT4",
                "dataType": "INT"
            },
            {
                "name": "OUT5",
                "dataType": "INT"
            },
            {
                "name": "OUT6",
                "dataType": "INT"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "OPTION",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "OSEL7_B": {
        "type": "OSEL7_B",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "BOOL"
            },
            {
                "name": "OUT2",
                "dataType": "BOOL"
            },
            {
                "name": "OUT3",
                "dataType": "BOOL"
            },
            {
                "name": "OUT4",
                "dataType": "BOOL"
            },
            {
                "name": "OUT5",
                "dataType": "BOOL"
            },
            {
                "name": "OUT6",
                "dataType": "BOOL"
            },
            {
                "name": "OUT7",
                "dataType": "BOOL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "OPTION",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "OSEL7_F": {
        "type": "OSEL7_F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "REAL"
            },
            {
                "name": "OUT2",
                "dataType": "REAL"
            },
            {
                "name": "OUT3",
                "dataType": "REAL"
            },
            {
                "name": "OUT4",
                "dataType": "REAL"
            },
            {
                "name": "OUT5",
                "dataType": "REAL"
            },
            {
                "name": "OUT6",
                "dataType": "REAL"
            },
            {
                "name": "OUT7",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "OPTION",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "OSEL7_I": {
        "type": "OSEL7_I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT1",
                "dataType": "INT"
            },
            {
                "name": "OUT2",
                "dataType": "INT"
            },
            {
                "name": "OUT3",
                "dataType": "INT"
            },
            {
                "name": "OUT4",
                "dataType": "INT"
            },
            {
                "name": "OUT5",
                "dataType": "INT"
            },
            {
                "name": "OUT6",
                "dataType": "INT"
            },
            {
                "name": "OUT7",
                "dataType": "INT"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "OPTION",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "OUTPUT": {
        "type": "OUTPUT",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            },
            {
                "name": "EN",
                "dataType": "BOOL"
            },
            {
                "name": "PRI",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            }
        ],
        "parameters": [
            {
                "name": "DEVICE",
                "dataType": "INT",
                "value": 0.0
            },
            {
                "name": "OBJECT",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "OUTPUT_REL": {
        "type": "OUTPUT_REL",
        "inputs": [
            {
                "name": "EN",
                "dataType": "BOOL"
            },
            {
                "name": "PRI",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            }
        ],
        "parameters": [
            {
                "name": "DEVICE",
                "dataType": "INT",
                "value": 0.0
            },
            {
                "name": "OBJECT",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "PID1": {
        "type": "PID1",
        "inputs": [
            {
                "name": "PV",
                "dataType": "REAL"
            },
            {
                "name": "SP",
                "dataType": "REAL"
            },
            {
                "name": "OFFSET",
                "dataType": "REAL"
            },
            {
                "name": "DIR/REV",
                "dataType": "BOOL"
            },
            {
                "name": "CLR",
                "dataType": "BOOL"
            },
            {
                "name": "HOLD",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "MV",
                "dataType": "REAL"
            },
            {
                "name": "ERR",
                "dataType": "REAL"
            },
            {
                "name": "P",
                "dataType": "REAL"
            },
            {
                "name": "I",
                "dataType": "REAL"
            },
            {
                "name": "D",
                "dataType": "REAL"
            },
            {
                "name": "PI",
                "dataType": "REAL"
            },
            {
                "name": "PID",
                "dataType": "REAL"
            },
            {
                "name": "FBERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "PB",
                "dataType": "REAL",
                "value": 10.0
            },
            {
                "name": "TI",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "TD",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "MV H LMT",
                "dataType": "REAL",
                "value": 100.0
            },
            {
                "name": "MV L LMT",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "ERR DB",
                "dataType": "REAL",
                "value": 0.1
            }
        ]
    },
    "PID2": {
        "type": "PID2",
        "inputs": [
            {
                "name": "PV",
                "dataType": "REAL"
            },
            {
                "name": "SP",
                "dataType": "REAL"
            },
            {
                "name": "OFFSET",
                "dataType": "REAL"
            },
            {
                "name": "PB",
                "dataType": "REAL"
            },
            {
                "name": "TI",
                "dataType": "REAL"
            },
            {
                "name": "TD",
                "dataType": "REAL"
            },
            {
                "name": "DIR/REV",
                "dataType": "BOOL"
            },
            {
                "name": "CLR",
                "dataType": "BOOL"
            },
            {
                "name": "HOLD",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "MV",
                "dataType": "REAL"
            },
            {
                "name": "ERR",
                "dataType": "REAL"
            },
            {
                "name": "P",
                "dataType": "REAL"
            },
            {
                "name": "I",
                "dataType": "REAL"
            },
            {
                "name": "D",
                "dataType": "REAL"
            },
            {
                "name": "PID",
                "dataType": "REAL"
            },
            {
                "name": "PI",
                "dataType": "REAL"
            },
            {
                "name": "FBERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "MV H LMT",
                "dataType": "REAL",
                "value": 100.0
            },
            {
                "name": "MV L LMT",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "ERR DB",
                "dataType": "REAL",
                "value": 0.1
            }
        ]
    },
    "PID3": {
        "type": "PID3",
        "inputs": [
            {
                "name": "PV",
                "dataType": "REAL"
            },
            {
                "name": "SP",
                "dataType": "REAL"
            },
            {
                "name": "DIR/REV",
                "dataType": "BOOL"
            },
            {
                "name": "CLR",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "MV",
                "dataType": "REAL"
            },
            {
                "name": "ERR",
                "dataType": "REAL"
            },
            {
                "name": "P",
                "dataType": "REAL"
            },
            {
                "name": "I",
                "dataType": "REAL"
            },
            {
                "name": "D",
                "dataType": "REAL"
            },
            {
                "name": "PID",
                "dataType": "REAL"
            },
            {
                "name": "PI",
                "dataType": "REAL"
            },
            {
                "name": "FBERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "PB",
                "dataType": "REAL",
                "value": 10.0
            },
            {
                "name": "TI",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "TD",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "MV H LMT",
                "dataType": "REAL",
                "value": 100.0
            },
            {
                "name": "MV L LMT",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "ERR DB",
                "dataType": "REAL",
                "value": 0.1
            },
            {
                "name": "OFFSET",
                "dataType": "INT",
                "value": 50.0
            }
        ]
    },
    "PID_AHU": {
        "type": "PID_AHU",
        "inputs": [
            {
                "name": "PV",
                "dataType": "REAL"
            },
            {
                "name": "SP",
                "dataType": "REAL"
            },
            {
                "name": "WS",
                "dataType": "BOOL"
            },
            {
                "name": "CLR",
                "dataType": "BOOL"
            },
            {
                "name": "HOLD",
                "dataType": "BOOL"
            },
            {
                "name": "STS",
                "dataType": "BOOL"
            },
            {
                "name": "MNDM",
                "dataType": "REAL"
            },
            {
                "name": "AF",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "MV",
                "dataType": "REAL"
            },
            {
                "name": "ERR",
                "dataType": "REAL"
            },
            {
                "name": "P",
                "dataType": "REAL"
            },
            {
                "name": "I",
                "dataType": "REAL"
            },
            {
                "name": "D",
                "dataType": "REAL"
            },
            {
                "name": "PI",
                "dataType": "REAL"
            },
            {
                "name": "PID",
                "dataType": "REAL"
            },
            {
                "name": "CV",
                "dataType": "REAL"
            },
            {
                "name": "HV",
                "dataType": "REAL"
            },
            {
                "name": "DAMP",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "PB",
                "dataType": "REAL",
                "value": 4.0
            },
            {
                "name": "TI",
                "dataType": "REAL",
                "value": 1000000.0
            },
            {
                "name": "TD",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "MV H LMT",
                "dataType": "REAL",
                "value": 100.0
            },
            {
                "name": "MV L LMT",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "ERR DB",
                "dataType": "REAL",
                "value": 0.01
            }
        ]
    },
    "POLY_F": {
        "type": "POLY_F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "K0",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K1",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "K2",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K3",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K4",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K5",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K6",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K7",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K8",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K9",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K10",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K11",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K12",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K13",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K14",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K15",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K16",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K17",
                "dataType": "REAL",
                "value": 0.0
            }
        ]
    },
    "POLY_I": {
        "type": "POLY_I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "K0",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K1",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K2",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K3",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K4",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K5",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K6",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K7",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K8",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K9",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K10",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K11",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K12",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K13",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K14",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K15",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K16",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "K17",
                "dataType": "REAL",
                "value": 0.0
            }
        ]
    },
    "POWER_F": {
        "type": "POWER_F",
        "inputs": [
            {
                "name": "BASE",
                "dataType": "REAL"
            },
            {
                "name": "EXPO",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "POWER_I": {
        "type": "POWER_I",
        "inputs": [
            {
                "name": "BASE",
                "dataType": "INT"
            },
            {
                "name": "EXPO",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "PSYCH": {
        "type": "PSYCH",
        "inputs": [
            {
                "name": "TEMP",
                "dataType": "REAL"
            },
            {
                "name": "RH",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "ENT",
                "dataType": "REAL"
            },
            {
                "name": "DEW TEMP",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "QUANT": {
        "type": "QUANT",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "POS",
                "dataType": "INT",
                "value": 0.0
            }
        ]
    },
    "R_BISTABLE": {
        "type": "R_BISTABLE",
        "inputs": [
            {
                "name": "SET",
                "dataType": "BOOL"
            },
            {
                "name": "RESET",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "R_LIMIT": {
        "type": "R_LIMIT",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "R LMT",
                "dataType": "REAL",
                "value": 10.0
            }
        ]
    },
    "R_TRIG": {
        "type": "R_TRIG",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "SEL2_B": {
        "type": "SEL2_B",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "SEL",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "SEL2_F": {
        "type": "SEL2_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "SEL",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "SEL2_I": {
        "type": "SEL2_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "SEL",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "INT"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "SEL3_B": {
        "type": "SEL3_B",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "SEL3_F": {
        "type": "SEL3_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "SEL3_I": {
        "type": "SEL3_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "INT"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "SEL4_B": {
        "type": "SEL4_B",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "SEL4_F": {
        "type": "SEL4_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            },
            {
                "name": "IN4",
                "dataType": "REAL"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "SEL4_I": {
        "type": "SEL4_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            },
            {
                "name": "IN4",
                "dataType": "INT"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "INT"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "SEL5_B": {
        "type": "SEL5_B",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            },
            {
                "name": "IN5",
                "dataType": "BOOL"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "SEL5_F": {
        "type": "SEL5_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            },
            {
                "name": "IN4",
                "dataType": "REAL"
            },
            {
                "name": "IN5",
                "dataType": "REAL"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "SEL5_I": {
        "type": "SEL5_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            },
            {
                "name": "IN4",
                "dataType": "INT"
            },
            {
                "name": "IN5",
                "dataType": "INT"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "INT"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "SEL6_B": {
        "type": "SEL6_B",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            },
            {
                "name": "IN5",
                "dataType": "BOOL"
            },
            {
                "name": "IN6",
                "dataType": "BOOL"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "SEL6_F": {
        "type": "SEL6_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            },
            {
                "name": "IN4",
                "dataType": "REAL"
            },
            {
                "name": "IN5",
                "dataType": "REAL"
            },
            {
                "name": "IN6",
                "dataType": "REAL"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "SEL6_I": {
        "type": "SEL6_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            },
            {
                "name": "IN4",
                "dataType": "INT"
            },
            {
                "name": "IN5",
                "dataType": "INT"
            },
            {
                "name": "IN6",
                "dataType": "INT"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "INT"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "SEL7_B": {
        "type": "SEL7_B",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            },
            {
                "name": "IN5",
                "dataType": "BOOL"
            },
            {
                "name": "IN6",
                "dataType": "BOOL"
            },
            {
                "name": "IN7",
                "dataType": "BOOL"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "SEL7_F": {
        "type": "SEL7_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            },
            {
                "name": "IN4",
                "dataType": "REAL"
            },
            {
                "name": "IN5",
                "dataType": "REAL"
            },
            {
                "name": "IN6",
                "dataType": "REAL"
            },
            {
                "name": "IN7",
                "dataType": "REAL"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "SEL7_I": {
        "type": "SEL7_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            },
            {
                "name": "IN4",
                "dataType": "INT"
            },
            {
                "name": "IN5",
                "dataType": "INT"
            },
            {
                "name": "IN6",
                "dataType": "INT"
            },
            {
                "name": "IN7",
                "dataType": "INT"
            },
            {
                "name": "SEL",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "INT"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "SINE_CURVE": {
        "type": "SINE_CURVE",
        "inputs": [],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "PERIOD",
                "dataType": "REAL",
                "value": 100.0
            },
            {
                "name": "SCALE",
                "dataType": "REAL",
                "value": 50.0
            },
            {
                "name": "OFFSET",
                "dataType": "REAL",
                "value": 50.0
            }
        ]
    },
    "SINE_F": {
        "type": "SINE_F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "SCALE",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "SCALE",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "SINE_I": {
        "type": "SINE_I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "SCALE",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "SCALE",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "SPAN": {
        "type": "SPAN",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "X1",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "X2",
                "dataType": "REAL",
                "value": 100.0
            },
            {
                "name": "Y1",
                "dataType": "REAL",
                "value": 0.0
            },
            {
                "name": "Y2",
                "dataType": "REAL",
                "value": 100.0
            }
        ]
    },
    "SPAN2": {
        "type": "SPAN2",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            },
            {
                "name": "X1",
                "dataType": "REAL"
            },
            {
                "name": "X2",
                "dataType": "REAL"
            },
            {
                "name": "Y1",
                "dataType": "REAL"
            },
            {
                "name": "Y2",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": []
    },
    "SQRT_F": {
        "type": "SQRT_F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "SCALE",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "SCALE",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "SQRT_I": {
        "type": "SQRT_I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "SCALE",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "SCALE",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "SQUARE_F": {
        "type": "SQUARE_F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "SQUARE_I": {
        "type": "SQUARE_I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "STEP": {
        "type": "STEP",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            },
            {
                "name": "X1",
                "dataType": "REAL"
            },
            {
                "name": "X2",
                "dataType": "REAL"
            },
            {
                "name": "X3",
                "dataType": "REAL"
            },
            {
                "name": "X4",
                "dataType": "REAL"
            },
            {
                "name": "X5",
                "dataType": "REAL"
            },
            {
                "name": "X6",
                "dataType": "REAL"
            },
            {
                "name": "X7",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "INT"
            }
        ],
        "parameters": []
    },
    "SUB_F": {
        "type": "SUB_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "SUB_I": {
        "type": "SUB_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "SUM2_F": {
        "type": "SUM2_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "GAIN1",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN2",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "SUM2_I": {
        "type": "SUM2_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "GAIN1",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN2",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "SUM3_F": {
        "type": "SUM3_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "GAIN1",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN2",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN3",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "SUM3_I": {
        "type": "SUM3_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "GAIN1",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN2",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN3",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "SUM4_F": {
        "type": "SUM4_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            },
            {
                "name": "IN4",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "GAIN1",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN2",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN3",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN4",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "SUM4_I": {
        "type": "SUM4_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            },
            {
                "name": "IN4",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "GAIN1",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN2",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN3",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN4",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "SUM5_F": {
        "type": "SUM5_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            },
            {
                "name": "IN4",
                "dataType": "REAL"
            },
            {
                "name": "IN5",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "GAIN1",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN2",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN3",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN4",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN5",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "SUM5_I": {
        "type": "SUM5_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            },
            {
                "name": "IN4",
                "dataType": "INT"
            },
            {
                "name": "IN5",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "GAIN1",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN2",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN3",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN4",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN5",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "SUM6_F": {
        "type": "SUM6_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            },
            {
                "name": "IN4",
                "dataType": "REAL"
            },
            {
                "name": "IN5",
                "dataType": "REAL"
            },
            {
                "name": "IN6",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "GAIN1",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN2",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN3",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN4",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN5",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN6",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "SUM6_I": {
        "type": "SUM6_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            },
            {
                "name": "IN4",
                "dataType": "INT"
            },
            {
                "name": "IN5",
                "dataType": "INT"
            },
            {
                "name": "IN6",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "GAIN1",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN2",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN3",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN4",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN5",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN6",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "SUM7_F": {
        "type": "SUM7_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            },
            {
                "name": "IN4",
                "dataType": "REAL"
            },
            {
                "name": "IN5",
                "dataType": "REAL"
            },
            {
                "name": "IN6",
                "dataType": "REAL"
            },
            {
                "name": "IN7",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "GAIN1",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN2",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN3",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN4",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN5",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN6",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN7",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "SUM7_I": {
        "type": "SUM7_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            },
            {
                "name": "IN4",
                "dataType": "INT"
            },
            {
                "name": "IN5",
                "dataType": "INT"
            },
            {
                "name": "IN6",
                "dataType": "INT"
            },
            {
                "name": "IN7",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "GAIN1",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN2",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN3",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN4",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN5",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN6",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN7",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "SUM8_F": {
        "type": "SUM8_F",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "REAL"
            },
            {
                "name": "IN2",
                "dataType": "REAL"
            },
            {
                "name": "IN3",
                "dataType": "REAL"
            },
            {
                "name": "IN4",
                "dataType": "REAL"
            },
            {
                "name": "IN5",
                "dataType": "REAL"
            },
            {
                "name": "IN6",
                "dataType": "REAL"
            },
            {
                "name": "IN7",
                "dataType": "REAL"
            },
            {
                "name": "IN8",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "GAIN1",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN2",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN3",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN4",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN5",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN6",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN7",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN8",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "SUM8_I": {
        "type": "SUM8_I",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "INT"
            },
            {
                "name": "IN2",
                "dataType": "INT"
            },
            {
                "name": "IN3",
                "dataType": "INT"
            },
            {
                "name": "IN4",
                "dataType": "INT"
            },
            {
                "name": "IN5",
                "dataType": "INT"
            },
            {
                "name": "IN6",
                "dataType": "INT"
            },
            {
                "name": "IN7",
                "dataType": "INT"
            },
            {
                "name": "IN8",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "GAIN1",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN2",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN3",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN4",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN5",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN6",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN7",
                "dataType": "REAL",
                "value": 1.0
            },
            {
                "name": "GAIN8",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "S_BISTABLE": {
        "type": "S_BISTABLE",
        "inputs": [
            {
                "name": "SET",
                "dataType": "BOOL"
            },
            {
                "name": "RESET",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "TANGENT_F": {
        "type": "TANGENT_F",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "SCALE",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "SCALE",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "TANGENT_I": {
        "type": "TANGENT_I",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            },
            {
                "name": "SCALE",
                "dataType": "REAL"
            },
            {
                "name": "FB ERR",
                "dataType": "HEX"
            }
        ],
        "parameters": [
            {
                "name": "SCALE",
                "dataType": "REAL",
                "value": 1.0
            }
        ]
    },
    "TMOFF": {
        "type": "TMOFF",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "ET",
                "dataType": "INT"
            },
            {
                "name": "ALARM",
                "dataType": "BOOL"
            }
        ],
        "parameters": [
            {
                "name": "TIME",
                "dataType": "INT",
                "value": 10.0
            }
        ]
    },
    "TMON": {
        "type": "TMON",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "ET",
                "dataType": "INT"
            },
            {
                "name": "ALARM",
                "dataType": "BOOL"
            }
        ],
        "parameters": [
            {
                "name": "TIME",
                "dataType": "INT",
                "value": 10.0
            }
        ]
    },
    "UAOUT": {
        "type": "UAOUT",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            },
            {
                "name": "EN",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "SEQ",
                "dataType": "HEX",
                "value": 0.0
            }
        ]
    },
    "UDFBINPUT": {
        "type": "UDFBINPUT",
        "inputs": [],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": []
    },
    "UDFBOUTPUT": {
        "type": "UDFBOUTPUT",
        "inputs": [
            {
                "name": "IN",
                "dataType": "REAL"
            },
            {
                "name": "EN",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "REAL"
            }
        ],
        "parameters": [
            {
                "name": "OUTPUT",
                "dataType": "HEX",
                "value": 0.0
            }
        ]
    },
    "UDOUT": {
        "type": "UDOUT",
        "inputs": [
            {
                "name": "IN",
                "dataType": "BOOL"
            },
            {
                "name": "EN",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            }
        ],
        "parameters": [
            {
                "name": "SEQ",
                "dataType": "HEX",
                "value": 0.0
            }
        ]
    },
    "UMOUT": {
        "type": "UMOUT",
        "inputs": [
            {
                "name": "IN",
                "dataType": "INT"
            },
            {
                "name": "EN",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "INT"
            }
        ],
        "parameters": [
            {
                "name": "SEQ",
                "dataType": "HEX",
                "value": 0.0
            }
        ]
    },
    "XOR2": {
        "type": "XOR2",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "XOR3": {
        "type": "XOR3",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "XOR4": {
        "type": "XOR4",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "XOR5": {
        "type": "XOR5",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            },
            {
                "name": "IN5",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "XOR6": {
        "type": "XOR6",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            },
            {
                "name": "IN5",
                "dataType": "BOOL"
            },
            {
                "name": "IN6",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "XOR7": {
        "type": "XOR7",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            },
            {
                "name": "IN5",
                "dataType": "BOOL"
            },
            {
                "name": "IN6",
                "dataType": "BOOL"
            },
            {
                "name": "IN7",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    },
    "XOR8": {
        "type": "XOR8",
        "inputs": [
            {
                "name": "IN1",
                "dataType": "BOOL"
            },
            {
                "name": "IN2",
                "dataType": "BOOL"
            },
            {
                "name": "IN3",
                "dataType": "BOOL"
            },
            {
                "name": "IN4",
                "dataType": "BOOL"
            },
            {
                "name": "IN5",
                "dataType": "BOOL"
            },
            {
                "name": "IN6",
                "dataType": "BOOL"
            },
            {
                "name": "IN7",
                "dataType": "BOOL"
            },
            {
                "name": "IN8",
                "dataType": "BOOL"
            }
        ],
        "outputs": [
            {
                "name": "OUT",
                "dataType": "BOOL"
            },
            {
                "name": "REV",
                "dataType": "BOOL"
            }
        ],
        "parameters": []
    }
};