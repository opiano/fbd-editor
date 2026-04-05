export const BlockDefinitions = {
  "AHU_DIR": {
    "type": "AHU_DIR",
    "description": "AHU_DIR 블록",
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
        "name": "EN",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "AHU_REV": {
    "type": "AHU_REV",
    "description": "AHU_REV 블록",
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
        "name": "EN",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "ONOFF1": {
    "type": "ONOFF1",
    "description": "ONOFF1 블록",
    "inputs": [
      {
        "name": "PV",
        "dataType": "REAL"
      },
      {
        "name": "SET",
        "dataType": "REAL"
      },
      {
        "name": "HYST",
        "dataType": "REAL"
      },
      {
        "name": "MOD",
        "dataType": "REAL"
      },
      {
        "name": "EN",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "ONOFF2": {
    "type": "ONOFF2",
    "description": "ONOFF2 블록",
    "inputs": [
      {
        "name": "PV",
        "dataType": "REAL"
      },
      {
        "name": "SET1",
        "dataType": "REAL"
      },
      {
        "name": "HYST1",
        "dataType": "REAL"
      },
      {
        "name": "SET2",
        "dataType": "REAL"
      },
      {
        "name": "HYST2",
        "dataType": "REAL"
      },
      {
        "name": "EN",
        "dataType": "REAL"
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
        "name": "STATE",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "PID_AHU": {
    "type": "PID_AHU",
    "description": "PID_AHU 블록",
    "inputs": [
      {
        "name": "PV1",
        "dataType": "REAL"
      },
      {
        "name": "SET1",
        "dataType": "REAL"
      },
      {
        "name": "PV2",
        "dataType": "REAL"
      },
      {
        "name": "SET2",
        "dataType": "REAL"
      },
      {
        "name": "PV3",
        "dataType": "REAL"
      },
      {
        "name": "SET3",
        "dataType": "REAL"
      },
      {
        "name": "MOD",
        "dataType": "REAL"
      },
      {
        "name": "EN",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter8",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "PID1": {
    "type": "PID1",
    "description": "PID1 블록",
    "inputs": [
      {
        "name": "PV",
        "dataType": "REAL"
      },
      {
        "name": "SET",
        "dataType": "REAL"
      },
      {
        "name": "MOD",
        "dataType": "REAL"
      },
      {
        "name": "MAN",
        "dataType": "REAL"
      },
      {
        "name": "TR",
        "dataType": "REAL"
      },
      {
        "name": "EN",
        "dataType": "REAL"
      }
    ],
    "outputs": [
      {
        "name": "OUT",
        "dataType": "REAL"
      },
      {
        "name": "P-OUT",
        "dataType": "REAL"
      },
      {
        "name": "I-OUT",
        "dataType": "REAL"
      },
      {
        "name": "D-OUT",
        "dataType": "REAL"
      },
      {
        "name": "ERR",
        "dataType": "REAL"
      },
      {
        "name": "TR_OUT",
        "dataType": "REAL"
      },
      {
        "name": "STATE",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "PID2": {
    "type": "PID2",
    "description": "PID2 블록",
    "inputs": [
      {
        "name": "PV",
        "dataType": "REAL"
      },
      {
        "name": "SET",
        "dataType": "REAL"
      },
      {
        "name": "MOD",
        "dataType": "REAL"
      },
      {
        "name": "MAN",
        "dataType": "REAL"
      },
      {
        "name": "TR",
        "dataType": "REAL"
      },
      {
        "name": "KP",
        "dataType": "REAL"
      },
      {
        "name": "KI",
        "dataType": "REAL"
      },
      {
        "name": "KD",
        "dataType": "REAL"
      },
      {
        "name": "EN",
        "dataType": "REAL"
      }
    ],
    "outputs": [
      {
        "name": "OUT",
        "dataType": "REAL"
      },
      {
        "name": "P-OUT",
        "dataType": "REAL"
      },
      {
        "name": "I-OUT",
        "dataType": "REAL"
      },
      {
        "name": "D-OUT",
        "dataType": "REAL"
      },
      {
        "name": "ERR",
        "dataType": "REAL"
      },
      {
        "name": "TR_OUT",
        "dataType": "REAL"
      },
      {
        "name": "STATE",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter8",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter9",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "PID3": {
    "type": "PID3",
    "description": "PID3 블록",
    "inputs": [
      {
        "name": "PV",
        "dataType": "REAL"
      },
      {
        "name": "SET",
        "dataType": "REAL"
      },
      {
        "name": "MOD",
        "dataType": "REAL"
      },
      {
        "name": "EN",
        "dataType": "REAL"
      }
    ],
    "outputs": [
      {
        "name": "OUT",
        "dataType": "REAL"
      },
      {
        "name": "P-OUT",
        "dataType": "REAL"
      },
      {
        "name": "I-OUT",
        "dataType": "REAL"
      },
      {
        "name": "D-OUT",
        "dataType": "REAL"
      },
      {
        "name": "ERR",
        "dataType": "REAL"
      },
      {
        "name": "TR_OUT",
        "dataType": "REAL"
      },
      {
        "name": "STATE",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "ABS_F": {
    "type": "ABS_F",
    "description": "ABS_F 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "ABS_I": {
    "type": "ABS_I",
    "description": "ABS_I 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "ACOSINE_F": {
    "type": "ACOSINE_F",
    "description": "ACOSINE_F 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "ACOSINE_I": {
    "type": "ACOSINE_I",
    "description": "ACOSINE_I 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "ADD_F": {
    "type": "ADD_F",
    "description": "ADD_F 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "ADD_I": {
    "type": "ADD_I",
    "description": "ADD_I 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "ASINE_F": {
    "type": "ASINE_F",
    "description": "ASINE_F 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "ASINE_I": {
    "type": "ASINE_I",
    "description": "ASINE_I 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "ATANGENT_F": {
    "type": "ATANGENT_F",
    "description": "ATANGENT_F 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "ATANGENT_I": {
    "type": "ATANGENT_I",
    "description": "ATANGENT_I 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "AVG": {
    "type": "AVG",
    "description": "AVG 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "AVGX": {
    "type": "AVGX",
    "description": "AVGX 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "COSINE_F": {
    "type": "COSINE_F",
    "description": "COSINE_F 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "COSINE_I": {
    "type": "COSINE_I",
    "description": "COSINE_I 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "DIVIDE_F": {
    "type": "DIVIDE_F",
    "description": "DIVIDE_F 블록",
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
        "name": "MOD",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "DIVIDE_I": {
    "type": "DIVIDE_I",
    "description": "DIVIDE_I 블록",
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
        "name": "MOD",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "EXPO_F": {
    "type": "EXPO_F",
    "description": "EXPO_F 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "EXPO_I": {
    "type": "EXPO_I",
    "description": "EXPO_I 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "LOG10_F": {
    "type": "LOG10_F",
    "description": "LOG10_F 블록",
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
        "name": "STATE",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "LOG10_I": {
    "type": "LOG10_I",
    "description": "LOG10_I 블록",
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
        "name": "STATE",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "LOGE_F": {
    "type": "LOGE_F",
    "description": "LOGE_F 블록",
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
        "name": "STATE",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "LOGE_I": {
    "type": "LOGE_I",
    "description": "LOGE_I 블록",
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
        "name": "STATE",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MOD_I": {
    "type": "MOD_I",
    "description": "MOD_I 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MUL_F": {
    "type": "MUL_F",
    "description": "MUL_F 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MUL_I": {
    "type": "MUL_I",
    "description": "MUL_I 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "POLY_F": {
    "type": "POLY_F",
    "description": "POLY_F 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "POLY_I": {
    "type": "POLY_I",
    "description": "POLY_I 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "POWER_F": {
    "type": "POWER_F",
    "description": "POWER_F 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "POWER_I": {
    "type": "POWER_I",
    "description": "POWER_I 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SINE_F": {
    "type": "SINE_F",
    "description": "SINE_F 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SINE_I": {
    "type": "SINE_I",
    "description": "SINE_I 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SQRT_F": {
    "type": "SQRT_F",
    "description": "SQRT_F 블록",
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
        "name": "STATE",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SQRT_I": {
    "type": "SQRT_I",
    "description": "SQRT_I 블록",
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
        "name": "STATE",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SQUARE_F": {
    "type": "SQUARE_F",
    "description": "SQUARE_F 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SQUARE_I": {
    "type": "SQUARE_I",
    "description": "SQUARE_I 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SUB_F": {
    "type": "SUB_F",
    "description": "SUB_F 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SUB_I": {
    "type": "SUB_I",
    "description": "SUB_I 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SUM2_F": {
    "type": "SUM2_F",
    "description": "SUM2_F 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SUM2_I": {
    "type": "SUM2_I",
    "description": "SUM2_I 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SUM3_F": {
    "type": "SUM3_F",
    "description": "SUM3_F 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SUM3_I": {
    "type": "SUM3_I",
    "description": "SUM3_I 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SUM4_F": {
    "type": "SUM4_F",
    "description": "SUM4_F 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SUM4_I": {
    "type": "SUM4_I",
    "description": "SUM4_I 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SUM5_F": {
    "type": "SUM5_F",
    "description": "SUM5_F 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SUM5_I": {
    "type": "SUM5_I",
    "description": "SUM5_I 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SUM6_F": {
    "type": "SUM6_F",
    "description": "SUM6_F 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SUM6_I": {
    "type": "SUM6_I",
    "description": "SUM6_I 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SUM7_F": {
    "type": "SUM7_F",
    "description": "SUM7_F 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SUM7_I": {
    "type": "SUM7_I",
    "description": "SUM7_I 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SUM8_F": {
    "type": "SUM8_F",
    "description": "SUM8_F 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter8",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SUM8_I": {
    "type": "SUM8_I",
    "description": "SUM8_I 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter8",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "TANGENT_F": {
    "type": "TANGENT_F",
    "description": "TANGENT_F 블록",
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
        "name": "STATE",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "TANGENT_I": {
    "type": "TANGENT_I",
    "description": "TANGENT_I 블록",
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
        "name": "STATE",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "AND2": {
    "type": "AND2",
    "description": "AND2 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "AND3": {
    "type": "AND3",
    "description": "AND3 블록",
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
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "AND4": {
    "type": "AND4",
    "description": "AND4 블록",
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
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "AND5": {
    "type": "AND5",
    "description": "AND5 블록",
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
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "AND6": {
    "type": "AND6",
    "description": "AND6 블록",
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
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "AND7": {
    "type": "AND7",
    "description": "AND7 블록",
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
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "AND8": {
    "type": "AND8",
    "description": "AND8 블록",
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
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter8",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "BIT_INFO1": {
    "type": "BIT_INFO1",
    "description": "BIT_INFO1 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
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
        "name": "OUT8",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "BIT_INFO2": {
    "type": "BIT_INFO2",
    "description": "BIT_INFO2 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
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
        "name": "OUT8",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "BIT_INFO3": {
    "type": "BIT_INFO3",
    "description": "BIT_INFO3 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
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
        "name": "OUT8",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "F_TRIG": {
    "type": "F_TRIG",
    "description": "F_TRIG 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "FB_ERR1": {
    "type": "FB_ERR1",
    "description": "FB_ERR1 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      }
    ],
    "outputs": [
      {
        "name": "ERR_BIT",
        "dataType": "REAL"
      },
      {
        "name": "ERR_CODE",
        "dataType": "REAL"
      },
      {
        "name": "ERR_FB",
        "dataType": "REAL"
      },
      {
        "name": "ERR_INFO",
        "dataType": "REAL"
      },
      {
        "name": "ERR_SEC",
        "dataType": "REAL"
      },
      {
        "name": "ERR_MSEC",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "FB_ERR2": {
    "type": "FB_ERR2",
    "description": "FB_ERR2 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      }
    ],
    "outputs": [
      {
        "name": "ERR_BIT",
        "dataType": "REAL"
      },
      {
        "name": "ERR_CODE",
        "dataType": "REAL"
      },
      {
        "name": "ERR_FB",
        "dataType": "REAL"
      },
      {
        "name": "ERR_INFO",
        "dataType": "REAL"
      },
      {
        "name": "ERR_SEC",
        "dataType": "REAL"
      },
      {
        "name": "ERR_MSEC",
        "dataType": "REAL"
      },
      {
        "name": "ERR_USEC",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "NOT1": {
    "type": "NOT1",
    "description": "NOT1 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "NOT2": {
    "type": "NOT2",
    "description": "NOT2 블록",
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
        "name": "OUT1",
        "dataType": "REAL"
      },
      {
        "name": "OUT2",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "NOT3": {
    "type": "NOT3",
    "description": "NOT3 블록",
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
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "NOT4": {
    "type": "NOT4",
    "description": "NOT4 블록",
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
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "NOT5": {
    "type": "NOT5",
    "description": "NOT5 블록",
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
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "NOT6": {
    "type": "NOT6",
    "description": "NOT6 블록",
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
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "NOT7": {
    "type": "NOT7",
    "description": "NOT7 블록",
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
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "NOT8": {
    "type": "NOT8",
    "description": "NOT8 블록",
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
        "name": "OUT8",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter8",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OR2": {
    "type": "OR2",
    "description": "OR2 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OR3": {
    "type": "OR3",
    "description": "OR3 블록",
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
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OR4": {
    "type": "OR4",
    "description": "OR4 블록",
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
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OR5": {
    "type": "OR5",
    "description": "OR5 블록",
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
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OR6": {
    "type": "OR6",
    "description": "OR6 블록",
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
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OR7": {
    "type": "OR7",
    "description": "OR7 블록",
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
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OR8": {
    "type": "OR8",
    "description": "OR8 블록",
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
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter8",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "R_BISTABLE": {
    "type": "R_BISTABLE",
    "description": "R_BISTABLE 블록",
    "inputs": [
      {
        "name": "SET",
        "dataType": "REAL"
      },
      {
        "name": "RESET",
        "dataType": "REAL"
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
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "R_TRIG": {
    "type": "R_TRIG",
    "description": "R_TRIG 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "S_BISTABLE": {
    "type": "S_BISTABLE",
    "description": "S_BISTABLE 블록",
    "inputs": [
      {
        "name": "SET",
        "dataType": "REAL"
      },
      {
        "name": "RESET",
        "dataType": "REAL"
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
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "XOR2": {
    "type": "XOR2",
    "description": "XOR2 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "XOR3": {
    "type": "XOR3",
    "description": "XOR3 블록",
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
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "XOR4": {
    "type": "XOR4",
    "description": "XOR4 블록",
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
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "XOR5": {
    "type": "XOR5",
    "description": "XOR5 블록",
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
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "XOR6": {
    "type": "XOR6",
    "description": "XOR6 블록",
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
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "XOR7": {
    "type": "XOR7",
    "description": "XOR7 블록",
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
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "XOR8": {
    "type": "XOR8",
    "description": "XOR8 블록",
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
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter8",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "EQ_B": {
    "type": "EQ_B",
    "description": "EQ_B 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "EQ_F": {
    "type": "EQ_F",
    "description": "EQ_F 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "EQ_I": {
    "type": "EQ_I",
    "description": "EQ_I 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "GE_B": {
    "type": "GE_B",
    "description": "GE_B 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "GE_F": {
    "type": "GE_F",
    "description": "GE_F 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "GE_I": {
    "type": "GE_I",
    "description": "GE_I 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "GT_B": {
    "type": "GT_B",
    "description": "GT_B 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "GT_F": {
    "type": "GT_F",
    "description": "GT_F 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "GT_I": {
    "type": "GT_I",
    "description": "GT_I 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "LE_B": {
    "type": "LE_B",
    "description": "LE_B 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "LE_F": {
    "type": "LE_F",
    "description": "LE_F 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "LE_I": {
    "type": "LE_I",
    "description": "LE_I 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "LT_B": {
    "type": "LT_B",
    "description": "LT_B 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "LT_F": {
    "type": "LT_F",
    "description": "LT_F 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "LT_I": {
    "type": "LT_I",
    "description": "LT_I 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MSV_COMP": {
    "type": "MSV_COMP",
    "description": "MSV_COMP 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter8",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "NEQ_B": {
    "type": "NEQ_B",
    "description": "NEQ_B 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "NEQ_F": {
    "type": "NEQ_F",
    "description": "NEQ_F 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "NEQ_I": {
    "type": "NEQ_I",
    "description": "NEQ_I 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "ACCUM_F": {
    "type": "ACCUM_F",
    "description": "ACCUM_F 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SET",
        "dataType": "REAL"
      },
      {
        "name": "MOD",
        "dataType": "REAL"
      }
    ],
    "outputs": [
      {
        "name": "OUT",
        "dataType": "REAL"
      },
      {
        "name": "H-OUT",
        "dataType": "REAL"
      },
      {
        "name": "L-OUT",
        "dataType": "REAL"
      },
      {
        "name": "PRE_H",
        "dataType": "REAL"
      },
      {
        "name": "PRE_L",
        "dataType": "REAL"
      },
      {
        "name": "CUR_H",
        "dataType": "REAL"
      },
      {
        "name": "CUR_L",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "ACCUM_FE": {
    "type": "ACCUM_FE",
    "description": "ACCUM_FE 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SET",
        "dataType": "REAL"
      },
      {
        "name": "MOD",
        "dataType": "REAL"
      }
    ],
    "outputs": [
      {
        "name": "OUT",
        "dataType": "REAL"
      },
      {
        "name": "H-OUT",
        "dataType": "REAL"
      },
      {
        "name": "L-OUT",
        "dataType": "REAL"
      },
      {
        "name": "PRE_H",
        "dataType": "REAL"
      },
      {
        "name": "PRE_L",
        "dataType": "REAL"
      },
      {
        "name": "CUR_H",
        "dataType": "REAL"
      },
      {
        "name": "CUR_L",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "ACCUM_I": {
    "type": "ACCUM_I",
    "description": "ACCUM_I 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SET",
        "dataType": "REAL"
      },
      {
        "name": "MOD",
        "dataType": "REAL"
      }
    ],
    "outputs": [
      {
        "name": "OUT",
        "dataType": "REAL"
      },
      {
        "name": "H-OUT",
        "dataType": "REAL"
      },
      {
        "name": "L-OUT",
        "dataType": "REAL"
      },
      {
        "name": "PRE_H",
        "dataType": "REAL"
      },
      {
        "name": "PRE_L",
        "dataType": "REAL"
      },
      {
        "name": "CUR_H",
        "dataType": "REAL"
      },
      {
        "name": "CUR_L",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "ACCUM_OFF": {
    "type": "ACCUM_OFF",
    "description": "ACCUM_OFF 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SET",
        "dataType": "REAL"
      },
      {
        "name": "MOD",
        "dataType": "REAL"
      }
    ],
    "outputs": [
      {
        "name": "OUT",
        "dataType": "REAL"
      },
      {
        "name": "H-OUT",
        "dataType": "REAL"
      },
      {
        "name": "L-OUT",
        "dataType": "REAL"
      },
      {
        "name": "PRE_H",
        "dataType": "REAL"
      },
      {
        "name": "PRE_L",
        "dataType": "REAL"
      },
      {
        "name": "CUR_H",
        "dataType": "REAL"
      },
      {
        "name": "CUR_L",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "ACCUM_ON": {
    "type": "ACCUM_ON",
    "description": "ACCUM_ON 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SET",
        "dataType": "REAL"
      },
      {
        "name": "MOD",
        "dataType": "REAL"
      }
    ],
    "outputs": [
      {
        "name": "OUT",
        "dataType": "REAL"
      },
      {
        "name": "H-OUT",
        "dataType": "REAL"
      },
      {
        "name": "L-OUT",
        "dataType": "REAL"
      },
      {
        "name": "PRE_H",
        "dataType": "REAL"
      },
      {
        "name": "PRE_L",
        "dataType": "REAL"
      },
      {
        "name": "CUR_H",
        "dataType": "REAL"
      },
      {
        "name": "CUR_L",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "ACCUM_RE": {
    "type": "ACCUM_RE",
    "description": "ACCUM_RE 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SET",
        "dataType": "REAL"
      },
      {
        "name": "MOD",
        "dataType": "REAL"
      }
    ],
    "outputs": [
      {
        "name": "OUT",
        "dataType": "REAL"
      },
      {
        "name": "H-OUT",
        "dataType": "REAL"
      },
      {
        "name": "L-OUT",
        "dataType": "REAL"
      },
      {
        "name": "PRE_H",
        "dataType": "REAL"
      },
      {
        "name": "PRE_L",
        "dataType": "REAL"
      },
      {
        "name": "CUR_H",
        "dataType": "REAL"
      },
      {
        "name": "CUR_L",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "AIRFLOW": {
    "type": "AIRFLOW",
    "description": "AIRFLOW 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "BLINK": {
    "type": "BLINK",
    "description": "BLINK 블록",
    "inputs": [
      {
        "name": "EN",
        "dataType": "REAL"
      }
    ],
    "outputs": [
      {
        "name": "OUT",
        "dataType": "REAL"
      },
      {
        "name": "REV",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "COV": {
    "type": "COV",
    "description": "COV 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "DELAY": {
    "type": "DELAY",
    "description": "DELAY 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "DERIV": {
    "type": "DERIV",
    "description": "DERIV 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "ENT_CTRL": {
    "type": "ENT_CTRL",
    "description": "ENT_CTRL 블록",
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
        "dataType": "REAL"
      },
      {
        "name": "WS",
        "dataType": "REAL"
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
        "dataType": "REAL"
      },
      {
        "name": "DAMP",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter8",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "HL_LIMIT": {
    "type": "HL_LIMIT",
    "description": "HL_LIMIT 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "INTEG": {
    "type": "INTEG",
    "description": "INTEG 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SET",
        "dataType": "REAL"
      },
      {
        "name": "MOD",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "LAG": {
    "type": "LAG",
    "description": "LAG 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "LAGRANGE": {
    "type": "LAGRANGE",
    "description": "LAGRANGE 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "LDLG": {
    "type": "LDLG",
    "description": "LDLG 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "LEAD": {
    "type": "LEAD",
    "description": "LEAD 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "LINEAR": {
    "type": "LINEAR",
    "description": "LINEAR 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MOVAVG": {
    "type": "MOVAVG",
    "description": "MOVAVG 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "PSYCH": {
    "type": "PSYCH",
    "description": "PSYCH 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "QUANT": {
    "type": "QUANT",
    "description": "QUANT 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "R_LIMIT": {
    "type": "R_LIMIT",
    "description": "R_LIMIT 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SINE_CURVE": {
    "type": "SINE_CURVE",
    "description": "SINE_CURVE 블록",
    "inputs": [],
    "outputs": [
      {
        "name": "OUT",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SPAN": {
    "type": "SPAN",
    "description": "SPAN 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SPAN2": {
    "type": "SPAN2",
    "description": "SPAN2 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "STEP": {
    "type": "STEP",
    "description": "STEP 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter8",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "CLK": {
    "type": "CLK",
    "description": "CLK 블록",
    "inputs": [],
    "outputs": [
      {
        "name": "YEAR",
        "dataType": "REAL"
      },
      {
        "name": "MON",
        "dataType": "REAL"
      },
      {
        "name": "DAY",
        "dataType": "REAL"
      },
      {
        "name": "WEEK",
        "dataType": "REAL"
      },
      {
        "name": "HOUR",
        "dataType": "REAL"
      },
      {
        "name": "MIN",
        "dataType": "REAL"
      },
      {
        "name": "SEC",
        "dataType": "REAL"
      },
      {
        "name": "MSEC",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MS_TIMER": {
    "type": "MS_TIMER",
    "description": "MS_TIMER 블록",
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
        "name": "REV",
        "dataType": "REAL"
      },
      {
        "name": "ET",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MSR_TIMER": {
    "type": "MSR_TIMER",
    "description": "MSR_TIMER 블록",
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
        "name": "REV",
        "dataType": "REAL"
      },
      {
        "name": "ET",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OFF_DELAY": {
    "type": "OFF_DELAY",
    "description": "OFF_DELAY 블록",
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
        "name": "REV",
        "dataType": "REAL"
      },
      {
        "name": "ET",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "ON_DELAY": {
    "type": "ON_DELAY",
    "description": "ON_DELAY 블록",
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
        "name": "REV",
        "dataType": "REAL"
      },
      {
        "name": "ET",
        "dataType": "REAL"
      },
      {
        "name": "FB ERR",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "TMOFF": {
    "type": "TMOFF",
    "description": "TMOFF 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      }
    ],
    "outputs": [
      {
        "name": "ET",
        "dataType": "REAL"
      },
      {
        "name": "ALARM",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "TMON": {
    "type": "TMON",
    "description": "TMON 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      }
    ],
    "outputs": [
      {
        "name": "ET",
        "dataType": "REAL"
      },
      {
        "name": "ALARM",
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "B2F": {
    "type": "B2F",
    "description": "B2F 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "B2I": {
    "type": "B2I",
    "description": "B2I 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "BIN2DEC": {
    "type": "BIN2DEC",
    "description": "BIN2DEC 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "DEC2BIN": {
    "type": "DEC2BIN",
    "description": "DEC2BIN 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
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
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "F2B": {
    "type": "F2B",
    "description": "F2B 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "F2I": {
    "type": "F2I",
    "description": "F2I 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "I2B": {
    "type": "I2B",
    "description": "I2B 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "I2F": {
    "type": "I2F",
    "description": "I2F 블록",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MAX2_F": {
    "type": "MAX2_F",
    "description": "MAX2_F 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MAX2_I": {
    "type": "MAX2_I",
    "description": "MAX2_I 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MAX3_F": {
    "type": "MAX3_F",
    "description": "MAX3_F 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MAX3_I": {
    "type": "MAX3_I",
    "description": "MAX3_I 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MAX4_F": {
    "type": "MAX4_F",
    "description": "MAX4_F 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MAX4_I": {
    "type": "MAX4_I",
    "description": "MAX4_I 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MAX5_F": {
    "type": "MAX5_F",
    "description": "MAX5_F 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MAX5_I": {
    "type": "MAX5_I",
    "description": "MAX5_I 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MAX6_F": {
    "type": "MAX6_F",
    "description": "MAX6_F 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MAX6_I": {
    "type": "MAX6_I",
    "description": "MAX6_I 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MAX7_F": {
    "type": "MAX7_F",
    "description": "MAX7_F 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MAX7_I": {
    "type": "MAX7_I",
    "description": "MAX7_I 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MAX8_F": {
    "type": "MAX8_F",
    "description": "MAX8_F 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter8",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MAX8_I": {
    "type": "MAX8_I",
    "description": "MAX8_I 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter8",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MIN2_F": {
    "type": "MIN2_F",
    "description": "MIN2_F 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MIN2_I": {
    "type": "MIN2_I",
    "description": "MIN2_I 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MIN3_F": {
    "type": "MIN3_F",
    "description": "MIN3_F 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MIN3_I": {
    "type": "MIN3_I",
    "description": "MIN3_I 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MIN4_F": {
    "type": "MIN4_F",
    "description": "MIN4_F 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MIN4_I": {
    "type": "MIN4_I",
    "description": "MIN4_I 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MIN5_F": {
    "type": "MIN5_F",
    "description": "MIN5_F 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MIN5_I": {
    "type": "MIN5_I",
    "description": "MIN5_I 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MIN6_F": {
    "type": "MIN6_F",
    "description": "MIN6_F 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MIN6_I": {
    "type": "MIN6_I",
    "description": "MIN6_I 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MIN7_F": {
    "type": "MIN7_F",
    "description": "MIN7_F 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MIN7_I": {
    "type": "MIN7_I",
    "description": "MIN7_I 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MIN8_F": {
    "type": "MIN8_F",
    "description": "MIN8_F 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter8",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MIN8_I": {
    "type": "MIN8_I",
    "description": "MIN8_I 블록",
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
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter8",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OSEL2_B": {
    "type": "OSEL2_B",
    "description": "OSEL2_B 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SEL",
        "dataType": "REAL"
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OSEL2_F": {
    "type": "OSEL2_F",
    "description": "OSEL2_F 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SEL",
        "dataType": "REAL"
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OSEL2_I": {
    "type": "OSEL2_I",
    "description": "OSEL2_I 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SEL",
        "dataType": "REAL"
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OSEL3_B": {
    "type": "OSEL3_B",
    "description": "OSEL3_B 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SEL",
        "dataType": "REAL"
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OSEL3_F": {
    "type": "OSEL3_F",
    "description": "OSEL3_F 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SEL",
        "dataType": "REAL"
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OSEL3_I": {
    "type": "OSEL3_I",
    "description": "OSEL3_I 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SEL",
        "dataType": "REAL"
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OSEL4_B": {
    "type": "OSEL4_B",
    "description": "OSEL4_B 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SEL",
        "dataType": "REAL"
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OSEL4_F": {
    "type": "OSEL4_F",
    "description": "OSEL4_F 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SEL",
        "dataType": "REAL"
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OSEL4_I": {
    "type": "OSEL4_I",
    "description": "OSEL4_I 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SEL",
        "dataType": "REAL"
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OSEL5_B": {
    "type": "OSEL5_B",
    "description": "OSEL5_B 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SEL",
        "dataType": "REAL"
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OSEL5_F": {
    "type": "OSEL5_F",
    "description": "OSEL5_F 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SEL",
        "dataType": "REAL"
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OSEL5_I": {
    "type": "OSEL5_I",
    "description": "OSEL5_I 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SEL",
        "dataType": "REAL"
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OSEL6_B": {
    "type": "OSEL6_B",
    "description": "OSEL6_B 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SEL",
        "dataType": "REAL"
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OSEL6_F": {
    "type": "OSEL6_F",
    "description": "OSEL6_F 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SEL",
        "dataType": "REAL"
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OSEL6_I": {
    "type": "OSEL6_I",
    "description": "OSEL6_I 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SEL",
        "dataType": "REAL"
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OSEL7_B": {
    "type": "OSEL7_B",
    "description": "OSEL7_B 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SEL",
        "dataType": "REAL"
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OSEL7_F": {
    "type": "OSEL7_F",
    "description": "OSEL7_F 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SEL",
        "dataType": "REAL"
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "OSEL7_I": {
    "type": "OSEL7_I",
    "description": "OSEL7_I 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "SEL",
        "dataType": "REAL"
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SEL2_B": {
    "type": "SEL2_B",
    "description": "SEL2_B 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SEL2_F": {
    "type": "SEL2_F",
    "description": "SEL2_F 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SEL2_I": {
    "type": "SEL2_I",
    "description": "SEL2_I 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SEL3_B": {
    "type": "SEL3_B",
    "description": "SEL3_B 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SEL3_F": {
    "type": "SEL3_F",
    "description": "SEL3_F 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SEL3_I": {
    "type": "SEL3_I",
    "description": "SEL3_I 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SEL4_B": {
    "type": "SEL4_B",
    "description": "SEL4_B 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SEL4_F": {
    "type": "SEL4_F",
    "description": "SEL4_F 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SEL4_I": {
    "type": "SEL4_I",
    "description": "SEL4_I 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SEL5_B": {
    "type": "SEL5_B",
    "description": "SEL5_B 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SEL5_F": {
    "type": "SEL5_F",
    "description": "SEL5_F 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SEL5_I": {
    "type": "SEL5_I",
    "description": "SEL5_I 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SEL6_B": {
    "type": "SEL6_B",
    "description": "SEL6_B 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SEL6_F": {
    "type": "SEL6_F",
    "description": "SEL6_F 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SEL6_I": {
    "type": "SEL6_I",
    "description": "SEL6_I 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SEL7_B": {
    "type": "SEL7_B",
    "description": "SEL7_B 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter8",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SEL7_F": {
    "type": "SEL7_F",
    "description": "SEL7_F 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter8",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "SEL7_I": {
    "type": "SEL7_I",
    "description": "SEL7_I 블록",
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
        "dataType": "REAL"
      }
    ],
    "parameters": [
      {
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter4",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter5",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter6",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter7",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter8",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "AOUT": {
    "type": "AOUT",
    "description": "AOUT 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "EN",
        "dataType": "REAL"
      },
      {
        "name": "PRI",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "AOUT_REL": {
    "type": "AOUT_REL",
    "description": "AOUT_REL 블록",
    "inputs": [
      {
        "name": "EN",
        "dataType": "REAL"
      },
      {
        "name": "PRI",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "DOUT": {
    "type": "DOUT",
    "description": "DOUT 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "EN",
        "dataType": "REAL"
      },
      {
        "name": "PRI",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "DOUT_REL": {
    "type": "DOUT_REL",
    "description": "DOUT_REL 블록",
    "inputs": [
      {
        "name": "EN",
        "dataType": "REAL"
      },
      {
        "name": "PRI",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MOUT": {
    "type": "MOUT",
    "description": "MOUT 블록",
    "inputs": [
      {
        "name": "IN",
        "dataType": "REAL"
      },
      {
        "name": "EN",
        "dataType": "REAL"
      },
      {
        "name": "PRI",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter3",
        "dataType": "REAL",
        "value": 1
      }
    ]
  },
  "MOUT_REL": {
    "type": "MOUT_REL",
    "description": "MOUT_REL 블록",
    "inputs": [
      {
        "name": "EN",
        "dataType": "REAL"
      },
      {
        "name": "PRI",
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
        "name": "Parameter1",
        "dataType": "REAL",
        "value": 1
      },
      {
        "name": "Parameter2",
        "dataType": "REAL",
        "value": 1
      }
    ]
  }
};
