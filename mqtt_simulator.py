import json
import time
import random
import paho.mqtt.client as mqtt
import os

# MQTT Broker 설정 (로컬 환경 기준)
BROKER_ADDRESS = '127.0.0.1' 
BROKER_PORT = 1883
DATA_FILE = 'dummy_data.json'

def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("MQTT 브로커에 성공적으로 연결되었습니다!")
    else:
        print(f"연결 실패, 반환 코드: {rc}")

def main():
    # 1. MQTT 클라이언트 초기화
    client = mqtt.Client(client_id="PythonSimulator")
    client.on_connect = on_connect

    try:
        # 브로커에 연결
        client.connect(BROKER_ADDRESS, BROKER_PORT, 60)
        client.loop_start()  # 백그라운드에서 네트워크 루프 실행
    except Exception as e:
        print(f"브로커 연결 오류: {e}")
        print("Mosquitto 브로커가 실행 중인지 확인해주세요.")
        return

    print("데이터 전송을 시작합니다... (Ctrl+C로 종료)")
    
    try:
        while True:
            # 2. 텍스트(또는 JSON) 파일에서 FBD 노드의 값 읽기
            if os.path.exists(DATA_FILE):
                with open(DATA_FILE, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                
                # FBD별 구분을 위해 inst 값을 읽어들임
                inst = data.get("inst", "def_inst")
                target_topic = f"fbd/monitor/{inst}"

                # 동적인 시뮬레이션 느낌을 주기 위해 리스트 안의 값들을 약간씩 변동시킴 (선택사항)
                for node_id, ports in data["nodes"].items():
                    for direction in ["IN", "OUT"]:
                        if direction in ports and isinstance(ports[direction], list):
                            for idx in range(len(ports[direction])):
                                val = ports[direction][idx]
                                # 숫자 타입이면 약간의 랜덤 값 가산 (+- 0.5)
                                if isinstance(val, (int, float)):
                                    ports[direction][idx] = round(val + random.uniform(-0.5, 0.5), 2)
                
                # 3. 브로커로 데이터 퍼블리시
                payload = json.dumps(data["nodes"])
                client.publish(target_topic, payload)
                
                print(f"[Topic: {target_topic}] Data published: {payload}")
                
            else:
                print(f"{DATA_FILE} 파일을 찾을 수 없습니다.")
            
            # 1초마다 전송
            time.sleep(1)
            
    except KeyboardInterrupt:
        print("시뮬레이션을 종료합니다.")
    finally:
        client.loop_stop()
        client.disconnect()

if __name__ == "__main__":
    main()
