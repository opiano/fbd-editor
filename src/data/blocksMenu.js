export const initialMenuCategories = [
  {
    name: 'Blocks',
    isOpen: true,
    subGroups: [
      {
        name: 'Control',
        isOpen: false,
        items: 
        [
            {
                "type": "AHU_DIR",
                "category": "block",
                "inputs": [
                    "MV",
                    "WS",
                    "STS",
                    "MIN"
                ],
                "outputs": [
                    "CVALVE",
                    "HVALVE",
                    "DAMPER",
                    "FB ERR"
                ]
            },
            {
                "type": "AHU_REV",
                "category": "block",
                "inputs": [
                    "MV",
                    "WS",
                    "STS",
                    "MIN"
                ],
                "outputs": [
                    "CVALVE",
                    "HVALVE",
                    "DAMPER",
                    "FB ERR"
                ]
            },
            {
                "type": "ONOFF1",
                "category": "block",
                "inputs": [
                    "PV",
                    "SP",
                    "DIR/REV",
                    "HYST",
                    "HOLD"
                ],
                "outputs": [
                    "MV",
                    "ERR"
                ]
            },
            {
                "type": "ONOFF2",
                "category": "block",
                "inputs": [
                    "PV",
                    "SP1",
                    "SP2",
                    "DIR/REV",
                    "HYST",
                    "HOLD"
                ],
                "outputs": [
                    "MV1",
                    "ERR1",
                    "MV2",
                    "ERR2"
                ]
            },
            {
                "type": "PID1",
                "category": "block",
                "inputs": [
                    "PV",
                    "SP",
                    "OFFSET",
                    "DIR/REV",
                    "CLR",
                    "HOLD"
                ],
                "outputs": [
                    "MV",
                    "ERR",
                    "P",
                    "I",
                    "D",
                    "PI",
                    "PID",
                    "FBERR"
                ]
            },
            {
                "type": "PID2",
                "category": "block",
                "inputs": [
                    "PV",
                    "SP",
                    "OFFSET",
                    "PB",
                    "TI",
                    "TD",
                    "DIR/REV",
                    "CLR",
                    "HOLD"
                ],
                "outputs": [
                    "MV",
                    "ERR",
                    "P",
                    "I",
                    "D",
                    "PID",
                    "PI",
                    "FBERR"
                ]
            },
            {
                "type": "PID3",
                "category": "block",
                "inputs": [
                    "PV",
                    "SP",
                    "DIR/REV",
                    "CLR"
                ],
                "outputs": [
                    "MV",
                    "ERR",
                    "P",
                    "I",
                    "D",
                    "PID",
                    "PI",
                    "FBERR"
                ]
            },
            {
                "type": "PID_AHU",
                "category": "block",
                "inputs": [
                    "PV",
                    "SP",
                    "WS",
                    "CLR",
                    "HOLD",
                    "STS",
                    "MNDM",
                    "AF"
                ],
                "outputs": [
                    "MV",
                    "ERR",
                    "P",
                    "I",
                    "D",
                    "PI",
                    "PID",
                    "CV",
                    "HV",
                    "DAMP",
                    "FB ERR"
                ]
            }
        ]
      },
      {
        name: 'Arithmetic',
        isOpen: false,
        items:
        [
            {
                "type": "ABS_F",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "ABS_I",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "ACOSINE_F",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "ACOSINE_I",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "ADD_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "ADD_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "ASINE_F",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "ASINE_I",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "ATANGENT_F",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "ATANGENT_I",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "AVG",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "AVGX",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "COSINE_F",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "SCALE"
                ]
            },
            {
                "type": "COSINE_I",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "SCALE"
                ]
            },
            {
                "type": "DIVIDE_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "DIVIDE_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "EXPO_F",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "SCALE"
                ]
            },
            {
                "type": "EXPO_I",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "OUT"
                ]
            },
            {
                "type": "LOG10_F",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "SCALE",
                    "FB ERR"
                ]
            },
            {
                "type": "LOG10_I",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "SCALE",
                    "FB ERR"
                ]
            },
            {
                "type": "LOGE_F",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "SCALE",
                    "FB ERR"
                ]
            },
            {
                "type": "LOGE_I",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "SCALE",
                    "FB ERR"
                ]
            },
            {
                "type": "MOD_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "MUL_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "MUL_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "POLY_F",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "POLY_I",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "POWER_F",
                "category": "block",
                "inputs": [
                    "BASE",
                    "EXPO"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "POWER_I",
                "category": "block",
                "inputs": [
                    "BASE",
                    "EXPO"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "SINE_F",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "SCALE"
                ]
            },
            {
                "type": "SINE_I",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "SCALE"
                ]
            },
            {
                "type": "SQRT_F",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "SCALE",
                    "FB ERR"
                ]
            },
            {
                "type": "SQRT_I",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "SCALE",
                    "FB ERR"
                ]
            },
            {
                "type": "SQUARE_F",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "SQUARE_I",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "SUB_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "SUB_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "SUM2_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "SUM2_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "SUM3_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "SUM3_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "SUM4_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "SUM4_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "SUM5_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "SUM5_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "SUM6_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "SUM6_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "SUM7_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "SUM7_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "SUM8_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7",
                    "IN8"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "SUM8_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7",
                    "IN8"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "TANGENT_F",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "SCALE",
                    "FB ERR"
                ]
            },
            {
                "type": "TANGENT_I",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "SCALE",
                    "FB ERR"
                ]
            }
        ]
      },
      {
        name: 'Logic',
        isOpen: false,
        items: 
        [
            {
                "type": "AND2",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "AND3",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "AND4",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "AND5",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "AND6",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "AND7",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "AND8",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7",
                    "IN8"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "BIT_INFO1",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "BIT0",
                    "BIT1",
                    "BIT2",
                    "BIT3",
                    "BIT4",
                    "BIT5",
                    "BIT6",
                    "BIT7"
                ]
            },
            {
                "type": "BIT_INFO2",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "BIT8",
                    "BIT9",
                    "BIT10",
                    "BIT11",
                    "BIT12",
                    "BIT13",
                    "BIT14",
                    "BIT15"
                ]
            },
            {
                "type": "BIT_INFO3",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "BIT16",
                    "BIT17",
                    "BIT18",
                    "BIT19",
                    "BIT20",
                    "BIT21",
                    "BIT22",
                    "BIT23"
                ]
            },
            {
                "type": "FB_ERR1",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "DBZ",
                    "IN ERR",
                    "PARA ERR",
                    "LOG ERR",
                    "OBJ ERR",
                    "DEV ERR"
                ]
            },
            {
                "type": "FB_ERR2",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "IN1 ERR",
                    "IN2 ERR",
                    "IN3 ERR",
                    "IN4 ERR",
                    "IN5 ERR",
                    "IN6 ERR",
                    "IN7 ERR",
                    "IN8 ERR"
                ]
            },
            {
                "type": "F_TRIG",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "NOT1",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "NOT2",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2"
                ]
            },
            {
                "type": "NOT3",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3"
                ]
            },
            {
                "type": "NOT4",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3",
                    "OUT4"
                ]
            },
            {
                "type": "NOT5",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3",
                    "OUT4",
                    "OUT5"
                ]
            },
            {
                "type": "NOT6",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3",
                    "OUT4",
                    "OUT5",
                    "OUT6"
                ]
            },
            {
                "type": "NOT7",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3",
                    "OUT4",
                    "OUT5",
                    "OUT6",
                    "OUT7"
                ]
            },
            {
                "type": "NOT8",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7",
                    "IN8"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3",
                    "OUT4",
                    "OUT5",
                    "OUT6",
                    "OUT7",
                    "OUT8"
                ]
            },
            {
                "type": "OR2",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "OR3",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "OR4",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "OR5",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "OR6",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "OR7",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "OR8",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7",
                    "IN8"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "R_BISTABLE",
                "category": "block",
                "inputs": [
                    "SET",
                    "RESET"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "R_TRIG",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "S_BISTABLE",
                "category": "block",
                "inputs": [
                    "SET",
                    "RESET"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "XOR2",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "XOR3",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "XOR4",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "XOR5",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "XOR6",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "XOR7",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "XOR8",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7",
                    "IN8"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            }
        ]
      },
      {
        name: 'Comparison',
        isOpen: false,
        items: 
        [
            {
                "type": "EQ_B",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "EQ_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "EQ_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "GE_B",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "GE_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "GE_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "GT_B",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "GT_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "GT_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "LE_B",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "LE_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "LE_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "LT_B",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "LT_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "LT_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "MSV_COMP",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7",
                    "COMP"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "NEQ_B",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "NEQ_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "NEQ_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            }
        ]
      },
      {
        name: 'Util',
        isOpen: false,
        items: 
        [
            {
                "type": "ACCUM_F",
                "category": "block",
                "inputs": [
                    "IN",
                    "RESET",
                    "HOLD"
                ],
                "outputs": [
                    "OUT",
                    "PREV OUT",
                    "YEAR",
                    "MONTH",
                    "DAY",
                    "HOUR",
                    "MIN",
                    "SEC"
                ]
            },
            {
                "type": "ACCUM_FE",
                "category": "block",
                "inputs": [
                    "IN",
                    "RESET",
                    "HOLD"
                ],
                "outputs": [
                    "OUT",
                    "PREV OUT",
                    "YEAR",
                    "MONTH",
                    "DAY",
                    "HOUR",
                    "MIN",
                    "SEC"
                ]
            },
            {
                "type": "ACCUM_I",
                "category": "block",
                "inputs": [
                    "IN",
                    "RESET",
                    "HOLD"
                ],
                "outputs": [
                    "OUT",
                    "PREV OUT",
                    "YEAR",
                    "MONTH",
                    "DAY",
                    "HOUR",
                    "MIN",
                    "SEC"
                ]
            },
            {
                "type": "ACCUM_OFF",
                "category": "block",
                "inputs": [
                    "IN",
                    "RESET",
                    "HOLD"
                ],
                "outputs": [
                    "TIME",
                    "PREV OUT",
                    "YEAR",
                    "MONTH",
                    "DAY",
                    "HOUR",
                    "MIN",
                    "SEC"
                ]
            },
            {
                "type": "ACCUM_ON",
                "category": "block",
                "inputs": [
                    "IN",
                    "RESET",
                    "HOLD"
                ],
                "outputs": [
                    "TIME",
                    "PREV OUT",
                    "YEAR",
                    "MONTH",
                    "DAY",
                    "HOUR",
                    "MIN",
                    "SEC"
                ]
            },
            {
                "type": "ACCUM_RE",
                "category": "block",
                "inputs": [
                    "IN",
                    "RESET",
                    "HOLD"
                ],
                "outputs": [
                    "OUT",
                    "PREV OUT",
                    "YEAR",
                    "MONTH",
                    "DAY",
                    "HOUR",
                    "MIN",
                    "SEC"
                ]
            },
            {
                "type": "AIRFLOW",
                "category": "block",
                "inputs": [
                    "DELTAP"
                ],
                "outputs": [
                    "AIRFLOW"
                ]
            },
            {
                "type": "BLINK",
                "category": "block",
                "inputs": [
                    "EN"
                ],
                "outputs": [
                    "OUT",
                    "REV"
                ]
            },
            {
                "type": "COV",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "DELAY",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "DERIV",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "ENT_CTRL",
                "category": "block",
                "inputs": [
                    "OAT",
                    "ORH",
                    "RAT",
                    "RRH",
                    "EN",
                    "WS",
                    "SET",
                    "MIN"
                ],
                "outputs": [
                    "ENT_OA",
                    "ENT_RA",
                    "STATE",
                    "DAMP"
                ]
            },
            {
                "type": "HL_LIMIT",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "INTEG",
                "category": "block",
                "inputs": [
                    "IN",
                    "RESET",
                    "HOLD"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "LAG",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "LAGRANGE",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "LDLG",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "LEAD",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "LINEAR",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "MOVAVG",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "PSYCH",
                "category": "block",
                "inputs": [
                    "TEMP",
                    "RH"
                ],
                "outputs": [
                    "ENT",
                    "DEW TEMP",
                    "FB ERR"
                ]
            },
            {
                "type": "QUANT",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "R_LIMIT",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "SINE_CURVE",
                "category": "block",
                "inputs": [],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "SPAN",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "SPAN2",
                "category": "block",
                "inputs": [
                    "IN",
                    "X1",
                    "X2",
                    "Y1",
                    "Y2"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "STEP",
                "category": "block",
                "inputs": [
                    "IN",
                    "X1",
                    "X2",
                    "X3",
                    "X4",
                    "X5",
                    "X6",
                    "X7"
                ],
                "outputs": [
                    "OUT"
                ]
            }
        ]
      },
      {
        name: 'Timer',
        isOpen: false,
        items: 
        [
            {
                "type": "CLK",
                "category": "block",
                "inputs": [],
                "outputs": [
                    "YEAR",
                    "MONTH",
                    "DAY",
                    "DW",
                    "HOUR",
                    "MIN",
                    "SEC",
                    "ALARM"
                ]
            },
            {
                "type": "MSR_TIMER",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "REV",
                    "ET",
                    "FB ERR"
                ]
            },
            {
                "type": "MS_TIMER",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "REV",
                    "ET",
                    "FB ERR"
                ]
            },
            {
                "type": "OFF_DELAY",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "REV",
                    "ET",
                    "FB ERR"
                ]
            },
            {
                "type": "ON_DELAY",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT",
                    "REV",
                    "ET",
                    "FB ERR"
                ]
            },
            {
                "type": "TMOFF",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "ET",
                    "ALARM"
                ]
            },
            {
                "type": "TMON",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "ET",
                    "ALARM"
                ]
            }
        ]
      },
      {
        name: 'Conversion',
        isOpen: false,
        items: 
        [
            {
                "type": "B2F",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "B2I",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "BIN2DEC",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "DEC2BIN",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3",
                    "OUT4"
                ]
            },
            {
                "type": "F2B",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "F2I",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "I2B",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "I2F",
                "category": "block",
                "inputs": [
                    "IN"
                ],
                "outputs": [
                    "OUT"
                ]
            }
        ]
      },
      {
        name: 'Selection',
        isOpen: false,
        items: 
        [
            {
                "type": "MAX2_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "MAX"
                ]
            },
            {
                "type": "MAX2_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "MAX"
                ]
            },
            {
                "type": "MAX3_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3"
                ],
                "outputs": [
                    "MAX"
                ]
            },
            {
                "type": "MAX3_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3"
                ],
                "outputs": [
                    "MAX"
                ]
            },
            {
                "type": "MAX4_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4"
                ],
                "outputs": [
                    "MAX"
                ]
            },
            {
                "type": "MAX4_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4"
                ],
                "outputs": [
                    "MAX"
                ]
            },
            {
                "type": "MAX5_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5"
                ],
                "outputs": [
                    "MAX"
                ]
            },
            {
                "type": "MAX5_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5"
                ],
                "outputs": [
                    "MAX"
                ]
            },
            {
                "type": "MAX6_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6"
                ],
                "outputs": [
                    "MAX"
                ]
            },
            {
                "type": "MAX6_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6"
                ],
                "outputs": [
                    "MAX"
                ]
            },
            {
                "type": "MAX7_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7"
                ],
                "outputs": [
                    "MAX"
                ]
            },
            {
                "type": "MAX7_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7"
                ],
                "outputs": [
                    "MAX"
                ]
            },
            {
                "type": "MAX8_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7",
                    "IN8"
                ],
                "outputs": [
                    "MAX"
                ]
            },
            {
                "type": "MAX8_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7",
                    "IN8"
                ],
                "outputs": [
                    "MAX"
                ]
            },
            {
                "type": "MIN2_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "MIN"
                ]
            },
            {
                "type": "MIN2_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2"
                ],
                "outputs": [
                    "MIN"
                ]
            },
            {
                "type": "MIN3_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3"
                ],
                "outputs": [
                    "MIN"
                ]
            },
            {
                "type": "MIN3_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3"
                ],
                "outputs": [
                    "MIN"
                ]
            },
            {
                "type": "MIN4_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4"
                ],
                "outputs": [
                    "MIN"
                ]
            },
            {
                "type": "MIN4_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4"
                ],
                "outputs": [
                    "MIN"
                ]
            },
            {
                "type": "MIN5_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5"
                ],
                "outputs": [
                    "MIN"
                ]
            },
            {
                "type": "MIN5_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5"
                ],
                "outputs": [
                    "MIN"
                ]
            },
            {
                "type": "MIN6_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6"
                ],
                "outputs": [
                    "MIN"
                ]
            },
            {
                "type": "MIN6_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6"
                ],
                "outputs": [
                    "MIN"
                ]
            },
            {
                "type": "MIN7_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7"
                ],
                "outputs": [
                    "MIN"
                ]
            },
            {
                "type": "MIN7_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7"
                ],
                "outputs": [
                    "MIN"
                ]
            },
            {
                "type": "MIN8_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7",
                    "IN8"
                ],
                "outputs": [
                    "MIN"
                ]
            },
            {
                "type": "MIN8_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7",
                    "IN8"
                ],
                "outputs": [
                    "MIN"
                ]
            },
            {
                "type": "OSEL2_B",
                "category": "block",
                "inputs": [
                    "IN",
                    "SEL"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "FB ERR"
                ]
            },
            {
                "type": "OSEL2_F",
                "category": "block",
                "inputs": [
                    "IN",
                    "SEL"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "FB ERR"
                ]
            },
            {
                "type": "OSEL2_I",
                "category": "block",
                "inputs": [
                    "IN",
                    "SEL"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "FB ERR"
                ]
            },
            {
                "type": "OSEL3_B",
                "category": "block",
                "inputs": [
                    "IN",
                    "SEL"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3",
                    "FB ERR"
                ]
            },
            {
                "type": "OSEL3_F",
                "category": "block",
                "inputs": [
                    "IN",
                    "SEL"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3",
                    "FB ERR"
                ]
            },
            {
                "type": "OSEL3_I",
                "category": "block",
                "inputs": [
                    "IN",
                    "SEL"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3",
                    "FB ERR"
                ]
            },
            {
                "type": "OSEL4_B",
                "category": "block",
                "inputs": [
                    "IN",
                    "SEL"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3",
                    "OUT4",
                    "FB ERR"
                ]
            },
            {
                "type": "OSEL4_F",
                "category": "block",
                "inputs": [
                    "IN",
                    "SEL"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3",
                    "OUT4",
                    "FB ERR"
                ]
            },
            {
                "type": "OSEL4_I",
                "category": "block",
                "inputs": [
                    "IN",
                    "SEL"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3",
                    "OUT4",
                    "FB ERR"
                ]
            },
            {
                "type": "OSEL5_B",
                "category": "block",
                "inputs": [
                    "IN",
                    "SEL"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3",
                    "OUT4",
                    "OUT5",
                    "FB ERR"
                ]
            },
            {
                "type": "OSEL5_F",
                "category": "block",
                "inputs": [
                    "IN",
                    "SEL"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3",
                    "OUT4",
                    "OUT5",
                    "FB ERR"
                ]
            },
            {
                "type": "OSEL5_I",
                "category": "block",
                "inputs": [
                    "IN",
                    "SEL"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3",
                    "OUT4",
                    "OUT5",
                    "FB ERR"
                ]
            },
            {
                "type": "OSEL6_B",
                "category": "block",
                "inputs": [
                    "IN",
                    "SEL"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3",
                    "OUT4",
                    "OUT5",
                    "OUT6",
                    "FB ERR"
                ]
            },
            {
                "type": "OSEL6_F",
                "category": "block",
                "inputs": [
                    "IN",
                    "SEL"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3",
                    "OUT4",
                    "OUT5",
                    "OUT6",
                    "FB ERR"
                ]
            },
            {
                "type": "OSEL6_I",
                "category": "block",
                "inputs": [
                    "IN",
                    "SEL"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3",
                    "OUT4",
                    "OUT5",
                    "OUT6",
                    "FB ERR"
                ]
            },
            {
                "type": "OSEL7_B",
                "category": "block",
                "inputs": [
                    "IN",
                    "SEL"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3",
                    "OUT4",
                    "OUT5",
                    "OUT6",
                    "OUT7",
                    "FB ERR"
                ]
            },
            {
                "type": "OSEL7_F",
                "category": "block",
                "inputs": [
                    "IN",
                    "SEL"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3",
                    "OUT4",
                    "OUT5",
                    "OUT6",
                    "OUT7",
                    "FB ERR"
                ]
            },
            {
                "type": "OSEL7_I",
                "category": "block",
                "inputs": [
                    "IN",
                    "SEL"
                ],
                "outputs": [
                    "OUT1",
                    "OUT2",
                    "OUT3",
                    "OUT4",
                    "OUT5",
                    "OUT6",
                    "OUT7",
                    "FB ERR"
                ]
            },
            {
                "type": "SEL2_B",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "SEL"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "SEL2_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "SEL"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "SEL2_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "SEL"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "SEL3_B",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "SEL"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "SEL3_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "SEL"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "SEL3_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "SEL"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "SEL4_B",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "SEL"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "SEL4_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "SEL"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "SEL4_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "SEL"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "SEL5_B",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "SEL"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "SEL5_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "SEL"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "SEL5_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "SEL"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "SEL6_B",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "SEL"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "SEL6_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "SEL"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "SEL6_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "SEL"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "SEL7_B",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7",
                    "SEL"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "SEL7_F",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7",
                    "SEL"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            },
            {
                "type": "SEL7_I",
                "category": "block",
                "inputs": [
                    "IN1",
                    "IN2",
                    "IN3",
                    "IN4",
                    "IN5",
                    "IN6",
                    "IN7",
                    "SEL"
                ],
                "outputs": [
                    "OUT",
                    "FB ERR"
                ]
            }
        ]
      },
      {
        name: 'Outputs',
        isOpen: true,
        items: 
        [
            {
                "type": "AOUT",
                "category": "block",
                "inputs": [
                    "IN",
                    "EN",
                    "PRI"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "AOUT_REL",
                "category": "block",
                "inputs": [
                    "EN",
                    "PRI"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "DOUT",
                "category": "block",
                "inputs": [
                    "IN",
                    "EN",
                    "PRI"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "DOUT_REL",
                "category": "block",
                "inputs": [
                    "EN",
                    "PRI"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "MOUT",
                "category": "block",
                "inputs": [
                    "IN",
                    "EN",
                    "PRI"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "MOUT_REL",
                "category": "block",
                "inputs": [
                    "EN",
                    "PRI"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "UAOUT",
                "category": "block",
                "inputs": [
                    "IN",
                    "EN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "UDOUT",
                "category": "block",
                "inputs": [
                    "IN",
                    "EN"
                ],
                "outputs": [
                    "OUT"
                ]
            },
            {
                "type": "UMOUT",
                "category": "block",
                "inputs": [
                    "IN",
                    "EN"
                ],
                "outputs": [
                    "OUT"
                ]
            }
        ]        
      }
    ]
  }
];

initialMenuCategories.forEach(category => {
  if (category.items) {
    category.items.sort((a, b) => a.type.localeCompare(b.type, undefined, { numeric: true, sensitivity: 'base' }));
  }
  if (category.subGroups) {
    category.subGroups.forEach(subGroup => {
      if (subGroup.items) {
        subGroup.items.sort((a, b) => a.type.localeCompare(b.type, undefined, { numeric: true, sensitivity: 'base' }));
      }
    });
  }
});
